import React, { PropTypes } from 'react'
import productTypes from '../../productTypes'
import ProductItem from '../ProductItem'

const Products = ({ className, onProductMouseOver, hoveredProductItem }) => {
    return (
        <div className={className} id="products_dropdown">
          <ul className="nav_product_list">
            {productTypes.map(
              (obj, index) =>
                <li className={hoveredProductItem === index ? "active" : null}
                  onMouseOver={() => onProductMouseOver(index) } key={index}>{obj.name}</li>
            )}
          </ul>
          {<ProductItem item={productTypes.find((obj, index) => index === hoveredProductItem) || productTypes[0]}/> }
        </div>
    )
}

export default Products
