import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("../components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="fixed text-center font-bold justify-center lg:left-0 p-2">
        <p>Hey Folks</p>
        <p>
          I&apos;m{" "}
          <span className="text-accent font-serif text-2xl font-extrabold ">Paras Billore</span>
        </p>
        <p className="text-center py-1 text-xs text-foreground ">Explore to delve into my expertise as a Software Developer.</p>
      </div>

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </main>
  );
}
