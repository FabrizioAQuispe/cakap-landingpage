import Image from "next/image";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";

export default function Main() {
  return (
    <div className="bg-fondo min-h-screen bg-no-repeat bg-cover">
    <Navbar/>
    <Home/>
    <Services/>
    </div>
  );
}
