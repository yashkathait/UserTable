import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser, searchUser, sortUser } from "../../Action/Action";

import Pagination from "../../Components/Pagination/Pagination";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Table from "../../Components/Table/Table";

import "./User.css";
import { debounce } from "../../Util/Util";
import {
  ASC_SORT,
  DESC_SORT,
  SORT_BY,
} from "../../Components/Constant/Constant";

const User = ({ user }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerpage, setDataPerpage] = useState(11);
  const [paginatedData, setPaginatedData] = useState([]);

  const indexOfLast = currentPage * dataPerpage;
  const indexOfFirst = indexOfLast - dataPerpage;

  useEffect(() => {
    setPaginatedData(
      user.length > 0 ? user.slice(indexOfFirst, indexOfLast) : []
    );
  }, [user]);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const searchHandler = (e) => {
    setInput(e.target);
    debounce(fireSearch, e.target.value);
  };

  const fireSearch = (value) => {
    dispatch(searchUser(value));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPaginatedData(
      user.length > 0 ? user.slice(indexOfFirst, indexOfLast) : []
    );
  };
  return (
    <div className="center">
      <SearchBox searchHandler={searchHandler} />

      <Table currentData={paginatedData} searchHandler={searchHandler}></Table>

      <Pagination
        data={user.length}
        dataPerpage={dataPerpage}
        paginate={paginate}
      />
    </div>
  );
};
export default User;
