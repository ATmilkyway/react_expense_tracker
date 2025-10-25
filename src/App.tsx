import { useState } from "react";
import ExpenseForm from "./component/ExpenseForm";
import { NavBar } from "./component/NavBar";
import SelectCategory from "./component/SelectCategory";

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
  const [expense, setExpense] = useState<FormData[]>([]);

  // handleOnSubmit
  const handleOnSubmit = (data: FormData) => {
    setExpense((e) => [...e, data]);
  };
  console.log(expense);

  return (
    <div>
      <NavBar />
      <div className="p-5">
        <ExpenseForm
          handleOnSubmit={handleOnSubmit}
          category={Object.values(Category)}
        />
        <div className="py-5">
          <SelectCategory />
        </div>
      </div>
    </div>
  );
};

export default App;
