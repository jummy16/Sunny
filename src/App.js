import Header from "./Header"
import Info from "./Info";
import Aud from "./Aud";
import Fruit from "./Fruit";
import Client from "./Client";
import Image from "./Image";
import Footer from "./Footer";
import './style.css';

export default function App() {
    return(
        <div>
            <Header />
            <Info />
            <Aud />
            <Fruit />
            <Client />
            <Image />
            <Footer />
        </div>
    )
}