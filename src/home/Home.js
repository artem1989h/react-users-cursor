import React from 'react';
import { NavLink } from 'react-router-dom'
import './home.css'


const Home = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/">Главная</NavLink></li>
          <li><NavLink to="/userslist">Список юзеров</NavLink></li>
          <li><NavLink to="/documentation">Документация</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home;
