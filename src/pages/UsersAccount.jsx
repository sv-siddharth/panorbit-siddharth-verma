import React, { useState, useEffect } from "react";
import {
  Container,
  UserAccountContainer,
  UserAccountCardContainer,
  UserAccountHeading
} from "../styles/usersAccount.style";
import backgroundImage from "../assets/bg.jpg";
import UserAccountCard from "../components/UserAccountCard";

const UsersAccount = ({usersData,setUsersData}) => {
//   const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUsersData();
  }, []);

  const loadUsersData = async () => {
    setLoading(true);
    const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}`);
    const data = await response.json();
    setUsersData(data.users);
    setLoading(false);
  };
  
  return (
    <Container background={backgroundImage}>
      <UserAccountContainer>
        <UserAccountHeading>
          Select an account
        </UserAccountHeading>
        <UserAccountCardContainer>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            usersData.map((user) => {
              return <UserAccountCard key={user.id} user={user} />;
            })
          )}
        </UserAccountCardContainer>
      </UserAccountContainer>
    </Container>
  );
};

export default UsersAccount;
