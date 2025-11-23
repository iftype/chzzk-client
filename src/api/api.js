const BASE_URL = "https://iftype.store";

export async function fetchStreamer() {
  try {
    const url = `${BASE_URL}/channel`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.json();
    const { data } = content;
    return data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    return null;
  }
}

export async function fetchStreamerData(channelId) {
  try {
    const url = `${BASE_URL}/channel/${channelId}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.json();
    const { data } = content;
    return data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    return null;
  }
}

export async function fetchStreamerLogData(channelId, date) {
  try {
    const url = date ? `${BASE_URL}/log/${channelId}?date=${date}` : `${BASE_URL}/log/${channelId}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.json();
    const { data } = content;
    return data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    return null;
  }
}
