import { useState } from "react";
import ExpenseForm from "./component/ExpenseForm";
import { NavBar } from "./component/NavBar";
import SelectCategory from "./component/SelectCategory";
import ListExpense from "./component/ListExpense";

export interface FormData {
  description: string;
  amount: number;
  category: string;
}

const Category = {
  Groceries: "Groceries",
  Utilities: "Utilities",
  Entertainment: "Entertainment",
};

console.log(Category);
const App = () => {
  const [expenses, setExpense] = useState<FormData[]>([]);

  // handleOnSubmit
  const handleOnSubmit = (data: FormData) => {
    setExpense((e) => [...e, data]);
  };
  console.log(expenses);

  return (
    <div>
      <NavBar />
      <div className="p-5">
        <ExpenseForm
          handleOnSubmit={handleOnSubmit}
          category={Object.values(Category)}
        />
        <hr className="border-secondary border-2 my-4" />

        <div className="pt-3 pb-2">
          <SelectCategory />
        </div>
        <hr className="border-secondary border-2 my-4" />
        <ListExpense expenses={expenses}/>
      </div>
    </div>
  );
};

export default App;
