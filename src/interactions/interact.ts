import {
  BaseError,
  ContractFunctionRevertedError,
  createPublicClient,
  http,
} from "viem";
import { aasABI } from "../../lib";
import { alignTestnetV2, alignTestnetV2Constants } from "../../lib/constants";

import "fastestsmallesttextencoderdecoder";
import { createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { upload } from "../dataNetwork/upload";
//test
export async function interact(
  interactionTypeKey: string,
  toAlignId: bigint,
  data: { [key: string]: string }
) {
  console.log("attesting");

  const PRIVATE_KEY = "";

  const account = privateKeyToAccount(PRIVATE_KEY as `0x${string}`);
  const walletClient = createWalletClient({
    account: account,
    chain: alignTestnetV2,
    transport: http(alignTestnetV2.rpcUrls.default.http[0]),
  });
  const publicClient = createPublicClient({
    chain: alignTestnetV2,
    transport: http(alignTestnetV2.rpcUrls.default.http[0]),
  });

  // get interaction type key from registry (hardcode some)

  // upload to ipfs
  const res = await upload(data);

  try {
    const { request } = await publicClient.simulateContract({
      address: alignTestnetV2Constants.aas,
      abi: aasABI,
      functionName: "interact",
      args: [toAlignId, interactionTypeKey, res.data],
      account: walletClient.account,
    });
    const hash = await walletClient.writeContract(request);

    const receipt = publicClient.waitForTransactionReceipt({
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
        return {
          success: false,
          error: errorName,
        };
      }
    }
    return {
      success: false,
      data: err,
      error: "Unknown error",
    };
  }
}
