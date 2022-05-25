import React from "react";
import { ShoppingCartIcon, MenuIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-between mb-5 mt-2">
        <ShoppingCartIcon className="h-6 w-6 ml-4" />
        <div className="text-center pt-4">
          <div className="font-bold text-xl">BELTIVA</div>
          <span className="font-thin text-xl">Furniture & Electronics</span>
        </div>

        <MenuIcon className="h-6 w-6 mr-4" />
      </div>
      <div className="space-y-10">
        <img
          className=""
          src="https://iconicmagazineonline.com/wp-content/uploads/2020/05/sven-brandsma-GZ5cKOgeIB0-unsplash-1170x730.jpg"
          alt=""
        />
        <img
          className=""
          src="https://iconicmagazineonline.com/wp-content/uploads/2020/05/aw-creative-abzqM4wzlnI-unsplash-1170x730.jpg"
          alt=""
        />
        <div className="p-20 flex items-center">
          <button className="border px-7 py-2 bg-yellow-400 font-bold font-serif">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
