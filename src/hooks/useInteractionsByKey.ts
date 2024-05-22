"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { interactionsByKeyPage } from "../read/interactionByKey";

export function useInteractionsByKeyPage(
  key: string,
  pageParam: number | null
) {
  return useInfiniteQuery({
    queryKey: ["interactionByKeyPage"],
    initialPageParam: pageParam,
    queryFn: async ({ pageParam = null }) => {
      return await interactionsByKeyPage(key, pageParam);
    },
    getNextPageParam: (lastPage: any) => lastPage.nextPage,
  });
}
