import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

function App() {
  const expenses = [
    {
      id: 1,
      name: "Car Insurance",
      price: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 2,
      name: "Toilet Paper",
      price: 94.12,
      date: new Date(2021, 5, 21),
    },
    {
      id: 3,
      name: "New TV",
      price: 799.49,
      date: new Date(2021, 8, 3),
    },
  ];
  const NewExpenseAddHandler = (addedExpense) => {
    console.log("In App.js");
    console.log(addedExpense);
  };
  return (
    <div>
      <h2>Expense Tracker Course</h2>
      <NewExpense onNewExpenseAdd={NewExpenseAddHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
