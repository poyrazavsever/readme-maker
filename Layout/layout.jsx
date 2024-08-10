import React, {useState} from "react"

import Navbar from "@/components/Navbar"
import MobileNavbar from "@/components/MobileNavbar"
import Footer from "@/components/Footer"
import classNames from "classnames"
function Layout({ children }) {

    const [isDark, setIsDark] = useState(false)

    return (
        <div className={classNames({
            "dark bg-fourth" : isDark,
            "bg-primary" : !isDark,
        })}>

            <Navbar setIsDark={setIsDark} isDark={isDark}/>
            <MobileNavbar setIsDark={setIsDark} isDark={isDark}/>

            <div>
                {children}
            </div>

            <Footer />

        </div>
    )
}

export default Layout