import Image from "next/image";
import React from "react";

export default function KegiatanCard() {
  return (
    <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl w-96 md:w-auto">
      <Image
        src="/foto2.jpg"
        className="w-full rounded"
        width={250}
        height={200}
      />
      <div className="mt-3 font-semibold text-lg">Judul: Ganteng e Emak</div>
      <div className="text-sm font-light">Deskripsi : Lorem ipsum astagfirullah</div>
    </div>
  );
}
