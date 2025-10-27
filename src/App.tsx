import ExpenseForm from "./component/ExpenseForm";
import ListCategory from "./component/ListCategory";
import NavBar from "./component/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="p-5">
        <ExpenseForm />
        <hr />
        <ListCategory />
      </div>
    </div>
  );
};

export default App;
