import React from "react";
import { Typography, List, ListItem } from "@material-tailwind/react";
import Image from "next/image";

export default function AboutBem() {
  return (
    <div className="flex flex-col-reverse md:flex-row px-3 py-6 items-center justify-center">
      <div className="flex flex-col justify-center items-center px-8">
        <Typography className="text-dark text-xl font-semibold mb-3">
          Kabinet
        </Typography>
        <Image
          className="w-full h-auto"
          src="/bem.jpg"
          alt="Logo Kabinet"
          width={300}
          height={300}
        />
      </div>
      <div className="bg-yellow-600 p-4 m-3">
        <Typography className="text-lg font-semibold">
            Bem Stikom merupakan salah satu organsisasi mahasiswa yang bergerak di daerah STIKOM PGRI Banyuwangi
        </Typography>
      </div>
    </div>  
  );
}
