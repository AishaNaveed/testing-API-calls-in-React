import Header from './Header';
import { render, screen } from '@testing-library/react';

describe('header component', () => {
    test('should render the heading on the screen', () => {
        render(<Header/>);
        const titleElement = screen.getByText(/The World of Films/i);
        expect(titleElement).toBeInTheDocument();

        const subTitle = screen.getByText(/by Studio Ghibli/i);
        expect(subTitle).toBeInTheDocument();
    });
});