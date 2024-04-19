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
  aidr: "0xaB128F232027dE26093E1A3e18179D81455a18Ea" as `0x${string}`,
  aas: "0xb2BbB5Fd82373936C1561A4D4B3C88B4Adf41362" as `0x${string}`,
};
