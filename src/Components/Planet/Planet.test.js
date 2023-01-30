import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Planet from './Planet';

test("should contain basic info, residents and films components", () => {
    render(<Planet />);
    const details = screen.getByText(/basic info:/i);
    const residents = screen.getByText(/residents:/i);
    const films = screen.getByText(/films:/i);

    expect(details).toBeInTheDocument();
    expect(residents).toBeInTheDocument();
    expect(films).toBeInTheDocument();
});

test("should have three loaders", () => {
    render(<Planet />);
    const loaders = screen.getAllByTestId('loader');
    expect(loaders.length).toBe(3);
});