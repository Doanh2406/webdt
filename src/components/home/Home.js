import React, { Component } from 'react';
import './Home.css';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LaptopIcon from '@material-ui/icons/Laptop';
import TabletAndroidIcon from '@material-ui/icons/TabletAndroid';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import WatchIcon from '@material-ui/icons/Watch';
import HomeIcon from '@material-ui/icons/Home';
import SettingsInputHdmiIcon from '@material-ui/icons/SettingsInputHdmi';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import SimCardIcon from '@material-ui/icons/SimCard';
import NoteIcon from '@material-ui/icons/Note';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MenuItem from './../menuItems/MenuItem';
import Slides from '../slider/Slides';
import Banner from './../Banner';
import { loadProducts } from '../store/actions/productAction';
import { connect } from 'react-redux';
import {Products} from '../Products/Products';
import { firestore, firebaseAuth } from '../../firebase';
import {Box,Typography} from '@material-ui/core';
import {green, grey} from '@material-ui/core/colors';

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            Page: "Home",
            loading: false,
            products: null,
        }

    }
    componentDidMount(){
        console.log("oke");
        firestore
        .collection("DATAWEB")
        .get()
        .then((querySnapshot)=>{
            console.log(querySnapshot);
            let products = [];
            if(!querySnapshot.empty){
                querySnapshot.forEach((doc)=>{
                   products.push(doc.data());
                });
            }
            this.setState({
                products:products,
            })
            console.log(products);
        }).catch((error) =>{
           console.log(error);
        });
    }
    
    render() {
        return (
            <div className="container-fuid my-3 mx-3 box_sliding">
                <div className="col-md-12 mb-3">
                    
                    <div className="row">
                    <div className="col-md-2 col-sm-2 col-xs-2 ">
                        <div className="row pr-2">
                            <ul className="col-md-12 list-unstyled m-0 bg-white border-radius shadow-sm box-list-menu">
                               <MenuItem icon={<PhoneIphoneIcon/>} name="Điện Thoại"/>
                               <MenuItem icon={<LaptopIcon/>} name="Laptop"/>
                               <MenuItem icon={<TabletAndroidIcon/>} name="Máy Tính Bảng"/>
                               <MenuItem icon={<MusicNoteIcon/>} name="Âm Thanh"/>
                               <MenuItem icon={<WatchIcon/>} name="Đồng Hồ"/>
                               <MenuItem icon={<HomeIcon/>} name="Nhà Thông Minh"/>
                               <MenuItem icon={<SettingsInputHdmiIcon/>} name="Phụ Kiện"/>
                               <MenuItem icon={<LocalAtmIcon/>} name="Thu Mua Đồ Cũ"/>
                               <MenuItem icon={<RotateLeftIcon/>} name="Hàng Đổi Trả"/>
                               <MenuItem icon={<SimCardIcon/>} name="Sim thẻ"/>
                               <MenuItem icon={<NoteIcon/>} name="Tin Công Nghệ"/>
                               <MenuItem icon={<LocalOfferIcon/>} name="Khuyến Mãi"/>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-7 col-xs-7">
                        <Slides />

                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <Banner/>

                    </div>
                 </div>
                </div>
                <div className="col-md-12 mb-3" >
                    <div className="row">
                    <img src='https://cdn.cellphones.com.vn/media/wysiwyg/1200x75---iPhone12-nn.gif' width="100%" height="75px" />
                    </div>
                </div>
                <Box  bgcolor="white" boxShadow="4px" mx="4px" style={{border:" 1px solid #aca5a5",position:"static"}}>
                    <Box p="10px" style={{border:" 1px solid #aca5a5", background:"#f0dddd"}}>
                        <h3>ĐIỆN THOẠI NỔI BẬT</h3>
                    </Box>
                    <div className="container mb-2 box-brand" >
                    
                    {this.state.products && 
                    this.state.products.map(sp =>{
                        console.log(sp);
                        let gridproducts = [];
                        for(let index =1; index < 11; index ++){
                            let data = {};
                            data["product_image"]= sp["product_image_" + index];
                            data["product_name"]= sp["product_name_" + index];
                            data["product_title"]= sp["product_title_" + index];
                            data["product_price"]= sp["product_price_" + index];
                            gridproducts.push(data);

                        }
                        return (
                            <Box>

                            <Box display="flex" p="10px">
                                <div className="row">
                                <Products sp ={gridproducts[0]}/>
                                <Products sp ={gridproducts[1]}/>
                                <Products sp ={gridproducts[2]}/>
                                <Products sp ={gridproducts[3]}/>
                                <Products sp ={gridproducts[4]}/>
                                </div>
                            </Box>
                            <Box display="flex" p="10px">
                                <div className="row">
                                <Products sp ={gridproducts[5]}/>
                                <Products sp ={gridproducts[6]}/>
                                <Products sp ={gridproducts[7]}/>
                                <Products sp ={gridproducts[8]}/>
                                <Products sp ={gridproducts[9]}/>
                                </div>
                            </Box>
                            </Box>
                        )}
                        )
                        }
                    </div>
                    </Box>


                <Box  bgcolor="white" boxShadow="4px" mx="10px" style={{border:" 1px solid #aca5a5",position:"static"}} >
                    <Box p="10px" style={{border:" 1px solid #aca5a5", background:"#f0dddd"}}>
                        <h3>LAPTOP NỔI BẬT</h3>
                    </Box>
                    <div className="container mb-2 box-brand">
                    
                    {this.state.products && 
                    this.state.products.map(sp =>{
                        console.log(sp);
                        let gridproducts = [];
                        for(let index =20; index < 30; index ++){
                            let data = {};
                            data["product_image"]= sp["product_image_" + index];
                            data["product_name"]= sp["product_name_" + index];
                            data["product_title"]= sp["product_title_" + index];
                            data["product_price"]= sp["product_price_" + index];
                            gridproducts.push(data);

                        }
                        return (
                            <Box>

                            <Box display="flex" p="10px">
                                <div className="row">
                                <Products sp ={gridproducts[0]}/>
                                <Products sp ={gridproducts[1]}/>
                                <Products sp ={gridproducts[2]}/>
                                <Products sp ={gridproducts[3]}/>
                                <Products sp ={gridproducts[4]}/>
                                </div>
                            </Box>
                            <Box display="flex" p="10px">
                                <div className="row">
                                <Products sp ={gridproducts[5]}/>
                                <Products sp ={gridproducts[6]}/>
                                <Products sp ={gridproducts[7]}/>
                                <Products sp ={gridproducts[8]}/>
                                <Products sp ={gridproducts[9]}/>
                                </div>
                            </Box>
                            </Box>
                        )}
                        )
                        }
                    </div>
                    </Box>



                <Box  bgcolor="white" boxShadow="4px" mx="10px" marginTop="15px" style={{border:" 1px solid #aca5a5",position:"static"}}>
                    <Box p="10px" style={{border:" 1px solid #aca5a5", background:"#f0dddd"}}>
                        <h3>TABLE VÀ PHỤ KIỆN</h3>
                    </Box>
                    <div className="container mb-2 box-brand">
                    
                    {this.state.products && 
                    this.state.products.map(sp =>{
                        console.log(sp);
                        let gridproducts = [];
                        for(let index =40; index < 50; index ++){
                            let data = {};
                            data["product_image"]= sp["product_image_" + index];
                            data["product_name"]= sp["product_name_" + index];
                            data["product_title"]= sp["product_title_" + index];
                            data["product_price"]= sp["product_price_" + index];
                            gridproducts.push(data);

                        }
                        return (
                            <Box>

                            <Box display="flex" p="10px">
                                <div className="row">
                                <Products sp ={gridproducts[0]}/>
                                <Products sp ={gridproducts[1]}/>
                                <Products sp ={gridproducts[2]}/>
                                <Products sp ={gridproducts[3]}/>
                                <Products sp ={gridproducts[4]}/>
                                </div>
                            </Box>
                            <Box display="flex" p="10px">
                                <div className="row">
                                <Products sp ={gridproducts[5]}/>
                                <Products sp ={gridproducts[6]}/>
                                <Products sp ={gridproducts[7]}/>
                                <Products sp ={gridproducts[8]}/>
                                <Products sp ={gridproducts[9]}/>
                                </div>
                            </Box>
                            </Box>
                        )}
                        )
                        }
                    </div>
                    </Box>
            
            </div>
        );
    }
}


  export default Home;
  