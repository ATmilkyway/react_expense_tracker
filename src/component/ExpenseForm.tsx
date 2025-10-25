import { useForm } from "react-hook-form";
import type { FormData } from "../App";

interface Props {
  // FormData: FormData;
  category: string[];
  handleOnSubmit: (data: FormData) => void;
}
const ExpenseForm = ({ handleOnSubmit, category }: Props) => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  return (
    <>
      <form
        onSubmit={handleSubmit((data: FormData) => {
          handleOnSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            type="text"
            className="form-control"
            aria-label="Default select example"
            id="description"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount")}
            type="number"
            className="form-control"
            aria-label="Default select example"
            id="amount"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="category">
            Category
          </label>
          <select
            {...register("category")}
            className="form-select"
            aria-label="Default select example"
            id="category"
            autoComplete="off"
          >
            <option>Select</option>
            {category.map((c, i) => (
              <option key={i} value={category[i]}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
