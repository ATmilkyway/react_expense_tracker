import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { error: "Description Should be at least 3 characters" }),
  amount: z.number({ error: "Amount is Required" }),
  category: z.string().min(1, "Category is required"),
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const expenseList: string[] = ["", "Groceries", "Utilities", "Entertainment"];

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
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
            id="description"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text text-danger">
            {errors.description?.message}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            className="form-control"
            id="amount"
          />
          <div id="emailHelp" className="form-text text-danger">
            {errors.amount?.message}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            className="form-select"
            aria-label="Default select example"
            id="category"
          >
            {expenseList.map((expense, index) => (
              <option key={index} value={expense}>
                {expense === "" ? "Select a category" : expense}
              </option>
            ))}
          </select>
        </div>
        <div id="emailHelp" className="form-text text-danger">
          {errors.category?.message}
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
