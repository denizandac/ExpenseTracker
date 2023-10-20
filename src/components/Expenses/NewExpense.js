import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const [activeModal, setActiveModal] = useState(false);
  const activeModalHandler = (bool) => {
    setActiveModal(bool);
  };

  return (
    <div className="new-expense">
      {!activeModal && (
        <button onClick={() => activeModalHandler(true)}>
          Add New Expense
        </button>
      )}
      {activeModal && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onActivateModal={() => activeModalHandler(false)}
        />
      )}
    </div>
  );
};

export default NewExpense;
