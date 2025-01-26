"use client"
import Navbar from "../Components/Navbar"
import Whitenav from "../Components/Whitenav"
import Shopl from "@/app/Components/Shopl"
import Footer from "@/app/Components/Footer"


export default function Shop () {
    return (
    <div className="h-screen w-screen bg-white">

<Navbar/>
<Whitenav/>
<Shopl/>
<Footer/>
    </div>
    )
}
