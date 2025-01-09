import newsPlaceholder from '../assets/news-placeholder.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const NewsItem = ({ news }) => {
  const { title, author, description, url, urlToImage, publishedAt } = news
  return (
    <div className="card shadow p-1 newsCard block" >
      <img src={urlToImage ? urlToImage : newsPlaceholder} height={'140px'} />
      <div className="card-body p-2">
        <h6 className="card-subtitle my-1 text-body-secondary">{publishedAt.slice(0, 10)}</h6>
        <h5 className="card-title text-justify">{title.slice(0, 60) + "..."}</h5>
        <p className="card-text text-justify">{
          (description !== null ? description.slice(0, 90) + "..." : '[no description provided.]')}</p>
        <a href={url} target='_blank' className="btn py-1 container-fluid">Read article<FontAwesomeIcon icon={faArrowRight} className='ps-2' /></a>
      </div>
    </ div>
  )
}

export default NewsItem