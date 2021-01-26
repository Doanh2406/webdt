import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
function CuaHang(){
    return(
        <div>
          <div className="munen">
           <ul>
              <li className="home">
                <Link to="/">Home</Link>
              <span className="fa fa-angle-right" >
                </span>
                
              </li>
              <li className="category3">
                <a href="https://cellphones.com.vn/mobile.html" title="">Địa chỉ Hệ thống cửa hàng PhonePhone</a>
              </li>
            </ul>
          </div>

          
          <div className="container">
              <div className="row">
                <div className="col-8">
                  
                      
                      <img className="imgm" src="https://cellphones.com.vn/media/wysiwyg/banner_dcch.png"></img>
                  </div>
                

                <div className="col-4">
                  <div className="lienHe border rounded">
                    <div className="lh">
                      <p className="boldt larget">Liên hệ</p>
                      <p className="redt boldt">Tổng đài miễn phí</p>
                      <p>Tư vấn mua hàng: 1800.2097</p>
                      <p>Khiếu nại, góp ý: 1800.2063</p>
                      <p>Trung tâm bảo hành: 1800.2064</p>
                      <p className="redt boldt">Hợp tác kinh doanh</p>
                      <p>Cho thuê mặt bằng:</p>
                      <p>Mr. Nhat</p>
                      <p>lvnhat.17it021@vku.udn.vn</p>
                    </div>
                  </div>
                </div>
              </div>
           
            

              <div class="container">
                <div class="row">
                  <div class="col-8">
                    <div className="mainch border rounded">
                      <p className="boldt redt larget center">TIỆN ÍCH TẠI HỆ THỐNG CỬA HÀNG PhonePhone</p>
                      <p classname="smallt mal">PhonePhone luôn nỗ lực “Tận tâm với khách hàng“ mang đến dịch vụ và trải nghiệm tốt nhất: </p>


                      <div class="container">
                        <div class="row">
                          <div class="col-sm smallt">
                            <p><span class="dot"></span>Phone Phone là hệ thống bán lẻ uỷ quyền chính hãng của Apple Việt Nam<br />                         
                            <span class="dot"></span> Nhân viên nhiệt tình, thân thiện, gửi xe & Wifi miễn phí<br />
                            <span class="dot"></span> Trải nghiệm trực tiếp, và dùng thử sản phẩm miễn phí<br />
                            <span class="dot"></span> Giá bán, khuyến mãi luôn tốt nhất thị trường<br />
                            <span class="dot"></span> Dịch vụ bán hàng doanh nghiệp : giá tốt nhất - có hoa hồng<br />
                            <span class="dot"></span> Bảo hành chính hãng, đổi mới miễn phí 1 tháng<br />
                            <span class="dot"></span> Thu cũ đổi mới sản phẩm trợ giá tốt nhất<br />
                             Tiếp nhận bảo hành chính hãng & sửa chữa điện thoại - laptop tại hệ thống Điện Thoại Vui
                            </p>
                          </div>
                          <div class="col-sm smallt">
                            <p><span class="dot"></span> Miễn phí cà thẻ (ngoại trừ AMEX, UnionPay & JCB)<br />
                            <span class="dot"></span> Trả góp từ 0% qua thẻ tín dụng quốc tế với trên 20 ngân hàng & công ty tài chính: Home Credit, Fe Credit, HD Saison, Mirae Asset<br />
                            <span class="dot"></span>  Nhiều ưu đãi thanh toán từ VnpayQR, Momo, Mpos... và các ngân hàng BIDV, Shinhan, Vietcombank...<br />
                            <span class="dot"></span> Thanh toán hóa đơn trả góp, điện, nước, internet (thanh toán bằng tiền mặt hoặc cà thẻ ATM)<br />
                            <span class="dot"></span> Nạp tiền điện thoại tiết kiệm tới 5%<br />
                            <span class="dot"></span> Giao hàng miễn phí, thanh toán tại nhà trên Toàn quốc<br /> </p>
                          </div>
                          
                        </div>
                      </div>
                     </div>


                  </div>
                </div>
              </div>

            <div className="container">
              <div className="maind border rounded">
                <p className="mal boldt maind larget">Hệ Thống cửa hàng bán lẻ PhonePhone</p>  
                
                <p className="smallt mal maind">
                Tư vấn mua hàng: 1800.2097<br/>

                Khiếu nại, góp ý: 1800.2063<br/>

                Giờ cửa mở cửa: 8h00 - 22h00<br/>

                </p>
                <div className="diachi rounded border">
                  <div className="flex">
                    <select className="form-control ">
                      <option>Tất cả khu vực</option>
                      <option>Đà Nẵng</option>
                      <option>Hà Nội</option>
                    </select>
                    <select className="form-control mal">
                      <option>Chọn quận/huyện</option>
                      <option>Quận Ngũ Hành Sơn</option>
                    </select>
                  </div>
                  <div className="input">
                    <input className="inputt" type="text"  />
                  </div>
                  
                </div>                
              </div>
            </div>


            <div class="container">
                <div class="row">
                  <div class="col-8">
                    <div className="quest">
                    <p className="mt larget boldt">Hỏi và đáp (164 Bình luận)</p>
                    <textarea placeholder="Xin mời để lại câu hỏi"  rows="4" cols="152">
                      
                    </textarea>
                    <button className="btn btn-danger">Send Your Comment</button>
                    </div>
                  </div>  
                </div>
              </div>

          </div>
        </div>
    )
}
export default CuaHang;
