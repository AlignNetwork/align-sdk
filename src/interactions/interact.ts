import {
  BaseError,
  ContractFunctionRevertedError,
  createPublicClient,
  http,
  type Account,
} from "viem";
import { arbitrumSepolia } from "viem/chains";
import { alignContracts } from "../lib/constants";

import "fastestsmallesttextencoderdecoder";
import { createWalletClient } from "viem";
import { interactionStationABI } from "../lib/abi/interactionStationABI";

export class InteractError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InteractError";
  }
}

export async function interactOnchain(
  iTypeKey: `0x${string}`,
  toAlignId: bigint,
  iCID: string,
  parentKeys: `0x${string}`,
  account: Account
) {
  const walletClient = createWalletClient({
    account: account,
    chain: arbitrumSepolia,
    transport: http(arbitrumSepolia.rpcUrls.default.http[0]),
  });
  const publicClient = createPublicClient({
    chain: arbitrumSepolia,
    transport: http(arbitrumSepolia.rpcUrls.default.http[0]),
  });

  try {
    const { request } = await publicClient.simulateContract({
      address: alignContracts.interactionStation,
      abi: interactionStationABI,
      functionName: "interact",
      args: [toAlignId, iTypeKey, iCID, parentKeys],
      account: walletClient.account,
    });
    const hash = await walletClient.writeContract(request);

    const receipt = await publicClient.waitForTransactionReceipt({
      hash: hash,
    });
    return {
      success: true,
      receipt: receipt,
    };
  } catch (err) {
    if (err instanceof BaseError) {
      const revertError = err.walk(
        (err) => err instanceof ContractFunctionRevertedError
      );
      if (revertError instanceof ContractFunctionRevertedError) {
        const errorName = revertError.data?.errorName ?? "";
        throw new InteractError(errorName);
      }
    }
    console.log(err);
    throw new InteractError("Unknown error");
  }
}
