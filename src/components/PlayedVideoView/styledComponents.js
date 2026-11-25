import styled from 'styled-components'

export const VideoPlayer = styled.div`
   padding:20px;
`
export const PlayVideoTitle = styled.p`
   font-family:'Roboto';
   font-size:25px;
   color:${props => props.color};
`
export const PlayVideoStatusContainer = styled.div`
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   align-items:center;
`
export const PlayVideoStatus = styled.p`
   font-family:'roboto';
   font-size:13px;
   color:${props => props.color};
`
export const PlayVideoDot = styled.span`
   width:20px;
   height:20px;
   border-radius:50%;
   padding-left:5px;
   padding-right:5px;
`
export const PlaySocialButtonContainer = styled.div`
   display:flex;
   justify-content:flex-start;
   align-items:center;
`
export const BtnContainer = styled.div`
   display:flex;
   background:none;
`
export const ButtonText = styled.button`
   color:#3b82f6;
   margin-left:5px;
   @media screen and (min-width:768px){
      display:none;
   }
`
export const SocialButton = styled.button`
   bacground:none;
   border:none;
   display:flex;
   justify-content:center;
   align-items:center;
`
export const ChannelContainer = styled.div`
   display:flex;
   justify-content:flex-start;
   margin-top:20px;
`
export const ChannelImage = styled.img`
   width:30px;
   height:30px;
   border-radius:50%;
   margin-right:20px;
`
export const ChannelInfo = styled.div`
   display:flex;
   flex-direction:column;
`
export const ChannelName = styled.p`
   font-family:'Roboto';
   font-size:15px;
   color:${props => props.color};
`
export const ChannelSubscribers = styled.p`
   font-family:'Roboto';
   font-size:12px;
   color:${props => props.color};
`
export const ChannelDescription = styled.p`
   font-family:'Roboto';
   font-size:15px;
   color:${props => props.color};
`
