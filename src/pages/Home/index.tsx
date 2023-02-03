import About from "../../components/about";
import NextTravelsCard from "../../components/card/nextTravelsCard";
import Navbar from "../../components/navbar";

export default function Index() {
    return (
        <div>
            <Navbar />
            <About />
            <NextTravelsCard />
        </div>
    )
}