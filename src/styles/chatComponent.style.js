import styled from "styled-components";

export const Container = styled.div`
   border: 1px solid #2C65C8;
   position: absolute;
   right: 16%;
    bottom: 0;
    border-top-left-radius: 13px;
border-top-right-radius: 13px;
    width: 250px;
    `

export const BeforeContainer = styled.div`
border-top-left-radius: 13px;
border-top-right-radius: 13px;
    background-color: #2C65C8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 10px;
    color: white;
`

export const ChatIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const UsersChatContainer = styled.div`
background-color: white;
padding: 10px 30px;
overflow-y: scroll;
height: 200px;

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