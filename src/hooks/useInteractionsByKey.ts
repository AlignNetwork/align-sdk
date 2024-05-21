"use client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  interactionsByKey,
  interactionsByKeyPage,
} from "../read/interactionByKey";

export function useInteractionsByKey(key: string, pageParam: number | null) {
  return useInfiniteQuery({
    queryKey: ["interactionByKeyPage"],
    initialPageParam: pageParam,
    queryFn: async ({ pageParam = null }) => {
      return await interactionsByKeyPage(key, pageParam);
    },
    getNextPageParam: (lastPage: any) => lastPage.nextPage,
  });
}

export function useInteractionsByKeyPage(key: string) {
  return useQuery({
    queryKey: ["interactionByKey"],
    queryFn: async () => {
      return await interactionsByKey(key);
    },
  });
}
