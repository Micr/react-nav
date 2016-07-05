import React, { PropTypes } from 'react'

const ProductItem = ({ item }) => {
  return (
    <div className="nav__product_item_block">
      {item.name}
    </div>
  )
}

export default ProductItem
