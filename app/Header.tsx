"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GiSpikedDragonHead } from "react-icons/gi";

const Header = () => {
  const currentPath = usePathname();

  const link = [
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issues" },
  ];
  return (
    <nav className="flex border-b space-x-6 mb-5 px-5 justify-between items-center h-[11vh]">
      <Link
        href={"/"}
        className="flex items-center text-main font-bold text-3xl">
        <GiSpikedDragonHead />
        Developer jiwon
      </Link>
      <ul className="flex space-x-6 text-2xl">
        {link.map((v, i) => (
          <li
            key={i}
            className="text-gray-400 hover:text-gray-600 .transition-colors">
            <Link
              className={
                v.href === currentPath ? "text-gray-600" : "text-gray-400"
              }
              href={v.href}>
              {v.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;