import { client } from "@/sanity/lib/client";
import Iproducts from "@/app/types/product";
import ProductsList from "@/app/Components/ProductsList";
import Navbar from "@/app/Components/Navbar";
import Whitenav from "@/app/Components/Whitenav";
import Hero from "@/app/Components/Hero";
import Footer from "@/app/Components/Footer";

export default async function LatestProducts() {
  const data: Iproducts[] = await client.fetch(`
    *[_type == "productDetails"]{
      _id,
      slug,
      productName,
      "imageUrl": productImage.asset->url,
      productPrice,
      availableColors,
      careInstructions,
      material,
    }
  `);
  console.log(data);

  return (
    <div className="w-screen bg-white mt-10">
      <Navbar />
      <Whitenav />
      <Hero />
      <ProductsList products={data} />
      <Footer />
    </div>
  );
}
