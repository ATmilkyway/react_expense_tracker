import type { FormData } from "./ExpenseForm";

interface Props {
  handleExpense: (index: number) => void;
  expenses: FormData[];
}

const ListExpense = ({ handleExpense, expenses }: Props) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td scope="row">{expense.description}</td>
              <td scope="row">{expense.amount}</td>
              <td scope="row">{expense.category}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => {
                    handleExpense(index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListExpense;
