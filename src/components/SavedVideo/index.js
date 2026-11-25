import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import Header from './Header'

import Navbar from './Navbar'

import {CgPlayListAdd} from 'react-icons/cg'

import {
  SavedContainer,
  SavedVideoTitle,
  SavedTitleIconContainer,
  SavedText,
  SavedVideoList,
  NoSavedVideosView,
  NoSavedVideosImg,
  NoSavedVideoHeading,
  NoSavedVideoNote,
} from './styledComponents'

const SavedVideo = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <Navbar />
          <SavedContainer bgColor={bgColor} data-testid="savedVideos">
            <SavedVideoTitle>
              <SavedTitleIconContainer>
                <CgPlayListAdd size={25} color="#ff0000" />
              </SavedTitleIconContainer>
              <SavedText color={textColor}>Saved Videos</SavedText>
            </SavedVideoTitle>
            {savedVideos.length > 0 ? (
              <SavedVideoList>
                {savedVideos.map(eachVideos => (
                  <VideoCard key={eachVideos.id} videoDetails={eachVideos} />
                ))}
              </SavedVideoList>
            ) : (
              <NoSavedVideosView>
                <NoSavedVideosImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideoHeading headingcolor={headingColor}>
                  No saved videos found
                </NoSavedVideoHeading>
                <NoSavedVideoNote noteColor={noteColor}>
                  You can save your videos while watching them
                </NoSavedVideoNote>
              </NoSavedVideosView>
            )}
          </SavedContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default SavedVideo
