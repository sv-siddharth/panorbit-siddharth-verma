import React, { useContext, useState } from "react";
import { UserDetailsContext } from "../pages/UserDetails";
import AccountSwitchingCard from "./AccountSwitchingCard";
import { GlobalContext } from "../App";

import {
  Container,
  ProfileImage,
  HeaderContainer,
  ProfileDetailsContainer,
  BriefDetailsContainer,
  BriefDetailsLeftContainer,
  BriefDetailsRightContainer,
  BriefDetailsProfilePicture,
  BriefDetailsProfileWrapper,
  LabelWrapper,
  LabelValueWrapper,
  CoodinatesWrapper
} from "../styles/profileDetails.style";
import MapComponent from "./MapComponent";
import ChatComponent from "./ChatComponent";

const ProfileDetails = () => {
  const userDetails = useContext(UserDetailsContext);
  const [showAccountsCard, setShowAccountsCard] = useState(false);

  const { globalUserData } = useContext(GlobalContext);
  const handleAccountSwitching = () => {
    setShowAccountsCard((preV) => !preV);
  };
  
  return (
    <Container>
      <HeaderContainer>
        <h2>Profile</h2>
        <ProfileDetailsContainer onClick={() => handleAccountSwitching()}>
          <ProfileImage background={userDetails.profilepicture}></ProfileImage>
          <h3 style={{cursor: 'pointer'}}>{userDetails.name}</h3>
          {showAccountsCard && (
            <AccountSwitchingCard currentUserDetails={userDetails} userDetails={globalUserData} />
          )}
        </ProfileDetailsContainer>
      </HeaderContainer>
      <BriefDetailsContainer>
        <BriefDetailsLeftContainer>
          <BriefDetailsProfilePicture background={userDetails.profilepicture}></BriefDetailsProfilePicture>
            <h3>{userDetails.name}</h3>
          <BriefDetailsProfileWrapper border={true}>
            <LabelWrapper flex={0.5}>
              <p>Username  :</p>
              <p>e-mail  :</p>
              <p>Phone  :</p>
              <p>Website  :</p>
            </LabelWrapper>
            <LabelValueWrapper flex={0.5}>
              <p>{userDetails.username}</p>
              <p>{userDetails.email}</p>
              <p>{userDetails.phone}</p>
              <p>{userDetails.website}</p>
            </LabelValueWrapper>
          </BriefDetailsProfileWrapper>
          <h4>Company</h4>
          <BriefDetailsProfileWrapper border={false}>
            <LabelWrapper flex={0.5}>
              <p>Name  :</p>
              <p>catchphrase  :</p>
              <br />
              <p>bs  :</p>
             
            </LabelWrapper>
            <LabelValueWrapper flex={0.5}>
              <p>{userDetails.company.name}</p>
              <p>{userDetails.company.catchPhrase}</p>
              <p>{userDetails.company.bs}</p>
              
            </LabelValueWrapper>
          </BriefDetailsProfileWrapper>
        </BriefDetailsLeftContainer>
        <BriefDetailsRightContainer>
            <h4>Address :</h4>
            <BriefDetailsProfileWrapper border={false}>
            <LabelWrapper flex={0.2}>
              <p>Street  :</p>
              <p>Suite  :</p>
              <p>City  :</p>
              <p>Zipcode  :</p>
            </LabelWrapper>
            <LabelValueWrapper flex={0.8}>
              <p>{userDetails?.address?.street}</p>
              <p>{userDetails?.address?.suite}</p>
              <p>{userDetails?.address?.city}</p>
              <p>{userDetails?.address?.zipcode}</p>
            </LabelValueWrapper>
          </BriefDetailsProfileWrapper>
         <div style={{height:'300px', width: '500px'}}>
         <MapComponent userDetails={userDetails}/>
         <CoodinatesWrapper>
          <p><span>Lat :</span> {userDetails.address.geo.lat}</p>
          <p><span>Long :</span> {userDetails.address.geo.lng}</p>
         </CoodinatesWrapper>
         </div>
         <ChatComponent userDetails={globalUserData} />
        </BriefDetailsRightContainer>
      </BriefDetailsContainer>
    </Container>
  );
};

export default ProfileDetails;
