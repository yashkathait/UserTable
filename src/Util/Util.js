import { ASC_SORT, SORT_BY } from "../Components/Constant/Constant";

let searchtimer;

export const debounce = (func, value) => {
  clearTimeout(searchtimer); // <--- The solution is here
  searchtimer = setTimeout(() => {
    return func(value);
  }, 1000);
};

export const filterUserByName = (userList, searchKey) => {
  if (!searchKey) {
    searchKey = "";
  }
  const deepCopy = createDeepCopy(userList);
  const list = deepCopy.filter((user) => {
    let fullName = user.first_name + " " + user.last_name;
    if (fullName.length > 0) {
      fullName = fullName.toLowerCase();
    }
    return fullName.includes(searchKey.toLowerCase());
  });
  return list;
};

export const returnValidList = (userList) => {
  return userList && userList.length > 0
    ? JSON.parse(JSON.stringify(userList))
    : [];
};

export const createDeepCopy = (userList) =>
  userList && userList.length > 0 ? JSON.parse(JSON.stringify(userList)) : [];

export const validateSortData = ({ sortType, sortField }) => {
  return sortType && sortField;
};

export const sortUserList = (userList, payload) => {
  const deepCopy = createDeepCopy(userList);
  if (!validateSortData(payload)) {
    return userList;
  }
  const sortType = payload.sortType;
  const sortField = payload.sortField;

  switch (sortField) {
    case SORT_BY.FIRST_NAME: {
      return sortForString(deepCopy, sortType, sortField);
    }

    case SORT_BY.LAST_NAME: {
      return sortForString(deepCopy, sortType, sortField);
    }

    case SORT_BY.WEB: {
      return sortForString(deepCopy, sortType, sortField);
    }

    case SORT_BY.AGE: {
      return sortForNumber(deepCopy, sortType, sortField);
    }

    case SORT_BY.EMAIL: {
      return sortForString(deepCopy, sortType, sortField);
    }

    default: {
      return [];
    }
  }
};

const sortForString = (userList, sortType, sortField) => {
  sortField = sortField.toLowerCase();
  return sortType == ASC_SORT
    ? sortStringAsc(userList, sortField)
    : sortStringDesc(userList, sortField);
};

const sortStringAsc = (userList, keyName) => {
  const list = userList.sort(function (a, b) {
    let stringA = a[keyName].toLowerCase(),
      stringB = b[keyName].toLowerCase();
    if (stringA < stringB) return -1;
    if (stringA > stringB) return 1;
    return 0; //default return value (no sorting)
  });
  return list && list.length > 0 ? list : [];
};

const sortStringDesc = (userList, keyName) => {
  const list = userList.sort(function (a, b) {
    let stringA = a[keyName].toLowerCase(),
      stringB = b[keyName].toLowerCase();
    if (stringA < stringB) return 1;
    if (stringA > stringB) return -1;
    return 0; //default return value (no sorting)
  });
  return list && list.length > 0 ? list : [];
};

const sortForNumber = (userList, sortType, sortField) => {
  sortField = sortField.toLowerCase();
  return sortType == ASC_SORT
    ? sortNumberAsc(userList, sortField)
    : sortNumberDesc(userList, sortField);
};

const sortNumberAsc = (userList, keyName) => {
  const list = userList.sort((a, b) => a[keyName] - b[keyName]);
  return list && list.length > 0 ? list : [];
};

const sortNumberDesc = (userList, keyName) => {
  const list = userList.sort((a, b) => b[keyName] - a[keyName]);
  return list && list.length > 0 ? list : [];
};
