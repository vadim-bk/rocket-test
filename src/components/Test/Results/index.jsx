import React from 'react';
import { Card as CardBootstrap } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Card = styled(CardBootstrap)`
  width: 18rem;
  margin: 100px auto;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const Results = () => {
  const { result } = useSelector(({ test }) => test);

  const countRightAnswers = result?.filter((result) => result?.answer === result?.rightAnswerId)
    ?.length;

  return (
    <Card>
      <Card.Body>Your results: {countRightAnswers} right answers</Card.Body>
    </Card>
  );
};
