import create from "zustand";
import { MyExpense } from "../types/ExpenseType";

type MyStore = {
  expenses: MyExpense[];
  total: number;
  addTotal: (by: number) => void;
  subTotal: (by: number) => void;
  deleteExpense: (id: number) => void;
  addNewExpense: (newExpense: MyExpense) => void;
};

export const useStore = create<MyStore>((set) => {
  return {
    expenses: [],
    total: 0,
    addTotal: (by) => set((state) => ({ total: state.total + by })),
    subTotal: (by) => set((state) => ({ total: state.total - by })),
    deleteExpense: (id) =>
      set((state) => {
        const filtered = state.expenses.filter((e) => {
          if (e.id === id) {
            state.subTotal(parseInt(e.money));
            return false;
          }
          return true;
        });
        return {
          expenses: filtered,
        };
      }),
    addNewExpense: (newExpense) =>
      set((state: any) => {
        const allExpenses = [newExpense].concat(state.expenses);
        state.addTotal(parseInt(newExpense.money));
        return {
          expenses: allExpenses,
        };
      }),
  };
});
