import Navbar from "@/app/Components/Navbar"
import Whitenav from "@/app/Components/Whitenav"
import Hero from "@/app/Components/Hero"
import Footer from "@/app/Components/Footer"
export default function About() {
  
return (
  
    <div className="w-screen min-h-screen bg-white overflow-x-hidden">
      <Navbar/>
  <Whitenav/>
  <Hero/>
      <h1 className="text-[rgba(255,42,170,1)] text-center text-2xl font-bold mt-4">About Us</h1>
      
        
         <p className="text-lg text-center text-gray-700 mt-4">
Welcome to Comfort Creations, your one-stop destination for premium chairs and sofas that 
<br/>
combine style, comfort, and durability.
<br/>
At Comfort Creations, we believe that furniture is more than just a functional necessity. 
<br/>
It is an expression of your personal style and a cornerstone of your homes ambiance. 
<br/>
Thats why we are committed to offering a curated selection of chairs and sofas that cater 
<br/>
to every taste, from modern minimalism to timeless classics.
<br/>
</p>
<h1 className="text-[rgba(255,42,170,1)] text-center text-2xl font-bold mt-4">Why Choose Us?</h1>
<br/>
<p className="text-lg text-center text-gray-700 mt-4 mb-4">
Uncompromising Quality: Every piece of furniture is crafted with care using the finest materials 
<br/>
to ensure long-lasting comfort and style.
<br/>
Diverse Designs: Whether you are looking for a plush recliner, a sleek accent chair, or a 
<br/>
cozy sectional sofa, we have something for everyone.
<br/>
Affordable Luxury: We make premium furniture accessible by offering competitive 
<br/>
prices without compromising on quality.
Sustainability: We care about the planet. Our commitment to eco-friendly materials and processes 
<br/>
ensures that your furniture is as kind to the environment as it is to you.

</p>
<Footer/>
          </div>
)
};

