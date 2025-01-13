import newsPlaceholder from '../assets/img/news-placeholder.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const NewsItem = ({ news }) => {
  // const { title, description, url, urlToImage, publishedAt } = news
  const { title, description, link, image_url, pubDate } = news
  return (
    <div className="card shadow p-1 newsCard block" onClick={() => window.open(link)}>
      <img src={image_url ? image_url : newsPlaceholder} height={'140px'} />
      <div className="card-body p-2">
        <h6 className="card-subtitle my-1 text-body-secondary">{pubDate.slice(0, 10)}</h6>
        <h5 className="card-title text-justify">{title}</h5>
        <p className="card-text text-justify">{
          (description !== null ? description.slice(0, 90) + "..." : '[no description provided.]')}</p>
        <a href={link} target='_blank' className="btn py-1 container-fluid">Read article<FontAwesomeIcon icon={faArrowRight} className='ps-2' /></a>
      </div>
    </ div>
  )
}

export default NewsItem