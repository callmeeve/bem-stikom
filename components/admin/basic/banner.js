import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Sample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBanner = () => {
    fetch("/api/banner/all", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <div className="flex flex-row justify-start items-center mb-5">
      <h1 className="text-xl font-bold my-4">Gambar Banner</h1>
      <table className="w-96 text-sm text-left text-gray-500 rounded shadow-md ml-10">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4">
                  <Image
                    src={row.image}
                    alt="image"
                    className="w-52 h-28 object-cover"
                    width={1920}
                    height={1080}
                  />
                </td>
                <td className="px-6 py-4">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
