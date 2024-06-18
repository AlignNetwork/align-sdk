import { defineChain } from "viem";
import { alignIdRegistryABI } from "./abi/alignIdRegistryABI";
import { interactionStationABI } from "./abi/interactionStationABI";
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

/**
 * @deprecated Depreciating align testnet v2 constants in favor of alignContracts
 */
export const alignContracts = {
  alignIdRegistry:
    "0x8F97d988da02e141EBaBFA4639b9bC9E25aa5759" as `0x${string}`,
  interactionStation:
    "0x8a6D0Bb45601ee923eE48be154Dea50F115cdD50" as `0x${string}`,
};

/**
 * @deprecated Depreciating align testnet v2 constants in favor of alignContracts
 */
export const alignUrls = {
  ipfs: "http://ipfs.align.network",
  indexer: "https://apidev-v9.align.network",
};

export function alignEnvironment(env: "development" | "production"): {
  alignIdRegistry: `0x${string}`;
  interactionStation: `0x${string}`;
  ipfs: string;
  indexer: string;
  idABI: any;
  isABI: any;
  explorer: string;
  blockStart: bigint;
} {
  if (env === "production") {
    return {
      alignIdRegistry:
        "0x35Ca546EC4Bc72aBBc59731af15bA6D802fa625C" as `0x${string}`,
      interactionStation:
        "0xBd9f89E3784840E5F56c958ED99Eb5297D52391a" as `0x${string}`,
      ipfs: "http://ipfs.align.network",
      indexer: "https://indexer.align.network",
      idABI: alignIdRegistryABI,
      isABI: interactionStationABI,
      explorer: "https://arbiscan.io/address/",
      blockStart: 221544799n,
    };
  } else {
    return {
      alignIdRegistry:
        "0x9CF4844B40e534c63A03C7F87E66A78F36fc92cA" as `0x${string}`,
      interactionStation:
        "0x03158C08249e9DEEf562012BCA9001d9D686C692" as `0x${string}`,
      ipfs: "http://ipfs-dev.align.network",
      indexer: "https://apidev-v9.align.network",
      idABI: alignIdRegistryABI,
      isABI: interactionStationABI,
      explorer: "https://sepolia-optimistic.etherscan.io/address/",
      blockStart: 13460726n,
    };
  }
}
