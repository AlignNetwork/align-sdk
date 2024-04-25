export declare const alignTestnetV2: {
    blockExplorers: {
        readonly etherscan: {
            readonly name: "AlignScan";
            readonly url: "https://align-testnet.explorer.caldera.xyz/";
        };
        readonly default: {
            readonly name: "AlignScan";
            readonly url: "https://align-testnet.explorer.caldera.xyz/";
        };
    };
    contracts?: {
        [x: string]: import("viem").ChainContract | {
            [sourceId: number]: import("viem").ChainContract | undefined;
        } | undefined;
        ensRegistry?: import("viem").ChainContract | undefined;
        ensUniversalResolver?: import("viem").ChainContract | undefined;
        multicall3?: import("viem").ChainContract | undefined;
    } | undefined;
    id: 472382;
    name: "Align Testnet v2";
    nativeCurrency: {
        readonly name: "Align Sepolia Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://align-testnet.rpc.caldera.xyz/http"];
        };
        readonly public: {
            readonly http: readonly ["https://align-testnet.rpc.caldera.xyz/http"];
        };
    };
    sourceId?: number | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    formatters?: undefined;
    serializers?: import("viem").ChainSerializers<undefined> | undefined;
    fees?: import("viem").ChainFees<undefined> | undefined;
    readonly network: "align-testnet-v2";
    readonly iconUrl: "./logo.png";
};
export declare const alignTestnetV2Constants: {
    aidr: `0x${string}`;
    aas: `0x${string}`;
};
