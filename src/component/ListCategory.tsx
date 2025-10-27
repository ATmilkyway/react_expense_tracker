const ListCategory = () => {
  const expenseList: string[] = ["", "Groceries", "Utilities", "Entertainment"];

  return (
    <div>
      <div className="mb-3">
        <select
          className="form-select"
          aria-label="Default select example"
          id="category"
        >
          {expenseList.map((expense, index) => (
            <option key={index} value={expense}>
              {expense === "" ? "All Categories" : expense}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ListCategory;
