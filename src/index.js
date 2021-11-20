import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mongoose from 'mongoose'
import "./index.css"
import dotenv from "dotenv"
dotenv.config()


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);



