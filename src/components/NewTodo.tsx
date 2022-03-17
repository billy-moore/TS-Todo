import { useRef, useContext } from 'react'

import { TodosContext } from '../store/todos-context'
import classes from './NewTodo.module.css'

const NewTodo: React.FC = () => {
    //! must be explicit about what type of ref we are working with. ref = useRef() ins't enough
    //? userRef is a generic type out of the box. Angled Brackets add specifics
    //? initial useRef value must be null/undefined
    const todosCtx = useContext( TodosContext )
    const todoTextInputRef = useRef<HTMLInputElement>( null )

    //! React.FormEvent is a default event for Form submission
    const submitHandler = ( event: React.FormEvent ) => {
        event.preventDefault()

        const enteredText = todoTextInputRef.current!.value

        if ( enteredText?.trim().length === 0){
            // throw error
            return
        }

        todosCtx.addTodo(enteredText)

    }

    return(
        <form onSubmit={ submitHandler } className={ classes.form }>
            <label htmlFor="text">Todo text</label>
            <input type='text' id='text' ref={ todoTextInputRef }/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo