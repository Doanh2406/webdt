import React, { Component } from 'react';
import './TopMenu.css'

class TopMenu extends Component {
    render() {
        return (
            
            <nav className="nav menu">
                
            <a className="nav-link active" href="#">
            
            ĐIỆN THOẠI</a>
            <a className="nav-link" href="#">LAPTOP</a>
            <a className="nav-link" href="#">APPLE</a>
            <a className="nav-link" href="#">PHỤ KIỆN</a>
            <a className="nav-link" href="#">MÁY CŨ GIÁ RẺ</a>
            <a className="nav-link" href="#">TABLE</a>
            <a className="nav-link" href="#">SIM & THẺ</a>
            <a className="nav-link" href="#">KHUYẾN MÃI</a>
            <a className="nav-link" href="#">TRẢ GÓP</a>
            
            </nav>
            
             
        );
    }
}

export default TopMenu;