import { Typography } from "@material-tailwind/react";
 
 
export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-center">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; 2023 <a href="https://material-tailwind.com/">BEM STIKOM PGRI BANYUWANGI</a>
          </Typography>
        </div>
      </div>
    </footer>
  );
}