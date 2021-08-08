import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky items-center top-0 p-2 z-50 grid grid-cols-3 bg-white shadow-md md:px-10">
      <div className="relative h-7 sm:h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex cursor-pointer md:border-2 shadow-sm bg-gray-100 rounded-full p-2">
        <input
          className=" text-sm text-gray-600  placeholder-gray-400 flex-grow bg-transparent sm:p-2 outline-none"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className=" hidden lg:inline-flex items-center h-8 bg-red-400 text-white p-2 mx-auto rounded-full" />
      </div>
      <div className="flex cursor-pointer items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 " />
        <div className="flex space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
