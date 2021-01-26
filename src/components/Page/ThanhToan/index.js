import React,{ useState } from 'react';
import './index.css';
import {Link } from 'react-router-dom';
function ThanhToan(){

  const [show,setShow] = useState({
    state :"hide",
    instate: "show"
  })

  

  return(
    <div>
      
      <div className="munentt">
        <ul>
            <li className="home">
              <Link to="/">Home &gt;</Link>
              <i className="fa fa-angle-right"></i>
            </li>
            <li className="category3">
              <a href="https://cellphones.com.vn/mobile.html" title=""> Điện thoại &gt; </a>
              <i className="fa fa-angle-right"></i>
            </li>
            <li className="category340">
              <a href="https://cellphones.com.vn/mobile/xiaomi.html" title="">Xiaomi &gt; </a>
              <i className="fa fa-angle-right"></i>
            </li>
            <li className="product">
              Xiaomi Mi 10T Pro 5G
            </li>
          </ul>   
        </div>
      
      <div className="container">
        <div className="topview">
          <h1>Xiaomi Mi 10T Pro 5G<span className="spanone"></span></h1>
          <span className="ratingresult">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
            &nbsp;	
             <a href="#danhgia">10 đánh giá</a>
          </span>
        </div>
            <div className="row bd">
              <div className="col-4">
                <div className="image-container border">
                  <img className="imagemain" src="https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/x/i/xiaomi-mi-10t-pro_2_.jpg">

                  </img>
               </div>
              </div>
              <div className="col-4 mid">
                <div className="muahang">
                  <p>Mua hàng</p>
                    <select className="form-control">
                      <option>T.p Hồ Chí Minh</option>
                      <option>Sài Gòn</option>
                    </select>
                  
                </div>

                <div className="giamain border">
                  <div className="gia">
                    <p className="giasale">11.100.000 ₫ </p><p className="giany"> Giá niêm yết:</p><p className="giaor"> 12.990.000 ₫</p>
                    
                  </div>
                    <p className="giap">Sản phẩm thuộc chương trình SIÊU SALE 12.12 - Nhanh tay thanh toán!</p>
                  </div>


                    <div className="gialhor">
                      <div className="gialh border rounded">
                        <p className="xiao">Xiaomi Mi 10T</p>
                        <p className="redt">Giá liên hệ</p>
                      </div>
                      <div className="gialh border rounded">
                        <p className="xiao">Xiaomi Mi 10T</p>
                        <p className="redt">11.100.000 ₫</p>
                      </div>
                    
                    </div>
                    <p className="boldt smallt">Chọn màu để xem giá và chi nhánh có hàng</p>
                    <div className="gialhor">
                      <div className="border rounded chonmau">
                          <p className="smallt boldt xiao"><span className="fa fa-check"></span>Bạc</p>
                          <p className="smallt boldt redt">11.100.000 ₫</p>
                      </div>
                      <div className="border rounded chonmau">
                          <p className="smallt boldt xiao">Đen</p>
                          <p className="smallt boldt redt">11.100.000 ₫</p>
                      </div>
                      <div className="border rounded chonmau">
                          <p className="smallt boldt xiao">Xanh</p>
                          <p className="smallt boldt redt">11.100.000 ₫</p>
                      </div>
                      
                    </div>
                    <div className="sales rounded border ">
                        <p className="boldt smallt xiao"> Hotsales duy nhất 12/12: Giảm sốc chỉ còn 11.100.000đ (số lượng có hạn, không áp dụng cùng chương trình khác).</p>

                    </div>
                    <div className="mt">
                      <form className="form-inline">
                      <div className="nut1">
                        <button type="submit" className="nut1 btn btn-danger">Mua ngay</button>
                        <button type="submit" className="nut1 btn btn-primary">Trả góp</button>
                        <button type="submit" className="nut1 btn btn-primary">Trả qua thẻ</button>
                      </div>
                     </form>
                    </div>


                </div>
              <div className="col-3">


                <div className="cot3 rounded border">
                  <p className="nort boldt xiao">HIỆN 1 CỬA HÀNG CÓ SẴN SẢN PHẨM</p>
                </div>

              <p className="boldt nort mt">Cửa hàng còn hàng :</p>

              <select className="form-control">
                <option>Cua hang chi day</option>
                <option>Sai Gon</option>
              </select>
              
              <p className="smallt boldt mt">Tình trạng</p>
              <p className="smallt">Máy mới nguyên hộp, IMEI trùng hộp</p>
              <p className="smallt boldt mt">Bảo hành</p>
              <p className="smallt ">Bảo hành 24 tháng tại trung tâm bảo hành Chính hãng. 1 đổi 1 trong 30 ngày nếu có lỗi nhà sản xuất.(Chi tiết)</p>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-8">
                <p className="mt larget boldt ">Điện thoại Xiaomi Mi 10T Pro – Bộ ba camera chụp ảnh siêu đỉnh</p>
                <p >Nếu bạn là một Mifan hay là một người dùng yêu công nghệ thì chắc chắn bạn sẽ không thể bỏ qua Xiaomi Mi 10T Pro. Với nhiều tính năng đặc biệt và công nghệ chụp ảnh cao cấp, Xiaomi đang dần đánh bóng tên tuổi mình hơn với chiếc smartphone này.</p>
                <p className="large boldt">Thiết kế cao cấp cùng mặt lưng kính mềm mại, mượt mà</p>
                <p>Máy sở hữu cho mình một khung viền nhựa chắc chắn, giúp tạo cho bản thân một độ chắc chắn và bền bỉ nhất định. Cùng với đó là độ hoàn thiện cao cấp đến từ các phím bấm cũng như độ bo cong các góc cạnh của máy.</p>
                
                <img className="imgb" src="https://cdn.cellphones.com.vn/media/wysiwyg/mobile/xiaomi/xiaomi-mi-10t-pro-6_1.jpg">
                </img>
                <div className="btnshow border">
                  <div className="xiao">
                  <p className={show.instate}  onClick={() => setShow({state:"show",instate:"hide"})}>Xem thêm</p>
                  </div>
                
                </div>
                
                <div className={show.state}>
                  <div className="mt"></div>
                  <p>Cùng với đó, nhằm đảm bảo cho khách hàng luôn có được trải nghiệm tốt nhất và cao cấp nhất thì Xiaomi còn trang bị thêm mặt lưng kính với công nghệ cường lực Gorilla Glass 5 chắc chắn. Giúp cho máy luôn đảm bảo được độ cứng và chống va đập.</p>    
                  <p className="larget mt boldt">Màn hình 6.67 inches FHD+ cùng khả năng hiển thị độ sáng cao</p>
                  <p>Một màn hình LCD 6.67 inches là điểm đáng chú ý đến nhất của chiếc Xiaomi Mi 10T Pro khi chúng có độ phân giải lên đến 1080 x 2340 pixels cùng công nghệ màn hình LCD luôn đảm bảo độ chính xác của màu sắc và góc nghiêng của máy.</p>
                  <img className="imgb" src="https://cdn.cellphones.com.vn/media/wysiwyg/mobile/xiaomi/xiaomi-mi-10t-pro-1_1.jpg"></img>
                  <p className="mt">Bên cạnh đó, màn hình của máy còn được trang bị công HDR10 giúp cho chiếc máy này luôn duy trì được độ sáng cao, cho mức sáng cao nhất ở mức 600 nits. Điều này giúp bạn có thể sử dụng thiết bị ở những nơi có ánh sáng lớn.</p>
                  <p className="larget mt boldt">Con chip Snapdragon 865 tiến trình 8nm cùng đồ hoạ GPU Adreno 618</p>
                  <p>Con chip chính là trái tim của một chiếc smartphone và với Mi 10T Pro cũng vậy, chiếc điện thoại này được trang bị chip Snapdragon 865 được sản xuất trên tiến trình 7nm. Giúp việc sử dụng chúng trở nên tiết kiệm pin và tối ưu hoá hiệu năng.</p>
                  <p className="bb"></p>
                </div>

              </div>
              <div class="col-4">
                <div className="cot3b border">
                  <p className="nort boldt b1">Thông số kỹ thuật</p>
                </div>

                <div className="cot3ba border">
                  <p className="cot3bdam smallt">Hãng sản xuất</p>
                  <p className="cot3bdam boldt smallt">Xiaomi</p>
                </div>

                <div className="cot3ba border">
                  <p className="cot3bdam smallt">Kích thước màn hình</p>
                  <p className="cot3bdam boldt smallt">6.67 inches</p>
                </div>
                
                <div className="cot3ba border">
                  <p className="cot3bdam smallt">Độ phân giải màn hình</p>
                  <p className="cot3bdam boldt smallt">1080 x 2400 pixels</p>
                </div>

                <div className="cot3ba border">
                  <p className="cot3bdam smallt">Loại màn hình</p>
                  <p className="cot3bdam boldt smallt">IPS LCD, 16 triệu màu, HDR10+, tần số quét 144Hz , độ sáng tối đa 500nits</p>
                </div>


                <div className="cot3ba border">
                  <p className="cot3bdam smallt">Bộ nhớ trong</p>
                  <p className="cot3bdam boldt smallt">	256 GB</p>
                </div>

                <div className="cot3ba border">
                  <p className="cot3bdam smallt">Bộ nhớ đệm / Ram</p>
                  <p className="cot3bdam boldt smallt">	8 GB</p>
                </div>


                <div className="cot3ba border">
                  <p className="cot3bdam smallt">Chipset</p>
                  <p className="cot3bdam boldt smallt">	Qualcomm SM8250 Snapdragon 865 (7 nm+)</p>
                </div>


                <div className="cot3ba border">
                  <p className="cot3bdam smallt">CPU</p>
                  <p className="cot3bdam boldt smallt">	Octa-core (1x2.84 GHz Kryo 585 & 3x2.42 GHz Kryo 585 & 4x1.80 GHz Kryo 585)</p>
                </div>


                <div className="cot3ba border">
                  <p className="cot3bdam smallt">GPU</p>
                  <p className="cot3bdam boldt smallt">Adreno 650</p>
                </div>


                <div className="cot3ba border">
                  <p className="cot3bdam smallt">Kích thước</p>
                  <p className="cot3bdam boldt smallt">165.1 x 76.4 x 9.3 mm</p>
                </div>

                <div className="xt2 redt smallt">
                  <div className="">
                  <p className={show.instate}  onClick={() => setShow({state:"show",instate:"hide"})}>Xem thêm</p>
                  </div>
                </div>  

                <div className={show.state}>

                <div className="cot3ba border">
                  <p className="cot3bdam smallt">Trọng lượng</p>
                  <p className="cot3bdam boldt smallt">	218 g</p>
                </div>



                <div className="cot3ba border">
                  <p className="cot3bdam smallt">Camera trước</p>
                  <p className="cot3bdam boldt smallt">	20 MP, f/2.2, 27mm (wide), 1/3.4", 0.8µm</p>
                </div>

                <div className="cot3ba border">
                  <p className="cot3bdam smallt">Quay video</p>
                  <p className="cot3bdam boldt smallt">	8K@30fps, 4K@30/60fps, 1080p@30/60/120/240/960fps; gyro-EIS</p>
                </div>


                <div className="cot3ba border">
                  <p className="cot3bdam smallt">Pin</p>
                  <p className="cot3bdam boldt smallt">	Li-Po 5000 mAh, sạc nhanh 33W, Power Delivery 3.0</p>
                </div>
                </div>
              </div>


              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div className="quest">
                    <p className="mt larget boldt">Hỏi và đáp (164 Bình luận)</p>
                    <textarea placeholder="Xin để lại một câu hỏi"  rows="4" cols="102">
                      
                    </textarea>
                    <br />
                    <button className="btn btn-danger gui">Send Your Comment</button>
                    <p className="bb"></p>
                    </div>
                  </div>  
                </div>
              </div>


            


            </div>
          </div>


      	</div>

  
  )
}


export default ThanhToan;