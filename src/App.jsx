import { useState } from "react"
import MainNavBar from "./Components/MainNavBar"
import NavBar from "./Components/NavBar"
import NewsBoard from "./Components/NewsBoard"
import Footer from "./Components/Footer"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ContactPage from "./Pages/ContactPage"
import { Routes, Route } from "react-router-dom"

const App = () => {
  const [category, setCategory] = useState('general')
  const [country, setCountry] = useState('us')

  return (
    <div>
      {/* <NavBar setCategory={setCategory} setcountry={setCountry} /> */}
      {/* <NewsBoard category={category} country={country} /> */}
      <MainNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
