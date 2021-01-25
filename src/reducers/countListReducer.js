export const countListReducer = (state, action) => {
  console.log(action.type);
    switch(action.type) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state > 0 ? state - 1 : state = 0
      default:
        return state 
    }
  }