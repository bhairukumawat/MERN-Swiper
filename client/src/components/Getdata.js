import React from 'react';
import axios from 'axios';

export default class Getdata extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`localhost:5000/auth/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.email}</li>
            )
        }
      </ul>
    )
  }
}
