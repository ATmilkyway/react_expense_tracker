interface Props {
  category: string[];
}
const ListCategory = ({ category }: Props) => {
  return (
    <div>
      {" "}
      {category.map((c, i) => (
        <option key={i} value={category[i]}>
          {c}
        </option>
      ))}
    </div>
  );
};

export default ListCategory;
