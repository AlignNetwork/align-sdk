"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { interactionsByTypeKeyPage } from "../read/interactionsByTypeKey";

export function useInteractionsByTypeKeyPage(
  typeKey: string,
  pageParam: number | null
) {
  return useInfiniteQuery({
    queryKey: ["interactionByTypeKeyPage"],
    initialPageParam: pageParam,
    queryFn: async ({ pageParam = null }) => {
      return await interactionsByTypeKeyPage(typeKey, pageParam);
    },
    getNextPageParam: (lastPage: any) => lastPage.nextPage,
  });
}
