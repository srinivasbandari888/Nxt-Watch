import styled from 'styled-components'

export const AppContainer = styled.div`
   background-color:#ffffff;
   display:flex;
   Justify-content:center;
   align-items:center;
   height:100vh;
`
export const FormContainer = styled.form`
   display:flex;
   flex-direction:column;
   box-shadow:0px 4px 8px 0px;
   border-radius:8px;
   width:350px;
`
export const LoginLogo = styled.img`
   width:180px;
   align-item:center;
   margin-bottom:15px;
`
export const InputContainer = styled.div`
   width:100%;
   margin-top:15px;
`
export const LoginButton = styled.button`
   background-color:#3b82f6;
   font-family:'Roboto';
   font-size:14px;
   font-weight:500;
   color:#ffffff;
   width:80%;
   border-radius:8px;
   margin-top:15px;
`
export const SubmitError = styled.p`
   font-family:'Roboto';
   font-size:12px;
   font-weight:500;
   color:#ff0b37;
`
export const InputLabel = styled.label`
   font-family:'Roboto';
   font-size:14px;
   font-weight:500;
   color:#475569;
`
export const UserInput = styled.input`
   font-family:'Roboto';
   font-size:14px;
   font-weight:500;
   color:#475569;
   border:1px solid #94a3b8;
   outline:none;
   width:100%;
   border-radius:5px;
   margin-top:5px;
   padding:8px;
`
export const CheckboxContainer = styled.div`
   display:flex;
   flex-direction:row;
   margin:12px;
`
export const Checkbox = styled.input`
   width:15px;
   height:15px;
   margin-right:5px;
`
export const ShowPassword = styled.label`
   font-family:'Roboto';
   font-size:14px;
   font-weight:500;
   color: #1e293;
`
