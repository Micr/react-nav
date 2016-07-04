import { connect } from 'react-redux'
import Menu from '../components/Menu'
import { setMenuState } from '../actions'

const mapStateToProps = (state) => {
    return {
        hoveredItem: state.menuHoveredItem
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMouseOver: (value) => {
        dispatch(setMenuState(value))
    }
}
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Menu)
