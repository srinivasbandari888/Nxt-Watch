import styled from 'styled-components'

export const VideoCardList = styled.ul`
   list-style-type:none;
   display:flex;
   flex-wrap:wrap;
   justify-content:flex-start;
   padding:0px;
   @media screen and (min-width:768px){
    margin-left:20x;
   }
`
export const NoVideoView = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   background:none;
`
export const NoVideoImage = styled.img`
   width:200px;
   @media screen and (min-width:768px){
      width:450px;
   }
`
export const NoVideoHeading = styled.h1`
   font-family:'Roboto';
   font-size:25px;
   color: ${props => props.color};
`
export const NoVideoNote = styled.p`
   font-family:'roboto';
   font-size:18px;
   color: ${props => props.color};
`
export const RetryButton = styled.button`
   font-family:'roboto';
   font-size:18px;
   color:#ffffff;
   background-color:#4f46e5;
   border:none;
   border-radius:5px;
   padding-left:10px;
   padding-right:10px;
   padding-top:5px;
   padding-bottom:5px
`
