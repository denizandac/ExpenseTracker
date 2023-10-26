import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const onDeleteItemHandler = () => {
    props.onDeleteList(props.id);
  };
  // const onEditItemHandler = () => {
  //   props.onEditList(props.id);
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">
            ${props.amount}{" "}
            {props.installment > 1 && <span>/ {props.installment}</span>}
          </div>
        </div>
        <button onClick={onDeleteItemHandler}>Delete</button>
        {/* <button onClick={onEditItemHandler}>Edit</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
