import { connect } from 'react-redux'
import Products from '../components/Products'
import { fetchOffers, getLocations, applyFilter } from '../actions'

var locationsFetched;

const mapStateToProps = (state) => {
    return {
      offers: state.offers || [],
      locations: state.locations || [],
      isFetching: {
        location: state.isFetching.location,
        offers: state.isFetching.offers
      }
    }
}

const mapDispatchToProps = (dispatch) => {

  locationsFetched || dispatch(fetchOffers())
    .then(
        action => dispatch(getLocations(action.offers)).then(
            () => locationsFetched = true
        )
    );

  return {
    onFilterChange: (name, value) => {
        dispatch(applyFilter(name, value)).then(response => dispatch(getLocations(response.offers)));
    }
  }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Products)
