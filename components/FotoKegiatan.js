import React from "react";
import { Typography } from "@material-tailwind/react";

export default function FotoKegiatan({ children }) {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* main card */}
      <div className="p-10">
        {/* headers content*/}

        <Typography className="text-center font-bold text-2xl text-dark">
          Foto Kegiatan
        </Typography>

        {/* subscriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center mt-10">
          {children}
        </div>
        <div className="flex justify-center">
          <button className="mt-12 bg-dark text-white text-base px-10 rounded-full py-3">
            Lihat Semua
          </button>
        </div>
      </div>
    </div>
  );
}
