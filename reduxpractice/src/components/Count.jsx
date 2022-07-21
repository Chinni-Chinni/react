import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add_count, dec_count } from '../count/action';

export default function Count() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);
    console.log(count)
console.log(count);
    function handleIncrement() {
        dispatch(add_count(1));
    }

    const handleDecrement = () => {
        dispatch(dec_count(1))
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={handleIncrement}>Inc</button>
            <button onClick={handleDecrement}>Dec</button>

        </>
    )
}
