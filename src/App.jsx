import { useState } from "react"
import MainNavBar from "./Components/MainNavBar"
import NavBar from "./Components/NavBar"
import NewsBoard from "./Components/NewsBoard"
import Footer from "./Components/Footer"
import AboutPage from "./Pages/AboutPage"

const App = () => {
  const [category, setCategory] = useState('general')
  const [country, setCountry] = useState('us')

  return (
    <div>
      {/* <NavBar setCategory={setCategory} setcountry={setCountry} /> */}
      {/* <NewsBoard category={category} country={country} /> */}
      <MainNavBar />
      <AboutPage />
      <Footer />
    </div>
  )
}

export default App
