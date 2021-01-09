import create from "zustand";
import { MyExpense } from "../types/ExpenseType";

type MyStore = {
  expenses: MyExpense[];
  total: number;
  addTotal: (by: number) => void;
  addNewExpense: (newExpense: MyExpense) => void;
};

export const useStore = create<MyStore>((set) => {
  return {
    expenses: [],
    total: 0,
    addTotal: (by) => set((state) => ({ total: state.total + by })),
    addNewExpense: (newExpense) =>
      set((state: any) => {
        const allExpenses = [newExpense].concat(state.expenses);
        return {
          expenses: allExpenses,
        };
      }),
  };
});
