import UserLayout from "@/components/UserLayout";
import VisiMisi from "@/components/VisiMisi";
import React from "react";
import AboutBem from "@/components/AboutBem";
import { ProfileCard } from "@/components/ProfileCard";

export default function About() {
  return (
    <UserLayout>
      <AboutBem />
      <VisiMisi />
      <ProfileCard />
    </UserLayout>
  );
}
