// import { createActions, createReducer } from "reduxsauce";

// export const { Types, Creators } = createActions({
//   getNumber: [],
//   getNumberSuccess: ["payload", "isLoading"],
//   getNumberFail: ["isLoading", "error"],
// });

// const INITIAL_STATE = {
//   number: {},
// };

// const getNumber = (state) => ({ ...state });

// const getNumberSuccess = (state, payload) => ({
//   ...state,
//   ...payload,
//   isLoading: false,
// });

// const getNumberFail = (state, error) => ({
//   ...state,
//   isLoading: false,
//   ...error,
// });

// export default createReducer(INITIAL_STATE, {
//   [Types.GET_NUMBER]: getNumber,
//   [Types.GET_NUMBER_SUCCESS]: getNumberSuccess,
//   [Types.GET_NUMBER_FAIL]: getNumberFail,
// });
