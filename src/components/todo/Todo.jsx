import { useState } from 'react';
import style from './Todo.module.css';

export function Todo() {
    const [text, steText] = useState('');
    const [tasks, setTask] = useState([]);

    const empty = <div className={style.empty}>Nera uzduociu - sukurk!</div>;

    const taskList = tasks.map(task => (
        <li key={task} className={style.task}>
            <p className={style.text}>{task}</p>
            <div className={style.actions}>
                <button className={style.btn} type='button'>Vaiksmas</button>
            </div>
        </li>) );

    function updateText(event) {
        steText(event.target.value);
    }

    function addTask(event) {
        event.preventDefault();
        console.log('add task:', text);
        steText('');
        // setTask([...tasks, text]);
        setTask((prev) => [...prev, text]);
    }

    return (
        <div className={style.todo}>
            <form onSubmit={addTask} className={style.form}>
                <input value={text} onChange={updateText} type="text" className={style.input} />
            </form>
            <ul className={style.list}>{tasks.length ? taskList : empty} </ul>
        </div>
    )
}