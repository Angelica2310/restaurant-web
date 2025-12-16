// "use client";

// import { useEffect, useState } from "react";
// import { X } from "lucide-react";

// function toISODate(d: Date) {
//   return d.toISOString().slice(0, 10);
// }

// function formatDDMMYYYY(d: Date) {
//   const dd = String(d.getDate()).padStart(2, "0");
//   const mm = String(d.getMonth() + 1).padStart(2, "0");
//   const yyyy = d.getFullYear();
//   return `${dd}/${mm}/${yyyy}`;
// }

// export default function ClosureModal() {
//   // 🔧 CONFIG (single source of truth)
//   const CLOSED_START = new Date(2025, 11, 1); // 1 Dec 2025
//   const CLOSED_END = new Date(2025, 11, 20); // 20 Dec 2025

//   const todayISO = toISODate(new Date());
//   const startISO = toISODate(CLOSED_START);
//   const endISO = toISODate(CLOSED_END);

//   const shouldShow = todayISO >= startISO && todayISO <= endISO;

//   const [dismissed, setDismissed] = useState(true);

//   useEffect(() => {
//     const seen = localStorage.getItem("closureModalDismissed");
//     if (seen !== "true") {
//       setDismissed(false);
//     }
//   }, []);

//   function closeModal() {
//     setDismissed(true);
//     localStorage.setItem("closureModalDismissed", "true");
//   }

//   if (!shouldShow || dismissed) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       {/* Background overlay */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

//       {/* Modal */}
//       <div className="relative z-10 max-w-lg rounded-2xl bg-white p-6 shadow-xl">
//         <button
//           onClick={closeModal}
//           className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
//           aria-label="Close"
//         >
//           <X />
//         </button>

//         <h2 className="text-2xl font-semibold text-gray-900">
//           🚧 Temporary Closure
//         </h2>

//         <p className="mt-4 text-gray-700">
//           Our restaurant will be closed from{" "}
//           <strong>{formatDDMMYYYY(CLOSED_START)}</strong> to{" "}
//           <strong>{formatDDMMYYYY(CLOSED_END)}</strong>.
//         </p>

//         <p className="mt-2 text-gray-600">
//           We’ll reopen soon. Thank you for your understanding ❤️
//         </p>

//         <button
//           onClick={closeModal}
//           className="mt-6 w-full rounded-xl bg-[--darktext] px-4 py-3 text-white font-medium"
//         >
//           OK, got it
//         </button>
//       </div>
//     </div>
//   );
// }
