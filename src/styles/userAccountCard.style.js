import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #E5E5E5;
    gap: 10px;
    padding: 10px 10px;
    
    &:hover {
       border-bottom: 1px solid gray;
        transition: 0.4s;
   }
`

export const ImageContainer = styled.div`
     background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.background});
  height: 30px;
  width: 30px;
  border-radius: 50%;
`

export const UserName = styled.h4`
    color: #4B4B4B;
    font-weight: 500;
    font-size: 14px;

        &:hover {
            color: darkgray;
            transition: 0.2s;
        }
`