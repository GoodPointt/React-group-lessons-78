import { useState } from "react";
import { StyledButtonLarge } from "../App/App.styled";
import { StyledForm, StyledInput, StyledLabel } from "./SearchForm.styled";

export const SearchForm = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm(inputValue)
    setInputValue('')
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="search">Search: </StyledLabel>
      <StyledInput onChange={handleChange} value={inputValue} name='input' id="search" type="text" />
      <StyledButtonLarge type="submit">Submit</StyledButtonLarge>
    </StyledForm>
  );
};
