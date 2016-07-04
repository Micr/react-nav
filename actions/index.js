export const SHOW_DROPDOWN = 'SHOW_DROPDOWN';

function setMenuState(item) {
    return {
        type: SHOW_DROPDOWN,
        item: item
    };
}

export { setMenuState };
