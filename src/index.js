import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import styled from "@emotion/styled";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

// Styled component
const Card = styled.div`
  width: 550px;
  background: linear-gradient(white, rgba(29, 132, 181, 1));
  border-radius: 5px;
  padding-top: 0.5rem;
`;

const CardBody = () => {
  return (
    <Card>
      <Title />
      <Info />
      <Contact />
    </Card>
  );
};
// Composition II
function Title() {
  return (
    <div>
      <style>
        {`
        .name{
        letter-spacing: 1px;
        color: rgba(19, 46, 50, 1);
        }
        `}
      </style>
      <h2 className="name">Matterholt</h2>
    </div>
  );
}
//Composition Style
function ProfilePic() {
  const profile_img = css`
    background-color: white;
    width: 100px;
    height: 120px;
    border-radius: 50%;
  `;
  return (
    <div
      css={css`
        ${profile_img}
      `}
    />
  );
}
function Info() {
  const base = css`
    color: rgba(10, 34, 57, 1);
    padding: 0.5rem;
    letter-spacing: 0.5px;
  `;
  return (
    <div
      css={css`
        ${base}
        border-top: white solid 1px;
        border-bottom: white solid 1px;
        background-color: rgba(250, 250, 250, 0.3);
        display: flex;
      `}
    >
      <ProfilePic />
      <div>
        <p>Studing and learning all thing front end development.</p>
        <p>Most of me evening are coding and learning the world of web</p>
      </div>
    </div>
  );
}
//Objective Style
function Contact() {
  return (
    <ul
      css={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: "0.1rem",
        paddingBottom: "1rem"
      }}
    >
      <li>
        <a href="#"> Git</a>
      </li>
      <li>
        <a href="#">Twitter</a>
      </li>
      <li>
        <a href="#">website</a>
      </li>
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <CardBody />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
