import React from 'react';
import {Box,Typography} from '@material-ui/core';
import {red, grey} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './Products.css';
import {useState} from "react";
import { Link } from 'react-router-dom';


export const Products = (props) => {
    const [style, setStyle] = useState({display: 'none'});
   
    return (
        <div className="prd">
       <Link to="/thanhtoan" className="text-decoration-none">
       <Box
       onMouseEnter={e => {
        setStyle({display: 'block'});
        }}
        onMouseLeave={e => {
            setStyle({display: 'none'})
        }}
       p="8px" bgcolor="white" boxShadow="8px" mx="4px" borderRadius="16px">
           <img 
           src= {props.sp.product_image}
           style={{height:"250px",objectFit:"scale-down", width:"200px"}}/>
           <Box component="div" textOverflow="ellipsis">
           <Typography style= {{fontSize:"18px", color:"black",marginLeft:"20px"}} >{props.sp.product_name}</Typography></Box>
           <Typography style= {{fontSize:"13px", fontStyle:"italic", color:"#808080" ,marginLeft:"20px"}}>
               <span >{props.sp.product_title}</span>
           </Typography>
            <Typography variant="h6" style={{color:red.A700,marginLeft:"20px"}}>{props.sp.product_price}</Typography>
            <Link to="/muangay"className="text-decoration-none">
            <button style={style} type="button" className="btn btn-danger btn-block">Mua Ngay</button>
            </Link>
       </Box>
       </Link>
       </div>
    )
}
