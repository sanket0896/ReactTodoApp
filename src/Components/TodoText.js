import React from 'react';
const TodoText = (props) => {
    return(
        <li className="todo-text"> { props.text } </li>
    );
};

export default TodoText