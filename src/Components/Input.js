import React from "react";

class Input extends React.Component {
  state = {
    csv: "",
  };

  handleChange = (event) => {
    this.setState({
      csv: event.target.files[0],
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.csv);
    this.upload(formData);
  };

  upload = (formData) => {
    return fetch("http://localhost:3001/records", {
      method: "POST",
      body: formData,
    })
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result.message);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Input;
