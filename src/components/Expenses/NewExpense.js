import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";

const NewExpense = (props) => {
  const ExpenseFormSubmitHandler = (formedExpenseData) => {
    const expenseData = {
      ...formedExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpenseAdd(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseFormSubmit={ExpenseFormSubmitHandler} />
    </div>
  );
};

export default NewExpense;
