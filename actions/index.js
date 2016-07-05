export const SHOW_DROPDOWN = 'SHOW_DROPDOWN';
export const SHOW_PRODUCT_MENU = 'SHOW_PRODUCT_MENU';

function setMenuState(item) {
    return {
        type: SHOW_DROPDOWN,
        item: item
    };
}

function setProductMenuState(item) {
    return {
        type: SHOW_PRODUCT_MENU,
        item: item
    };
}

export { setMenuState, setProductMenuState };
