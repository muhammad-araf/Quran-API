"use client";

const page = () => {
        const surahs = ["Al-Fatiha", "Al-Baqarah", "Al-Imran", "An-Nisa", "Al-Ma'idah", "Al-An'am", "Al-A'raf", "Al-Anfal", "At-Tawbah", "Yunus", "Hud", "Yusuf", "Ar-Ra'd", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra", "Al-Kahf", "Maryam", "Ta-Ha", "Al-Anbiya", "Al-Hajj", "Al-Mu'minun", "An-Nur", "Al-Furqan", "Ash-Shu'ara'", "An-Naml", "Al-Qasas", "Al-Ankabut", "Ar-Rum", "Luqman", "As-Sajda", "Al-Ahzab", "Saba'", "Fatir", "Ya-Sin", "As-Saffat", "Sad", "Az-Zumar", "Ghafir", "Fussilat", "Ash-Shura", "Az-Zukhruf", "Ad-Dukhan", "Al-Jathiya", "Al-Ahqaf", "Muhammad", "Al-Fath", "Al-Hujurat", "Qaf", "Adh-Dhariyat", "At-Tur", "An-Najm", "Al-Qamar", "Ar-Rahman", "Al-Waqia", "Al-Hadid", "Al-Mujadila", "Al-Hashr", "Al-Mumtahana", "As-Saff", "Al-Jumu'a", "Al-Munafiqun", "At-Taghabun", "At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haaqqa", "Al-Ma'arij", "Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir", "Al-Qiyama", "Al-Insan", "Al-Mursalat", "An-Naba", "An-Nazi'at", "Abasa", "At-Takwir", "Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Burooj", "At-Tariq", "Al-A'la", "Al-Ghashiya", "Al-Fajr", "Al-Balad", "Ash-Shams", "Al-Lail", "Ad-Duha", "Ash-Sharh", "At-Tin", "Al-Alaq", "Al-Qadr", "Al-Bayyina", "Az-Zalzala", "Al-Adiyat", "Al-Qariah", "At-Takathur", "Al-Asr", "Al-Humaza", "Al-Fil", "Quraish", "Al-Ma'un", "Al-Kawthar", "Al-Kafirun", "An-Nasr", "Al-Masad", "An-Nas"];
  return (
    <>
        <div className="w-[50%] p-10 ">
    <table className="w-full overflow-x-auto border border-gray-300 dark:border-gray-600 mt-6 rounded-lg shadow-sm">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-700/50">
      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold">ID</th>
      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold">Surah Name</th>
    </tr>
  </thead>
    <tbody>
       { surahs.map((surah, index) => {
        return(
      <tr key={index} className="even:bg-gray-100 even:dark:bg-gray-600/20">
        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{index + 1}</td>
        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">{surah}</td>
      </tr>
        )})}
      </tbody>
  </table>
  </div>
    </>
  )
}

export default page