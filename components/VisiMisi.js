import React from "react";
import Image from "next/image";
import { Typography, List, ListItem } from "@material-tailwind/react";

export default function VisiMisi() {
  return (
    <div className="flex flex-col-reverse md:flex-row px-3 py-6 items-center justify-center bg-light">
      <div className="bg-blue-200 p-4 m-3 text-center ">
        <Typography className="text-dark font-semibold">Visi</Typography>
        <List>
          <ListItem className="py-1.5 px-3 text-sm font-normal text-blue-gray-900 hover:bg-transparent">
            Menjunjung tinggi martabat mahasiswa
          </ListItem>
          <ListItem className="py-1.5 px-3 text-sm font-normal text-blue-gray-900 hover:bg-transparent">
            Trash
          </ListItem>
          <ListItem className="py-1.5 px-3 text-sm font-normal text-blue-gray-900 hover:bg-transparent">
            Settings
          </ListItem>
        </List>
      </div>
      <div className="bg-green-200 p-4 m-3 text-center ">
        <Typography className="text-dark font-semibold">Misi</Typography>
        <List>
          <ListItem className="py-1.5 px-3 text-sm font-normal text-blue-gray-900 hover:bg-transparent">
            Menjadikan mahasiswa menjadi penguasa kampus
          </ListItem>
          <ListItem className="py-1.5 px-3 text-sm font-normal text-blue-gray-900 hover:bg-transparent">
            Trash
          </ListItem>
          <ListItem className="py-1.5 px-3 text-sm font-normal text-blue-gray-900 hover:bg-transparent">
            Settings
          </ListItem>
        </List>
      </div>
      <div className="flex flex-col p-4 justify-center items-center">
        <Typography className="text-dark text-xl font-semibold mb-3">Kabinet</Typography>
        <Image
          className="max-w-full h-auto"
          src="/bem.png"
          alt="Logo Kabinet"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
