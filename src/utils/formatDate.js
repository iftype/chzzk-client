export function formatDateYM(date) {
  if (!date) return null;
  const dateObj = new Date(date);
  return dateObj.toISOString().slice(0, 10);
}

export function formatDateHM(date) {
  const dateObj = new Date(date);
  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}
