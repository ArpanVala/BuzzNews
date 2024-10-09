import React, { useEffect, useState } from "react"
import NewsItem from "./NewsItem"
import NewsSlider from "./NewsSlider"

const NewsBoard = ({ category, country }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    console.log("inside...")
    let URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(URL).then(response => response.json()).then(data => setArticles(data.articles));
  }, [category, country])

  console.log("after...")

  return (
    <>
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
    </>
  )
}

export default NewsBoard
