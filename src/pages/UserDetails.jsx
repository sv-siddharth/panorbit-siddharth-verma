import React, { useState,useEffect} from "react";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import {Container} from '../styles/userDetails.style'

export const UserDetailsContext = React.createContext(); 

const UserDetails = ({usersData,setUsersData}) => {
  // const [userData, setUserData] = useState({})

    const { id } = useParams();
  
  useEffect(() => {

  }, [id]);

  // const loadUser = async () => {
  //   const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/${id}`);
  //   const data = await response.json();
    
  // }

  const userDetails = usersData?.find((user) => {
    return Number(user.id) === Number(id);
  });


    // I want to fetch the user data from the API endpoint and set it to the user state but I am getting an CORS error 

//   useEffect(() => {
//     loadUser()
//   },[])

//     const loadUser = async () => {
//         const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/${id}`);
//         const data = await response.json();
//         setUser(data);
//     }
//     console.log(user,'user');
  return (
    <Container>
        <Navbar />
        <UserDetailsContext.Provider value={userDetails}>
            <Outlet />
        </UserDetailsContext.Provider>
    </Container>
  )
}

export default UserDetails