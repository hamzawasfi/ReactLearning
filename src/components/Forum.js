import React from "react";

class Forum extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      gender: "",
      location: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    alert(
      "firstname: " +
        this.state.firstname +
        "\n lastname: " +
        this.state.lastname
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={this.state.firstname}
          placeholder="first name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastname"
          value={this.state.lastname}
          placeholder="last name"
          onChange={this.handleChange}
        />
        <br />
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
            checked={this.state.gender === "male"}
          />{" "}
          male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
            checked={this.state.gender === "female"}
          />{" "}
          female
        </div>
        <select
          name="location"
          value={this.state.location}
          onChange={this.handleChange}
        >
          <option value="egypt" che>
            Egypt
          </option>
          <option value="usa">USA</option>
          <option value="saudi">Saudi</option>
        </select>
        <br />
        <button>submit</button>
      </form>
    );
  }
}

export default Forum;
