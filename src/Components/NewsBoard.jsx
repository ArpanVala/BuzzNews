import React, { useEffect, useState } from "react"
import NewsItem from "./NewsItem"
import Masonry from "react-masonry-css";
import NewsSlider from "./NewsSlider"

const NewsBoard = ({ category, country }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {

    let URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(URL).then(response => response.json()).then(data => setArticles(data.articles));
  }, [category, country])

  return (
    <>
      <div className="container my-4">
        <Masonry
          breakpointCols={{
            default: 4,
            1024: 3,
            768: 2,
            425: 1,
          }}
          className="masonry-grid"
          columnClassName="masonry-grid-column"
        >
          {
            articles.map((news, index) => (
              articles.map((news, index) => (
                <NewsItem key={index} news={news} />
              ))))
          }
        </Masonry>
      </div>
    </>
  )
}

export default NewsBoard
// <section className="container-fluid my-4">
// < div className = "container" >

//   <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4">
//     {articles.map((news, index) => (
//       <div className="col" key={index}>
//         <NewsItem news={news} />
//       </div>
//     ))}

//   </div >
//       </ >
//     </section >