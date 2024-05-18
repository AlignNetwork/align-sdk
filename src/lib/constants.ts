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
  aidr: "0xD821932b7d8F2DE2e53845E4b8ab66aD661cA130" as `0x${string}`,
  intStation: "0xf581E6dfA593346E9c8163dD3Ed533ba9733A97a" as `0x${string}`,
};

export const alignUrls = {
  ipfs: "http://ipfs-dev.align.network",
  indexer: "https://apidev-v5.align.network/",
};
