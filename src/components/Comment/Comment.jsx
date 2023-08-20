import React, { useState } from 'react';
import styles from './Comment.module.css';
import PropTypes from 'prop-types';
import { TiThumbsUp, TiThumbsDown } from 'react-icons/ti';
import { formatDateToNow } from '../../helpers/formatDateToNow';
import { Button } from '../Button/Button';
import { useDeferredValue } from 'react';
import {
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} from '../../redux/commentApi';
import { MdOutlineModeEditOutline } from 'react-icons/md';

export const Comment = ({
  createdAt,
  content,
  author,
  avatar,
  thumbsUp,
  thumbsDown,
  id,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [deleteComment, { isLoading }] = useDeleteCommentMutation();
  const [updateComment, { isLoading: isLoadingUpdateComment }] =
    useUpdateCommentMutation();

  const handleDelete = (id) => {
    deleteComment(id);
  };

  const handleCommentUpdate = () => {
    updateComment({ id, content: textValue });
    setIsEditing(false);
    setTextValue('');
  };

  return (
    <li className={styles.card}>
      {isEditing ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <textarea
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            style={{ width: '100%', display: 'block', height: '100px' }}
          ></textarea>

          <button
            onClick={() => {
              setIsEditing(false);
              setTextValue('');
            }}
          >
            Cancel
          </button>
          <br />

          <button
            style={{ margin: 10 }}
            onClick={() => {
              handleCommentUpdate();
            }}
          >
            Ok
          </button>
        </div>
      ) : (
        <>
          <img className={styles.avatar} src={avatar} alt={author} />

          <div className={styles.cardWrapper}>
            <button
              style={{ display: 'block', marginLeft: 'auto' }}
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <MdOutlineModeEditOutline size={24} />
            </button>
            <div className={styles.cardBody}>
              <h3 className={styles.author}>{author}</h3>
              <p className={styles.content}>
                <span className={styles.blockquote}>"</span>
                {content}
                <span className={styles.blockquote}>"</span>
              </p>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.date}>{formatDateToNow(createdAt)}</span>

              <div className={styles.buttonBox}>
                <Button counter={thumbsUp} id={id}>
                  <TiThumbsUp className={styles.icon} />
                </Button>

                <Button counter={thumbsDown} role="thumbsDown" id={id}>
                  <TiThumbsDown className={styles.icon} />
                </Button>
                <button type="button" onClick={() => handleDelete(id)}>
                  {isLoading ? 'DELETING' : 'DELETE'}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

Comment.propTypes = {
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  thumbsUp: PropTypes.number.isRequired,
  thumbsDown: PropTypes.number.isRequired,
};
