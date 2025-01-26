import Image from "next/image"
import Searchbox from "@/app/assets/Searchbox.png"
import Link from "next/link"
import cart from "@/app/assets/cart.png"
import heart from "@/app/assets/heart.png"
export default function NavbarWhite() {
    return (
      <div>
        <nav className="flex flex-wrap justify-between items-center w-full px-2 md:px-4 py-4 bg-white border-b border-gray-300">
        
          <Link href="/">
          <div className="text-black font-bold text-2xl md:text-3xl font-integral">
            Hecto
          </div>
          </Link>
  
         
          <ul className="hidden md:flex gap-6 text-sm md:text-lg font-satoshi text-black">
          <li> <Link href="/" className="cursor-pointer hover:text-gray-600" aria-current="page">Home</Link></li>
            <li> <Link href="/Products" className="cursor-pointer hover:text-gray-600" aria-current="page">Products</Link></li>
            
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
                <Link href="/Cart">
            <Image src={cart} alt="Cart" width={24} height={24} className="w-6 md:w-8 h-6 md:h-8 cursor-pointer"
            />
            </Link>
          </div>
          </div>
          </nav>
          </div>
          
           
    );
  }
  