import React, {Component} from 'react';
//import './users.css';
import Users from './users.view';
import axios from 'axios';
import { Link } from 'react-router-dom'

// const users = [
//   {"id":"5d4db642be043f00148edfa8","name":"TEST","age":1456},
//   {"id":"5d4e9e246ae5630014f580b5","name":"Kostya","age":24},
//   {"id":"5d4eb480e149d80014296615","name":"Kostya","age":22},
//   {"id":"5d4ec6eba1db59001464f3c3","name":"Hatki","age":22}
// ]


class User extends Component {
  state = {
    name: this.props.name || '',
    age: this.props.age || '',
    isEdit: false,
  }

toggleEdit = () => {
    this.setState({isEdit: !this.state.isEdit})
}


changeName = (event) => {
  const {value} = event.target;
  this.setState({name: value})
}
changeAge = (event) => {
  const {value} = event.target;
  this.setState({age: value})
}
editUser = (id) => {
  const user = {
    name: this.state.name,
    age: this.state.age
  }
    axios.put(`https://test-users-api.herokuapp.com/users/${id}`, user)
    .then(res => {
        this.toggleEdit()
    })

}

  render() {
    return (
    <Users.Wrapper>
    {  this.state.isEdit ?
        <div>
          <Users.Label>
            Name:  <Users.NameInput value={this.state.name} onChange={this.changeName}/>
        </Users.Label>
          <Users.Label>
            Age:  <Users.AgeInput value={this.state.age} onChange={this.changeAge}/>
        </Users.Label>
          <Users.Button type="ADD" onClick = {() => this.editUser(this.props.id)}>Add</Users.Button>
        </div>

       :

        <div>
        <Users.Name><Link to = {`/user/${this.props.id}`}>{this.state.name}</Link></Users.Name>
        <Users.Age>Age: {this.state.age}</Users.Age>
        <Users.Button type="EDIT" onClick = {this.toggleEdit}>Edit</Users.Button>
        <Users.Button type="DELETE">Delete</Users.Button>
        </div> }
    </Users.Wrapper>
    )
  }
}



class UsersList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: ''
    }
    this.getToUsers()
  }

getToUsers = () => {
  axios.get(`https://test-users-api.herokuapp.com/users/`)
  .then(({data}) => {
    this.setState({users: data.data})
    console.log(this.state.users, "users")
  })
}

render() {
    return(
      <div>
      {this.state.users ?
         this.state.users.map(user =>
          <User {...user} key={user.id}/>
        ) : ''
      }
      </div>
    )
  }
}

export default UsersList;