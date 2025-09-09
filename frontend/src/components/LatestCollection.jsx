import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products, loading } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      {/* Section Title */}
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          maxime at minus voluptas sit modi ipsa unde qui rerum architecto?
          Illum in quos dolore, a voluptatum libero? Obcaecati, dignissimos
          vero!
        </p>
      </div>

      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {loading
          ? // 🔹 Show 10 skeletons while loading
            Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 h-40 w-full rounded-md"></div>
                <p className="bg-gray-200 h-4 w-3/4 mt-3 mb-2 rounded"></p>
                <p className="bg-gray-200 h-4 w-1/3 rounded"></p>
              </div>
            ))
          : // 🔹 Show real products once loaded
            latestProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
      </div>
    </div>
  );
};

export default LatestCollection;
