import React from "react";
import Image from "next/image";
import { Typography, List, ListItem } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function VisiMisi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getKabinet = () => {
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
    getKabinet();
  }, []);

  return (
    <>
      <div className="bg-light py-10">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="flex flex-col-reverse md:flex-row px-3 py-6 items-center justify-center">
              <div className="bg-blue-200 p-4 m-3 text-center ">
                <Typography className="text-dark font-semibold">
                  Visi
                </Typography>
                <List>
                  <ListItem className="py-1.5 px-3 text-sm font-normal text-blue-gray-900 hover:bg-transparent">
                    {item.visi}
                  </ListItem>
                  <ListItem className="py-1.5 px-3 text-sm font-normal text-blue-gray-900 hover:bg-transparent">
                    Trash
                  </ListItem>
                  <ListItem className="py-1.5 px-3 text-sm font-normal text-blue-gray-900 hover:bg-transparent">
                    Settings
                  </ListItem>
                </List>
              </div>
              <div className="bg-green-200 p-4 m-3 text-center ">
                <Typography className="text-dark font-semibold">
                  Misi
                </Typography>
                <List>
                  <ListItem className="py-1.5 px-3 text-sm font-normal text-blue-gray-900 hover:bg-transparent">
                    {item.misi}
                  </ListItem>
                  <ListItem className="py-1.5 px-3 text-sm font-normal text-blue-gray-900 hover:bg-transparent">
                    Trash
                  </ListItem>
                  <ListItem className="py-1.5 px-3 text-sm font-normal text-blue-gray-900 hover:bg-transparent">
                    Settings
                  </ListItem>
                </List>
              </div>
              <div className="flex flex-col justify-center items-center px-8">
                <Typography className="text-dark text-xl font-semibold mb-3">
                  Kabinet
                </Typography>
                <Image
                  className="max-w-full h-auto"
                  src={item.image}
                  alt="Logo Kabinet"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col-reverse md:flex-row px-3 py-6 items-center justify-center bg-light">
            <h1 className="text-2xl font-semibold text-center">Loading...</h1>
          </div>
        )}
      </div>
    </>
  );
}
