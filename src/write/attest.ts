import {
  BaseError,
  ContractFunctionRevertedError,
  createPublicClient,
  http,
  type PublicClient,
  type WalletClient,
} from "viem";
import { aasABI, aidrABI } from "../../lib";
import { alignTestnetV2, alignTestnetV2Constants } from "../../lib/constants";
//test
export class AlignAttestationStation {
  walletClient: WalletClient;
  publicClient: PublicClient;

  /*
  this.walletClient = createWalletClient({
      account: account,
      chain: alignTestnetV2,
      transport: http(alignTestnetV2.rpcUrls.default.http[0]),
    });*/
  constructor(walletClient: WalletClient) {
    this.walletClient = walletClient;

    this.publicClient = createPublicClient({
      chain: alignTestnetV2,
      transport: http(alignTestnetV2.rpcUrls.default.http[0]),
    });
  }

  public attest = async (
    toAlignId: bigint,
    claim: string,
    claimType: string,
    claimProof: string
  ) => {
    console.log("server side action attest", claim, claimProof);

    try {
      const { request } = await this.publicClient.simulateContract({
        address: alignTestnetV2Constants.aas,
        abi: aasABI,
        functionName: "attest",
        args: [1n, toAlignId, claimType, claim, claimProof],
        account: this.walletClient.account,
      });
      const hash = await this.walletClient.writeContract(request);

      const receipt = this.publicClient.waitForTransactionReceipt({
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
        error: "Unknown error",
      };
    }
  };
  // admin only atm
  public registerAlignId = async () => {
    if (this.walletClient.account === undefined) {
      throw new Error("No account provided");
    }

    try {
      const { request } = await this.publicClient.simulateContract({
        address: alignTestnetV2Constants.aidr,
        abi: aidrABI,
        functionName: "register",
        args: [
          this.walletClient.account.address,
          this.walletClient.account.address,
        ],
        account: this.walletClient.account,
      });
      const hash = await this.walletClient.writeContract(request);

      const receipt = this.publicClient.waitForTransactionReceipt({
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
        error: "Unknown error",
      };
    }
  };
}
