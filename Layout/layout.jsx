import React from "react"

import Navbar from "@/components/Navbar"
import MobileNavbar from "@/components/MobileNavbar"

function Layout({ children }) {
    return (
        <div>

            <Navbar />
            <MobileNavbar />

            <div>
                {children}
            </div>

        </div>
    )
}

export default Layout