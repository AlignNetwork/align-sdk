import { defineChain } from "viem";

export const alignTestnetV2 = defineChain({
  id: 472382,
  name: "Align Testnet v2",
  network: "align-testnet-v2",
  iconUrl: "./logo.png",
  nativeCurrency: {
    name: "Align Sepolia Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://align-testnet.rpc.caldera.xyz/http"],
    },
    public: {
      http: ["https://align-testnet.rpc.caldera.xyz/http"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "AlignScan",
      url: "https://align-testnet.explorer.caldera.xyz/",
    },
    default: {
      name: "AlignScan",
      url: "https://align-testnet.explorer.caldera.xyz/",
    },
  },
  testnet: true,
});

export const alignTestnetV2Constants = {
  alignIdRegistry:
    "0x742D903A24EBaa1ED55329186Dd1d5d5c0c329DA" as `0x${string}`,
  interactionStation:
    "0xE2dF15410B4F546eff1aF3abdF56317C651Ae853" as `0x${string}`,
};

export const alignUrls = {
  ipfs: "http://ipfs-dev.align.network",
  indexer: "https://apidev-v5.align.network/",
};
