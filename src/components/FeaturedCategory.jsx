import { useGetCategoryQuery } from "@/redux/category/categoryApi";
import Link from "next/link";
import React from "react";

const FeaturedCategory = ({ data }) => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-5 md:my-10 text-[#52619a]">
        Featured Category
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {data?.data.map((category) => (
          <Link href={`/category/${category._id}`} key={category._id}>
            <div className="border rounded-m border-[#52619a] hover:shadow-lg mx-2 rounded-full">
              <h1 className="p-2 text-center font-semibold">
                {category.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
