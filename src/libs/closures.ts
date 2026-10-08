// Dates are YYYY-MM-DD, inclusive. For a single day, set start and end to the same date.
export const closures = [
  { start: "2026-10-18", end: "2026-10-18" },
  { start: "2027-02-03", end: "2027-02-24" },
];

export type Closure = (typeof closures)[number];

function fromISO(iso: string) {
  const [yyyy, mm, dd] = iso.split("-").map(Number);
  return new Date(yyyy, mm - 1, dd);
}

// Local date, not toISOString(), which is UTC and can be off by a day in BST.
export function toISODate(d: Date) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function formatLongDate(iso: string) {
  return fromISO(iso).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export function reopenISO(closure: Closure) {
  const d = fromISO(closure.end);
  d.setDate(d.getDate() + 1);
  return toISODate(d);
}

export function findClosure(iso: string) {
  return closures.find((c) => iso >= c.start && iso <= c.end);
}

export function nextClosure(todayISO: string) {
  return closures
    .filter((c) => c.end >= todayISO)
    .sort((a, b) => a.start.localeCompare(b.start))[0];
}
