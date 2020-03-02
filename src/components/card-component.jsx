import React from 'react';
import './card.css'


export const Card = props => (
    <div className = "card-container">
        <img alt = "user" src = {props.user.avatar} height="200" width = "200"/>
        <h2>{ props.user.first_name }</h2>
        <p>{ 'Email: ' + props.user.email }</p>
    </div>
);