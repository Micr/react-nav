import { SHOW_DROPDOWN } from '../actions';

const initialState = {
    menuHoveredItem: null
};

/**
 *	reduces a store
 * @param  {Array} store - current store
 * @param  {Object} action - an action to perform
 * @return {Array} new store
 */
const reducer = (state = initialState, action) => {

    switch(action.type) {
        case SHOW_DROPDOWN:
            return Object.assign({}, state, {
                menuHoveredItem: action.item
            })
    }

    return state;
}

export default reducer;
