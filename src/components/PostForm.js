import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      age: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.prventDefault();
    console.log(this.state);
  };

  render() {
    const { id, first_name, last_name, email, gender, age } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              name="id"
              value={id.value}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              value={first_name.value}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={last_name.value}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email.value}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              name="gender"
              value={gender.value}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              value={age.value}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default PostForm;
