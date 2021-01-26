import React, { Component } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Height } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RoomIcon from '@material-ui/icons/Room';
import CallIcon from '@material-ui/icons/Call';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {Link} from 'react-router-dom';




class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <MenuIcon  className="menu-icon" fontSize="large"/>
      <Link to="/"  className="navbar-brand" href="#">PhonePhone</Link>
      <div className="box mr-4 dropdown">
        <a className="texts text-decoration-none" id="dropdownMenuLink" data-toggle="dropdown" >
          <p className="mb-0 text-decoration-none">Xem giá tồn kho</p>
          <p className="mb-0">
            Hồ Chí Minh&emsp;
            <ExpandMoreIcon className="expand-icon"/>
          </p>
        </a>  
        <div className="dropdown-menu" >
        <a className="dropdown-item" href="#">Menu 1</a>
        <a className="dropdown-item" href="#">Menu item 2</a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">Menu 3 ...</a>
    </div>
      </div>
      <div className="">
       <form className="form-inline">
          <input className="form-control w-100" type="search" placeholder="Bạn cần tìm gì?"/>
          <SearchIcon className="header-search" fontSize="default"/>
        </form>
      </div>
      <div className="box-main d-flex ml-1 text-decoration-none">
        <a className="box-about d-flex flex-fill ml-1 text-decoration-none">
          <div className="box-icon mr-1">
            <CallIcon fontSize="large"/>
          </div>
          <div className="box-content  text-decoration-none">
            <p className="mb-0 title text-decoration-none ">Gọi mua hàng</p>
            <p className="mb-0 title text-decoration-none "><strong>1900.1010</strong></p>
          </div>
        </a>
        <Link to="cuahang" className="box-about d-flex flex-fill ml-5 text-decoration-none">
          <div className="box-icon mr-1">
            <RoomIcon fontSize="large"/>
          </div>
          <div className="box-content mt-3 text-decoration-none">
            <p className="title text-decoration-none">Tìm cửa hàng</p>
          </div>
        </Link>
        <Link to="/giohang" className="box-about d-flex flex-fill ml-5 text-decoration-none">
          
          <div className="box-icon mr-1">
            <LocalMallIcon fontSize="large"/>
          </div>
          <div className="box-content text-decoration-none">
            <p className="title mt-3">Giỏ Hàng</p>
          </div>
        </Link>
      </div>
    </nav>
    
    );
  }
}

export default Header;