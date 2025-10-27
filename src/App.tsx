import { useState } from "react";
import ExpenseForm, { type FormData } from "./component/ExpenseForm";
import ListCategory from "./component/ListCategory";
import NavBar from "./component/NavBar";
import ListExpense from "./component/ListExpense";

const App = () => {
  const [expenses, setExpenses] = useState<FormData[]>([
    // {
    //   description: "Description 1",
    //   amount: 1,
    //   category: "Category 1",
    // },
  ]);

  const handleAddExpense = (data: FormData) => {
    console.log(data);
    setExpenses([...expenses, data]);
  };
  return (
    <div>
      <NavBar />
      <div className="p-5">
        <ExpenseForm handleAddExpense={handleAddExpense} />
        <div className="mb-5"></div>
        <ListCategory />

        <ListExpense expenses={expenses} />
      </div>
    </div>
  );
};

export default App;
