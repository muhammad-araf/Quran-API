"use client";

import { useRouter } from "next/navigation"
export default function Home() {
  const router = useRouter();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left text-white/80">
          Quran API For <strong className="text-white">Developers</strong>
        </h1>
        <p className="text-lg text-center sm:text-left">
          A simple API to get Quran chapters and verses audio
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
        onClick={() => router.push('/get')}>
          Get Started
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
        onClick={() => router.push('https://github.com/muhammad-araf/Quran-API')}>
          Source Code
        </button>
        </div>
      </main>
    </div>  
  );
}
