import {
  GET_USER,
  SEARCH_USER,
  SORT_USERS,
  DATA_PER_PAGE,
} from "../Components/Constant/Constant";
import { filterUserByName, returnValidList, sortUserList } from "../Util/Util";

const initialData = {
  list: [],
  immutableResult: [],
};

const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_USER: {
      const result = returnValidList(action.payload);
      const immutableResult = returnValidList(action.payload);
      return {
        ...state,
        list: result,
        immutableResult,
      };
    }

    case SEARCH_USER: {
      const searchedUser = filterUserByName(
        state.immutableResult,
        action.payload
      );
      return {
        ...state,
        list: searchedUser,
      };
    }

    case SORT_USERS: {
      const sortedUserList = sortUserList(
        state.immutableResult,
        action.payload
      );
      return {
        ...state,
        list: sortedUserList,
      };
    }

    default: {
      return state;
    }
  }
};
export default userReducer;
