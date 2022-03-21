import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="flex bg-negru p-3 text-white border-b-2 border-accent font-medium text-xl">
      <div className="ml-5">Pheonix</div>
      <div className="text-portocaliu ml-2">Games</div>
      <div className="ml-auto flex mr-5">
        <Link href={"/"}>
          <div className="mr-3 hover:underline hover:text-portocaliu">
            Acasa
          </div>
        </Link>
        <Link href={"/about"}>
          <div className="mr-3 hover:underline hover:text-portocaliu">
            Despre Noi
          </div>
        </Link>
        <Link href={"mailto:contact@pheonix.gq"}>
          <div className="mr-3 hover:underline hover:text-portocaliu">
            Contact
          </div>
        </Link>
        <Link href={"/pricing"}>
          <div className="mr-3 hover:underline hover:text-portocaliu">Pret</div>
        </Link>
      </div>
    </div>
  );
};
