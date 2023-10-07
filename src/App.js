import ExpenseItem from "./components/ExpenseItem";

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
      date: new Date(2021, 2, 28),
    },
    {
      id: 3,
      name: "New TV",
      price: 799.49,
      date: new Date(2021, 2, 28),
    },
  ];
  return (
    <div>
      <h2>Expense Tracker Course</h2>
      <ExpenseItem
        name={expenses[0].name}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        name={expenses[1].name}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        name={expenses[2].name}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
