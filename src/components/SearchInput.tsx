"use client";
import { ChangeEvent } from "react";

import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { changeTitle, selectTitle } from "@/rtk/slices/searchTitle";

export const SearchInput = () => {
  const { push } = useRouter();

  const { title } = useAppSelector(selectTitle);
  const dispatch = useAppDispatch();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTitle(event.target.value));
    push("/?title=" + event.target.value);
  };

  return (
    <input
      type="text"
      value={title}
      onChange={handleSearchChange}
      placeholder="جستجو"
      className="w-full h-[45px] p-2 border border-gray-300 rounded-md transition-all duration-200 focus:ring-2 focus:ring-primary"
    />
  );
};
