import React from 'react'
import SubList from './SubList'

function List({todos,setTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo)=>(
                    <SubList todos={todos} setTodos={setTodos} key={todo.id} todo={todo} text={todo.text}/>
                ))}
            </ul>
        </div>
    )
}

export default List
