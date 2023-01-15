import NewsSection from "../Components/NewsSection"
import Footer from "../Components/Footer"
import Header from "../Components/header"
import MailingNews from "../Components/MailingNews"
import ProductSection from "../Components/ProductSection"

export default function Home() {
    return (
        <>
            <Header />
            <NewsSection />
            <MailingNews />
            <ProductSection />
            <Footer />
        </>
    )
}
