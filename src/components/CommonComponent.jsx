import React,{useState,useContext} from 'react'
import styled from 'styled-components';
import { GlobalContext } from '../App';
import { UserDetailsContext } from '../pages/UserDetails';

import {
  Container,
  ProfileImage,
  HeaderContainer,
  ProfileDetailsContainer,
} from "../styles/profileDetails.style";

const Wrapper = styled.div`
  display: grid;
 place-items: center;
  height: 90%;

    h1{
      font-size: 80px;
      color: lightgray
    }
`

const CommonComponent = ({heading}) => {
  const userDetails = useContext(UserDetailsContext);
  const [showAccountsCard, setShowAccountsCard] = useState(false);

  const { globalUserData } = useContext(GlobalContext);
  const handleAccountSwitching = () => {
    setShowAccountsCard((preV) => !preV);
  };


  
  return (
   <Container>
     <HeaderContainer>
        <h2>{heading}</h2>
        <ProfileDetailsContainer onClick={() => handleAccountSwitching()}>
          <ProfileImage background={userDetails.profilepicture}></ProfileImage>
          <h3>{userDetails.name}</h3>
          {showAccountsCard && (
            <AccountSwitchingCard currentUserDetails={userDetails} userDetails={globalUserData} />
          )}
        </ProfileDetailsContainer>
      </HeaderContainer>
      <Wrapper>
        <h1>Coming Soon</h1>
      </Wrapper>
   </Container>
  )
}

export default CommonComponent