import React from 'react';
const TodoStatus = (props) => {
    return(
        <div 
            className = {props.isComplete ? "todo-status complete" : "todo-status incomplete"}
            onClick = {() => props.markAsComplete(props.id)}
            onDoubleClick = {() => props.markAsIncomplete(props.id)}
        />
    );
};

export default TodoStatus;