import React, { useContext } from 'react';
import { useQuery } from 'react-query';

import todosRequest from '../api/todoRequest';
import { TodoItem } from '../components/TodoItem';
import { TokenContext } from '../app';
import { CreateTodoForm } from '../components/createTodoForm';

import '../style/TodoPage.scss'

export const TodoPage = () => {
    const [token] = useContext(TokenContext);
    const { isLoading, data: todos } = useQuery('todos', () => todosRequest(token));

    return (
<>

        <div className="todo-container">
        <h1>MERN TODO APP</h1>
      <CreateTodoForm />
            {isLoading ? (
                <div className="loading-indicator">
                    Loading...
                </div>
            ) : (
                todos.map((todo) => (
                    <TodoItem todo={todo} key={todo._id} />
                ))
            )}
            
        </div>
        </>
    );
};
