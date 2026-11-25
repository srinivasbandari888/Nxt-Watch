import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import PopUp from 'reactjs-popup'

import {BsBrightnessHigh} from 'react-icons/bs'

import {BsMoon} from 'react-icons/bs'

import {FiLogOut} from 'react-icons/fi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavBarContainer,
  LogoLink,
  HeaderLogo,
  ActionContainer,
  ThemeButton,
  ProfileTheme,
  LogoutButton,
  ModalContainer,
  ButtonContainer,
  CloseButton,
  ConfirmButton,
  LogoutIconButton,
  ModalDesc,
} from './styledComponents'

const Header = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const bgColor = isDarkTheme ? '#ffffff' : '##00306e'
      const color = isDarkTheme ? '#231f20' : '#f1f5f9'

      onChangeTheme = () => {
        toggleTheme()
      }

      onClickLogout = () => {
        const {history} = props
        Cookies.get('jwt_token')
        history.replace('/login')
      }

      return (
        <NavBarContainer bgColor={bgColor}>
          <LogoLink to="/">
            <HeaderLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <ActionContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onChange={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <ProfileTheme
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutButton type="button" bgColor={bgColor} color={color}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer>
                  <ModalDesc>Are you sure you want to logout?</ModalDesc>
                  <ButtonContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </ModalContainer>
              )}
            </Popup>
            <PopUp
              modal
              trigger={
                <LogoutIconButton type="button">
                  <FiLogOut size={25} color={color} />
                </LogoutIconButton>
              }
            >
              {close => (
                <MainContainer>
                  <ModalDesc>Are you sure you want to logout?</ModalDesc>
                  <ButtonContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </MainContainer>
              )}
            </PopUp>
          </ActionContainer>
        </NavBarContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)
export default withRouter(Header)
