import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!");
    alertify.success(this.state.password + " added to db!");
    alertify.success(this.state.city + " added to db!");
    alertify.success(this.state.description + " added to db!");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">E-Posta</Label><br/>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="E-postanızı Girin"
              onChange={this.handleChange}
            />
          </FormGroup>
          <br/>
          <FormGroup>
            <Label for="password">Şifre</Label><br/>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Şifrenizi Girin"
              onChange={this.handleChange}
            />
          </FormGroup>
            <br/>
          <FormGroup>
            <Label for="description">Açıklama</Label><br/>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Açıklama Girin"
              onChange={this.handleChange}
            />
          </FormGroup>
            <br/>
          <FormGroup>
            <Label for="city">Şehir</Label><br/>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.handleChange}
            >
              <option>Muğla</option>
              <option>İstanbul</option>
              <option>İzmir</option>
              <option>Antalya</option>
              <option>Sakarya</option>
            </Input>
          </FormGroup><br/>
          <Button type="submit">Kaydet</Button>
        </Form>
      </div>
    );
  }
}
