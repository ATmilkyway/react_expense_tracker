import { useRef } from "react";

interface Props {
  handleSelectCategory: (category: string) => void;
  expenseCategoryList: string[];
}
const ListCategory = ({ expenseCategoryList, handleSelectCategory }: Props) => {
   const selectRef = useRef(null);

  return (
    <div>
      <div className="mb-3">
        <select
          ref={selectRef}
          className="form-select"
          aria-label="Default select example"
          id="category"
          onChange={(e) => {
            // console.log(e.target.value);
            handleSelectCategory(e.target.value);
          }}
        >
          {expenseCategoryList.map((category, index) => (
            <option key={index} value={category}>
              {category === "" ? "All Categories" : category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ListCategory;
