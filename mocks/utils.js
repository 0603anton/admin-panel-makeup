"use strict";

function filterByStatus(list, status) {
  let result = list.filter((elem) => {
    return elem.status === status;
  });
  return result;
}

console.log(filterByStatus(orders, "новый"));
