import React, { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    let URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(URL).then(response => response.json()).then(data => setArticles(data.articles));
  }, [])

  return (
    <section className="container-fluid my-4">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4">

          {articles.map((news, index) => (
            <div className="col" key={index}>
              <NewsItem news={news} />
            </div>
          ))}

        </div>
      </div>
    </section >

  )
}

export default NewsBoard
