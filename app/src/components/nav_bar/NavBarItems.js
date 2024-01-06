"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBarItems = ({ path, icon, title, subTitle }) => {
  const currentPath = usePathname();

  return (
    <Link
      href={path}
      className={`
            ${currentPath === path ? "bg-blue-800" : ""}
          `}
    >
      <div className="flex">
        {icon} <span className="text-black">{title}</span>
      </div>
    </Link>
  );
};
