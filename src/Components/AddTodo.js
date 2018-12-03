import React from 'react';

class AddTodo extends React.Component{

    state = {
        inputText  : ""
    };

    handleInputChange = (e, isFilterActive, filterByText) => {
        this.setState({
            inputText : e.target.value.trim()
        });
        if (isFilterActive) {
            filterByText(e.target.value.trim());            
        }
    };

    handleKeyPress = ( e, addNewTodo ) => {
        if(e.which === 13 && this.state.inputText !== ""){
            addNewTodo(this.state.inputText);
            this.setState({
                inputText : ''
            });
        }
    }

    handleBlur = (e) => {
        e.target.focus();
    }

    render(){
        return(
            <input className={ this.props.isFilterActive ? "add-todo filter-active" : "add-todo"} 
            type="text" placeholder="Enter new Todo" value = {this.state.inputText}
            onChange = {(e) => this.handleInputChange(e, this.props.isFilterActive, this.props.filterByText)}
            onKeyPress = {(e) => this.handleKeyPress( e, this.props.addNewTodo)}
            onBlur = { (e) => this.handleBlur(e)} autoFocus />
        );
    }
}

export default AddTodo;