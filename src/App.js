import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Student from './students/students';
//import Post from './students/Post';
//import UsersList from './users/users.controller';
import Home from './home/Home';
import UsersList from './users/users.controller';
import Documentation from './documentation/Documentation';
import UserInfo from './userinfo/UserInfo';


// const post = {
//   author: "Yevheniia Kyryliuk",
//   title: "Week #11 (Mon) - React app (styled-components)",
//   image: "https://scontent.fhrk2-1.fna.fbcdn.net/v/t1.0-9/67779841_2425357304453751_8147511213429882880_n.jpg?_nc_cat=105&_nc_oc=AQmwacDeBYo_RelqMGktGr0twLE5YMhJnZ9iM4y2_zS55xvYMIRo8gTUGXVrnz9CpsY&_nc_ht=scontent.fhrk2-1.fna&oh=013eab63c543d8488d0e3dee8c84bad6&oe=5DD28C61"
// }

const App = (props) => {
  return (
    <Router>
      <Route path = '/' component = {Home} />
      <Route path = '/userslist' component = {UsersList} />
      <Route path = '/user/:id' component = {UserInfo} />
      <Route path = '/documentation' component = {Documentation} />
    </Router>
)};


export default App;
