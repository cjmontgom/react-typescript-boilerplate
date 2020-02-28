import React from "react";

const fetch = require('node-fetch');

type User = {
  username: string;
};

class App extends React.PureComponent {
  state = { username: null };

  componentDidMount() {
    fetch("/api/getUsername")
      .then((res: Response) => res.json())
      .then((user: User) => this.setState({ username: user.username }));
  }

  // fetch('./api/some.json')
  //     .then(
  //         function(response) {
  //             if (response.status !== 200) {
  //                 console.log('Looks like there was a problem. Status Code: ' +
  //                     response.status);
  //                 return;
  //             }
  //
  //             // Examine the text in the response
  //             response.json().then(function(data) {
  //                 console.log(data);
  //             });
  //         }
  //     )
  //     .catch(function(err) {
  //     console.log('Fetch Error :-S', err);
  //     });

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? (
          <h1>{`Hello ${username}`}</h1>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
      </div>
    );
  }
}

export default App;
