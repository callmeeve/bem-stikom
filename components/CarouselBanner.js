import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel, Typography } from "@material-tailwind/react";

const CarouselBanner = () => {
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
    <Carousel
      className="rounded-0"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative h-full w-full">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <Image
                src={item.image}
                alt="image 1"
                className="w-full h-[30rem] object-cover"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography className="mb-4 text-lg text-white font-bold">
                    BADAN EKSEKUTIF MAHASISWA
                  </Typography>
                  <Typography className="mb-12 opacity-80 text-2xl font-bold text-light">
                    SEKOLAH TINGGI ILMU KOMPUTER PGRI BANYUWANGI
                  </Typography>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography variant="h1" color="white" className="mb-4 text-lg">
                BADAN EKSEKUTIF MAHASISWA
              </Typography>
              <Typography className="mb-12 opacity-80 text-2xl font-bold text-light">
                SEKOLAH TINGGI ILMU KOMPUTER PGRI BANYUWANGI
              </Typography>
            </div>
          </div>
        )}
      </div>
      {/* <Image
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="w-full h-[30rem] object-cover"
        width={1920}
        height={1080}
      />
      <Image
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="w-full h-[30rem] object-cover"
        width={1920}
        height={1080}
      /> */}
    </Carousel>
  );
};

export default CarouselBanner;
