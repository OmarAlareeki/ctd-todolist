import React from 'react'
import InputWithLabel from './InputWithLabel';
import { RiAddCircleLine } from 'react-icons/ri';
import PropTypes from "prop-types";

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = React.useState('')

    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo(todoTitle)
        setTodoTitle("")
    }

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}
                hasFocus
            >
            </InputWithLabel>&nbsp;
            <button type="submit" id='addBtn'><RiAddCircleLine /></button>
        </form>
    )
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func
}


export default AddTodoForm
