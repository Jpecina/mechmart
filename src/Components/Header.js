import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import {Link} from 'react-router-dom';

class Header extends Component {
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
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/">MechMart</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#/shop">Shop</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#/cart">Cart</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={process.env.REACT_APP_LOGIN}>Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;