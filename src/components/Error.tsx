import { Forbidden } from "iconsax-react";

export const Error = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-gray-100 rounded-lg p-4">
      <Forbidden size="60" color="#FF8A65" />
      <h1 className="text-xl-bold ">Something went wrong</h1>
    </div>
  );
};
