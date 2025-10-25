const SelectCategory = () => {
  return (
    <div>
      <div className="mb-3">
        <label className="form-label" htmlFor="category">
          Category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="category"
          autoComplete="off"
        >
          <option value="1">All Category</option>
          <option value="1">Groceries</option>
          <option value="2">Utilities</option>
          <option value="2">Entertainment</option>
        </select>
      </div>
    </div>
  );
};

export default SelectCategory;
