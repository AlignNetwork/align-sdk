import { defineChain } from "viem";
/**
 * @deprecated The method should not be used
 */
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

/**
 * @deprecated Depreciating align testnet v2 constants in favor of alignContracts
 */
export const alignTestnetV2Constants = {
  alignIdRegistry:
    "0xaE57e1B93DA10a7B5e746B2d17B0b3c7D90B2dDa" as `0x${string}`,
  interactionStation:
    "0xEe8710c0B14155541E151783A8C76422d0d5a676" as `0x${string}`,
};

export const alignContracts = {
  alignIdRegistry:
    "0x8F97d988da02e141EBaBFA4639b9bC9E25aa5759" as `0x${string}`,
  interactionStation:
    "0x8a6D0Bb45601ee923eE48be154Dea50F115cdD50" as `0x${string}`,
};

export const alignUrls = {
  ipfs: "http://ipfs.align.network",
  indexer: "https://apidev-v9.align.network",
};
