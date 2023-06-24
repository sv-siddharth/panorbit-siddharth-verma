import styled from "styled-components";

export const Container = styled.div`
    padding-top: 20px;
    width: 100%;
    padding-left: 50px;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding-bottom: 20px;
    

        h2{
            color: #545454;

        }

        h3{
            color: #545454;
            font-weight: 500;
        }
`

export const ProfileImage = styled.div`
    height: 35px;
    width: 35px;
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.background});
  border-radius: 50%;
`

export const ProfileDetailsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

        h3{

            &:hover{
                color: darkgray;
                transition: 0.2s;
            }
        }
`

export const BriefDetailsContainer = styled.div`
    display: flex;
    margin-top: 30px;

    h4{
        margin-top: 10px;
        color: #9A9A9A;
        font-size: 18px;
        font-weight: 500;
        width: 169px;
    }
`

export const BriefDetailsLeftContainer = styled.div`
    flex: 0.4;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid lightgray;

    h3{
        margin-top: 10px;
        color: #545454;
        font-size: 22px;
        font-weight: 700;
    }
    
    
    `
export const BriefDetailsRightContainer = styled.div`
flex: 0.6;
padding: 20px;

`

export const BriefDetailsProfilePicture = styled.div`
height: 200px;
width: 200px;
border-radius: 50%;
background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.background});
  border-radius: 50%;
`

export const BriefDetailsProfileWrapper = styled.div`
    display: flex;  
    margin-top: 20px;
    border-bottom: ${(props) => props.border ? "1px solid lightgray" : "none"};
`
export const LabelWrapper = styled.div`
    flex: ${props => props.flex} ;
    p{
        text-align: end;
        margin-bottom: 20px;
        color: #9A9A9A;
        font-weight: 600;
    }
    `
export const LabelValueWrapper = styled.div`
flex: 0.5;


p{
  
    text-align: start;
    margin-bottom: 20px;
    width: 200px;
    padding-left: 10px;
color: #545454;
font-weight: 700;
}

`

export const CoodinatesWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    width: 100%;
    gap: 10px;

    span{
        color: #9A9A9A;
        font-weight: bold;
    }

    p{
        font-weight: bolder;
        font-size: small;
        color: #545454;
        
    }
`