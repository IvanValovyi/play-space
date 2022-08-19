import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer"

import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const DefaultLayout = ({children, className}) => {
    const pathName = useLocation().pathname

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [pathName])

    return(
        <>
            <Header/>
                <main className={"main_content " + className}>{children}</main>
            <Footer/>
        </>
    )
}

export default DefaultLayout