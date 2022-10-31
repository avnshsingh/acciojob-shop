import Navbar from '../Navbar/Navbar'
import MainSection from '../MainSection/MainSection'
import ProductList from '../Products/ProductList'
import Footer from '../Footer/Footer'

const LandingPage = () => {
    return (
        <div style={{ width: '100%' }}>
            <Navbar />
            <MainSection />
            <ProductList />
            <Footer />
            <footer>
                Made with ❤️ at Acciojob
            </footer>
        </div>
    )
}

export default LandingPage