import {
  BaseError,
  ContractFunctionRevertedError,
  createPublicClient,
  http,
  type Account,
} from "viem";
import { alignTestnetV2, alignTestnetV2Constants } from "../lib/constants";

import "fastestsmallesttextencoderdecoder";
import { createWalletClient } from "viem";
import { interactionStationABI } from "../lib/abi/interactionStationABI";

export class InteractError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InteractError";
  }
}

// run on client side
export async function createInteractionType(
  iCID: string,
  parentKey: [`0x${string}`],
  account: Account
) {
  const walletClient = createWalletClient({
    account: account,
    chain: alignTestnetV2,
    transport: http(alignTestnetV2.rpcUrls.default.http[0]),
  });
  const publicClient = createPublicClient({
    chain: alignTestnetV2,
    transport: http(alignTestnetV2.rpcUrls.default.http[0]),
  });

  try {
    const { request } = await publicClient.simulateContract({
      address: alignTestnetV2Constants.interactionStation,
      abi: interactionStationABI,
      functionName: "createIType",
      args: [false, true, "My Blog", iCID, parentKey],
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
