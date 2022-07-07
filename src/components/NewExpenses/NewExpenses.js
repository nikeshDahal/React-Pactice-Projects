import react from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpensesDataHandler = (enteredDatas) => {
    const expensesData = {
      ...enteredDatas,
      id: Math.random().toString(),
    };

    props.onNewExpense(expensesData);
  };
  const [formVisible, setFormVisible] = useState(false);

  const buttonHandler = () => {
    setFormVisible(true);
  };

  const formInvisible = () =>{
    setFormVisible(false);
  }

  return (
    <div className="new-expense">
      {formVisible ? (
        <ExpenseForm onSaveExpensesData={saveExpensesDataHandler} onCancel={formInvisible} />
      ) : (
        <button onClick={buttonHandler}>Add New Expense</button>
      )}
    </div>
  );
};
export default NewExpense;
