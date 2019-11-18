import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title : '',
      poster: '',
      comment: ''
  };
  this.onChange = this.onChange.bind(this)
  this.submitForm = this.submitForm.bind(this)
  }
  onChange(e) {
    this.setState({
      [e.target.title]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();

    const url = "https://post-a-form.herokuapp.com/api/movies/";
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };

    fetch(url, config) 
    .then(res => res.json())
    .then(res => {
    if (res.error) {
      alert(res.error);
    } else {
      alert(`New movie added with Id ${res}!`);
    }
  }).catch(e => {
    console.error(e);
    alert('Error when adding a movie');
  });

    
  }

  render() {
    return (
      <div className="favoriteMovie">
        <h1>Enter a movie</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>

            <div className="form-data">
              <label htmlFor="title"> Movie Name </label>
                <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title} 
                />
            </div>

            <div className="form-data">
              <label htmlFor="poster"> Poster </label>
                <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster} 
                />
            </div>

            <div className="form-data">
              <label label htmlFor="comment"> Comment </label>
                <input
                type="textarea"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment} 
                />
            </div>
            <div className="form-data">
              <input type="submit" value="send" />
            </div>
          </fieldset>
        </form>

      </div>
    );
  }
}

export default FavoriteMovie;