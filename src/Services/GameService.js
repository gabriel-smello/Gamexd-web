import { API_BASE_URL } from "../api";

export async function getGameById(id) {
  const response = await fetch(`${API_BASE_URL}/games/card/${id}`);
  return await response.json();
}

export async function getTopTenGames() {
  const response = await fetch(`${API_BASE_URL}/games/top-ten`);
  return await response.json();
}

export async function getNewlyGames() {
  const response = await fetch(`${API_BASE_URL}/games/newly`);
  return await response.json();
}

export async function getTrendingGames() {
  const response = await fetch(`${API_BASE_URL}/games/trending`);
  return await response.json();
}
