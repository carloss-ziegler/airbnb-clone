import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-4 md:px-10">
      <div className="relative flex items-center h-8 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border rounded-full md:hover:shadow-lg transition duration-200 md:border-gray-300 py-2 md:shadow">
        <input
          type="text"
          placeholder="Comece sua pesquisa"
          className="hidden md:inline-flex pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 md:placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div className="items-center flex space-x-3 justify-end">
        <div className="py-2 px-3 rounded-full hover:bg-gray-50">
          <p className="hidden md:inline cursor-pointer font-semibold text-gray-700 text-sm">
            Seja um anfitrião
          </p>
        </div>
        <div className="p-3 rounded-full hover:bg-gray-50">
          <GlobeAltIcon className="text-gray-600 font-medium h-6 cursor-pointer" />
        </div>

        <div className="flex items-center space-x-2 border px-2 border-gray-300 py-1 rounded-full hover:shadow-lg transition duration-200 cursor-pointer">
          <MenuIcon className="h-5" />
          <UserCircleIcon className="h-9 text-gray-600" />
        </div>
      </div>
    </header>
  );
}

export default Header;
