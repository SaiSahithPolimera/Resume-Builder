import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  const [isDownloadActive, setDownloadActive] = useState(false);
  return (
    <div className="flex items-center flex-col ">
      <Navbar isDownloadActive={isDownloadActive} setDownloadActive={setDownloadActive}/>
      <Hero isDownloadActive={isDownloadActive}/>
    </div>
  );
}
