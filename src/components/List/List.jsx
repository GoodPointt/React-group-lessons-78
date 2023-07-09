import { Item } from "./Item/Item";

export const List = ({ stories, handleRemoveStory }) => {
  return (
    <ul>
      {stories.map((story) => (
        <Item
          key={story.objectID}
          story={story}
          handleRemoveStory={handleRemoveStory}
        />
      ))}
    </ul>
  );
};
