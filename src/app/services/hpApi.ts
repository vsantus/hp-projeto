import { Character } from "./hp";

const BASE = "https://hp-api.onrender.com/api";

async function safeFetch<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} - ${res.statusText} ${text ? `: ${text}` : ""}`);
  }
  return res.json() as Promise<T>;
}

export const hpApi = {
  getAllCharacters: async (): Promise<Character[]> =>
    safeFetch<Character[]>(`${BASE}/characters`),

  getCharacterById: async (id: string | number): Promise<Character> =>
    safeFetch<Character>(`${BASE}/characters/${id}`),

  getStudents: async (): Promise<Character[]> =>
    safeFetch<Character[]>(`${BASE}/characters/students`),

  getStaff: async (): Promise<Character[]> =>
    safeFetch<Character[]>(`${BASE}/characters/staff`), 

  getByHouse: async (house: string): Promise<Character[]> =>
    safeFetch<Character[]>(`${BASE}/characters/house/${encodeURIComponent(house)}`),

  getSpells: async (): Promise<any[]> =>
    safeFetch<any[]>(`${BASE}/spells`),
};
