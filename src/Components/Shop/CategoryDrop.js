import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {connect} from 'react-redux';
import {getProductsByBrand} from '../../ducks/reducer';

class CategorySelector extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false

    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
      const dropdownStyle={
          backgroundColor:"#D1D0CC",
          border:'none',
          margin:'10px',
          borderRadius:'10px'
      }
      const toggleName = this.props.toggleName;
      const item1 = this.props.item1;
      const item2 = this.props.item2;
      const item3 = this.props.item3;
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
        <DropdownToggle caret style={dropdownStyle}>
          {toggleName}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Brand</DropdownItem>
          <DropdownItem onClick = { () => this.props.getProductsByBrand(item1)}>{item1}</DropdownItem>
          <DropdownItem onClick = { () => {
            console.log("Click succeed:",item2)
            this.props.getProductsByBrand(item2).then(response => this.props.products)}} >{item2}</DropdownItem>
          <DropdownItem onClick = {() => this.props.getProductsByBrand(item3)}>{item3}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}


const mapStateToProps = state => state;
export default connect( mapStateToProps , {getProductsByBrand} ) (CategorySelector);