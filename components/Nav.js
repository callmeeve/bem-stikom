import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navLink = (
    <>
      <Link href="/">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <span className="flex items-center">Home</span>
        </Typography>
      </Link>
      <Link href="/about">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <span className="flex items-center">About</span>
        </Typography>
      </Link>
      <Link href="/ukm">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <span className="flex items-center">UKM</span>
        </Typography>
      </Link>
      <Link href="contact">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <span className="flex items-center">Contact</span>
        </Typography>
      </Link>
    </>
  );

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navLink}
    </ul>
  );

  const mobilenavList = (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 mt-5 mb-2">
      {navLink}
    </ul>
  );

  return (
    <Navbar className="top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 sticky">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center">
          <Image
            src="/bem.png"
            className="mr-5"
            alt="Logo Bem"
            width={60}
            height={60}
          />
          <Typography className="self-center text-xl font-semibold text-dark">
            BEM STIKOM PGRI BANYUWANGI
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {/* Replace the SVG with Heroicon */}
            {openNav ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>{mobilenavList}</MobileNav>
    </Navbar>
  );
}
