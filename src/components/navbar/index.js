import React from 'react'
// import { Link } from 'react-router-dom';
import {NavbarSection,Logo,LogoText,UlList,ListItem,Anchor,MyLink} from  "./navbar.js";



const Navbar = () => {
    return (

        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                <UlList>
                    <ListItem ><MyLink  to="/">Home</MyLink></ListItem>
                    <ListItem ><Anchor to="#">Work</Anchor></ListItem>
                    <ListItem ><Anchor to="#">Portfolio</Anchor></ListItem>
                    <ListItem ><Anchor to="#">Resume</Anchor></ListItem>
                    <ListItem ><Anchor to="#">About</Anchor></ListItem>
                    <ListItem ><MyLink  to="/contact">Contact</MyLink></ListItem>
                </UlList>

            </div>
            
        </NavbarSection>
    )
}

export default Navbar
