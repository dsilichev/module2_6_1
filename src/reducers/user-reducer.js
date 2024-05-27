export const initialUserState = {
  name: 'Vasya',
  age: 25,
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    // cases
    case 'INCREASE_AGE': {
      return {
        ...state,
        age: state.age + action.payload,
      };
    }
    case 'RESET_AGE': {
      return {
        ...state,
        age: initialUserState.age,
      };
    }
    case 'CHANGE_USER': {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state;
  }
};
