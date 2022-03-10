import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
      <div>
          <h3>Latest Products</h3>
          <Row>
              {products.map(product => (
                  <Col sm={12} md={6} lg={4} xl={2}>
                      <Product product={product}/>
                  
                  </Col>
              ))}

          </Row>
    </div>
  )
}

export default HomeScreen