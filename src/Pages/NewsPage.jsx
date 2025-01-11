import React, { useEffect, useState } from "react"
import NewsItem from "../Components/NewsItem"
import Masonry from "react-masonry-css";
import '../CSS/NewsPage.css'

const NewsPage = ({ category }) => {
    const [articles, setArticles] = useState([])

    useEffect(() => {

        let URL = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(URL).then(response => response.json()).then(data => setArticles(data.articles));
    }, [category])

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

export default NewsPage
