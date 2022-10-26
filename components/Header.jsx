import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: input,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-4 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-8 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border rounded-full md:hover:shadow-lg transition duration-200 md:border-gray-300 py-2 md:shadow">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder={placeholder || "Comece sua pesquisa"}
          className="hidden md:inline-flex pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 sm:placeholder-transparent md:placeholder-gray-400"
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

      {input && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              disabled={noOfGuests < 1}
              min={1}
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              type="number"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancelar
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Buscar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
