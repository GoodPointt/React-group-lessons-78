import { StyledButtonSmall } from "../../App/App.styled";
import { StyledItem, StyledItemContent } from "./Item.styled";

export const Item = ({
  story: { title, url, author, num_comments, points, objectID },
  handleRemoveStory,
}) => {
  return (
    <StyledItem>
      <StyledItemContent width="40%">
        <a href={url}>{title}</a>
      </StyledItemContent>
      <StyledItemContent width="30%">{author}</StyledItemContent>
      <StyledItemContent width="10%">{num_comments}</StyledItemContent>
      <StyledItemContent width="10%">{points}</StyledItemContent>
      <StyledItemContent width="10%">
        <StyledButtonSmall
          type="button"
          onClick={() => {
            handleRemoveStory(objectID);
          }}
        >
          Dismiss
        </StyledButtonSmall>
      </StyledItemContent>
    </StyledItem>
  );
};
