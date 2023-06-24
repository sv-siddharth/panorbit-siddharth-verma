import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    flex: 0.17;
    background: rgb(58,89,200);
background: linear-gradient(346deg, rgba(94,59,200,1) 0%, rgba(58,89,200,1) 100%);
padding: 0px 30px;
border-radius: 20px;
`
export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;

`

export const LinkItem = styled(Link)`
    text-decoration: none;
    color: white;
   
    width: 90%;

    p{
        border-bottom: 1px solid lightgray;
        width: 220px;
        padding: 13px 0px;

        &:hover {
            border-bottom: 1px solid white;  }
    }
`


