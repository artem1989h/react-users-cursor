import React, {Component} from 'react';
import axios from 'axios';


class UserInfo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userInfo: ''
    }
    this.getToUser()
  }


  getToUser = () => {
    const { id } = this.props.match.params;
    axios.get(`https://test-users-api.herokuapp.com/users/${id}`)
    .then(({data}) => {
      this.setState({userInfo: data.data})
      console.log(this.state.userInfo, "users")

    })
  }


  render() {
    return (
      <div>
        <h4>User name: {this.state.userInfo.name}</h4>
        <h4>User age: {this.state.userInfo.age}</h4>
      </div>
    )
  }
}

export default UserInfo;