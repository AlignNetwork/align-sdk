import "fastestsmallesttextencoderdecoder";
export declare class InteractError extends Error {
    constructor(message: string);
}
export declare function interactOnchain(interactionTypeKey: `0x${string}`, toAlignId: bigint, interaction: string): Promise<{
    success: boolean;
    receipt: import("viem").TransactionReceipt;
}>;
//# sourceMappingURL=interact.d.ts.map