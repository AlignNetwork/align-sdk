"use client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  interactionsByTypeKey,
  interactionsByTypeKeyPage,
} from "../read/interactionsByTypeKey";

export function useInteractionsByTypeKey(pageParam: number | null) {
  return useInfiniteQuery({
    queryKey: ["interactionByTypeKeyPage"],
    initialPageParam: pageParam,
    queryFn: async ({ pageParam = null }) => {
      return await interactionsByTypeKeyPage(pageParam);
    },
    getNextPageParam: (lastPage: any) => lastPage.nextPage,
  });
}

export function useInteractionsByTypeKeyPage(typeKey: string) {
  return useQuery({
    queryKey: ["interactionByTypeKey"],
    queryFn: async () => {
      return await interactionsByTypeKey(typeKey);
    },
  });
}
