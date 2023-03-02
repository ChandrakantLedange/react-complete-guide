import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  return (
    <div>
      <NewExpense />
      <Expenses />
    </div>
  );
};

export default App;
