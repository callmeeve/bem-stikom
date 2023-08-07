import Banner from "@/components/Banner";
import FotoKegiatan from "@/components/FotoKegiatan";
import KegiatanCard from "@/components/KegiatanCard";
import UserLayout from "@/components/UserLayout";
import VisiMisi from "@/components/VisiMisi";

export default function Home() {
  return (
    <UserLayout>
      <Banner />
      <VisiMisi />
      <FotoKegiatan>
        <KegiatanCard/>
        <KegiatanCard/>
        <KegiatanCard/>
        <KegiatanCard/>
        <KegiatanCard/>
        <KegiatanCard/>
      </FotoKegiatan>
    </UserLayout>
  );
}
