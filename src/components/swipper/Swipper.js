import React, { Component } from 'react';
import './Swipper.css';

class Swipper extends Component {
    render() {
        return (
            <div className="swiper-container" id="academichistory">
            <div className="swiper-wrapper row">
                <div className="swiper-slide text-center">
                  Galaxy S20+ | ULTRA
                  <br /> Giá rẻ bất ngờ
                </div>
                <div className="swiper-slide text-center">
                  IPAD 10.2.2020
                  <br />Chính hãng giá tốt
                </div>
                <div className="swiper-slide text-center">
                  VSMART JOY 4
                  <br />Giá siêu ưu đãi
                </div>
                <div className="swiper-slide text-center">
                  GALAXY ACTIVE 2
                  <br />Mua kèm giảm 30%
                </div>
                <div className="swiper-slide text-center">
                  OPPO RENO 4
                  <br />Trợ giá 500.000đ
                </div>
                
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        );
    }
}

export default Swipper;