import React from 'react'
import TodoListItem from "../TodoListItem/TodoListItem";

import './TodoList.css'

const TodoList = ({todo, deleteItem}) => {

        const elements = todo.map((item) => {
            const {id, ...itemProps} = item;
            return (
              <TodoListItem key = {id} {...itemProps} deleteItem = {() => deleteItem(id)} /> )
        })
        return (<div className="TODOLIST">{elements}</div>)
}

export default TodoList;