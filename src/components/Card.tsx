import { Microphone2, MusicDashboard, MusicPlay, Play } from "iconsax-react";
import Image from "next/image";

import { CardProps } from "./types";

export const Card = ({ title, image, album, artist }: CardProps) => {
  return (
    <div className="bg-gray-100 group rounded-md shadow-md flex flex-col gap-3 min-h-[200px]">
      <div className="relative w-full min-h-[260px] overflow-hidden group-hover:rounded-t-md">
        <Image
          src={image}
          alt="image"
          fill
          className="rounded-t-md transition-all duration-200 group-hover:rounded-t-md group-hover:blur-xl group-hover:opacity-80"
        />
        <Play
          size="100"
          variant="Bulk"
          className="cursor-pointer text-white transition-all duration-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className="p-4 flex flex-col justify-start h-full gap-2">
        <div className="flex items-center gap-2">
          <MusicPlay size="24" className="text-primary" />
          <h1 className="text-lg-bold">{title}</h1>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Microphone2 size="24" className="text-primary" />
            <p className="text-sm-bold text-gray-600 font-normal">{artist}</p>
          </div>
        </div>
        {album && (
          <div className="flex items-center gap-2">
            <MusicDashboard size="24" className="text-primary" />
            <p className="text-sm-bold text-gray-600 font-normal">{album}</p>
          </div>
        )}
      </div>
    </div>
  );
};
