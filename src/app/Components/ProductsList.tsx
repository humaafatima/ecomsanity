'use client'
import React from 'react'
import Iproducts from "@/app/types/product"

export default function ProductsList( { products} : { products: Iproducts[] }) {
const cart = JSON.parse(localStorage.getItem('cart') || '{}')
  const handleClick = (product: Iproducts) => {
   if(cart[product.productName]) {
    cart[product.productName] = {
      ...cart[product.productName], 
      quantity: cart[product.productName].quantity + 1,
    }
   }
   else {
    cart[product.productName] = { ...product, quantity: 1}
   }
    
  localStorage.setItem('cart', JSON.stringify(cart))

}
return (
  <div className="w-full h-auto">
  <div className="text-center font-bold text-2xl mt-6 md:text-3xl font-[Josefin Sans] text-[rgba(26,11,91,1)]">
  Latest Products
</div>
<div className='flex flex-row-1 md:flex-row-2 lg:flex-3 justify-center items-center mt-6 gap-6 flex-wrap'>

      { products.map((product) => (
        <div key={product.productName} className='border rounded'>
          <img
            src={product.imageUrl}
            alt={product.productName}
            width={270}
            height={236} className="w-[270px] h-[236px]"
          />
   

<div className='flex justify-between p-2 items-center'>
            <p className=" font-bold text-[rgba(26,11,91,1)]">{product.productName}</p>
            <button
              onClick={() => handleClick(product)}
              className='p-3 border rounded bg-[rgba(251,46,134,1)] text--white'
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}