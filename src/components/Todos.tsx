import React, { useContext } from 'react'

import TodoItem from './TodoItem'

import { TodosContext } from '../store/todos-context'

import classes from './Todos.module.css'
    //* props is always a coponent element
    //* props has built in children props
    //! React component function includes children and custom items
    //? React.FC = generic, angled brackets = custom, both together = merged

    //onRemoveTod = prop drill chain

const Todos: React.FC = () => {
    
    const todosCtx = useContext(TodosContext)

    return (
        <ul  className={ classes.todos }>
            {/* Map is auto filled because TSX knows it's an array already */}
            {todosCtx.items.map((item) => (
                <TodoItem 
                    key={ item.id }
                    text={ item.text }
                    onRemoveTodo={ todosCtx.removeTodo.bind( null, item.id ) }
            />))}
        </ul>
    )
}

export default Todos