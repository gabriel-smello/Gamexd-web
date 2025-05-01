import { API_BASE_URL } from "../api";

export async function findAllPlatforms() {
  const response = await fetch(`${API_BASE_URL}/platforms`);
  return await response.json();
}
