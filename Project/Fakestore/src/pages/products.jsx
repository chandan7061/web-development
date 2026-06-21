import React from "react";

const Products = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-4 gap-5">
        <div className="border rounded-lg p-4 shadow">
          <div className="w-full h-80">
            <img
              className="w-full h-full object-cover rounded"
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
              alt="product"
            />
          </div>

          <h2 className="font-bold mt-3">Leather bag</h2>

          <p className="text-sm mt-2">
            Best quality leather bag for your daily use. It is durable and
            stylish.
          </p>

          <button className="bg-pink-500 text-white px-4 py-2 rounded mt-3">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
