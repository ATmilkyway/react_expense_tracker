import { useEffect, useState } from "react";
import ExpenseForm, { type FormData } from "./component/ExpenseForm";
import ListCategory from "./component/ListCategory";
import NavBar from "./component/NavBar";
import ListExpense from "./component/ListExpense";

const App = () => {
  const [expenses, setExpenses] = useState<FormData[]>([
    {
      description: "Description 1",
      amount: 1,
      category: "Category 1",
    },
  ]);
  const [filtered, setFiltered] = useState<FormData[]>([]);

  const expenseCategoryList: string[] = [
    "",
    "Groceries",
    "Utilities",
    "Entertainment",
  ];

  useEffect(() => {
    setFiltered([...expenses]);
  }, [expenses]);

  const handleAddExpense = (data: FormData) => {
    console.log(data);
    setExpenses([...expenses, data]);
  };
  const handleSelectCategory = (category: string) => {
    if (category === "") {
      setFiltered([...expenses]);
      return;
    }
    setFiltered(expenses.filter((expense) => expense.category === category));
  };

  const handleExpense = (indexToRemove: number) => {
    setExpenses(expenses.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <div>
      <NavBar />
      <div className="p-5">
        <ExpenseForm
          expenseCategoryList={expenseCategoryList}
          handleAddExpense={handleAddExpense}
        />
        <div className="mb-5"></div>
        <ListCategory
          expenseCategoryList={expenseCategoryList}
          handleSelectCategory={handleSelectCategory}
        />
        <ListExpense expenses={filtered} handleExpense={handleExpense} />
      </div>
    </div>
  );
};

export default App;
