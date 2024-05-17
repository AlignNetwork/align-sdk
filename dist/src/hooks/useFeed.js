"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { feed } from "../read/feed";
export function useFeed(pageParam) {
    return useInfiniteQuery({
        queryKey: ["feed"],
        initialPageParam: pageParam,
        queryFn: async ({ pageParam = null }) => {
            return await feed(pageParam);
        },
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });
}
