import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import Header from './Header'

import Navbar from './Navbar'

import {
  NotFoundContainer,
  NotFoundView,
  NotFoundImg,
  NotFoundHeading,
  NotFoundNote,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f1f1' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const notFoundImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <>
          <Header />
          <Navbar />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundView>
              <NotFoundImg src={notFoundImg} alt="not found" />
              <NotFoundHeading heading={headingColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundNote noteColor={noteColor}>
                We are sorry, the page you requested could not be found
              </NotFoundNote>
            </NotFoundView>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default NotFound
