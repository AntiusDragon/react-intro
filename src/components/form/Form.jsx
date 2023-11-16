import { useState } from 'react';
import style from './Form.module.css';

export function Form() {
    const  [fristName, setFristName] = useState('');
    const  [lastName, setLastName] = useState('');

    function updateFristName(event) {
        setFristName(event.target.value);
    }
    function updateLastName(event) {
        setLastName(event.target.value);
    }

    return (
        <div className={style.hello}>
            <form className={style.from}>
                <input value={fristName} onChange={updateFristName} className={style.input} type="text" />
                <input value={lastName} onChange={updateLastName} className={style.input} type="text" />
            </form>
            <p className={style.sentence}>Herllo: {fristName} {lastName}</p>
        </div>
    );
}