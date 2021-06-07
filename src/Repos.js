import "./CSS/repos.css";

import {
  Button,
  Card,
  Container,
  Divider,
  Header,
  Icon,
  Image,
  Input,
  Item,
  Statistic,
} from "semantic-ui-react";
import { Fragment, useState } from "react";

import Logout from "./Logout";
import Notfound from "./Notfound";
import React from "react";

const Repos = () => {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("octocat");

  const [notfound, setNotFound] = useState(false);

  async function fetchUrl(uname) {
    let api_url = `https://api.github.com/users/${uname}/repos`;
    const response = await fetch(api_url);
    const json = await response.json();
    const returnedData = JSON.parse(JSON.stringify(json));
    if (returnedData.length === 0) {
      setNotFound(true);
    } else {
      setData(returnedData);
    }
  }

  const submitInput = () => {
    fetchUrl(username);
  };
  if (notfound) {
    return <Notfound isOpen={true}></Notfound>;
  }
  return (
    <Container className="container-style">
      <Logout className="logout-btn"></Logout>
      <br />
      <Header as="h2" icon textAlign="center">
        {data ? (
          <Fragment>
            <Image src={data[0].owner.avatar_url} avatar />
            <Header.Content>{data[0].owner.login}</Header.Content>
          </Fragment>
        ) : (
          <Icon name="users" circular />
        )}
      </Header>
      <div className="item-card">
        <div className="alignment">
          <Input
            placeholder="Search by Username"
            onChange={(e) => setUsername(e.target.value)}
            className="search-input"
          ></Input>
          <br />
          <Button primary onClick={() => submitInput()} className="search-btn">
            Search
          </Button>

          {data
            ? data
                .sort((a, b) => (a.watchers < b.watchers ? 1 : -1))
                .map((item, index) => {
                  return (
                    <Card key={index}>
                      <Item className="item-repo">
                        <Item.Content verticalAlign="middle">
                          <Item.Header className="item-header">
                            {item.name}
                          </Item.Header>
                          <Divider></Divider>
                          <Item.Description className="item-description">
                            {item.description}
                          </Item.Description>
                          <Divider></Divider>
                          <Item.Extra className="item-watchers">
                            <Statistic size="mini">
                              <Statistic.Value>{item.watchers}</Statistic.Value>
                              <Statistic.Label>Watchers</Statistic.Label>
                            </Statistic>
                          </Item.Extra>
                        </Item.Content>
                      </Item>
                    </Card>
                  );
                })
            : ""}
        </div>
      </div>
    </Container>
  );
};

export default Repos;
