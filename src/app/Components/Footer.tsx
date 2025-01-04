
export default function Footer() {
    return (
      <div className="w-full h-[400px] bg-[rgba(238,239,251,1)] mt-20 mb-10 p-10">
       
        <div className="grid grid-cols-4 gap-10">
            <div>
            <h1 className="text-lg font-bold text-black mb-4">Hecto</h1>
            
        <p className="text-[rgba(183,186,203,1)]">Enter Email Address</p>
        
          <p className="text-[rgba(183,186,203,1)] mt-8">Contact Info:</p>
          <p className="text-[rgba(183,186,203,1)]">17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>
        
          <div>
            <h2 className="text-md font-semibold text-black mb-4">Categories</h2>
            <ul className="space-y-2 text-[rgba(183,186,203,1)]">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-md font-semibold mb-4 text-black">Customer Care</h2>
            <ul className="space-y-2 text-[rgba(183,186,203,1)]">
              <li>My Account</li>
              <li>Discounts</li>
              <li>Returns</li>
              <li>Order History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
         
          <div>
            <h2 className="text-md font-semibold mb-4">Pages</h2>
            <ul className="space-y-2 text-[rgba(183,186,203,1)]">

              <li>Blog</li>
              <li>Browse The Shop</li>
              <li>Category</li>
              <li>Pre Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>Woocommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  