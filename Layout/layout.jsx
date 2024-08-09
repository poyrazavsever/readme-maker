import React from "react"

import Navbar from "@/components/Navbar"
import MobileNavbar from "@/components/MobileNavbar"
import Footer from "@/components/Footer"
function Layout({ children }) {
    return (
        <div>

            <Navbar />
            <MobileNavbar />

            <div>
                {children}
            </div>

            <Footer />

        </div>
    )
}

export default Layout