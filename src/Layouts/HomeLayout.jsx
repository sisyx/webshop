import Home1 from "../components/Home1"
import Home3 from "../components/Home3"
import HomeProduct from "../components/HomeProduct"
import Popular from "../components/Popular"
import Testimonials from "../components/Testimonials"

function HomeLayout() {
    return (
        <>
            <Home1 />
            <HomeProduct />
            <Home3 />
            <Testimonials />
            <Popular />
        </>
    )
}

export default HomeLayout
