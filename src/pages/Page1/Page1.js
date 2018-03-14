import React from 'react';
import './Page1.css';
import image from './images/404.gif';

export default class Home extends React.Component {
    render() {
        return (
            <div className="page-box">
                this is Page1~
                <img src={image}/>
            </div>
        )
    }
}