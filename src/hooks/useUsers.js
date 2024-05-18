"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { users } from "../read";
export function useUsers(pageParam) {
    return useInfiniteQuery({
        queryKey: ["users"],
        initialPageParam: pageParam,
        queryFn: async ({ pageParam = null }) => {
            return await users(pageParam);
        },
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });
}
