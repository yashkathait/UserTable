import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./DetailPage.css";

const DetailPage = ({ user }) => {
  const params = useParams();
  const newUser = user.find((foundUser) => {
    if (foundUser.id.toString() === params.id) {
      return foundUser;
    }
  });

  return (
    <div className="centralise">
      <h1>Details:</h1>
      <h3>First Name : {newUser.first_name}</h3>
      <h3>Last Name : {newUser.last_name}</h3>
      <h3>Company_name : {newUser.company_name}</h3>
      <h3>City : {newUser.city}</h3>
      <h3>State : {newUser.state}</h3>
      <h3>Zip : {newUser.zip}</h3>
      <h3>Email : {newUser.email}</h3>
      <h3>Web : {newUser.web}</h3>
      <h3>Age : {newUser.age}</h3>
      <button className="backbutton">
        <Link className="linkbutton" to={`/Users/`}>
          Back
        </Link>
      </button>
    </div>
  );
};
export default DetailPage;
