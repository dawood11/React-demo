import { render, screen } from '@testing-library/react';

import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('just a test', () => {
  expect(1+1).toEqual(2);
  // expect(1+1).toEqual(3);
});

test('renders calculate avg button text', () => {
  render(<App />);
  const buttonElement = screen.getByText('Regn ut gjennomsnitssalder');
  expect(buttonElement).toBeInTheDocument();
});
