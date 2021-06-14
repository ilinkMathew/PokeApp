import { h } from 'preact';
import { render, waitFor, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Search from '../src/components/search/search';

describe('Search', () => {
    it(`Search component should have a textbox and a button`, () => {
        const searchFn = jest.fn()
        render(<Search onSearch={() => searchFn} />);
        const textbox = screen.getByPlaceholderText('Search Pokemon');
        const button = screen.getByText('GO');
        expect(textbox).not.toBeNull()
        expect(button).not.toBeNull();
    })
})
it(`On typing the search text, search text on the component should be updated`, () => {
    const searchFn = jest.fn();
    render(<Search onSearch={() => searchFn} />);
    const textbox = screen.getByPlaceholderText('Search Pokemon');
    userEvent.type(textbox, 'pikachu');
    waitFor(() => {
        expect(textbox.textContent).toEqual('pikachu')
    })
})

it(`On typing the search text and cliking 'Go' onSearch event should be called`, () => {
    const searchFn = jest.fn();
    render(<Search onSearch={() => searchFn} />);
    const textbox = screen.getByPlaceholderText('Search Pokemon');
    userEvent.type(textbox, 'pikachu');
    waitFor(() => {
        const button = screen.getByText('GO');
        userEvent.click(button)
        waitFor(() => {
            expect(searchFn).toHaveBeenCalled();
        })
    })
})