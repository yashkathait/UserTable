import axios from "axios";
import {
  GET_USER,
  SEARCH_USER,
  SORT_USERS,
} from "../Components/Constant/Constant";
export const fetchUser = () => {
  return (dispatch) => {
    return axios
      .get(
        "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
      )
      .then((response) => {
        dispatch(getUser(response.data));
      })
      .catch((error) => console.log(error));
  };
};

export const getUser = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};
export const searchUser = (data) => {
  return {
    type: SEARCH_USER,
    payload: data,
  };
};

export const sortUser = (data) => {
  return {
    type: SORT_USERS,
    payload: data,
  };
};
