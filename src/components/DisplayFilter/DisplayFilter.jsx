import { StyledButtonLarge } from "../App/App.styled";

export const DisplayFilter = ({ searchTerm, reset }) => {
  return (
    <>
      <p>Search query: {searchTerm}</p>
      <StyledButtonLarge onClick={reset}>Reset</StyledButtonLarge>
    </>
  );
};
