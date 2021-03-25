import React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';

import { StartTest } from '../StartTest';
import { Test } from '../Test';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100vh;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const App = () => {
  // const { loading } = useSelector(({ app }) => app);

  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={StartTest} />
        <Route path="/test" component={Test} />
      </Switch>
    </Wrapper>
  );
};
