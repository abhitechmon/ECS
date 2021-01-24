export const dataFetchInitated = () => {
  return {
    type: "DATA_FETCH_INITIATED",
  };
};

export const dataFetchSuccess = (payload) => {
  return {
    type: "DATA_FETCH_SUCCESS",
    payload,
  };
};

export const dataFetchFailure = () => {
  return {
    type: "DATA_FETCH_FAILED",
  };
};

export const handlerClicked = () => {
  return {
    type: "HANDLER_CLICKED",
  };
};

export const CART_ADD = (payload) => {
  return {
    type: "CART_ADD",
    payload,
  };
};