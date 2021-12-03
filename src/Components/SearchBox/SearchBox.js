import "./SearchBox.css";
const SearchBox = ({ searchHandler }) => {
  return (
    <div className="outercontainer">
      <input
        className="searchbox"
        type="text"
        placeholder="Search by first or last name"
        onChange={searchHandler}
      />
    </div>
  );
};
export default SearchBox;
