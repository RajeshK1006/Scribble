"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categoryFilters } from "@/constants";

const Categories = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const handleTags = (item: string) => {
    router.push(`${pathName}?category=${item}`);
  };
  return (
    <div className="flexBetween w-full gap-5 felx-wrap">
      <ul className="flex gap-2 overflow-auto">
        {categoryFilters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={`${
              category === filter
                ? "bg-light-white-300 font-medium"
                : "font-normal"
            } px-4 py-3 rounded-lg catipalize whitesapce-nowrap`}
            onClick={() => handleTags(filter)}
          >
            {filter}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
