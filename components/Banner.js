import Image from "next/image";

export default function Banner() {
  return (
    <section className="bg-center bg-no-repeat bg-[url('/foto2.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
         BADAN EKSEKUTIF MAHASISWA
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          SEKOLAH TINGGI ILMU KOMPUTER PGRI BANYUWANGI
        </p>
      </div>
    </section>
  );
}
