import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import Pokemon from '../src/components/pokemon/pokemon';
import { pokemon } from './__mocks__/DataMocks';

describe('Pokemon', () => {
    it(`Given the 'Pokemon' data is should render the name and shakespearean desc`, () => {

        const onPokemonChange = jest.fn()
        const { container } = render(<Pokemon onChange={onPokemonChange} pokeMon={pokemon} />)
        const title = screen.getByText(pokemon.name)
        expect(title.textContent).toEqual(pokemon.name);
        const desc = container.querySelector('p')?.textContent;
        expect(desc).toEqual(pokemon.shakespeareanDes);
    })

})