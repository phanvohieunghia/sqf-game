const intialState = {
  popup: false,
}
const globalReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SHOW_POPUP': {
      return {
        ...state,
        popup: !action.payload,
      }
    }
    default:
      return state
  }
}
export default globalReducer
