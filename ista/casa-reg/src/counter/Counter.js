import React from 'react'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { compose } from 'redux';
import { useDispatch } from 'react-redux'
// import { Provider } from 'react-redux';
import { add, remove } from './counterActions';
import { useSelector } from 'react-redux';




function Counter() {

    // dispatch the reducer / 
    const dispatch = useDispatch();
    // useSelector select a slice from the state
    const counter = useSelector(state => state.counter)
    function handleAdd() {
        dispatch(add())
    }

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={handleAdd}>add</button><br />
            <button onClick={() => dispatch(remove())}>remove</button><br />
            <p>output :{counter} </p>
        </div>
    )
}

export default Counter