import React from 'react';
import TodoStatus from './TodoStatus';
import Todotext from './TodoText';

const Todo = (props) => {
    return(
        <div className="todo">
            <TodoStatus id={props.id} isComplete = {props.isComplete} markAsComplete={props.markAsComplete}
            markAsIncomplete={props.markAsIncomplete} />
            <Todotext text = {props.text} />
        </div>
    );
};

export default Todo;