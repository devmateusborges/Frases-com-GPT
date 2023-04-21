"use client";
import Image from "next/image";
import background from "../../public/background.jpg";
import backgroundMobile from "../../public/background.jpg";
import { Inter } from "next/font/google";
import { AppDropdown } from "@/components/AppDropdown";
import { responseApi } from "@/interface/globalInterfaces";
import { useEffect, useState } from "react";
import { CreateMessage } from "@/service/service";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [response, setResponse] = useState<responseApi>();

  useEffect(() => {
    handler();
  }, []);

  const handler = async () => {
    const responseGPT = await CreateMessage("motivação");

    setResponse(JSON.parse(responseGPT));
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const responseGPT = await CreateMessage(event.target[0].value);

    setResponse(JSON.parse(responseGPT));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-screen relative flex item">
        <Image
          src={background}
          alt="img_background"
          className="hidden md:block w-full h-screen"
          width={1000}
          height={1000}
        />
        <Image
          src={backgroundMobile}
          alt="img_background"
          className="block md:hidden"
          width={300}
          height={300}
        />
        <div className="w-full h-screen flex flex-col items-certer absolute z-10 bg-stone-950/20 ">
          <nav className="w-full p-5">
            <form onSubmit={onSubmit}>
              <AppDropdown />
            </form>
          </nav>
          <div className="w-full h-screen flex flex-col items-center justify-center p-2 xl:p-0 ">
            <div className="w-full xl:w-[60%] bg-black/10 rounded-lg p-10 animate-pulse">
              <h1 className="font-bold  xl:text-[25px]">{response?.title}</h1>
              <h2 className="semibold-bold text-[10px]  xl:text-[25px]">
                {response?.message}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
