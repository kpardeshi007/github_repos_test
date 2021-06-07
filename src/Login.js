import "./CSS/login.css";

import { Card, Container, Divider } from "semantic-ui-react";

import { GoogleLogin } from "react-google-login";
import React from "react";
import Repos from "./Repos";
import { useState } from "react";

const Login = () => {
  const [isLogin, setLogin] = useState(false);

  const responseGoogle = (response) => {
    if (response.accessToken) {
      setLogin(true);
    } else {
      alert("something went wrong");
    }
  };

  return (
    <div>
      <Container className="login-container">
        {isLogin ? (
          <Repos></Repos>
        ) : (
          <Card centered className="login-card">
            <Card.Header as="h2" textAlign="center">
              Login
            </Card.Header>
            <Divider></Divider>
            <GoogleLogin
              clientId="184130756619-f9g2a95cr8hfr8r5tcjfpjrdp7763k9g.apps.googleusercontent.com"
              buttonText="Login By Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          </Card>
        )}
      </Container>
    </div>
  );
};

export default Login;
