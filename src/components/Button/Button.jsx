import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Button.module.css';
import { useUpdateCommentMutation } from '../../redux/commentApi';
import { toast } from 'react-hot-toast';

export const Button = ({ children, counter, role = 'thumbsUp', id }) => {
  const variants = {
    [styles.thumbsUp]: role === 'thumbsUp',
    [styles.thumbsDown]: role === 'thumbsDown',
  };

  const [updateComment, { isLoading, isError }] = useUpdateCommentMutation();

  const onBtnHandleClick = async (id) => {
    try {
      const result = await updateComment({ id, [role]: counter + 1 });

      if (!result.ok) throw new Error('Opps!! 😒');
    } catch (error) {
      toast(error.message);
    }
  };

  return (
    <button
      className={classNames(styles.button, variants)}
      type="button"
      counter={counter}
      onClick={() => onBtnHandleClick(id)}
      id={id}
    >
      {children}

      <span className={styles.counter}>
        <span></span>
        {isLoading ? '...' : counter}
      </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  counter: PropTypes.number.isRequired,
  role: PropTypes.string,
  id: PropTypes.string.isRequired,
};
