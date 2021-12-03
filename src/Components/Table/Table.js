import { Link } from "react-router-dom";
import "./Table.css";
const Table = ({ currentData }) => {
  return (
    <table className="table">
      <thead>
        <tr className="header">
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((data, key) => {
          return (
            <tr key={data.id}>
              <td>
                <Link className="hyperlink" to={`/Users/${data.id}`}>
                  {data.first_name}
                </Link>
              </td>
              <td>{data.last_name}</td>
              <td>{data.age}</td>
              <td>{data.email}</td>
              <td>{data.web}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
