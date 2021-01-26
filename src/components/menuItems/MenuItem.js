import React, { Component } from 'react';
import './MenuItems.css';
import {Link} from 'react-router-dom';
class MenuItem extends Component {
    render() {
        return (
            <div>
                <li className="menu-item">
                                   <Link to="/mobile" className="text-decoration-none">
                                    <div className="menu-item text-decoration-none" href="#">
                                        {this.props.icon}
                                        <span className="text ml-2">{this.props.name}</span>
                                        <i className="fa fa-angle-right" aria-hidden="true" > 
                                        </i>  
                                   </div>
                                   </Link>
                </li>
            </div>
        );
    }
}

export default MenuItem;