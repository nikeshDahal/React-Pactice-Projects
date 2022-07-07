import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";
import Card from "../Ui/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import Expenseschart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (yearData) => {
    setFilteredYear(yearData);
  };

  const filteredExpenses = props.expensesDetails.filter((items) => {
    return items.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChange={filterChangeHandler}
        />
        <Expenseschart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </li>
  );
};
export default Expenses;
