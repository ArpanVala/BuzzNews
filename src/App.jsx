import { useState } from "react"
import MainNavBar from "./Components/MainNavBar"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ContactPage from "./Pages/ContactPage"
import NewsPage from "./Pages/NewsPage"
import { Routes, Router, Route, useLocation } from "react-router-dom"
import PageNotFound from "./Pages/PageNotFound"
const App = () => {
  const [category, setCategory] = useState('general')
  const location = useLocation();

  const renderNavbar = () => {
    if (location.pathname === "/News") {
      return <NavBar setCategory={setCategory} />;
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
        <Route path="/News" element={<NewsPage category={category} />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
