import styled from 'styledComponents'

export const GamingContainer = styled.div`
   background-color:${props => props.bgColor}
   height:100vh;
   margin-top:60px;
   margin-bottom:60px;
   overflow-y:auto;
   @media screen and (min-width:768px){
    margin-left:250px;
    margin-bottom:0px;
   }
`
export const GamingVideoTitle = styled.div`
   display:flex;
   align-items:center;
`
export const GamingVideoTitleContainer = styled.div`
   display:flex;
   justify-content:center;
   align-items:center;
   width:40px;
   height:40px;
   border-radius:5px;
   margin-left:10px;
   margin-right:10px;
   @media screen and (min-width:768px){
    margin-left:40px;
   }
`
export const GamingText = styled.p`
   font-family:'Roboto';
   font-size:25px;
   color:${props => props.color}
   @media screen and (min-width:768px){
    font-size:35px;
   }
`
export const GamingVideosList = styled.ul`
   display:flex;
   flex-direction:row;
   flex-wrap:wrap;
   padding:0px;
   list-style-type:none;
   @media screen and (min-width:768px){
    margin-left:40px;
   }
`
