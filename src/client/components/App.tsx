import React from 'react';
import { server } from '../../config';

const fetch = require('node-fetch');

type User = {
  username: string;
};

class App extends React.PureComponent {
  state = { username: null };

  componentDidMount() {
    fetch(`${server}/api/getUsername`)
      .then((res: Response) => res.json())
      .then((user: User) => this.setState({ username: user.username }));
  }
  //  .catch(function(err) {
  //    console.log('Fetch Error :-S', err);
  //  });

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? (
          <h1>{`Hello ${username}`}</h1>
        ) : (
          <h1>Loading... please wait!</h1>
        )}
      </div>
    );
  }
}

export default App;
