export const REQUEST_OFFERS = 'REQUEST_OFFERS';
export const RECEIVE_OFFERS = 'RECEIVE_OFFERS';
export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RESULT_LOSS = 'RESULT_LOSS';

function requestOffers () {
  return {
    type: REQUEST_OFFERS
  };
}

function requestLocations () {
  return {
    type: REQUEST_LOCATION
  };
}

function receiveOffers (json) {
  return {
    type: RECEIVE_OFFERS,
    offers: json,
    receivedAt: Date.now()
  }
}

function receiveLocations (locations) {
  return {
    type: RECEIVE_LOCATION,
    locations: locations,
    receivedAt: Date.now()
  }
}

function showError() {
  return {
    type: RECEIVE_LOCATION,
    receivedAt: Date.now()
  };
}

function fetchOffers () {

  return function (dispatch) {

    dispatch(requestOffers())

    return fetch('data/offers.json')
    .then(response => response.json())
    .then(json =>
      dispatch(receiveOffers(json))
    )

  }
}

function applyFilter(filter, value) {
  return function (dispatch) {
    dispatch(requestOffers())
    return fetch('data/filter/' + filter + '/' + value)
    .then(response => response.json())
    .then(json =>
      dispatch(receiveOffers(json))
    )
  }
}

function getLocations(offers) {

  var promises = [];

  return function (dispatch) {

    dispatch(requestLocations());

    offers.forEach(function (offer) {
      promises.push(fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + offer.address + '&key=AIzaSyCcgC7yPuZfoIk_IWq0alaHhoxXrvRPDwY'))
    });

    return Promise.all(promises).then(responses => {
      Promise.all( responses.map(response => response.json()) )
      .then( results => dispatch( receiveLocations(results.filter(result => {
        if (result.results.length ) {
          return true;
        } else {
          dispatch(showError);
          return false;
        }
      }).map(result => result.results[0].geometry.location)) ) )
    });
  }
}

export { fetchOffers, getLocations, applyFilter };
