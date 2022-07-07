import react from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">
        No Items Found
    </h2>
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((items) => {
        return (
          <ExpenseItem
            key={items.id}
            date={items.date}
            expensesTitle={items.title}
            price={items.amount}
          />
        );
      })}
    </ul>
  );
};
export default ExpensesList;
