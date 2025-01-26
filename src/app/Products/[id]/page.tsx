import { client } from "@/sanity/lib/client";
import Navbar from "@/app/Components/Navbar"
import Whitenav from "@/app/Components/Whitenav"
import Footer from "@/app/Components/Footer"

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  const { id: slug } = params;

  // Check if the slug is valid
  if (!slug) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-500">Invalid Product</h1>
        <p className="text-gray-600">No product was found with the provided identifier.</p>
      </div>
    );
  }

  const query = `
    *[_type == "productDetails" && slug.current == $slug][0]{
      productName,
      "slug": slug.current,
      "productImage": productImage.asset->url,
      productPrice,
      description,
      availableColors,
      material,
      careInstructions,
    }
  `;

  // Fetch the product details
  const product  = await client.fetch(query, { slug })
  if (!product) {
    return (
      <div className="p-8 w-full h-auto">
        <h1 className="text-2xl font-bold text-[rgba(26,11,91,1)]">Product not found</h1>
        <p className="text-[rgba(26,11,91,1)]">The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-auto">
      <Navbar/>
            <Whitenav/>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center ml-8 mt-10 px-8 gap-2">
       
        <div>
          <img
            src={product.productImage || "/images/placeholder.jpg"}
            alt={product.productName} width={500} height={650}
            className="w-[500px] h-auto rounded-lg shadow-lg"
          />
        </div>

       
        <div className="items-center mt-10">
          <h1 className="text-3xl font-bold text-[rgba(26,11,91,1)]">{product.productName}</h1>
          <p className="mt-4 text-[rgba(26,11,91,1)] font-bold">Description: {product.description}</p>
          <p className="text-1xl font-bold text-[rgba(255,42,170,1)]">${product.productPrice}</p>
            <p className="text-1xl font-bold text-[rgba(26,11,91,1)]">{product.availableColors}</p>
            <p className="text-1xl font-bold text-[rgba(26,11,91,1)]">{product.material}</p>
            <p className="text-1xl font-bold text-[rgba(26,11,91,1)]">{product.careInstructions}</p>
            </div>
      </div>
      <Footer/>
    </div>
    
  );
}
