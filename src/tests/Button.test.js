import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

it('renders additional className if value is an operator', () => {
  const onClick = jest.fn();
  const { getByText } = render(
    <Button onClick={onClick}>+</Button>,
  );

  const button = getByText('+');
  fireEvent.click(button);

  expect(button).toHaveClass('button-container operator');
  expect(onClick).toHaveBeenCalledTimes(1);

  expect(button).toMatchSnapshot();
});

it('renders without additional className if value is not an operator', () => {
  const onClick = jest.fn();
  const { getByText } = render(
    <Button onClick={onClick}>5</Button>,
  );

  const button = getByText('5');
  fireEvent.click(button);

  expect(button).toHaveClass('button-container');
  expect(button).not.toHaveClass('operator');
  expect(onClick).toHaveBeenCalledTimes(1);

  expect(button).toMatchSnapshot();
});
