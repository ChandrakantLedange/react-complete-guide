import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = () => {
  const expenses = [
    {
      id: 1,
      title: "Car insurance",
      date: new Date(2018, 3, 12),
      amount: 3245.5,
    },
    {
      id: 2,
      title: "Bike insurance",
      date: new Date(2021, 5, 25),
      amount: 3245.5,
    },
    {
      id: 3,
      title: "Personal insurance",
      date: new Date(2003, 8, 1),
      amount: 3245.5,
    },
  ];
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      />
    </Card>
  );
};

export default Expenses;
