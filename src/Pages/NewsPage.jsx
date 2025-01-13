import React, { useEffect, useState } from "react"
import NewsItem from "../Components/NewsItem"
import Masonry from "react-masonry-css";
import '../CSS/NewsPage.css'

const NewsPage = ({ category }) => {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_6522158b13e3ba0d370151e0e195f914d516f');
                // `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setArticles(data.results || []); // Ensure articles is defined
                console.log(data)
            } catch (err) {
                console.error("Error fetching news:", err);
                setError(err.message);
            }
        };

        fetchNews();

        // let URL = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        // fetch(URL).then(response => response.json()).then(data => setArticles(data.articles));
    }, [category])
    if (error) {
        return <div className="container-fluid">
            <div className="container">
                <div className="row my-5 text-center">
                    <div className="col-12">
                        <i className="pe-2 fa-solid fa-triangle-exclamation" />
                        Error: {error}
                    </div>
                </div>
            </div>
        </div>;
    }
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
