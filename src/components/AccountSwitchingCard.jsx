import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserDetailsContext } from "../pages/UserDetails";

const Container = styled.div`
  position: fixed;
  top: 12%;
  right: 2%;
  background-color: white;
  border-radius: 24px;
 box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 10px 20px;
  z-index: 10;
  width: 300px;

  h4 {
    text-align: center;
    margin-bottom: 10px;
  }
`;
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
  padding-left: 10px;
  gap: 10px;
  span{
    font-size: 14px;
    color: #4A4A4A;

    &:hover{
      color: #D55151;
    }
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
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

export const LinkWrapper = styled.div`
  margin-top: 25px;
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
`;



export const SignOutButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
`

export const SignOutButton = styled.button`
  padding: 9px 17px;
  font-weight: bold;
  background-color: #D55151;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: none;
  text-decoration: none;
  margin-top: 10px;
  border-radius: 21px;
  color: white;
  cursor: pointer;

  &:hover{
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`
const OtherAcccountHeading = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #3e3d3d;
`

const UserEmailText = styled.p`
  text-align: center;
  color: #b0afaf;
  font-size: small;
  
`
//`/user/${user.id}/details`

const AccountSwitchingCard = ({ userDetails, currentUserDetails }) => {
  return (
    <Container>
      {/* <h4>Account Switching</h4> */}
      <ImageContainer>
        <ImageCurrentUser
          height={45}
          width={45}
          background={currentUserDetails.profilepicture}
        ></ImageCurrentUser>
      </ImageContainer>
      <h3 style={{textAlign:'center'}}>{currentUserDetails?.username}</h3>
      <h2 style={{textAlign:'center'}}>{currentUserDetails?.name}</h2>
      <UserEmailText>{currentUserDetails.email}</UserEmailText>
      <div>
        <SignOutButtonLink to='/'>
          <SignOutButton>SIGN OUT</SignOutButton>
        </SignOutButtonLink>
      </div>
        <OtherAcccountHeading style={{fontWeight:'bold'}}>OTHER ACCOUNTS</OtherAcccountHeading>
      <LinkWrapper>
        {userDetails?.map((user, idx) => {
          return (
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
          );
        })}
      </LinkWrapper>
    </Container>
  );
};

export default AccountSwitchingCard;
