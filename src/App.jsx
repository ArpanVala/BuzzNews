import { useState } from "react"
import NavBar from "./Components/NavBar"
import NewsBoard from "./Components/NewsBoard"

const App = () => {
  const [category, setCategory] = useState('general')
  const [country, setCountry] = useState('us')

  return (
    <div>
      <NavBar setCategory={setCategory} setcountry={setCountry} />
      <NewsBoard category={category} country={country} />
    </div>
  )
}

export default App
