import Link from "next/link";
import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="flex bg-negru p-3 text-white border-b-2 border-accent font-medium">
      Pheonix
      <div className="text-portocaliu ml-2">Games</div>
      <div className="ml-auto flex">
        <Link href={"/"}>
          <div className="mr-3 hover:underline">Acasa</div>
        </Link>
        <Link href={"/games"}>
          <div className="mr-3 hover:underline">Jocuri</div>
        </Link>
        <Link href={"/about"}>
          <div className="mr-3 hover:underline">Despre Noi</div>
        </Link>
        <Link href={"/contact"}>
          <div className="mr-3 hover:underline">Contact</div>
        </Link>
        <Link href={"/pricing"}>
          <div className="mr-3 hover:underline">Pret</div>
        </Link>
      </div>
    </div>
  );
};
