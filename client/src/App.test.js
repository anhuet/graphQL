import { render, screen } from '@testing-library/react';
import App from './App';
import {GET_ALL_BOOKS} from 'graphql/query.js'
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
