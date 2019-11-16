import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movieName : '',
      poster: '',
      comment: ''
  };
  this.onChange = this.onChange.bind(this)
  this.submitForm = this.submitForm.bind(this)
  }
  onChange(e) {
    this.setState({
      [e.target.movieName] : e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="favoriteMovie">
        <form onSubmit={this.submitForm}>
          <fieldset>
            <div className="form-data">
              <label htmlFor="movieName">
                <input
                type="text"
                id="movieName"
                name="movieName"
                onChange={this.onChange}
                value={this.state.movieName} 
                />
              </label>
            </div>
            <div className="form-data">
              <label htmlFor="comment">
                <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster} 
                />
              </label>
            </div >
            <div className="form-data">
              <label label htmlFor="comment">
                <input
                type="textarea"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment} 
                />
              </label>
            </div>
            <div className="form-data">
              <input type="submit" value="send"></input>
            </div>
          </fieldset>
        </form>

      </div>
    );
  }
}

export default FavoriteMovie;