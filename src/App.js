import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";
import { useState } from "react";
const INITIAL_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];
function App() {
  const [expenses , setExpenses] = useState(INITIAL_EXPENSE)

  const newExpensehandler = (expenseDatas) =>{
    // console.log("in app.js");
    console.log(expenseDatas);
    setExpenses((prevExpenses)=>{
      return [
          expenseDatas,
        ...prevExpenses
      ]
    });
  }
  return (
    <div>
      <NewExpense onNewExpense={newExpensehandler}/>
      <Expenses expensesDetails={expenses}/>
    </div>
  );
}

export default App;

