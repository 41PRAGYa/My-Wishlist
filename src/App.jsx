import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'


function App() {

    const [todo, setToDo] = useState("");
    const [todoList, setToDoList] = useState([]);

    const onToDoInputChange = (e) => {
        setToDo(e.target.value);
    }

    const onAddToDoClick = () => {
        setToDoList([...todoList, { id: uuid(), todo: todo, isCompleted: false }]);
        console.log(todoList);
        setToDo("")
    }

    const onToDoCheckboxChange = (id) => {
        const updatedToDoList = todoList.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted} : todo );
        setToDoList(updatedToDoList);
    }

    const onDeleteClick = (id) => {
        const updatedToDoList = todoList.filter(todo => todo.id !== id);
        setToDoList(updatedToDoList);
    }


    return(
        <div className='App'>
            
            <h1> My Wishlist </h1>

            <div>
                <input value={todo} onChange={onToDoInputChange} placeholder="Add your wishlist here..." />
                <button onClick={onAddToDoClick}> Add </button>
            </div>

                <div>
                    {
                        todoList && todoList.length > 0 && todoList.map(todo => (
                            <div key={todo.id}>
                                <label>
                                    <input onChange={() => onToDoCheckboxChange(todo.id) } type ='checkbox' />
                                    <span  className={todo.isCompleted ? 'strikethrough' : ''} > {todo.todo} </span>
                                </label>
                                <button onClick={() => onDeleteClick(todo.id)}> Delete </button>
                            </div>
                        ))
                    }
                    
                </div>
        </div>
    );
}

export default App;