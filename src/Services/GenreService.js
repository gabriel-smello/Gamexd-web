import { API_BASE_URL } from "../api";

export async function findAllGenres() {
  const response = await fetch(`${API_BASE_URL}/genres`);
  return await response.json();
}
