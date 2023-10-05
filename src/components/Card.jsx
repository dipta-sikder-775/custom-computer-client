/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = ({ product }) => {
  return (
    <Link href={`/category/product/${product._id}`}>
      <div className="border min-h-[480px] p-3 font-medium rounded-md shadow-xl hover:shadow-lg mx-2">
        <img className="w-full h-72" src={product.image} alt="" />

        <div className="mt-3">
          <h2 className="text-center text-xl">{product.productName}</h2>

          <div className="flex justify-between items-center mt-3">
            <p className="text-xl">${product.price}</p>

            <p
              className={`${
                product.status === "In Stock"
                  ? "text-[#1fc600]"
                  : "text-red-500"
              }`}
            >
              {product.status}
            </p>
          </div>

          <div className="flex justify-between items-center mt-1">
            <p className="flex justify-center items-center gap-1">
              {product.rating}
              <AiFillStar className="w-4 h-4 text-yellow-500" />
            </p>

            <p className="px-2 py-1 text-xs rounded-full bg-[#379ae0] text-white inline-block">
              {" "}
              {product.category}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="bg-[#379ae0] mt-3 px-3 py-2 rounded-md text-white mr-3 hover:bg-gray-600 duration-300 w-full"
        >
          View Product
        </button>
      </div>
    </Link>
  );
};

export default Card;
