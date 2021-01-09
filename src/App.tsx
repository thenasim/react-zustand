import "./App.css";
import { useStore } from "./store/useStore";
import Expense from "./components/Expense";
import ExpenseInput from "./components/ExpenseInput";

function App() {
  const expenses = useStore((state) => state.expenses);
  const total = useStore((state) => state.total);

  return (
    <div className="App">
      <div className="apptitle">
        <h1>Expense Calculator</h1>
        <p>Total: {total} Tk</p>
      </div>
      <ExpenseInput />
      <div className="expense-list">
        <ul>
          {expenses.map((exp) => (
            <Expense key={exp.id} {...exp} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
