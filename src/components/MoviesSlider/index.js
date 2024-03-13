import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    speed: 500,
  }

  const {movies, onClickThumbnail} = props

  return (
    <div className="slider-container">
      {movies &&
        movies.length > 0 && ( // Check if actionMovies is defined and not empty
          <Slider {...settings}>
            {movies.map(movieItem => (
              <MovieItem
                movieItem={movieItem}
                key={movieItem.id}
                onClickThumbnail={onClickThumbnail}
              />
            ))}
          </Slider>
        )}
    </div>
  )
}

export default MoviesSlider
