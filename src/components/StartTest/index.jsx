import React from 'react';
import { Button, Card as CardBootstrap } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

const Card = styled(CardBootstrap)`
  width: 18rem;
  margin: 100px auto;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const StartTest = () => {
  return (
    <Wrapper>
      <Card>
        <Card.Body>
          <Card.Title>Hello dear friend</Card.Title>
          <Card.Text>Click on the button to start the test</Card.Text>
          <Link to="/test">
            <Button>Start test</Button>
          </Link>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};
