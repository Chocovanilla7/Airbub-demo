import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate), setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toJSON(),
        endDate: endDate.toJSON(),
        noOfGuests,
      },
    });
    setSearchInput("");
  };

  return (
    <header className="sticky items-center top-0 p-2 z-50 grid grid-cols-3 bg-white shadow-md md:px-10">
      {/* left section */}
      <div onClick={() => router.push("/")} className=" relative h-7 sm:h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle section  */}
      <div className="flex cursor-pointer md:border-2 shadow-sm bg-gray-100 rounded-full p-2">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className=" text-sm text-gray-600  placeholder-gray-400 flex-grow bg-transparent sm:p-2 outline-none"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className=" hidden lg:inline-flex items-center h-8 bg-red-400 text-white p-2 mx-auto rounded-full" />
      </div>

      {/* right section  */}
      <div className="flex cursor-pointer items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 " />
        <div className="flex space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4 ">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input
              className="w-12 pl-2 outline-none text-red-400"
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              value={noOfGuests}
              type="number"
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-400" onClick={() => setSearchInput("")}>
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
