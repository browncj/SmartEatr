// The reducer for our array of days
const daysReducer = (state = [{id: 0, food:[]}], action) => {
  switch(action.type){
    case 'NEXT_DAY':
      return [
        {
          id: action.id,
          foods: []
        },
        ...state
      ];
    case 'ADD_FOOD':
      return state;
    default:
      return state;
  }
}

export default daysReducer;
