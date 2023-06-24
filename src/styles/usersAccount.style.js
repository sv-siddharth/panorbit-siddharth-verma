import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.background});
  height: 100vh;
`

export const UserAccountContainer = styled.div`
width: 500px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border-radius: 22px;
padding-bottom: 16px;
background-color: white;
`
export const UserAccountHeading = styled.h3`
   background-color: #F6F6F6;
   color: #6E6E6E;
   width: inherit;
   text-align: center;
   padding: 27px 0px;
   border-top-left-radius: 22px;
border-top-right-radius: 22px;
`


export const UserAccountCardContainer = styled.div`
background-color: #FFFFFF;
padding: 10px 30px;
overflow-y: scroll;
height: 300px;
border-radius: 20px;
::-webkit-scrollbar-track
{
	border: none;
	background-color: white;
    
}

::-webkit-scrollbar
{
    padding-right: 10px;
	width: 7px;
	background-color: white;
  
}

::-webkit-scrollbar-thumb
{
    border-radius: 8px;
	background-color: lightgray;	
}
`