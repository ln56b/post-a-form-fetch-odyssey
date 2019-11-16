import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movieName : '',
      poster: '',
      comment: ''
     };
  }
  render() {
    return (
      <div className="favorite-movie">
        <form>
          <fieldset>
            <div>
              <label>
                <input />
              </label>
            </div>
            <div>
              <label>
                <input />
              </label>
            </div>
            <div>
              <label>
                <input />
              </label>
            </div>
          </fieldset>
        </form>

      </div>
    );
  }
}

export default FavoriteMovie;