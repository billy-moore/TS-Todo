import classes from './TodoItem.module.css'

//? describing function argument type is optional
const TodoItem: React.FC<{ text: string, onRemoveTodo: () => void }> = ( props ) => {

    return(
        <li 
        className={ classes.item }
        onClick={ props.onRemoveTodo }
        >
            { props.text }
        </li>
    )
}

export default TodoItem
