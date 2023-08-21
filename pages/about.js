import UserLayout from "@/components/UserLayout";
import VisiMisi from "@/components/VisiMisi";
import React from "react";
import { ProfileCard } from "@/components/ProfileCard";
import CustomBanner from "@/components/CustomBanner";
import AboutSection from "@/components/AboutSection";

export default function About() {
  return (
    <UserLayout>
      <CustomBanner/>
      <VisiMisi />
      <AboutSection>
        <ProfileCard />
      </AboutSection>
    </UserLayout>
  );
}
