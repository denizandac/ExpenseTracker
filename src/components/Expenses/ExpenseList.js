import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  const onDeleteListHandler = (id) => {
    props.onDeleteExpenses(id);
  };

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          installment={expense.installment}
          onDeleteList={onDeleteListHandler}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
