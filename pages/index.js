import Banner from "@/components/Banner";
import UserLayout from "@/components/UserLayout";
import VisiMisi from "@/components/VisiMisi";
import Image from "next/image";

export default function Home() {
  return (
    <UserLayout>
      <div className="bg-light">
        <Banner />
        <div className="flex flex-col items-center justify-center">
          <VisiMisi/>
        </div>
      </div>
    </UserLayout>
  );
}
