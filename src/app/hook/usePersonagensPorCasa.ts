"use client";

import useSWR from "swr";
import { hpApi } from "../lib/hpApi";
import { Character } from "../lib/hp";

export function useCharactersByHouse(house?: string) {
  const key = house ? `/hp/characters/house/${house}` : null;
  const { data, error, isValidating } = useSWR<Character[]>(
    key,
    () => hpApi.getByHouse(house!),
    { revalidateOnFocus: true }
  );

  return {
    data,
    loading: !error && !data && !!house,
    error,
    isValidating,
  };
}
