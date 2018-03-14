import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Review extends React.Component {
  render() {
    const nameAndEmail = {
      width: "30%"
    }
    const reviewBoxStyle = {
      height: "300px"

    }
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText"> Name:</Label>
          <Input type = "text" name  = "text" id = "exampleText" style = {nameAndEmail}></Input>
        </FormGroup>
        <FormGroup>
        <Label for="exampleText" > Email:</Label>
        <Input type = "text" name  = "text" id = "exampleText" style = {nameAndEmail}></Input>
      </FormGroup>
        <FormGroup>
          <Label for="exampleText">Review</Label>
          <Input type="textarea" name="text" id="exampleText" style = {reviewBoxStyle} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Review;