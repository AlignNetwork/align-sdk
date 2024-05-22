"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getId } from "../read";

export function useAlignId(id: `0x${string}`) {
  return useInfiniteQuery({
    queryKey: ["alignid"],
    initialPageParam: id,
    queryFn: async () => {
      return await getId(id);
    },
    getNextPageParam: (lastPage: any) => lastPage.nextPage,
  });
}
