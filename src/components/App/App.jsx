import React from "react";

import { SearchForm } from "../SearchForm/SearchForm";
import { List } from "../List/List";
import { StyledContainer, StyledTitle } from "./App.styled";


const stories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <StyledContainer>
      <StyledTitle>Hacker Stories</StyledTitle>
       <SearchForm />
      <List stories={stories} />
    </StyledContainer>
  );
}

export default App;
