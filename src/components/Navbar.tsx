import Link from "next/link";
import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="flex bg-slate-700 p-3 text-white">
      <div className="">Name</div>

      <div className="ml-auto flex font-medium">
        <Link href={"/"}>
          <div className="mr-3 hover:underline">Home</div>
        </Link>
        <Link href={"/games"}>
          <div className="mr-3 hover:underline">Games</div>
        </Link>
        <Link href={"/about"}>
          <div className="mr-3 hover:underline">About Us</div>
        </Link>
        <Link href={"/contact"}>
          <div className="mr-3 hover:underline">Contact</div>
        </Link>
        <Link href={"/pricing"}>
          <div className="mr-3 hover:underline">Pricing</div>
        </Link>
      </div>
    </div>
  );
};
