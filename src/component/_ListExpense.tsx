import type { FormData } from "../App";

interface Props {
  expenses: FormData[];
}
const ListExpense = ({ expenses }: Props) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e, index) => (
            <tr>
              <td>{e.description}</td>
              <td>{e.amount}</td>
              <td>{e.category}</td>
              <td>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListExpense;
