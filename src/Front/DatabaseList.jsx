import React from 'react'

const DatabaseList = () => {
  return (
    <>
  <div className="p-5 h-screen w-full">
    <h1 className="text-xl mb-2">Enrolled Students</h1>

    <div className="overflow-auto rounded-lg shadow  md:block">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
        <tr>
          <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">ID</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Full Name</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Money</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Enrolled Date</th>
          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Address</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
        <tr className="bg-white">
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            <a href="#" className="font-bold text-blue-500 hover:underline">1</a>
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
Ashish Pandey          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Rs 20000</span>
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Horizon Chowk</td>
        </tr>
        </tbody>
      </table>
    </div>

</div>
    </>
  )
}

export default DatabaseList