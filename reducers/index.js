import { REQUEST_OFFERS, RECEIVE_OFFERS, REQUEST_LOCATION, RECEIVE_LOCATION } from '../actions';

const initialState = {
  slogan: "It's your city, live in it",
  imagesPath: '/static/images',
  choices: [
    'rent',
    'review',
    'sublease'
  ],
  isFetching: {
    offers: false,
    location: false
  },
  offers: [],
  locations: []
};

/**
 *	reduces a store
 * @param  {Array} store - current store
 * @param  {Object} action - an action to perform
 * @return {Array} new store
 */
const reducer = (state = initialState, action) => {

    switch(action.type) {
        case REQUEST_OFFERS:
        case REQUEST_LOCATION:
            return Object.assign({}, state, {
                isFetching: Object.assign({}, state.isFetching, {
                  offers: action.type === REQUEST_OFFERS,
                  location: action.type === REQUEST_LOCATION
                }),
                didInvalidate: false
            })
        case RECEIVE_OFFERS:
            return Object.assign({}, state, {
                isFetching: Object.assign({}, state.isFetching, {
                  offers: false
                }),
                didInvalidate: false,
                offers: action.offers,
                lastUpdated: action.receivedAt
            })
        case RECEIVE_LOCATION:
            return Object.assign({}, state, {
                isFetching: Object.assign({}, state.isFetching, {
                  location: false
                }),
                didInvalidate: false,
                locations: [
                    ...state.locations,
                    ...action.locations
                ],
                lastUpdated: action.receivedAt
            })
    }

    return state;
}

export default reducer;
