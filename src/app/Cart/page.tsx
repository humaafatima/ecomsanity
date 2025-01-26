'use client'
import Navbar from "@/app/Components/Navbar";
import Whitenav from "@/app/Components/Whitenav";
import Hero from "@/app/Components/Hero";
import Footer from "@/app/Components/Footer";
import { useEffect, useState } from 'react';
import Iproducts from "@/app/types/product";

export default function CartPage() {
  const [products, setProducts] = useState<(Iproducts & { quantity: number })[]>([]);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      try {
        const parsedCart = JSON.parse(cart);
        // Ensure parsedCart is an object and convert its values to an array
        const items = Object.values(parsedCart) as (Iproducts & { quantity: number })[];
        setProducts(items);
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    } else {
      console.log("No cart data found in localStorage.");
    }
  }, []);

  const handleClick = (product: Iproducts) => {
    const cart = localStorage.getItem('cart');
    const parsedCart = cart ? JSON.parse(cart) : {};

    if (parsedCart[product.productName]) {
      parsedCart[product.productName] = {
        ...parsedCart[product.productName],
        quantity: (parsedCart[product.productName].quantity || 1) + 1,
      };
    } else {
      parsedCart[product.productName] = { ...product, quantity: 1 };
    }

    localStorage.setItem('cart', JSON.stringify(parsedCart));
    console.log("Cart updated:", parsedCart);

    // Update products state after modifying the cart
    const updatedProducts = Object.values(parsedCart) as (Iproducts & { quantity: number })[];
    setProducts(updatedProducts);
  };

  const calculateTotalPrice = () => {
    const total = products.reduce(
      (sum, product) => sum + product.productPrice * product.quantity,
      0
    );
    setTotalPrice(total);
  };

  if (products.length === 0) {
    return <div className="flex justify-center items-center h-screen">No items in the cart</div>;
  }

  return (
    <div className="flex flex-col p-5">
      <Navbar/>
            <Whitenav/>
      {products.map((product) => (
        <div key={product.productName} className="flex gap-4 items-center">
          <img src={product.imageUrl} alt={product.productName} width={270} height={236} className="w-{270px} h-{236px]"/>
          <div>
            <p className="text-2xl font-bold text-[rgba(17,28,133,1)]">{product.productName}</p>
            <p className="text-lg text-[rgba(17,28,133,1)]">Price: ${product.productPrice}</p>
            <p className="text-lg text-[rgba(17,28,133,1)]">Quantity: {product.quantity}</p>
          </div>
          
          <button
            onClick={() => handleClick(product)}
            className="bg-blue-500 text-white px-2 py-3 rounded"
          >
            Add More
          </button>
         </div>
       
      ))}
      <div className="flex justify-center items-center">
      <button
        onClick={calculateTotalPrice}
        className="bg-blue-500 text-white px-2 py-3 rounded"
      >
        Calculate Total Price
      </button>
      {totalPrice !== null && (
        <p className="font-bold justify-between items-center p-4 text-[rgba(17,28,133,1)]">Total Price: ${totalPrice.toFixed(2)}</p>
      )}
      </div>
      <Footer/>
    </div>
  );
}