const apiUrl = "http://localhost:4000/test";

export async function fetchStreamerData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.json();
    console.log("API 호출 성공:", content);
    return content;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    return null;
  }
}
