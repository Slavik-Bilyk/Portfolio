import styled from "styled-components";

export const Background = styled.div`
 background-color: #4C4030;
 display: flex;
 flex-direction: column;
 align-items: center;
`

export const Title = styled.h1`
    margin-top: 120px;
    font-size: 50px;
    margin-bottom: 120px;

   
  position: relative;
  padding-left: 25px; 

  &::before {
    content: '';
    width: 25px;
    height: 25px;
    background-color: #487efb;
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
  }


`
export const Wrapper = styled.div`
    width: 850px;
   
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Div = styled.div`
 background-color: #0a0a0aea;
 height: 500px;
 width: 800px;
 padding: 70px 70px;
 margin-bottom: 150px;
 position: relative;
 
`

export const Form = styled.form`
 
`;



export const Label = styled.label`
`;

export const Input = styled.input`

`;