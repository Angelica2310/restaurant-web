"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, children, variant }) {
  const pathName = usePathname();
  const isActive = pathName === href;

  const styles = {
    homeNav: isActive ? "text-gray-600 cursor-pointer" : "",
    menuNav: isActive
      ? "bg-[--darktext] text-white shadow-xl shadow-slate-400 border-2 border-[--darktext] rounded-lg p-1"
      : "bg-white text-[--darktext] border border-none rounded-lg p-1 ",
  };

  return (
    <Link href={href} className={styles[variant] || ""}>
      {children}
    </Link>
  );
}
