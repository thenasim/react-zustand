import React from "react";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { useStore } from "../store/useStore";
import { MyExpense } from "../types/ExpenseType";

const Expense: React.FC<MyExpense> = ({ id, title, time, money }) => {
  const deleteExpense = useStore((state) => state.deleteExpense);

  const handleDelete = () => {
    deleteExpense(id);
  };
  const handleEdit = () => {};

  return (
    <div className="expense">
      <div className="title">
        <h2>{title}</h2>
        <p>{time}</p>{" "}
      </div>
      <div className="money">
        <p>{money} Tk</p>
      </div>
      <div className="action">
        <FiTrash2 onClick={handleDelete} className="icon" />
        <FiEdit onClick={handleEdit} className="icon" />
      </div>
    </div>
  );
};

export default Expense;
