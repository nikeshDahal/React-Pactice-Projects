import './ExpenseItem.css'
import Date from './Date'
import Card from '../Ui/Card'
import React, { useState } from 'react';
const  ExpenseItem = (props) => {
    const [title, setTitle]= useState(props.expensesTitle)
    const clickHandler=()=>{
        setTitle("updateValue")
        console.log(title)
    }
    return(
        <Card className="expense-item">
            <Date date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.expensesTitle}</h2>
                <div className="expense-item__price">{props.price}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>
    )

}
export default ExpenseItem