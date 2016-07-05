import { SHOW_DROPDOWN, HIDE_DROPDOWN, SHOW_PRODUCT_MENU } from '../actions';

const initialState = {
  menu: {
    product: {
    }
  }
};

/**
 * reduces a state
 * @param {Array} state - current state
 * @param {Object} action - an action to perform
 * @return {Array} new state
 */
const reducer = (state = initialState, action) => {

  switch(action.type) {
    case SHOW_DROPDOWN:
      return Object.assign({}, state, {
        menu: Object.assign({}, state.menu, {
          hoveredItem: action.item
        })
      });
    case HIDE_DROPDOWN:
      return Object.assign({}, state, {
        menu: Object.assign({}, state.menu, {
          hoveredItem: null
        })
      });
    case SHOW_PRODUCT_MENU:
      return Object.assign({}, state, {
        menu: Object.assign({}, state.menu, {
          product: {
            hoveredItem: action.item
          }
        })
      });
  }

  return state;
}

export default reducer;
