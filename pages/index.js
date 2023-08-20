import CarouselBanner from "@/components/CarouselBanner";
import FotoKegiatan from "@/components/FotoKegiatan";
import KegiatanCard from "@/components/KegiatanCard";
import Ukm from "@/components/Ukm";
import UserLayout from "@/components/UserLayout";
import VisiMisi from "@/components/VisiMisi";


export default function Home() {
  return (
    <UserLayout>
      <CarouselBanner />
      <VisiMisi />
      <FotoKegiatan>
        <KegiatanCard />
        <KegiatanCard />
        <KegiatanCard />
        <KegiatanCard />
        <KegiatanCard />
        <KegiatanCard />
      </FotoKegiatan>
      <Ukm/>
    </UserLayout>
  );
}
