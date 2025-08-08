"use client";

const Page = () => {

  return (
    <div className="font-sans  grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold mb-4">Introduction</h1>
      <p className="mb-4">This documentation will guide you on how to use the Quran API.</p>

      <h2 className="text-2xl font-bold mt-6 mb-2">What is Quran API?</h2>
      <p className="mb-4">
        Quran API is an open-source and free-to-use API to let people access the Quran in a simple and easy way. The API has no rate limit. All API responses are in JSON format.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">What you can get from Quran API?</h2>
      <p className="mb-4">
        Quran API currently provides English, Arabic, and Bengali translations of the Quran.
      </p>
      <ul className="list-disc ml-5 mb-4">
        <li>Get verses from the Quran in JSON format</li>
        <li>Get JSON of a whole surah</li>
        <li>Get mp3 files of each verse</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-2">How to use Quran API?</h2>
      <p className="mb-4">
        You can use Quran API by sending a GET request to the API endpoint. The base URL for the API is{" "}
        <a href="/get" className="text-blue-400 code font-bold cursor-pointer">
          Get API
        </a>
      </p>
    </div>
  );
};

export default Page;