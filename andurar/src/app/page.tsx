import Banner from "@/components/banner";
import BookingBanner from "@/components/BookingBanner";
import Facilities from "@/components/facilities";
import FAQ from "@/components/faq";
import Feature from "@/components/feature";
import Gallary from "@/components/gallary";
import LandingPage from "@/components/landingPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 ">
      <LandingPage />

      <Feature />
      <Gallary />
      <Facilities />
      <FAQ />
      <Banner />
    </main>
  );
}
