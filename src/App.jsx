import { useState } from "react"
import MainNavBar from "./Components/MainNavBar"
import NavBar from "./Components/NavBar"
import NewsBoard from "./Components/NewsBoard"
import Footer from "./Components/Footer"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ContactPage from "./Pages/ContactPage"
import { Routes, Router, Route, useLocation } from "react-router-dom"
const App = () => {
  const [category, setCategory] = useState('general')
  const [country, setCountry] = useState('us')
  const location = useLocation();

  const renderNavbar = () => {
    if (location.pathname === "/News") {
      return <NavBar setCategory={setCategory} setcountry={setCountry} />;
    }
    return <MainNavBar />;
  };

  return (
    <div>
      {renderNavbar()}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/News" element={<NewsBoard category={category} country={country} />} />
      </Routes>
      <Footer />


      {/* <NavBar setCategory={setCategory} setcountry={setCountry} /> */}
      {/* <NewsBoard category={category} country={country} /> */}
      {/* <MainNavBar /> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<HomePage />} /> */}
      {/* <Route path="/About" element={<AboutPage />} /> */}
      {/* <Route path="/Contact" element={<ContactPage />} /> */}
      {/* </Routes> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App;
