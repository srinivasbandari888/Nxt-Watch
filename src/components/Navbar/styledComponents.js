import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
   display:flex;
`
export const NavigatorContainer = styled.div`
   display:flex;
   flex-direction:column;
   Justify-content:space-between;
   width:250px;
   height:90%;
   position:fixed;
   top:60px;
   background-color: ${props => props.bgColor};
   @media screen and (max-width:768px){
      display:none;
   }
`
export const NavOptions = styled.ul`
   display:flex;
   flex-direction:column;
   flex-grow:1;
   list-style-type:none;
   padding:0px;
   margin:0px;
`
export const NavLink = styled(Link)`
   text-decoration:none;
`
export const NavLinkContainer = styled.li`
   display:flex;
   flex-direction:row;
   align-item:center;
   background-color: ${props => props.bgColor};
   padding-left:20px;
`
export const NavText = styled.p`
   font-family:'Roboto;
   font-size:18px;
   margin-left:15px;
   color: ${props => props.color};
`
export const ContactInfo = styled.div`
   display:flex;
   flex-direction:column;
   padding-left:20px;
`
export const ContactIcons = styled.div`
   display:flex;
   flex-direction:row;
   align-item:center;
`
export const ContactImage = styled.img`
   height:25px;
   width:25px;
   margin-right:10px;
   border-radius:50px;
`
export const ContactHeading = styled.p`
   font-family:'Roboto;
   font-size:25px;
   font-weight:bold;
   color: ${props => props.color};
`
export const ContactNote = styled.p`
   font-family:'Roboto;
   font-size:18px;
   color: ${props => props.color};
`
export const NavigatorSmallContainer = styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;
   width:100%;
   height:60px;
   padding:10px;
   position:fixed;
   background-color: ${props => props.bgColor};
   @media and screen (min-width:768px){
      display:none;
   }
`
