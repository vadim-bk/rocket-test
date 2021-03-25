const initialState = {
  firstTest: null,
  currentTest: null,
  nextTest: null,
  result: [],
  testLoading: false,
  questionLoading: false,
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FIRST_TEST':
      return { ...state, firstTest: action.payload };

    case 'GET_TEST_BY_ID':
      return { ...state, currentTest: action.payload };

    case 'GET_NEXT_TEST':
      return { ...state, nextTest: action.payload };

    case 'SET_TEST_LOADING':
      return { ...state, testLoading: action.payload };

    case 'SET_QUESTION_LOADING':
      return { ...state, questionLoading: action.payload };

    case 'SET_ANSWER':
      return { ...state, result: [...state.result, action.payload] };

    default:
      return state;
  }
};
