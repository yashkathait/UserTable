import React from "react";
import "./Pagination.css";

const Pagination = ({ data, dataPerpage, paginate }) => {
  const totalPage = [];

  for (let i = 1; i <= Math.ceil(data / dataPerpage); i++) {
    totalPage.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {totalPage.map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
