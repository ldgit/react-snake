/**
 * @vitest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import 'vitest-dom/extend-expect';
import { test, expect } from 'vitest';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText(/Snake/)).toBeInTheDocument();
});
