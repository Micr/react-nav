export const REQUEST_OFFERS = 'REQUEST_OFFERS';

function setMenuState(item) {
    return {
        type: SHOW_DROPDOWN,
        item: item
    };
}

export { setMenuState };
