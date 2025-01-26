import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Iproducts from "@/app/types/product";
import Navbar from "@/app/Components/Navbar"
import Whitenav from "@/app/Components/Whitenav"
import Footer from "@/app/Components/Footer"



export default async function ProductsPage() {
  const query = `
    *[_type == "productDetails"]{
      productName,
      "slug": slug.current,
      "imageUrl": productImage.asset->url,
      productPrice,
      description,
      }
  `;

  const products: Iproducts[] = await client.fetch(query);

  return (
      
    <div className="w-full h-auto">
      <Navbar/>
      <Whitenav/>
     
      <h1 className="text-3xl text-center items-center font-bold mt-10 mb-8 text-[rgba(26,11,91,1)]">Latest Products</h1>
      <div className="flex flex-row-1 md:flex-row-2 lg:flex-3 justify-center items-center mt-6 gap-6 flex-wrap">

        {products.map((product) => (
          <div
            key={product.slug}
            className="border rounded-lg justify-center items-center shadow-lg p-4 hover:shadow-xl"
          >
            <Link href={`/Products/${product.slug}}`}>
            <img
              src={product.imageUrl || "/images/placeholder.jpg"}
              alt={product.productName} width={270} height={236}
              className="w-[300px] h-[270px] items-center object-cover rounded-lg mb-4 "
            />
            </Link>
            <div className="space-y-2 items-center justify-center font-bold text-[rgba(26,11,91,1)]">
              <Link href={`/Products/${product.slug}`} className="block text-[rgba(26,11,91,1)]">
                <strong>Name:</strong> {product.productName}
              </Link>
              <Link href={`/Products/${product.slug}`} className="block text-[rgba(26,11,91,1)]">
                <strong>Price:</strong> ${product.productPrice}
              </Link>
              
           </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
    
  );
}
