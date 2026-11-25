import {
  FailuredView,
  FailureImg,
  FailureHeading,
  FailurePara,
  FailureButton,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const FailureView = props => {
    const {onRetry} = props
  

  onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDark ? '#f1f5f9' : '#1e293b'
        const noteColor = isDark ? '#e2e8f0' : '#475569'

        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailuredView>
            <FailureImg src={failureImgUrl} alt="failure view" />
            <FailureHeading Color={headingColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara color={noteColor}>
              We are having some trouble to complete your request. <br />
              Please try again.
            </FailurePara>
            <FailureButton type="button" onClick={onClickRetry}>
              Retry
            </FailureButton>
          </FailuredView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default FailureView
