import Image from "next/image"
import Searchbox from "@/app/assets/Searchbox.png"
import Link from "next/link"
import cart from "@/app/assets/cart.png"
import heart from "@/app/assets/heart.png"
export default function NavbarWhite() {
    return (
      <div>
        <nav className="flex flex-wrap justify-between items-center w-full px-4 md:px-8 py-4 bg-white border-b border-gray-300">
        
          <div className="text-black font-bold text-2xl md:text-3xl font-integral">
            Hecto
          </div>
  
         
          <ul className="hidden md:flex gap-6 text-sm md:text-lg font-satoshi text-black">
          <li> <Link href="/" className="cursor-pointer hover:text-gray-600" aria-current="page">Home</Link></li>
            <li> <Link href="/Pages" className="cursor-pointer hover:text-gray-600" aria-current="page">Pages</Link></li>
            
            <li> <Link href="/Blog" className="cursor-pointer hover:text-gray-600" aria-current="page">Blog</Link></li>
            <li> <Link href="/Shop" className="cursor-pointer hover:text-gray-600" aria-current="page">Shop</Link></li>
            <li> <Link href="/About" className="cursor-pointer hover:text-gray-600" aria-current="page">About</Link></li>
          </ul>
  
    
        <div className="flex justify-between items-center gap-6">
          <div className="relative w-[200px] h-[40px]">
            <Image
              src={Searchbox}
              alt="Searchbox"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
              <div>
            <Image src={heart} alt="heart" width={24} height={24}
              className="w-6 md:w-8 h-6 md:h-8 cursor-pointer"/>
              </div>
              <div>
            <Image src={cart} alt="Cart" width={24} height={24} className="w-6 md:w-8 h-6 md:h-8 cursor-pointer"
            />
          </div>
          </div>
          </nav>
          </div>
          
           
    );
  }
  