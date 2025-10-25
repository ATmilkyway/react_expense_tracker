const ExpenseForm = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label ">
            Description
          </label>
          <input type="email" className="form-control" id="desc" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="exampleCheck1">
            Category
          </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option> 
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
