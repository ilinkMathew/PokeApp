import { h } from 'preact';
import { mount } from 'enzyme';
import { render, waitFor, screen } from '@testing-library/preact';
import Home from '../../src/routes/home';

describe('Home', () => {
    it(`Search box and 'GO' should be visible`, () => {
        const { container } = render(<Home />);
        expect(screen.getByPlaceholderText('Search Pokemon')).not.toBeNull();
        expect(screen.getByText('GO')).not.toBeNull();
    })

    it(`For the defualt state, searchResults container should  be empty`, () => {
        const { container } = render(<Home />);
        const searchResult = container.querySelector('.searchResult')
        expect(searchResult?.firstElementChild).toBeNull();
    })
})