export function useFilter(data) {
  return [...data].filter((value) => value.price < 500);
}