export function useCurrentYear() {
  const now = new Date();
  const currentYear = now.getFullYear();

  return currentYear;
}
