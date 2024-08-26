import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {

  return (
    <div className="flex items-center flex-col ">
      <Navbar/>
      <Hero/>
    </div>
  );
}
