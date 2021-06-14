import { h } from 'preact';
import { render, fireEvent, waitFor } from '@testing-library/preact';

import Like from '../src/components/like/like';

describe('Like', () => {
    test(`if 'isFav' is false, the like button should not 'active' css class`, () => {
        const { container } = render(<Like isfav={false} />)
        expect(isActive(container, 'active')).toBeFalsy()
    })

    test(`if 'isFav' is false, the like button should have the 'active' css class`, () => {
        const { container } = render(<Like isfav={true} />)
        expect(isActive(container, 'active')).toBeTruthy()
    })

    test(`if on click the Like button the, button should be have 'active' css class`, () => {
        const { container } = render(<Like isfav={false} />)
        fireEvent.click(container)
        waitFor(() => {
            expect(isActive(container, 'active')).toBeTruthy()
        })
    })

})


function isActive(container: Element, className: string) {
    return container.firstElementChild?.classList.contains('active')
}