export function useSort(data) {
  return [...data].sort((a, b) => Number(a.price) - Number(b.price));
}
