import Banner from "@/components/Banner";
import FotoKegiatan from "@/components/FotoKegiatan";
import KegiatanCard from "@/components/KegiatanCard";
import UserLayout from "@/components/UserLayout";
import VisiMisi from "@/components/VisiMisi";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function Home() {
  return (
    <UserLayout>
      <Banner />
      <VisiMisi />
      <FotoKegiatan>
        <KegiatanCard />
        <KegiatanCard />
        <KegiatanCard />
        <KegiatanCard />
        <KegiatanCard />
        <KegiatanCard />
      </FotoKegiatan>
      <div className="my-3 py-10">
        <Typography className="text-center font-bold text-2xl text-dark">
          Unit Kegiatan Mahasiswa
        </Typography>
        <div className="w-full flex gap-5 justify-center mt-10">
          <Image
            className="object-cover object-center rounded-xl "
            alt="hero"
            src="/MAPASWANGI.png"
            width={200}
            height={100}
          />
          <Image
            className="object-cover object-center rounded-xl "
            alt="hero"
            src="/Kamera-Remake.png"
            width={200}
            height={100}
          />
        </div>
        <div className="w-full flex gap-5 justify-center items-center my-2">
          <Image
            className="object-cover object-center rounded-xl "
            alt="hero"
            src="/KLOSO.png"
            width={200}
            height={100}
          />
          <Image
            className="object-cover object-center rounded-xl "
            alt="hero"
            src="/Jurnalistik.png"
            width={200}
            height={100}
          />
          <Image
            className="object-cover object-center rounded-xl "
            alt="hero"
            src="/OLAHRAGA.png"
            width={200}
            height={100}
          />
        </div>
        <div className="w-full flex gap-3 justify-center items-center">
        <Image
            className="object-cover object-center rounded-xl "
            alt="hero"
            src="/RPG.png"
            width={200}
            height={100}
          />
          <Image
            className="object-cover object-center rounded-xl "
            alt="hero"
            src="/SMS.png"
            width={200}
            height={100}
          />
          <Image
            className="object-cover object-center rounded-xl "
            alt="hero"
            src="/ROHISTI.png"
            width={200}
            height={100}
          />
        </div>
        
      </div>
    </UserLayout>
  );
}
