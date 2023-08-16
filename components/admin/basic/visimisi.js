import React, { useState, useEffect } from "react";

export default function Sample() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const getKabinetData = () => {
      fetch("/api/kabinet/all", {
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
      getKabinetData();
    }, []);

  return (
    <div>
      <div className="content-wrapper">
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-1">
            <div className="shadow-md p-4">
              <h4 className="text-xl font-semibold mb-4">Basic Table</h4>
              <h1 className="text-2xl font-bold mb-2">
                Visi Misi Kabinet
              </h1>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Visi</th>
                      <th className="px-4 py-2">Misi</th>
                      <th className="px-4 py-2">Logo Kabinet</th>
                      <th className="px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 && data.map((row, index) => (
                      <tr key={index}>
                        <td className="px-4 py-2">
                          {row.visi}
                        </td>
                        <td className="px-4 py-2">
                          {row.misi}
                        </td>
                        <td className="px-4 py-2">
                          <img
                            src={row.image}
                            alt="image"
                            className="w-52 h-28 object-cover"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
