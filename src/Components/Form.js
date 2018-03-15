import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
class Review extends React.Component {
  constructor(){
    super()
    this.state = {
      productName:'',
      productPrice:'',
      productDescription:'',

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleType = this.handleType.bind(this);
  }
  handleName(e){
    this.setState({productName:e.target.value})
  }
  handlePrice(e){
    this.setState({productPrice:e.target.value})
  }
  handleType(e){
    this.setState({productDescription:e.target.value})
  }
  handleSubmit(){
      axios.post('/api/products/add', {
          productName:this.state.productName,
          productDescription:this.state.productDescription,
          productPrice:this.state.productPrice

      }).then((res) => {
          console.log(res)
      })
      
  }
  render() {
    const nameAndEmail = {
      width: "100%"
    }
    const descriptionStyle = {
      height: "200px",
      width:"400px"

    }
    console.log("name:",this.state.productName,"price:",this.state.productPrice,"desc:",this.state.productDescription)
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText"> Product Name:</Label>
          <Input type = "text" name  = "text" id = "exampleText" style = {nameAndEmail} onChange= {this.handleName}></Input>
        </FormGroup>
        <FormGroup>
        <Label for="exampleText" > Product Price</Label>
        <Input type = "text" name  = "text" id = "exampleText" style = {nameAndEmail} onChange = {this.handlePrice}></Input>
      </FormGroup>
        <FormGroup>
          <Label for="exampleText">Product Description</Label>
          <Input type="textarea" name="text" id="exampleText" style = {descriptionStyle} onChange = {this.handleType}/>
        </FormGroup>
        <Button onClick = {this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}

export default Review;