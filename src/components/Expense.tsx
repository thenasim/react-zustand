import React from "react";
import { MyExpense } from "../types/ExpenseType";

const Expense: React.FC<MyExpense> = ({ title, time, money }) => {
  return (
    <div className="expense">
      <div className="title">
        <h2>{title}</h2>
        <p>{time}</p>{" "}
      </div>
      <div className="money">
        <p>{money} Tk</p>
      </div>
    </div>
  );
};

export default Expense;
