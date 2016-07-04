import { connect } from 'react-redux'
import Menu from '../components/Menu'
import { setState } from '../actions'

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterChange: (name, value) => {
    }
};
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Menu)
