"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage: React.FC = () => {
    const router = useRouter()
  return (
    <div className="bg-transparent text-white min-h-screen p-6 flex items-center justify-center ml-auto mr-auto">
      <div className="max-w-2xl w-full">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h1 className="text-4xl font-bold text-purple-700 mb-4 border-b-2 border-purple-700 pb-2">
            About Us
          </h1>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            Welcome to our Quran API platform! We are dedicated to providing developers with easy access to the Qurans text, translations, tafsir, and audio recitations. Our mission is to facilitate the creation of meaningful applications that promote the understanding and appreciation of the Quran worldwide.
          </p>
          <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            This platform offers a comprehensive set of APIs to retrieve chapters, verses, and related resources. Whether you are building an educational tool, a recitation app, or a research project, we are here to support your journey.
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-purple-600 mb-2">Get Involved</h2>
            <p className="text-gray-400 mb-4">
              For more information, explore our resources or contact us for support. Join our community to contribute and enhance this platform.
            </p>
            <button
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              onClick={() => router.push('mailto:arafmuhammad2008@gmail.com')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;