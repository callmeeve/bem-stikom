import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export default function VisiMisi() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 max-w-screen-xl items-center mx-auto my-5">
      <Typography className="text-dark font-bold text-xl">Kabinet</Typography>
      <div className="flex flex-col">
        <Typography className="text-dark font-semibold">Visi</Typography>
        <ul>
          <Typography className="flex items-center py-1 font-normal text-sm">
            Menjunjung tinggi martabat mahasiswa
          </Typography>
        </ul>
      </div>
      <div className="flex flex-col lg:mt-4">
        <Typography className="text-dark font-semibold">Misi</Typography>
        <ul>
          <Typography className="flex items-center py-1 font-normal text-sm">
            Menjadikan mahasiswa menjadi penguasa kampus
          </Typography>
        </ul>
      </div>
      <div className="flex flex-col lg:ml-14">
        <Image src="/bem.png" alt="mockup" width={280} height={280} />
      </div>
    </div>
  );
}
