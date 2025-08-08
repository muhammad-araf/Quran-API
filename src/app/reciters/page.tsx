
const Page = () => {
  return (
    <>
    <div className="w-[50%] p-40 ">
    <table className="w-full overflow-x-auto border border-gray-300 dark:border-gray-600 mt-6 rounded-lg shadow-sm">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-700/50">
      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold">Reciter ID</th>
      <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-semibold">Name</th>
    </tr>
  </thead>
    <tbody>
      <tr className="even:bg-gray-100 even:dark:bg-gray-600/20">
        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1</td>
        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Mishary Rashid Al Afasy</td>
      </tr>
      <tr className="even:bg-gray-100 even:dark:bg-gray-600/20">
        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2</td>
        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Abu Bakr Al Shatri</td>
      </tr>
      <tr className="even:bg-gray-100 even:dark:bg-gray-600/20">
        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3</td>
        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Nasser Al Qatami</td>
      </tr>
      <tr className="even:bg-gray-100 even:dark:bg-gray-600/20">
        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">4</td>
        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Yasser Al Dosari</td>
      </tr>
      <tr className="even:bg-gray-100 even:dark:bg-gray-600/20">
        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5</td>
        <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Hani Ar Rifai</td>
      </tr>
    </tbody>
  </table>
  </div>
    
    </>
  )
}

export default Page