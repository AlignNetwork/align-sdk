import { alignIdRegistryABI } from "./abi/alignIdRegistryABI";
import { interactionStationABI } from "./abi/interactionStationABI";

export function getAlignEnvironment(
  env: "development" | "production" = "production"
) {
  if (env === "production") {
    return {
      alignIdRegistry:
        "0x169610100A7A25CF154C26b1A811FEf8592b27A8" as `0x${string}`,
      interactionStation:
        "0xBb03fabb5709B52eC483314c964a187Bf447E508" as `0x${string}`,
      ipfs: "https://ipfs.align.network",
      indexer: "https://indexer.align.network",
      idABI: alignIdRegistryABI,
      isABI: interactionStationABI,
      explorer: "https://optimistic.etherscan.io/",
      blockStart: 121569404n,
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
      explorer: "https://sepolia-optimistic.etherscan.io/",
      blockStart: 13460726n,
    };
  }
}
