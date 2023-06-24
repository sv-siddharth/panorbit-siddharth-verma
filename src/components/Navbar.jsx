import React from "react";
import { useState } from "react";

import {
    Container,
    LinksContainer,
    LinkItem,

} from "../styles/navbar.style";

const Navbar = () => {

    const [selectedDetails, setSelectedDetails] = useState(true)
    const [selectedPost, setSelectedPost] = useState(false)
    const [selectedGallery, setSelectedGallery] = useState(false)
    const [selectedTodo, setSelectedtodo] = useState(false)

    const handleSelectedDetails = () => {
        setSelectedDetails(true)
        setSelectedPost(false)
        setSelectedGallery(false)
        setSelectedtodo(false)
    }
    const handleSelectedPost = () => {
        setSelectedDetails(false)
        setSelectedPost(true)
        setSelectedGallery(false)
        setSelectedtodo(false)
    }
    const handleSelectedGallery = () => {
        setSelectedDetails(false)
        setSelectedPost(false)
        setSelectedGallery(true)
        setSelectedtodo(false)
    }
    const handleSelectedTodo = () => {
        setSelectedtodo(true)
        setSelectedGallery(false)
        setSelectedDetails(false)
        setSelectedPost(false)
    }




    return (
        <Container>
            <LinksContainer>
                <div>
                    <LinkItem to="details">
                        <p onClick={()=>handleSelectedDetails()} style={{color: `${selectedDetails? 'white' : 'gray'}`}}>Profile</p>
                    </LinkItem>
                    <LinkItem to="post">
                        <p onClick={()=>handleSelectedPost()} style={{color: `${selectedPost? 'white' : 'gray'}`}}>Post</p>
                    </LinkItem>
                    <LinkItem to="gallery">
                        <p onClick={()=>handleSelectedGallery()} style={{color: `${selectedGallery? 'white' : 'gray'}`}}>Gallery</p>
                    </LinkItem>
                    <LinkItem to="todo">
                        <p onClick={()=>handleSelectedTodo()} style={{color: `${selectedTodo? 'white' : 'gray'}`}}>ToDo</p>
                    </LinkItem>
                </div>
            </LinksContainer>
        </Container>
    );
};

export default Navbar;
