import { useState } from "react"
import MainNavBar from "./Components/MainNavBar"
import NavBar from "./Components/NavBar"
import NewsBoard from "./Components/NewsBoard"
import Hero from "./Components/Hero"
import ExploreTopics from "./Components/ExploreTopics"
import Credits from "./Components/Credits"

const App = () => {
  const [category, setCategory] = useState('general')
  const [country, setCountry] = useState('us')

  return (
    <div>
      {/* <NavBar setCategory={setCategory} setcountry={setCountry} /> */}
      {/* <NewsBoard category={category} country={country} /> */}
      <MainNavBar />
      <Hero />
      <ExploreTopics />
      <Credits />
    </div>
  )
}

export default App
