import {Link} from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ListenItem,
  ThumbnaiImage,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewAndDate,
  Dot,
} from './styedComponents'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    pubilshedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/video/${id}`} className="link">
            <ListenItem>
              <ThumbnaiImage src={thumbnailUrl} alt="video thumbnail" />
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <ContentSection>
                <Title color={textColor}>{title}</Title>
                <ChannelName color={textColor}>{name}</ChannelName>
                <ViewAndDate color={textColor}>
                  {viewCount} views <Dot> &#383838; </Dot> {pubilshedAt}
                </ViewAndDate>
              </ContentSection>
            </ListenItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideoCard
