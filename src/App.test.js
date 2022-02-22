import { render, screen } from '@testing-library/react';
import Olympic from './App';

test('renders learn react link', () => {
  render(<Olympic />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
