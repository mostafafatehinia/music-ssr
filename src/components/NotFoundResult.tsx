import { SearchStatus } from "iconsax-react";

export const NotFoundResult = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col items-center gap-4 bg-gray-100 rounded-lg p-4">
        <SearchStatus size="60" className="text-primary" variant="TwoTone" />
        <div className="text-xl-bold">موردی یافت نشد!</div>
      </div>
    </div>
  );
};
