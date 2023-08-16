import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Struktur() {
  const [name, setName] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [periode, setPeriode] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [filename, setFilename] = useState("");
  const router = useRouter();

  const handleUpload = (event) => {
    setImage(event.target.files[0]);
    try {
      if (!event.target.files || event.target.files.length == 0) {
        throw new Error("Pilih file untuk diunggah!");
      }
      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      setFilename(file.name);
      console.log(fileExt);
      const parse = Papa.parse(file, {
        delimiter: ";",
        header: true,
        complete: (res) => {
          setParsedData(res);
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  // const handleImgChangge = (e) => {
  //   setImage(e.target.files[0]);
  // };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("jabatan", jabatan);
    data.append("image", image);
    data.append("periode", periode);
    setLoading(true);
    fetch("/api/bems/create", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setName("");
        setJabatan("");
        setPeriode("");
        setImage(null);
        alert("Data berhasil ditambahkan");
        router.push("/admin");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert("Terjadi kesalahan saat menambahkan data");
      });
  };

  return (
    // <div>
    //   <div className="content-wrapper">
    //     <div className="row">
    //       <form onSubmit={handleAddProduct}>
    //       <div className="col-lg-12 grid-margin stretch-card">
    //         <div className="card">
    //           <div className="card-body">
    //             <h4 className="card-title">Basic Table</h4>
    //             <p className="card-periodeription">
    //               {" "}
    //               Add className <code>Input Kementrian</code>
    //             </p>

    //             {/* Input Teks */}
    //             <div className="form-group">
    //               <label>Nama:</label>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 value={name}
    //                 onChange={(e) => setName(e.target.value)}
    //               />
    //             </div>
    //             {/* Input Teks */}
    //             <div className="form-group">
    //               <label>Bidang:</label>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 value={jabatan}
    //                 onChange={(e) => setJabatan(e.target.value)}
    //               />
    //             </div>
    //             {/* Input Teks */}
    //             <div className="form-group">
    //               <label>Periode:</label>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 value={periode}
    //                 onChange={(e) => setPeriode(e.target.value)}
    //               />
    //             </div>

    //             {/* Input File */}
    //             <div className="form-group">
    //               <label>Foto:</label>
    //               <input
    //                 type="file"
    //                 className="form-control-file"
    //                 onChange={handleUpload}
    //               />
    //             </div>
    //             <button type="submit" className="btn btn-primary mr-2"> Submit </button>
    //           </div>
    //         </div>
    //       </div>
    //         </form>
    //     </div>
    //   </div>
    // </div>

    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Nama
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Hakim Ganteng"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Bidang
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    value={jabatan}
                    onChange={(e) => setJabatan(e.target.value)}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Dokumentasi"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Periode
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    value={periode}
                    onChange={(e) => setPeriode(e.target.value)}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="2023/2034"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Foto
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        name="file-upload"
                        type="file"
                        onChange={handleUpload}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
