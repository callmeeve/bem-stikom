const CustomBanner = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-44"
      style={{ backgroundImage: 'url("/bannerukm.JPG")' }}
    >
      <div className="flex flex-col text-start text-white px-20">
        <h1 className="text-xl font-medium mb-3">BADAN EKSEKUTIF MAHASISWA</h1>
        <p className="text-4xl mb-12 font-bold">STIKOM PGRI Banyuwangi</p>
      </div>
    </section>
  );
};

export default CustomBanner;
