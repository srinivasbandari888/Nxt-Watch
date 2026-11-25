import styled from 'styled-components'

export const FailuredView = styled.div`
   display:flex;
   flex-direction:column;
   Justify-content:center;
   align-items:center;
   background:none;
`
export const FailureImg = styled.img`
   width:200px;
   @media screen and (min-width:768px){
    width:400px;
   }
`
export default FailureHeading = styled.h1`
   font-family:'Roboto';
   font-size:25px;
   color: ${props => props.color};
   text-align:center;
`
export const FailurePara = styled.p`
   font-family:'Roboto';
   font-size:18px;
   color: ${props => props.color};
   text-align:center;
`
export const FailureButton = styled.button`
   font-family:'Roboto';
   font-size:18px;
   color: white;
   text-align:center;
   background-color: #4f46e5;
   border-radius:6px;
   border:none;
   padding-left:10px;
   padding-right:10px;
   padding-top:5px;
   padding-bottom:5px;
`
