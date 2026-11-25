import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import ProtectedRouter from './components/ProtectedRouter'

import Login from './components/Login'

import Home from './components/Home'

import VideoDetailView from './components/VideoDetailView'

import TrendingVideos from './components/TrendingVideos'

import GamingVideos from './components/GamingVideos'

import SavedVideo from './components/SavedVideo'

import NotFound from './components/NotFound'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContex'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    savedVideos: [],
    activeTab: 'Home',
    isDarkTheme: false,
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideos: updatedSavedVideos})
  }

  render() {
    const {savedVideos, isDarkTheme, activeTab} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          savedVideos,
          activeTab,
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRouter exact path="/" component={Home} />
          <ProtectedRouter
            exact
            path="/videos/:id"
            component={VideoDetailView}
          />
          <ProtectedRouter exact path="/trending" component={TrendingVideos} />
          <ProtectedRouter exact path="/gaming" component={GamingVideos} />
          <ProtectedRouter exact path="/saved-videos" component={SavedVideo} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
