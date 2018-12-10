import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,  } from 'reactstrap';
import './Navbar.css'
import logo from '../Assets/logo.png';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand><img className="logo"src={logo}/></NavbarBrand>
          <Navbar className ="santren" href="#">Santren Koding</Navbar>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Kajian Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Mondok Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Kitab Koding</NavLink>
              </NavItem>
              <NavItem>
              <a class="btn btn-outline-primary" href="/login">Masuk/Daftar</a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}