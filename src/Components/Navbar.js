import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Navbar.css';
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
          <NavbarBrand>
            <img className="logo" src={logo} />
          </NavbarBrand>
          <Navbar
            className="santren"
            onClick={() => {
              this.props.layout('Home');
            }}>
            Santren Koding
          </Navbar>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  onClick={() => {
                    this.props.layout('Kajian');
                  }}>
                  Kajian Koding
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    this.props.layout('Mondok');
                  }}>
                  Mondok Koding
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() => {
                    this.props.layout('Kitab');
                  }}>
                  Kitab Koding
                </NavLink>
              </NavItem>
              <NavItem>
                <a class="btn btn-outline-primary" href="/login">
                  Masuk/Daftar
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
