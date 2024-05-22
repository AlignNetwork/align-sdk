"use client";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { getId } from "../read";

export function useAlignId(
  id: `0x${string}` | undefined,
  queryClient: QueryClient
) {
  return useQuery(
    {
      queryKey: ["alignid"],
      queryFn: async () => {
        if (!id) return undefined;
        return await getId(id);
      },
    },
    queryClient
  );
}
