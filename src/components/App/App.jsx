import React, { useEffect } from "react";

import { SearchForm } from "../SearchForm/SearchForm";
import { List } from "../List/List";
import { StyledContainer, StyledTitle } from "./App.styled";
import { useState } from "react";
import { DisplayFilter } from "../DisplayFilter/DisplayFilter";

function App() {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("searchTerm") || ""
  );
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://hn.algolia.com/api/v1/search?query=${searchTerm}`
        );
        if (res.ok) {
          setIsLoading(false);

          return res.json();
        }
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData()
      .then((res) => {
        localStorage.setItem("searchTerm", searchTerm);
        setStories(res.hits);
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);

  const filteredStories = () =>
    stories.filter(
      (story) =>
        story.title &&
        story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleRemoveStory = (id) =>
    setStories(stories.filter((story) => story.objectID !== id));

  const resetSearchTerm = () => {
    setSearchTerm("");
  };

  return (
    <StyledContainer>
      <StyledTitle>Hacker Stories</StyledTitle>
      <SearchForm setSearchTerm={setSearchTerm} />
      {isError && "Something went wrong"}
      {isLoading && "...loading"}
      {searchTerm && (
        <DisplayFilter searchTerm={searchTerm} reset={resetSearchTerm} />
      )}
      {stories.length && (
        <List
          stories={filteredStories()}
          handleRemoveStory={handleRemoveStory}
        />
      )}
    </StyledContainer>
  );
}

export default App;
