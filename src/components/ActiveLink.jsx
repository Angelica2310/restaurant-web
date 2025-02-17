"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, children }) {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "border-2 border-[#af8e4b] p-1 shadow-md rounded-md cursor-pointer"
          : ""
      }
    >
      {children}
    </Link>
  );
}
