import React, { useState, useEffect } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  useEffect(() => {
    console.log(enteredTitle);
  }, [enteredTitle]);

  useEffect(() => {
    console.log(enteredAmount);
  }, [enteredAmount]);

  useEffect(() => {
    console.log(enteredDate);
  }, [enteredDate]);

  // const titleChangeHandler = (event) => {
  //   setEnteredTitle((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value };
  //   });
  // };
  // const amountChangeHandler = (event) => {
  //   setEnteredAmount((prevState) => {
  //     return { ...prevState, enteredAmount: event.target.value };
  //   });
  // };
  // const dateChangeHandler = (event) => {
  //   setEnteredDate((prevState) => {
  //     return { ...prevState, enteredDate: event.target.value };
  //   });
  // };
  const expenseChangeHandler = (identifier, value) => {
    switch (identifier) {
      case "title":
        setEnteredTitle(() => value);
        break;
      case "amount":
        setEnteredAmount(() => value);
        break;
      case "date":
        setEnteredDate(() => value);
        break;
      default:
        break;
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onExpenseFormSubmit(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={(event) =>
                expenseChangeHandler("title", event.target.value)
              }
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={(event) =>
                expenseChangeHandler("amount", event.target.value)
              }
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2023-01-01"
              max="2025-12-31"
              value={enteredDate}
              onChange={(event) =>
                expenseChangeHandler("date", event.target.value)
              }
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
