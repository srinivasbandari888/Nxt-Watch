import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import Header from '../Header'

import Navbar from '../Navbar'

import FailureView from '../FailureView'

import VideoCard from '../VideoCard'

import {HiFire} from 'react-icons/hi'

import {
  TrendingContainer,
  TrendingVideoTitle,
  TitleIconContainer,
  TrendingText,
  TrendingVideosView,
} from './styled-components'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class TrendingVideos extends Component {
  state = {
    trendingVideo: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getTrendingVideo()
  }

  getTrendingVideo = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => {
        id: eachVideo.id
        title: eachVideo.title
        thumbnailUrl: eachVideo.thumbnail_url
        viewCount: eachVideo.view_count
        publishedArt: eachVideo.published_art
        name: eachVideo.channel.name
        profileImageUrl: eachVideo.channel.profilr_image_url
      })
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderLoadingView = () => {
    ;<div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  }

  onRetry = () => {
    this.getTrendingVideo()
  }

  renderFailureView = () => {
    ;<FailureView onClick={this.onRetry} />
  }

  renderVideosView = () => {
    const {trendingVideo} = this.state
    return (
      <TrendingVideosView>
        {trendingVideo.map(eachVideo => (
          <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideosView>
    )
  }

  renderTrendingView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderVideosView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <div data-testid="trending">
              <Header />
              <Navbar />
              <TrendingContainer
                data-testid="trending"
                style={{background: bgColor}}
                onClick={this.onRetry}
              >
                <TrendingVideoTitle>
                  <TitleIconContainer>
                    <HiFire size={25} color="#ff0000" />
                  </TitleIconContainer>
                  <TrendingText color={textColor}>Trending</TrendingText>
                </TrendingVideoTitle>
                {this.renderTrendingView()}
              </TrendingContainer>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default TrendingVideos
