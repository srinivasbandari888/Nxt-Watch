import styled from 'styled-components'

export const ListenItem = styled.li`
   background:none;
   display:flex;
   flex-direction:column;
   align-self:center;
   width:100%;
   @media screen and (min-width:768px){
    width:280px;
    margin-right:20px;
   }
`
export const ThumbnaiImage = styled.img`
   width:100%;
`
export const ProfileImage = styled.img`
   width:30%;
   height:30%;
   border-radius:50px;
   margin:20px;
`
export const ContentSection = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:flex-start;
   padding:8px;
`
export const Title = styled.p`
   font-family:'roboto':
   font-size:15px;
   color: ${props => props.color};
`
export const ChannelName = styled.p`
   font-family:'Roboto':
   font-size:13px;
   color: ${props => props.color};
`
export const ViewAndDate = styled.p`
   font-family:'Roboto':
   font-size:13px;
   color: ${props => props.color};
`
export const Dot = styled.span`
   width:20px;
   height:20px;
   border-radius:50%;
   padding-left:5px;
   padding-right:5px;
`
