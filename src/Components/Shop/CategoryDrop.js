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
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
        <DropdownToggle caret style={dropdownStyle}>
          {this.props.toggleName}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Brand</DropdownItem>
          <DropdownItem >{this.props.item1}</DropdownItem>
          <DropdownItem onClick = {console.log(this.props.item2)}>{this.props.item2}</DropdownItem>
          <DropdownItem>{this.props.item3}</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}


const mapStateToProps = state => state;
export default connect( mapStateToProps , {getProductsByBrand} ) (CategorySelector);