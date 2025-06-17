import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer"
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";

function App() {
 return (
  <div className="min-h-screen flex flex-col bg-white text-gray-600 text-lg ">
    <div className="p-4">
         <Navbar />
    </div>
 
    <div className="flex-grow p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>

    <Footer />
  </div>
);

}

export default App;
