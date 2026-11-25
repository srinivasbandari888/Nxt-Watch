import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import Header from './Header'

import Navbar from './Navbar'

import FailureView from '../FailureView'

import GamingVideoCard from './GamingVideoCard'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {SiYoutubegaming} from 'react-icons/si'

import {
  GamingContainer,
  GamingVideoTitle,
  GamingVideoTitleContainer,
  GamingText,
  GamingVideosList,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class GamingVideos extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachvideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      apiStatus: apiStatusConstant.failure
    }
  }

  renderLoadingView = () => {
    ;<div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  }

  renderVideoView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideosList>
        {gamingVideos.map(eachVideo => (
          <GamingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </GamingVideosList>
    )
  }

  onRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => {
    ;<FailureView onClick={this.Retry} />
  }

  renderGamingVideoView = () => {
    const {apiStatus} = this.status

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderVideoView()
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

          const bgColor = isDarkTheme ? '#000000' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <>
              <Header />
              <Navbar />
              <GamingContainer data-testid="gaming" bgColor={bgColor}>
                <GamingVideoTitle>
                  <GamingVideoTitleContainer>
                    <SiYoutubegaming size={25} color="#ff0000" />
                  </GamingVideoTitleContainer>
                  <GamingText color="textColor">Gaming</GamingText>
                </GamingVideoTitle>
                {this.renderGamingVideoView()}
              </GamingContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default GamingVideos
