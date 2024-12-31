import { useState } from "react"
import MainNavBar from "./Components/MainNavBar"
import NavBar from "./Components/NavBar"
import NewsBoard from "./Components/NewsBoard"
import Footer from "./Components/Footer"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ContactPage from "./Pages/ContactPage"

const App = () => {
  const [category, setCategory] = useState('general')
  const [country, setCountry] = useState('us')

  return (
    <div>
      {/* <NavBar setCategory={setCategory} setcountry={setCountry} /> */}
      {/* <NewsBoard category={category} country={country} /> */}
      <MainNavBar />
      {/* <HomePage /> */}
      {/* <AboutPage /> */}
      <ContactPage />
      <Footer />
    </div>
  )
}

export default App
