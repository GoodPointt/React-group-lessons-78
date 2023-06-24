import { StyledItem, StyledItemContent } from "./Item.styled";

export const Item = ({
  story: { title, url, author, num_comments, points },
}) => {
  return (
    <StyledItem>
      <StyledItemContent width="40%">
        <a href={url}>{title}</a>
      </StyledItemContent>
      <StyledItemContent width="30%">{author}</StyledItemContent>
      <StyledItemContent width="10%">{num_comments}</StyledItemContent>
      <StyledItemContent  width="10%">{points}</StyledItemContent>
      <StyledItemContent  width="10%">
        <button type="button">Dismiss</button>
      </StyledItemContent>
    </StyledItem>
  );
};
