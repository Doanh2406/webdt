import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css'
import { firestore, firebaseAuth } from '../../../firebase';
import { Box } from '@material-ui/core';
import { Products } from '../../Products/Products';


class  Mobile extends Component{
 
  constructor(props){
    super(props)
    this.state={
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


render(){


  return(
    <div>
       <div className="munen">
           <ul>
              <li className="home">
                <Link to="/">Home</Link>
                <i className="fa fa-angle-right"></i>
              </li>
              <li className="category3">
                <a href="https://cellphones.com.vn/mobile.html" title="">Điện thoại</a>
              </li>
            </ul>
          </div>


          <div className="container">
            <div className="row">
              <div className="col-2">
                <div className="ttt border">
                  <p className="bof">Loại điện thoại</p>
                </div>
                <div className="bt border">
                  <p className="btt rf">Tất cả</p>
                  <p className="btt">Android</p>
                  <p className="btt">iPhone (iOS)</p>
                </div>
                <br />

                <div className="ttt border">
                  <p className="bof">Dung lượng RAM</p>
                </div>
                <div className="bt border">
                  <p className="btt rf">Tất cả</p>
                  <p className="btt">4GB - 6GB</p>
                  <p className="btt">8GB Trở lên</p>
                  <p className="btt">Dưới 4GB</p>
                </div>
                <br />


                <div className="ttt border">
                  <p className="bof">Bộ nhớ trong</p>
                </div>
                <div className="bt border">
                  <p className="btt rf">Tất cả</p>
                  <p className="btt">128GB và 256GB</p>
                  <p className="btt">32GB và 64GB</p>
                  <p className="btt">Dưới 32GB</p>
                  <p className="btt">Trên 512GB</p>
                </div>
                <br />

                <div className="ttt border">
                  <p className="bof">Kích thước màn hình</p>
                </div>
                <div className="bt border">
                  <p className="btt rf">Tất cả</p>
                  <p className="btt">Dưới 6 inch</p>
                  <p className="btt">Trên 6 inch</p>
                </div>
                <br />

                <div className="ttt border">
                  <p className="bof">Kiểu màn hình</p>
                </div>
                <div className="bt border">
                  <p className="btt rf">Tất cả</p>
                  <p className="btt">Giọt nước</p>
                  <p className="btt">Màn hình gập</p>
                  <p className="btt">Tai thỏ</p>
                  <p className="btt">Đục lỗ</p>
                </div>
                <br />

                <div className="ttt border">
                  <p className="bof">Tính năng đặc biệt</p>
                </div>
                <div className="bt border">
                  <p className="btt rf">Tất cả</p>
                  <p className="btt">Chế độ máy tính</p>
                  <p className="btt">Hỗ trợ bút cảm ứng stylus</p>
                  <p className="btt">Hỗ trợ mạng 5G</p>
                  <p className="btt">Hỗ trợ sạc không dây</p>
                </div>
                <br />

              </div>

              <div className="col-10">
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
                                </div>
                            </Box>
                            <Box display="flex" p="10px">
                                <div className="row">
                                <Products sp ={gridproducts[4]}/>
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
                <p className="bof sbf">Mua điện thoại giá rẻ</p>
                <div className="tb">
                  <p className="mml rf">Chọn mức giá:</p>
                  <p className="mml rf">Dưới 5 triệu</p>
                  <p className="mml rf">5 - 10 triệu</p>
                  <p className="mml rf">10 - 15 triệu</p>
                  <p className="mml rf">15 - 20 triệu</p>
                </div>


                do du lieu vo day me mi len nua



                
              <div className="tb">
                <p>Có <b>328</b> sản phẩm trong <b>17</b> trang</p>
                <div className="nut border rounded nutm redb">
                  <p>1</p>
                </div>
                <div className="nut border rounded">
                  <p>2</p>
                </div>
                <div className="nut border rounded">
                  <p>3</p>
                </div>
                <div className="nut border rounded">
                  <p>17</p>
                </div>
                <div className="nut border rounded nt">
                  <p className="rf cdmm">Tiếp &gt;</p>
                </div>
              </div>
              
              <br />
              
              <p className="sbf bof">Điện thoại di động – Vật “bất li thân” ở thời đại công nghệ</p>

              <div className="bdd"></div>
              <p className="smf mt10">Khi khoa học kỹ thuật liên tục được cải tiến và công nghệ phát triển không ngừng thì đó cũng là lúc chiếc điện thoại di động trở nên quan trọng hơn bao giờ hết. Thật vậy, chúng ta có thể làm được rất nhiều việc: gọi điện, nhắn tin, gửi mail, soạn tài liệu (Word, Excel), chụp ảnh – quay video, xem phim hay chơi game với thiết bị có kích thước chỉ bằng một bàn tay.

              <br />Chính vì vậy, thị trường di động đặc biệt là điện thoại iPhone 12 Pro Max sắp tới luôn chứng kiến sự cạnh tranh vô cùng khốc liệt giữa các nhà sản xuất. Họ sẵn sàng đầu tư nghiên cứu để liên tục cho ra đời những chiếc điện thoại mới nhất chất lượng, từ giá rẻ, tầm trung, cận cao cấp cho đến cao cấp để đáp ứng tối đa nhu cầu của mọi đối tượng người dùng.</p>
              <p className="sbf bof">Tại sao nên mua điện thoại thông minh?</p>
              <div className="bdd"></div>
              <p className="smf mt10">
                Được trang bị nhiều công nghệ hiện đại. <br/>
                Hỗ trợ tốt cho việc liên lạc, làm việc lẫn giải trí.<br/>
                Không chỉ là thiết bị di động mà còn có thể đóng vai trò như một món đồ trang sức.<br/>
                Dễ dàng kết nối với cộng đồng và thế giới.<br/>
                Khả năng lưu giữ những khoảnh khắc đáng nhớ trong cuộc sống theo nhiều hình thức.</p>
              <p className="sbf bof">Mua smartphone chính hãng tại PhonePhone</p>
              <div className="bdd"></div>
              <p className="smf mt10">
                  Tại PhonePhone tất cả các sản phẩm đều có xuất xứ rõ ràng và hóa đơn đầy đủ
                <br/>  Bảo hành chính hãng 12 tháng, 1 đổi 1 trong 30 ngày đầu tiên
                <br/>  Giá bán rẻ nhất thị trường. Nhiều chương trình khuyến mãi hấp dẫn. Chương trình thu cũ đổi mới, lên đời điện thoại
                <br/>  Nhiều dịch vụ tiện ích: trả góp 0% qua thẻ tính dụng với hơn 20 ngân hàng. Thanh toán online, thanh toán bằng thẻ, giao hàng và thu tiền tại nhà miễn phí trên toàn quốc.
              </p>
              <div className="quest">
                <p className="mt larget boldt">Hỏi và đáp (164 Bình luận)</p>
                <textarea placeholder="Xin mời để lại câu hỏi"  rows="4" cols="130">
                  
                </textarea>
                <button className="btn btn-danger">Send Your Comment</button>
              </div>


              
              </div>
              

            </div>
          </div>
          


    </div>
   
  )
}
}
export default Mobile;