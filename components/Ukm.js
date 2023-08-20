import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const Ukm = () => {
  return (
    <div className="my-3 py-10">
      <Typography className="text-center font-bold text-2xl text-dark">
        Unit Kegiatan Mahasiswa
      </Typography>
      <div className="w-full flex gap-5 justify-center mt-10">
        <Image
          className="object-cover object-center rounded-xl "
          alt="hero"
          src="/MAPASWANGI.png"
          width={150}
          height={150}
        />
        <Image
          className="object-cover object-center rounded-xl "
          alt="hero"
          src="/Kamera-Remake.png"
          width={150}
          height={150}
        />
      </div>
      <div className="w-full flex gap-5 justify-center items-center my-2">
        <Image
          className="object-cover object-center rounded-xl "
          alt="hero"
          src="/KLOSO.png"
          width={150}
          height={150}
        />
        <Image
          className="object-cover object-center rounded-xl "
          alt="hero"
          src="/SMS.png"
          width={150}
          height={150}
        />

        <Image
          className="object-cover object-center rounded-xl "
          alt="hero"
          src="/OLAHRAGA.png"
          width={150}
          height={150}
        />
      </div>
      <div className="w-full flex gap-3 justify-center items-center">
        <Image
          className="object-cover object-center rounded-xl "
          alt="hero"
          src="/RPG.png"
          width={150}
          height={150}
        />
        <Image
          className="object-cover object-center rounded-xl "
          alt="hero"
          src="/Jurnalistik.png"
          width={150}
          height={150}
        />
        <Image
          className="object-cover object-center rounded-xl "
          alt="hero"
          src="/ROHISTI.png"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default Ukm;
