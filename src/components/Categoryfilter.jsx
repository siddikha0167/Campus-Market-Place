function CategoryFilter({ category, setCategory }) {

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="All">All Categories</option>

      <option value="Books">
        Books
      </option>

      <option value="Electronics">
        Electronics
      </option>

      <option value="Stationery">
        Stationery
      </option>

    </select>
  );

}

export default CategoryFilter;