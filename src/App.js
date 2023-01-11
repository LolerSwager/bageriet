import logo from "./Assets/images/logo.svg"
import "./Assets/css/App.css"
import Footer from "./Components/Footer"

export default function App() {
    return (
        <>
            <h1>hej med dig</h1>
            <img src={logo} />
            <Footer/>
        </>
    )
}
