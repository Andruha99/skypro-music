export async function getTracks() {
  const baseUrl = "https://skypro-music-api.skyeng.tech";
  const response = await fetch(`${baseUrl}/catalog/track/all/`);

  if (!response.ok) {
    throw new Error("Server's problem");
  }

  const data = await response.json();
  return data;
}
