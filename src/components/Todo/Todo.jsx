import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from 'redux/todoSlice';
import { useState } from 'react';

export const Todo = ({ text, counter, id }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editableText, setEditableText] = useState(text);

  const dispatch = useDispatch();
  const handleDeleteTodo = () => dispatch(deleteTodo(id));
  const handleEditTodo = () => {
    dispatch(editTodo({ id, text: editableText }));
    setIsEditMode(false);
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        {isEditMode ? (
          <>
            <input
              value={editableText}
              onChange={e => setEditableText(e.target.value)}
            />
            <div
              style={{
                display: 'flex',
                gap: 15,
              }}
            >
              <button type="button" onClick={handleEditTodo}>
                Edit
              </button>
              <button type="button" onClick={() => setIsEditMode(false)}>
                Cancel
              </button>
            </div>
          </>
        ) : (
          <Text onDoubleClick={() => setIsEditMode(true)}>{text}</Text>
        )}
        <DeleteButton type="button" onClick={handleDeleteTodo}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
