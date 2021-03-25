import React from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loader = () => {
  return (
    <SpinnerWrapper>
      <Spinner animation="border" />
    </SpinnerWrapper>
  );
};
