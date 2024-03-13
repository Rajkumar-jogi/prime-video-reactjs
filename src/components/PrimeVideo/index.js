import {Component} from 'react'

import {Popup} from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import MoviesSlider from '../MoviesSlider'

import './index.css'

class PrimeVideo extends Component {
  state = {
    videoUrl: '',
    actionMovieId: 'ACTION',
    comedyMovieId: 'COMEDY',
  }

  getMoviesList = catId => {
    const {moviesList} = this.props
    return moviesList.filter(movie => movie.categoryId === catId)
  }

  onClickThumbnail = url => this.setState({videoUrl: url})

  setVideoUrl = () => this.setState({videoUrl: ''})

  render() {
    const {moviesList} = this.props
    const {videoUrl, comedyMovieId, actionMovieId} = this.state
    return (
      <>
        <div className="app-container">
          <div className="prime-video-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
              alt="prime video"
              className="prime-video-image"
            />
          </div>
          <div className="movies-container">
            <div className="action-movies-container">
              <h1 className="movie-category-heading">Action Movies</h1>
              <MoviesSlider
                movies={this.getMoviesList(actionMovieId)}
                onClickThumbnail={this.onClickThumbnail}
              />
            </div>
            <div className="comedy-movies-container">
              <h1 className="movie-category-heading">Comedy Movies</h1>
              <MoviesSlider
                movies={this.getMoviesList(comedyMovieId)}
                onClickThumbnail={this.onClickThumbnail}
              />
            </div>

            <Popup
              open={!!videoUrl}
              closeOnDocumentClick
              model
              position="center-center"
              onClose={this.setVideoUrl}
            >
              {close => (
                <div className="popup-content">
                  <button
                    type="button"
                    className="close"
                    onClick={close}
                    data-testid="closeButton"
                  >
                    <IoMdClose />
                  </button>

                  <div className="video-player-container ">
                    <ReactPlayer url={videoUrl} controls />
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </>
    )
  }
}

export default PrimeVideo
