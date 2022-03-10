import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
  return (
      <>
      <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
  <Container fluid>
    <Navbar.Brand href="/">HBooks</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nab" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav
        className="ml-auto"
      >
        <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
        <Nav.Link href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>
        
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
      </header>
      </>
  )
}

export default Header