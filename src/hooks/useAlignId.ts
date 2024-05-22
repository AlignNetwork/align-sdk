"use client";
import { useQuery } from "@tanstack/react-query";
import { getId } from "../read";

export function useAlignId(id: `0x${string}` | undefined) {
  return useQuery({
    queryKey: ["alignid"],
    queryFn: async () => {
      if (!id) return undefined;
      return await getId(id);
    },
  });
}
