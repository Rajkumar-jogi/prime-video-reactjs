import './index.css'

const MovieItem = props => {
  const {movieItem, onClickThumbnail} = props
  console.log(movieItem)
  const {thumbnailUrl, videoUrl} = movieItem
  const handleVideoUrl = () => onClickThumbnail(videoUrl)
  return (
    <div>
      <button
        type="button"
        className="movie-thumbnail-button"
        onClick={handleVideoUrl}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </div>
  )
}

export default MovieItem
