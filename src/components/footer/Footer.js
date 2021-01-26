import React from 'react';
import './Footer.css';
import logo from './pttt.png';
function Footer(){
    return(
        <div>
          
          <div className="container">
            <div className="ml">
              <div className="row">

                <div className="col-3">
                  <p className="bf bof">Tìm cửa hàng</p>
                  <p className="nf">Tìm cửa hàng gần nhất
                  <br />
                  Mua hàng từ xa
                  </p>
                  <p className="bf bof">Phương thức thanh toán</p>                
                  <img className="imgg"  src={logo} />
                </div>

                <div className="col-3">
                  <p className="nf">
                    Gọi mua hàng: 1800.2097 (8h00 - 22h00)
                    <br />
                    Gọi khiếu nại: 1800.2063 (8h00 - 21h30)
                    <br />
                    Gọi bảo hành: 1800.2064 (8h00 - 21h00)
                  </p>
                  <p className="bf bof">Đối tác dịch vụ bảo hành</p>
                  <p className="nf">Điện Thoại - Laptop</p>
                </div>

                <div className="col-3">
                  <p className="nf">
                    Mua hàng và thanh toán Online<br/>
                    Mua hàng trả góp Online<br/>
                    Tra thông tin đơn hàng<br/>
                    Tra điểm Smember<br/>
                    Tra thông tin bảo hành<br/>
                    Trung tâm bảo hành chính hãng<br/>
                    Quy định về việc sao lưu dữ liệu<br/>
                    Dịch vụ bảo hành điện thoại<br/>
                  </p>
                </div>

                <div className="col-3">
                  <p className="nf">
                    Quy chế hoạt động<br/>
                    Chính sách Bảo hành<br/>
                    Liên hệ hợp tác kinh doanh<br/>
                    Đơn Doanh nghiệp<br/>
                    Ưu đãi từ đối tác<br/>
                    Tuyển dụng
                  </p>
                </div>

              </div>
            </div>
          </div> 

          <div className="container">
            <div className="row">

              <div className="col-12">
                <p className="sf tc">
                  Sale Tết Tân Sửu 2021 - Điện thoại iPhone 12 / Điện thoại iPhone 12 Pro Max / Điện thoại iPhone 8 / Điện thoại iPhone 7 / Điện thoại iPhone Xr / Điện thoại / Điện thoại iPhone - Điện thoại Samsung / Điện thoại Samsung Galaxy S21 - Điện thoại <br />
                  Realme / Điện thoại Xiaomi / Điện thoại Nokia / Điện thoại Huawei - Máy tính bảng - Laptop / Laptop HP / Laptop Asus - Camera / Camera hành trình - Sim số đẹp - Robot hút bụi / Robot hút bụi Xiaomi - Samsung Galaxy Buds Pro
                
                </p>
                  
                
              </div>


             </div> 
          </div>
          
        </div>
    )
}
export default Footer;