import type { TransactionReceipt } from "viem";
import { AlignDefaults } from "./dataNetwork/defaults";
export declare function interactDefaults(data: {
    [key: string]: string;
}, toAlignId: bigint, defaultType: keyof typeof AlignDefaults): Promise<{
    success: boolean;
    receipt?: TransactionReceipt | Error;
}>;
//# sourceMappingURL=main.d.ts.map