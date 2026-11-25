import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
   text-decoration:none;
`
export const GamingListItem = styled.ul`
   display:flex;
   flex-direction:column;
   backgroung:none;
   width:100%;
   @media screen and (min-width:768px){
      width:280px;
      margin-right:20px;
   }
`
export const GamingThumbnailImg = styled.img`
   width:100vw;
   height:300px;
   align-self:center;
   @media screen and (min-width:768px){
      width:280px;
   }
`
export const GamingContentSection = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   padding:8px;
`
export const GamingText = styled.p`
   font-family:'Roboto';
   font-size:15px;
   color:${props => props.color};
   margin-bottom:0px;
`
export const GamingViewAndDate = styled.p`
   font-family:'Roboto';
   font-size:12px;
   color:${props => props.color};
`
