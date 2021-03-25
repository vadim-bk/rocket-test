import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router';

import { Loader } from '../Loader';
import { Results } from './Results';
import { Question } from './Question';
import { getFirstTest } from './actions';

export const Test = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { firstTest, testLoading } = useSelector(({ test }) => test);

  useEffect(() => {
    if (!firstTest) {
      dispatch(getFirstTest());
    }
  }, []);

  useEffect(() => {
    if (firstTest) {
      history.push(`/test/question/${firstTest?.id}`);
    }
  }, [firstTest]);

  return testLoading ? (
    <Loader />
  ) : (
    <Switch>
      <Route path="/test/question/:id" component={Question} />
      <Route path="/test/results" component={Results} />
    </Switch>
  );
};
