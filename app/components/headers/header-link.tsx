"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export default function HeaderLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const className = isActive ? "text-primary" : "hover:underline hover:underline-offset-4";
  const activeClassName = isActive ? "text-primary underline underline-offset-4" : "";
  const inactiveClassName = isActive ? "" : "hover:underline hover:underline-offset-4";

  return (
    <Link href={href} className={cn(className, activeClassName, inactiveClassName)}>
      {children}
    </Link>
  );
}
