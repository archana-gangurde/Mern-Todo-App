import React, {
    useCallback,
    useState,
    useEffect,
    useContext,
  } from 'react';
  import {
    useQueryClient,
    useMutation,
    QueryClient,
  } from 'react-query';
  import deleteTodoRequest from '../api/deleteTodoRquest';
  import updateTodoRequest from '../api/updateTodoRquest';
  import { debounce } from 'lodash';
  import { TokenContext } from '../app';
import Button from '../atom/Button/Button';
  
  export const TodoItem = ({ todo }) => {
    const [text, setText] = useState(todo.text);
    const [token] = useContext(TokenContext);
  
    const queryClient = useQueryClient();
  
    const { mutate: updateTodo } = useMutation(
      (updatedTodo) => updateTodoRequest(updatedTodo, token),
      {
        onSettled: () => {
          queryClient.invalidateQueries('todos');
        },
      }
    );
  
    const { mutate: deleteTodo } = useMutation(
      (updatedTodo) => deleteTodoRequest(updatedTodo, token),
      {
        onSettled: () => {
          queryClient.invalidateQueries('todos');
        },
      }
    );
  
    const debouncedUpdateTodo = useCallback(
      debounce(updateTodo, 600),
      [updateTodo]
    );
  
    useEffect(() => {
      if (text !== todo.text) {
        debouncedUpdateTodo({
          ...todo,
          text,
        });
      }
    }, [text]);
  
    return (
      <div
        style={{
          marginBottom: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <input
          checked={todo.completed}
          type="checkbox"
          style={{
            marginRight: '5px',
            height: '34px',
            width: '34px',
          }}
          onChange={() =>
            updateTodo({
              ...todo,
              completed: !todo.completed,
            })
          }
        />
  
        <input
          style={{
            padding: '8px',
            marginRight: '6px',
          }}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
  
  <Button text="DELETE" type="submit" onClick={() => deleteTodo(todo)} /> 
      </div>
    );
  };