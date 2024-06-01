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
    "0x9b9d85e9eD23CB6AbCD3128CB70ECfdF6C406689" as `0x${string}`,
  interactionStation:
    "0x6F5Bfd716Cf7F7dB4A3e312D591d5b42275fF8c0" as `0x${string}`,
};

export const alignUrls = {
  ipfs: "http://ipfs.align.network",
  indexer: "https://apidev-v8.align.network",
};
