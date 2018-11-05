const initState = {}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TRADE_SUCCESS':
      return state;
    case 'TRADE_ERROR':
      return state;
    default:
      return state;
  }
};

export default projectReducer;