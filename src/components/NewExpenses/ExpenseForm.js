import react from "react";
import "./ExpenseForm.css"
import { useState } from "react";

const ExpenseForm = (props) =>{
    const [changedTitle , setChangedTitle]=useState('');
    const [changedAmount , setChangedAmount]=useState('');
    const [changedDate , setChangedDate]=useState('');

    const titleChangeHandler =(event) =>{
        setChangedTitle(event.target.value) 
    }
    const amoutChangeHandler = (event) =>{
        setChangedAmount(event.target.value)

    }
    const dateChangeHandler = (event) =>{
        setChangedDate(event.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expensesData={
            title : changedTitle,
            amount : +changedAmount,
            date : new Date(changedDate)
        }
        props.onSaveExpensesData(expensesData);
        setChangedTitle('');
        setChangedAmount('');
        setChangedDate(''); 
    }


    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control label ">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={changedTitle}></input>
                </div>
                <div className="new-expense__control input">
                    <label>amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amoutChangeHandler} value={changedAmount}></input>
                </div>
                <div className="new-expense__control label">
                    <label>Date</label>
                    <input type='date' min="2022-01-01" max="2025-12-02" onChange={dateChangeHandler} value={changedDate}></input>
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expenses</button>
                <button type="submit" onClick={props.onCancel}> cancel </button>
            </div>
        </form>
    )
}
export default ExpenseForm