import './CSS/header.css';

import { Container, Header } from "semantic-ui-react";

import React from "react";

const Header_Bar = () => {
 
  return (
      <Container>
        <Header as='h1' icon textAlign='center' className="header-style">
                    <Header.Content>Github Repos</Header.Content>
            </Header>
            
      </Container>
  );
};

export default Header_Bar;
