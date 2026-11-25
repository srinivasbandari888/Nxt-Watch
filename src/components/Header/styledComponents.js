import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBarContainer = styled.nav`
   background-color: ${props => props.bgColor};
   display:flex;
   justify-content:space-between;
   align-items:center;
   position:fixed;
   top:0;
   padding:10px;
   height:60px;
   width:100%;
   @media screen and (min-width:768px){
    padding-left:30px;
    padding-right:30px;
   }
`
export const LogoLink = styled(Link)`
   text-decorator:none;
`
export const HeaderLogo = styled.img`
   width:80px;
   height:30px;
   @media screen and (min-width:768px){
    width:100px;
   height:40px;
   }
`
export const ActionContainer = styled.div`
   display:flex;
   Justify-content:space-around;
   align-items:center;
`
export const ThemeButton = styled.button`
   background:none;
   border:none;
   margin-right:10px;
`
export const ProfileTheme = styled.img`
   width:30px;
   height:30px;
   margin-right:10px;
`
export const LogoutButton = styled.button`
  font-family:'Roboto';
  font-size:16px;
  border:1px solid;
  padding-left:10px;
  padding-right:10px;
  padding-bottom:5px;
  border-radius:5px;
  margin-left:6px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-color: ${props => props.color};
  @media screen and (min-width: 768px){
   display:none;
  }
`
export const ModalContainer = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   height:150px;
   width:250px;
   padding:20px;
   background-color:#f4f4f4;
   border-radius:10px;
   @media screen and (min-width:768px){
      height:200px;
      width:400px;
   }
`
export const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const CloseButton = styled.button`
   background-color:transparent;
   font-family:'roboto;
   font-size:12px;
   font-weight:bold;
   color:grey;
   border:1px solid grey;
   padding:8px;
   padding-left:12px;
   padding-right:12px;
   margin:12px;
   outline:none;
   curser:pointer;
   border-radius:6px;
   @media screen and (min-width:768px){
      font-size:15px;
      padding:15px;
      padding-left:20px;
      padding-right:20px;
   }
`
export const ConfirmButton = styled.button`
   background-color:#3b82f6;
   font-family:'Roboto;
   font-size:12px;
   font-weight:bold;
   color:white;
   border:1px solid #3b82f6;
   padding:8px;
   padding-left:12px;
   padding-right:12px;
   margin:12px;
   outline:none;
   curser:pointer;
   border-radius:6px;
   @media screen and (min-width:768px){
      font-size:15px;
      padding:15px;
      padding-left:20px;
      padding-right:20px;
   }
`
export const LogoutIconButton = styled.button`
   background:none;
   border:none;
   @media screen and (min-width: 768px){
      display:none;
   }
`
export const ModalDesc = styled.p`
   font-family:'Roboto;
   font-size:12px;
   color:#00306e;
   text-align:center;
   margin:10px;
   @media screen and (min-width:768px){
      font-size:20px;
   }
`
