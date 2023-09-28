import React from 'react';
import { render } from '@testing-library/react';
import Screen from '../components/Display';

describe('Screen Component', () => {
  it('renders input', () => {
    const { getByText } = render(<Screen input="1" />);

    // Use React Testing Library to check if the component renders the input text correctly
    const screenElement = getByText('1');

    // Assert that the screen element is in the document

    expect(screenElement).toBeInTheDocument();
    expect(screenElement).toMatchSnapshot();
  });
  it('renders input', () => {
    const { getByText } = render(<Screen input="99.9" />);

    // Use React Testing Library to check if the component renders the input text correctly
    const screenElement = getByText('99.9');

    // Assert that the screen element is in the document

    expect(screenElement).toBeInTheDocument();
    expect(screenElement).toMatchSnapshot();
  });
});
