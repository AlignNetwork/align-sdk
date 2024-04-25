import { type PublicClient, type WalletClient } from "viem";
export declare class AlignAttestationStation {
    walletClient: WalletClient;
    publicClient: PublicClient;
    constructor(walletClient: WalletClient);
    attest: (toAlignId: bigint, claim: string, claimType: string, claimProof: string) => Promise<{
        success: boolean;
        receipt: Promise<import("viem").TransactionReceipt>;
        error?: undefined;
    } | {
        success: boolean;
        error: string;
        receipt?: undefined;
    }>;
    registerAlignId: () => Promise<{
        success: boolean;
        receipt: Promise<import("viem").TransactionReceipt>;
        error?: undefined;
    } | {
        success: boolean;
        error: string;
        receipt?: undefined;
    }>;
}
