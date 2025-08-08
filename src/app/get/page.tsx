"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Get() {
  const router = useRouter();
    const [copied, setCopied] = useState(false);

  const codeString = `const getData = async (chapter: string) => {
  const response = await fetch(\`\${process.env.NEXT_PUBLIC_URL}/api/v1/[chapter]\`);
  const data = await response.json();
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="font-sans grid grid-rows-[1px_1fr_1px] items-center justify-items-center min-h-screen p-1 pb-5 gap-1 sm:p-20 w-[60%]">
      <main className="flex flex-col gap-[14px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Quran API For Developers
        </h1>
        <div>
        <code className="break-words rounded-lg border border-white/10 bg-white/10 px-1 py-0.5 text-sm font-mono text-white/80 backdrop-blur-sm">
          api/v1/[surahNo]
        </code>
        <button className="pl-1 pr-1 p-0.5 bg-blue-400 ml-4 text-black rounded-lg cursor-pointer hover:bg-blue-500"
        onClick={()=>router.push("/api/v1/1")}>Get Surah Al-Fatiha</button>
        </div>
        <div className="gap-3 bg-white/10 p-4 rounded-lg text-white/80 backdrop-blur-sm ">
          <p className="text-lg text-center sm:text-left">1. Al-Fatiha</p>
          <p className="text-lg text-center sm:text-left">2. Al-Baqarah</p>
          <p className="text-lg text-center sm:text-left">3. Al-Imran</p>
          <p className="text-lg text-center sm:text-left">.</p>
          <p className="text-lg text-center sm:text-left">.</p>
          <p className="text-lg text-center sm:text-left">.</p>
          <p className="text-lg text-center sm:text-left">119. An-Nas</p>
        </div>
    <div className="relative gap-4 bg-white/10 rounded-lg p-5 text-white/80 backdrop-blur-sm shadow-lg">
      <h2 className="text-lg font-semibold mb-3"> <strong>API</strong> : <span className="text-blue-400">TypeScript</span></h2>

          <button
            onClick={handleCopy}
            className="absolute top-5 right-5 text-xs px-3 py-1 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          

          <pre className="rounded-lg border border-white/10 bg-[#1e1e2e] p-4 text-sm font-mono overflow-x-auto">
            <code>
              <span className="text-purple-400">const</span> <span className="text-blue-400">getData</span> = <span className="text-purple-400">async</span> (<span className="text-green-400">verse: string</span>) =&gt; {"{"}
              {"\n  "}<span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> fetch(<span className="text-yellow-300">{'`'}${'https://quran-restapi.vercel.app'}/api/v1/[verse]{'`'}</span>);
              {"\n  "}<span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> response.json();
              {"\n"}{"}"}
            </code>
          </pre>
        </div>




      </main>
    </div>  
  );
}
