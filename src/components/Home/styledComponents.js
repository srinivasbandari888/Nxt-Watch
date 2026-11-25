import styled from 'styled-components'

export const HomeContainer = styled.div`
   background-color: ${props => props.bgColor};
   min-height:100vh;
   margin-top:60px;
   margin-bottom:60px:
   overflow-y:auto;
   @media screen and (min-width:768px){
    margin-left:250px;
    margin-bottom:0px;
   }
`
export const BannerContainer = styled.div`
   background-image:url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
   height:200px;
   width:100%;
   background-size:cover;
   display: ${props => props.display}
   Justify-content:space-between;
   padding:20px;
`
export const BannerLeftPart = styled.div`
   width:50%;
`
export const BannerImage = styled.img`
   width:80px;
   height:50px;
`
export const BannerText = styled.p`
   font-family:'Roboto';
   font-size:16px;
   color:#000000;
   @media screen and (min-width:768px){
    font-size:20px;
   }
`
export const BannerButton = styled.button`
   font-family:'Roboto';
   font-size:16px;
   color:#000000;
   border:1px solid #000000;
   padding-left:10px;
   padding-right:10px;
   padding-top:5px;
   padding-bottom:5px;
   background:none;
`
export const BannerRightPart = styled.div`
   display:flex;
   Justify-content:flex-end;
`
export const SearchContainer = styled.div`
   display:flex;
   border:1px solid #909090;
   border-radius:5px;
   margin:20px;
   width:60%;
   height:40px;
   @media screen and (min-width:768px){
      width:40%;
   }
`
export const SearchInput = styled.input`
   background:none;
   width:100%;
   padding:5px;
   outline:none;
   border:none;
   color:${props => props.color};
   font-family:'Roboto';
`
export const SearchIconContainer = styled.button`
   display:flex;
   Justify-content:center;
   align-items:center;
   background-color: #909090;
   width:90px;
`
export const BannerCloseButton = styled.button`
   height:25px;
   background:none;
   border:none;
`
