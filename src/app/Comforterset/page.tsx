import { client } from "@/sanity/lib/client";
import Navbar from "@/app/Components/Navbar"
import Whitenav from "@/app/Components/Whitenav"

import Image from "next/image"

export default async function Comforterset() {
  
  const data = await client.fetch(`
    *[_type == "productDetails"][4]{
      _id,
      productName,
      "imageUrl": productImage.asset->url,
      productPrice,
      availableColors,
      careInstructions,
      material
    }
  `);

  if (!data) {
    return (
      <div className="w-screen bg-white text-center">
        
        <p>No product found!</p>
      </div>
    );
  }

  return (
    <div className="w-screen bg-white mt-10">
      <Navbar/>
          <Whitenav/>
         
      <div className="flex flex-row items-center gap-4 px-60">
        
        <div className="flex flex-row gap-6 px-4">
          <img
            src={data.imageUrl}
            alt={data.productName}
            width={357}
            height={487}
            className="w-[357px] h-[487px] object-cover"
          />
        </div>

        
        <div>
          <h1 className="text-[rgba(17,28,133,1)] font-bold text-xl">
            {data.productName}
          </h1>
          <div className="flex flex-row gap-6 px-4 mt-2">
            <p className="text-gray-700">
              <span className="font-bold">Available Colors:</span> {data.availableColors}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-[rgba(255,42,170,1)] font-bold">
              Price: ${data.productPrice}
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-gray-700 font-semibold">Material:</h3>
            <p>{data.material}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-gray-700 font-semibold">Care Instructions:</h3>
            <p>{data.careInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
