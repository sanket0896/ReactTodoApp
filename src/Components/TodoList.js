import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{

    render(){
        return(
            this.props.todos.map( 
                todo => <Todo key={todo.id} text={todo.text} isComplete={todo.isComplete} id={todo.id} 
                        markAsComplete={this.props.markAsComplete}
                        markAsIncomplete={this.props.markAsIncomplete} /> 
            )
        );
    }
}

export default TodoList;