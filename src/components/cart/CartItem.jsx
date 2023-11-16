import { useState } from 'react';
import style from './Cart.module.css';

export function CartItem(props) {
    console.log(props);
    const { title, skambutis } = props;

    const [count, setCount] = useState(0);

    function updateMinus() {
        if (count > 0) {
            setCount(count - 1);
            skambutis(-1);
        }
    }

    function updatePlus() {
        if (count < 10) {
            setCount(count + 1);
            skambutis(1);
        }
    }
    
    return (
        <div className={style.cartItem}>
            <h3 className={style.cartTitle}>{title}</h3>
            <div className={style.actions}>
                <button onClick={updateMinus} className={style.btn}>-</button>
                <div className={style.count}>{count}</div>
                <button onClick={updatePlus} className={style.btn}>+</button>
            </div>
        </div>
    )
}