import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
   text-decoration:none;
`
export const TrendingListItem = styled.li`
   display:flex;
   flex-direction:column;
   width:100%;
   background:none;
   margin-bottom:20px;
   @media screen and (min-width:768px){
    padding-left:40px;
    flex-direction:row;
   }
`
export const TrendingThumbnailImage = styled.img`
   width:100%;
   @media screen and (min-width:768px){
    width:300px;
   }
`
export const TrendingVideoDetails = styled.div`
   display:flex;
   justify-content:flex-start;
   width:100%;
`
export const TrendingProfileImg = styled.img`
   width:30px;
   height:30px;
   border-radius:50px;
   margin:20px;
   @media screen and (min-width:768px){
    display:none;
   }
`
export const TrendingContainSection = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:flex-start;
   padding:8px;
   @media screen and (min-width:768px){
    margin-left:20px;
   }
`
export const TrendingTitle = styled.h1`
   font-family:'Roboto';
   font-size:15px;
   color:${props => props.color};
`
export const TrendingChannelName = styled.p`
   font-family:'Roboto';
   font-size:12px;
   color:${props => props.color};
`
export const TrendingViewAndDate = styled.p`
   font-family:'Roboto';
   font-size:12px;
   color:${props => props.color};
`
export const TrendingDot = styled.span`
   width:20px;
   height:20px;
   border-radius:50%;
   padding-left:5px;
   padding-right:5px;
`
