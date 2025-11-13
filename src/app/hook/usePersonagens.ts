"use client";

import useSWR from "swr";
import { hpApi } from "../services/hpApi";
import { Character } from "../services/hp";

export function useCharacters() {
  const { data, error, isValidating, mutate } = useSWR<Character[]>(
    "/hp/characters",
    () => hpApi.getAllCharacters(),
    {
      revalidateOnFocus: true,
      revalidateIfStale: true,
      shouldRetryOnError: false,
    }
  );

  return {
    data,
    loading: !error && !data,
    error,
    isValidating,
    refresh: mutate,
  };
}
