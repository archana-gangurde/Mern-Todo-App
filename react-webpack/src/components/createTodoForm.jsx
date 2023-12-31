import React, { useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import createTodoRequest from '../api/createTodoRequest';
import { TokenContext } from '../app';
import Button from '../atom/Button/Button';

export const CreateTodoForm = () => {
  const [text, setText] = useState('');
  const [token] = useContext(TokenContext);

  const queryClient = useQueryClient();

  const { mutate: createTodo } = useMutation(
    (newTodo) => createTodoRequest(newTodo, token),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!text) return;
        createTodo({
          text,
        });
        setText('');
      }}
    >
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        style={{
          padding: '8px',
          marginRight: '6px',
        }}
      />
      <Button text="Add" type="submit" /> 
    </form>
  );
};