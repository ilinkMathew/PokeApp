import { h } from 'preact';
import { render, waitFor } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Favouries from '../src/components/favourites/favourites';
import { favList } from './__mocks__/DataMocks';

describe('Favourites', () => {
    it(`Given the 'Favourite list', the title should display 'Favourite (X) where X is no of favs'`, () => {
        const onFavChange = jest.fn()
        const { container } = render(<Favouries onFavChange={() => onFavChange} favList={favList} />)
        const title = container.querySelector('h3')
        if (title) {
            expect(title.textContent).toEqual(`Favourites (${favList.length})`);
        }

    })

    it(`Given the 'Favourite list', has x items it should display x fav items'`, () => {
        const onFavChange = jest.fn()
        const { container } = render(<Favouries onFavChange={() => onFavChange} favList={favList} />)
        const noOfFav = container.querySelectorAll('.pokemon').length
        expect(noOfFav).toEqual(favList.length)
    })

    it(`Given the 'Favourite list', if the user clicks like button fav item should be removed`, () => {
        const onFavChange = jest.fn()
        const { container } = render(<Favouries onFavChange={() => onFavChange} favList={favList} />)
        const likeButtons = container.querySelectorAll('#like-button')
        userEvent.click(likeButtons[0])
        const noOfFav = container.querySelectorAll('.pokemon').length
        waitFor(() => {
            expect(noOfFav).toEqual(favList.length - 1)
            expect(onFavChange).toBeCalled()
        })

    })

})