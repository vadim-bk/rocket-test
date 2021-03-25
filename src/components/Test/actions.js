import axios from 'axios';
import TestService from '../../mockedData';

export const getFirstTest = () => async (dispatch) => {
  try {
    dispatch({ type: 'SET_TEST_LOADING', payload: true });
    const { data } = await TestService.getFirstTest();
    dispatch({ type: 'GET_FIRST_TEST', payload: data });
  } catch (error) {
    console.error(error);
  } finally {
    dispatch({ type: 'SET_TEST_LOADING', payload: false });
  }
};

export const getTestById = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'SET_QUESTION_LOADING', payload: true });
    await axios.all([TestService.getTestById(id), TestService.getNextTest(id)]).then(
      axios.spread((res1, res2) => {
        dispatch({ type: 'GET_TEST_BY_ID', payload: res1 });
        dispatch({ type: 'GET_NEXT_TEST', payload: res2 });
      })
    );
  } catch (error) {
    console.error(error);
  } finally {
    dispatch({ type: 'SET_QUESTION_LOADING', payload: false });
  }
};

export const setAnswerToStore = (payload) => (dispatch) => {
  dispatch({ type: 'SET_ANSWER', payload });
};
