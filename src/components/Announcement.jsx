"use client";
import { useEffect, useState } from "react";
import {
  formatLongDate,
  nextClosure,
  reopenISO,
  toISODate,
} from "@/libs/closures";

export default function Announcement() {
  // Resolved on the client so the banner moves on without a redeploy (the layout is statically built).
  const [closure, setClosure] = useState(null);

  useEffect(() => {
    setClosure(nextClosure(toISODate(new Date())));
  }, []);

  if (!closure) return null;

  const singleDay = closure.start === closure.end;

  return (
    <div className="w-full bg-red-600 text-white text-center px-4 py-2 text-sm md:text-base">
      🚧 <strong>Temporary Closure:</strong>{" "}
      {singleDay ? (
        <>
          We will be closed on <strong>{formatLongDate(closure.start)}</strong>.
        </>
      ) : (
        <>
          We will be closed from <strong>{formatLongDate(closure.start)}</strong>{" "}
          to <strong>{formatLongDate(closure.end)}</strong>, reopening on{" "}
          <strong>{formatLongDate(reopenISO(closure))}</strong>.
        </>
      )}{" "}
      Thank you for your understanding.
    </div>
  );
}
