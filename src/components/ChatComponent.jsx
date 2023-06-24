import React,{useState} from 'react'
import {Container,BeforeContainer,ChatIconContainer,UsersChatContainer} from '../styles/chatComponent.style'
import ChatIcon from '../assets/chat.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkContainer = styled.p`
  margin-bottom: 5px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
  
`;
const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  display: flex;
  align-items: center;
  
  gap: 10px;
  span{
    font-size: 14px;
    color: #4A4A4A;

    &:hover{
      color: #D55151;
    }
  }
`;
const ImageCurrentUser = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.background});
  border-radius: 50%;
`;


const ChatComponent = ({userDetails}) => {
    const [showChatWindow, setShowChatWindow] = useState(false)

    const handleChatWindow = () => {
      
        if(showChatWindow){
            setShowChatWindow(false)
        }
        else{
            setShowChatWindow(true)
        }
      console.log(showChatWindow);
    }

    const transitionProperties = {}
  return (
<>
<Container style={transitionProperties} onClick={()=>handleChatWindow()}>
      <BeforeContainer onClick={()=>handleChatWindow()}>
      <ChatIconContainer>
        <img src={ChatIcon} alt="chat" height={30}/>
        <h3>Chat</h3>
      </ChatIconContainer>
      <div>^</div>
      </BeforeContainer>
      {
          showChatWindow? <UsersChatContainer>
            {userDetails.map((user,idx)=>{
              return(
                <LinkContainer key={idx}>
              <LinkStyle to={`/user/${user.id}/details`}>
                <ImageCurrentUser
                  height={28}
                  width={28}
                  background={user.profilepicture}
                ></ImageCurrentUser>
                <span>{user.username}</span>
              </LinkStyle>
            </LinkContainer>
              )
            })}
          </UsersChatContainer>:''
      }
    </Container>
    {/* <div>
    <BeforeContainer onClick={()=>handleChatWindow()}>
      <ChatIconContainer>
        <img src={ChatIcon} alt="chat" height={30}/>
        <h3>Chat</h3>
      </ChatIconContainer>
      <div>^</div>
      </BeforeContainer>
    </div> */}
</>
  )
}

export default ChatComponent