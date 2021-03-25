import React, { useEffect, useState } from 'react';
import { Button, Card as CardBootstrap, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import { Loader } from '../../Loader';
import { getTestById, setAnswerToStore } from '../actions';

const Card = styled(CardBootstrap)`
  width: 18rem;
  margin: 100px auto;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const Item = styled(ListGroup.Item)`
  background: ${(props) => (props.active ? '#85b6ff' : 'inherit')} !important;
`;

export const Question = (props) => {
  const id = +props.match.params.id;

  const [answerId, setAnswerId] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();
  const { currentTest, nextTest } = useSelector(({ test }) => test);

  useEffect(() => {
    dispatch(getTestById(id));
  }, [id]);

  const handleSelectAnswer = (id) => {
    setAnswerId(id);
  };

  const handleSubmit = () => {
    if (answerId) {
      dispatch(
        setAnswerToStore({ id, answer: answerId, rightAnswerId: currentTest?.rightAnswerId })
      );
      setAnswerId(null);
      if (!nextTest) {
        return history.push('/test/results');
      }
      history.push(`/test/question/${nextTest?.id}`);
    }
  };

  return currentTest?.id !== id ? (
    <Loader />
  ) : (
    <Card>
      <Card.Img variant="top" src={currentTest?.image} />
      <Card.Body>
        <Card.Title>{currentTest?.id}.</Card.Title>
        <Card.Text>{currentTest?.question}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {currentTest?.answers?.map((answer) => (
          <Item
            key={answer?.id}
            active={answer?.id === answerId}
            action
            onClick={() => handleSelectAnswer(answer?.id)}
          >
            {answer?.text}
          </Item>
        ))}
      </ListGroup>
      <Card.Body>
        <Button disabled={!answerId} onClick={handleSubmit}>
          Next question
        </Button>
      </Card.Body>
    </Card>
  );
};
