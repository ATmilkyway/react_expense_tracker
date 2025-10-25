import ExpenseForm from "./component/ExpenseForm";
import { NavBar } from "./component/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="p-5">
        <ExpenseForm />
      </div>
    </div>
  );
};

export default App;
