import { connect } from 'react-redux'
import Menu from '../components/Menu'
import { setMenuState, setProductMenuState } from '../actions'

const mapStateToProps = (state) => {
    return {
        hoveredItem: state.menu.hoveredItem,
        hoveredProductItem: state.menu.product.hoveredItem
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMouseOver: (value) => {
        dispatch(setMenuState(value))
    },
    onProductMouseOver: (value) => {
      dispatch(setProductMenuState(value))
    }
  }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Menu)
