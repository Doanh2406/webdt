import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';
import border from './border.png';
import './index.css';



class MuaNgay extends Component{
  constructor(props){
    super(props)
    this.state = {
      quantity:1,
      price:14000000
    }
  }
  onUpdateQuantity = (price,quantity) =>{
    if(quantity>0)
    {
      this.setState({
        quantity:quantity,
        price:price*quantity,
      })
    }
  }
  render(){
      var {quantity} = this.state;
      console.log(quantity);
      var {price} = this.state;
  
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-2">

            </div>
            <div className="col-5">
              <div className="breadcrumbs">
                <ul>
                  <li className="home">
                      <i className="fa fa-angle-left"></i>
                  </li>
                  <li className="category3">
                      <a href="https://cellphones.com.vn/mobile.html" title="">Tiếp tục tìm kiếm sản phẩm</a>
                  </li>
                </ul>   
              </div>
            </div>
            <div className="col-5">
            <p className="Gh">Giỏ hàng của bạn</p>
            </div>
          </div>
        </div>

        

        <div className="container">
          <div className="row ">
            <div className="col-2">

            </div>
            <div className="col-2">
              <div className="m20">
                <img className="mni" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/t/a/tab-s7-den_1.jpg" />

              </div>  

            </div>
            <div className="col-3">
              <div className="mt">
              <p className="bf">Samsung Galaxy Tab S7-Đen</p>
              <p className="rf">14.600.000 ₫</p>
              <p>-Khuyến mãi hàng:</p>
              <p className="smf"><span class="dot"></span>Tặng bao da Samsung chính hãng</p>
              </div>
              
            </div>
            <div className="col-3">
              <div className="ghcb">
                <p className="smf rf cc">Xóa khỏi giỏ</p>
                <p className="mal"></p>
                <label 
                onClick={ () => {this.onUpdateQuantity(price,quantity-1)}}
                className="border square">
                  <p>-</p>
                </label>
                <div className="border square">
                  <p>{quantity}</p>
                </div>
                <label 
                onClick={ () => this.onUpdateQuantity(price,quantity+1)}
                className="border square">
                  <p>+</p>
                </label>
              </div>
            </div>
            <div className="col-2">
           
            </div>
          </div>
        </div>

        <div className="row">
            <div className="col-2">
              </div>
              <div className="col-8 bbm">

              </div>
        </div>

        <div className="container">
          <div className="row ">
            <div className="col-2">

            </div>
            <div className="col-5">
              <div className="m20 fd">
                
               <p>-Nhập mã sales:</p>
               <input className="salesmn border" type="text" placeholder=""/>
              <div className="ad">Áp dụng</div>
              </div>  
            </div>
            
            <div className="col-2">
              
            </div>
          </div>
        </div>

        <div className="row">
            <div className="col-2">
              </div>
              <div className="col-8 bbm">

              </div>
        </div>  

        <div className="container">
          <div className="row">
            <div className="col-2">

            </div>
            <div className="col-5">
              <div className="m20 fdc">
               <p>- Mã giảm giá:</p>
               <p>- Tổng tiền:</p>
              </div>  
            </div>
            
            <div className="col-2">
              <div className="tt m20 fdc">
               <p>0 ₫</p>
               <p className="rf bf">{price} ₫</p>
              </div>
            
            </div>
          </div>
        </div>


        <div className="row">
            <div className="col-2">
              </div>
              <div className="col-8 bbm">

              </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-2">

            </div>
            <div className="col-7">
              <div className="m20 fdc">
               <p className="bf bif">Thông tin mua hàng</p>
               <p className="smf">Họ và tên (bắt buộc)</p>
               <input className="salesmnn border" type="text" placeholder=""/><br/>
               <p className="smf">Số điện thoại đặt hàng (bắt buộc)</p>
               <input className="salesmnn border" type="text" placeholder=""/><br/>
               <p className="smf">Lưu ý</p>
               <input className="salesmnn border" type="text" placeholder=""/><br/>
              <p className="bf bif">- Vui lòng chọn cách nhận hàng</p>
              <div className="fd">
                <input className="ra" type="radio" /> 
                <p className="smf">Giữ hàng tại cửa hàng</p><p className="mar"></p>
                <input className="ra re" type="radio" /> 
                <p className="smf rr">Giao hàng tận nơi</p>
              </div>
              
              <button type="button" class="btn btn-primary btn-lg btn-block">Đặt hàng thanh toán sau</button>
              <div className="cu">
              <img className="boi" src={border} />
              <div className="hoac">Hoặc chọn thanh toán Online</div>
              <img className="boi" src={border} />
              </div>
              
             <div className="fd mt">
                <input className="ra" type="radio" />
                <p className="smf">Cổng thanh toán Momo</p> 
              </div>
              
              
              <button type="button" class="btn btn-danger btn-lg btn-block">Thanh toán online</button>
              <p className="mtt"></p>
              <div className="fd df">
              <input className="ra" type="checkbox" checked="checked" />
                <p className="smf">Bằng cách đặt hàng, bạn đồng ý với điều khoản sử dụng của CellphoneS.</p> 
              </div>
              
              </div>  

            </div>
            
            <div className="col-3">
              <div className="tt m20 fdc">
              </div>
            </div>
          </div>
        </div>

        <div className="row ccc">
            <div className="col-2">
              </div>
              <div className="col-8 bbm ">

              </div>
        </div>  

      </div>
    )
}}
export default MuaNgay;