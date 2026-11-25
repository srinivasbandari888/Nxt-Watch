import {
  VideoCardList,
  NoVideoView,
  NoVideoImage,
  NoVideoHeading,
  NoVideoNote,
  RetryButton,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import HomeVideoCard from './HomeVideoCard'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? ' #e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <VideoCardList>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard key={eachVideo.id} video={eachVideo} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideoView>
            <NoVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideoHeading textColor={textColor}>
              No Search results found
            </NoVideoHeading>
            <NoVideoNote noteColor={noteColor}>
              Try different keywords or remove search filter
            </NoVideoNote>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </NoVideoView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideos
