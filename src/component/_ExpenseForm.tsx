import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  description: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "Description is required"
          : "Description must be a string",
    })
    .min(3, { error: "Description must be at least 3 characters" }),

  amount: z
    .number({
      error: (issue) =>
        issue.input === undefined
          ? "Amount is required"
          : "Enter a valid number",
    })
    .min(1, { error: "Amount must be greater than 0" }),

  category: z.string({
    error: (issue) =>
      issue.input === undefined ? "Category is required" : "Invalid category",
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  // FormData: FormData;
  category: string[];
  handleOnSubmit: (data: FormData) => void;
}
const ExpenseForm = ({ handleOnSubmit, category }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    if (data) {
      handleOnSubmit(data);
      reset();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          {errors.description?.message && (
            <p className="text-danger">{errors.description?.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            className="form-control"
            aria-label="Default select example"
            id="amount"
            autoComplete="off"
          />
          {errors.amount?.message && (
            <p className="text-danger">{errors.amount?.message}</p>
          )}
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
          {errors.category?.message && (
            <p className="text-danger">{errors.category?.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
// disabled={!isValid}
