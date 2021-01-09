import { useState } from "react";
import { useStore } from "../store/useStore";
import { MyExpense } from "../types/ExpenseType";

const ExpenseInput = () => {
  const addNewExpense = useStore((state) => state.addNewExpense);
  const [title, setTitle] = useState("");
  const [money, setMoney] = useState("");

  const handleClick = () => {
    const newExpense: MyExpense = {
      id: Date.now(),
      title,
      money,
      time: new Date().toDateString(),
    };
    addNewExpense(newExpense);
    setTitle("");
    setMoney("");
  };

  return (
    <div className="expense-input">
      <input
        className="exp-title"
        placeholder="add new expense"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="exp-money"
        placeholder="add tk"
        type="number"
        min="1"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
      />
      <button onClick={handleClick} type="button">
        Add
      </button>
    </div>
  );
};

export default ExpenseInput;
