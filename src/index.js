import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from "./Components/Game/Game.js"
// import Card from './Card';
// import Firstpage from './Firstpage';
// import Signup from './signup/Signup';
import mongoose from 'mongoose'
import "./index.css"
import dotenv from "dotenv"
dotenv.config()

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);



