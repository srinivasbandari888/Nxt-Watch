import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavBar,
  NavigatorContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactIcons,
  ContactImage,
  ContactHeading,
  ContactNote,
  NavigatorSmallContainer,
} from './styledComponents'

class Navbar extends Component {
  renderTabItem = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, changeTab, activeTab} = value
        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const activeTabBg = isDarkTheme ? '#475569' : ' #cbd5e1'

        const onClickHomeTab = () => {
          changeTab('Home')
        }

        const onClickTrendingTab = () => {
          changeTab('Trending')
        }

        const onClickGamingTab = () => {
          changeTab('Gaming')
        }

        const onClickSavedTab = () => {
          changeTab('Saving')
        }

        return (
          <NavBar>
            <NavigatorContainer bgColor={bgColor}>
              <NavOptions>
                <NavLink to="/">
                  <NavLinkContainer
                    key="Home"
                    bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                    onClick={onClickHomeTab}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Home</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/trending">
                  <NavLinkContainer
                    key="Trending"
                    bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                    onClick={onClickTrendingTab}
                  >
                    <HiFire
                      size={30}
                      color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Trending</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/gaming">
                  <NavLinkContainer
                    key="Gaming"
                    bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                    onClick={onClickGamingTab}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Gaming</NavText>
                  </NavLinkContainer>
                </NavLink>

                <NavLink to="/saved-videos">
                  <NavLinkContainer
                    key="saved"
                    bgColor={activeTab === 'saved' ? activeTabBg : 'none'}
                    onClick={onClickGamingTab}
                  >
                    <CgPlayListAdd
                      size={30}
                      color={activeTab === 'saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Saved videos</NavText>
                  </NavLinkContainer>
                </NavLink>
              </NavOptions>

              <ContactInfo>
                <ContactHeading color={textColor}>CONTACT US</ContactHeading>
                <ContactIcons>
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIcons>
                <ContactNote color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactNote>
              </ContactInfo>
            </NavigatorContainer>

            <NavigatorSmallContainer bgColor={bgColor}>
              <NavLink to="/">
                <NavLinkContainer
                  key="Home"
                  bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                  onClick={onClickHomeTab}
                >
                  <AiFillHome
                    size={30}
                    color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Home</NavText>
                </NavLinkContainer>
              </NavLink>

              <NavLink to="/trending">
                <NavLinkContainer
                  key="Trending"
                  bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                  onClick={onClickTrendingTab}
                >
                  <HiFire
                    size={30}
                    color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Trending</NavText>
                </NavLinkContainer>
              </NavLink>

              <NavLink to="/gaming">
                <NavLinkContainer
                  key="Gaming"
                  bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                  onClick={onClickGamingTab}
                >
                  <SiYoutubegaming
                    size={30}
                    color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Gaming</NavText>
                </NavLinkContainer>
              </NavLink>

              <NavLink to="/saved-videos">
                <NavLinkContainer
                  key="saved"
                  bgColor={activeTab === 'saved' ? activeTabBg : 'none'}
                  onClick={onClickGamingTab}
                >
                  <CgPlayListAdd
                    size={30}
                    color={activeTab === 'saved' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Saved videos</NavText>
                </NavLinkContainer>
              </NavLink>
            </NavigatorSmallContainer>
          </NavBar>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return <>{this.renderTabItem()}</>
  }
}
export default Navbar
