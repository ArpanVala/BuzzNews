import newsPlaceholder from '../assets/news-placeholder.png'
const NewsItem = ({ news }) => {
  const { title, author, description, url, urlToImage, publishedAt } = news
  return (
    <div className="card shadow p-1 newsCard" >
      <img src={urlToImage ? urlToImage : newsPlaceholder} height={'140px'} />
      <div className="card-body p-2">
        <h6 className="card-subtitle my-1 text-body-secondary">{publishedAt}</h6>
        <h5 className="card-title text-justify">{title.slice(0, 60) + "..."}</h5>
        <p className="card-text text-justify">{description.slice(0, 50) + "..."}</p>
        <a href={url} className="btn py-1 btn-primary">Read full article</a>
      </div>
    </ div>
  )
}

export default NewsItem