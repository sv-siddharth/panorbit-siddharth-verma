import React from "react";
import {
  Container,
  ImageContainer,
  UserName,
} from "../styles/userAccountCard.style";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyle = styled(Link)`
  text-decoration: none;

  
  `

const UserAccountCard = ({ user }) => {
  return (
    <Container key={user.id}>
      <ImageContainer background={user.profilepicture}></ImageContainer>
      <LinkStyle to={`/user/${user.id}/details`}>
        <UserName>{user.name}</UserName>
      </LinkStyle>
    </Container>
  );
};

export default UserAccountCard;
