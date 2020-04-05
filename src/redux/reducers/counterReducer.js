import * as types from "../actions/actionTypes";
const init = {
  count: 0,
};

export default function counterReducer(state = init, action) {
  switch (action.type) {
    case types.INC:
      return { count: state.count + 1 };
    case types.DEC:
      return { count: state.count - 1 };
    case types.ADD_NUM:
      return { count: state.count + action.num };
    case types.SUB_NUM:
      return { count: state.count - action.num };
    default:
      return state;
  }
}
