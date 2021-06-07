import { Container } from "semantic-ui-react";
import { GoogleLogout } from "react-google-login";
import React from "react";

const Logout = () => {
  const logout = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <Container>
        <div className="logout-btn">
          <GoogleLogout
            clientId="184130756619-f9g2a95cr8hfr8r5tcjfpjrdp7763k9g.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          ></GoogleLogout>
        </div>
      </Container>
    </div>
  );
};

export default Logout;
