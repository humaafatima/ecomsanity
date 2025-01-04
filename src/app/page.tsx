import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Navbar from "@/app/Components/Navbar"
import Whitenav from "@/app/Components/Whitenav"
import Hero from "@/app/Components/Hero"
import Footer from "@/app/Components/Footer"

export default async function LatestProducts() {
  const data = await client.fetch(`
  
    *[_type == "productDetails"]{
      _id,
      productName,
      "imageUrl": productImage.asset->url,
      productPrice
    }
  `);
return (
  
    <div className="w-screen bg-white mt-10">
      <Navbar/>
  <Whitenav/>
  <Hero/>
  
      <h1 className="text-center text-2xl font-bold my-6">Latest Products</h1>
      <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
        {data.map((product: any) => {
          
          let productLink;
          if (product.productName === "Wood Comforter") {
            productLink = "/Woodcomforter";
          } else if (product.productName === "Comforter") {
            productLink = "/Comforter";
          } else if (product.productName === "Cantilever Chair") {
            productLink = "/Cantileverchair"; 
          }
          else if (product.productName === "Comforter Set") {
            productLink = "/Comforterset";
          }
          else if (product.productName === "Comforter Sofa") {
            productLink = "/Comfortersofa";
          }
          else if (product.productName === "Flex Sofa") {
            productLink = "/Flexsofa";
          }
          else if (product.productName === "Grey Chair") {
            productLink = "/Greychair";
          }
          else if (product.productName === "White Chair") {
            productLink = "/Whitechair";
          }
          else {productLink = "Product not found"}

          return (
            <div key={product._id} className="border p-4 rounded-lg">
              <Link href={productLink}>
                
                  <img
                    src={product.imageUrl} alt={product} width={160} height={150} className="w-[160px] h-[150px] object-cover cursor-pointer"/>
              
              </Link>
              <h2 className="text-lg font-bold mt-2 text-black">{product.productName}</h2>
              <p className="mt-1 text-black">${product.productPrice}</p>
              <button
          className="w-[157px] h-[45px] font-poppins border border-transparent text-white bg-[rgba(251,46,134,1)] rounded-md shadow hover:bg-[rgba(220,20,90,1)]">{product.addToCartButton}Add to Cart
          </button>
            </div>
          );
          }
        )
      } 
      </div>

      <Footer/>
    </div>
      )
}
  


