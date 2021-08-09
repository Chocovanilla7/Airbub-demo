import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function InfoCard({ searchResult }) {
  const { img, location, title, description, star, price, total, long, lat } = searchResult;
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t ">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
        <Image className="rounded-lg" src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-grow flex-col pl-5 ">
        <div className="flex justify-between items-center">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"></div>

        <p className="text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold lg:text-2xl pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
