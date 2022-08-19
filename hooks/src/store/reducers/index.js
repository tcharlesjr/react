export default function reducer(state, action) {
  switch (action.type) {
    case 'numberAdd2':
      return { ...state, number: state.number + 2 };
    case 'login':
      return { ...state, user: { name: action.payload } };
    case 'mult7':
      return { ...state, number: state.number * 7 };
    case 'div25':
      return { ...state, number: state.number / 25 };
    case 'inter':
      return { ...state, number: parseInt(state.number) };
    case 'addn':
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
}
