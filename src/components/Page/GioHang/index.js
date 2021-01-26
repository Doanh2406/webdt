import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
function GioHang(){
    return(
        <div>
					<div className="container">
            <div className="row">
							<div className="col-4">
								<div className="breadcrumbs text-decoration-none">
										<ul>
												<li className="home">
														<i className="fa fa-angle-left"></i>
												</li>
												<li className="category3">
                          <Link to="/" className="text-decoration-none">
														<a title="">Tiếp tục tìm kiếm sản phẩm</a>
                          </Link>
												</li>
										</ul>   
								</div>
							</div>
								
               <div className="col-5">

               </div>   
							 <div className="col-3">
							 	<p className="Gh">Giỏ hàng của bạn</p>
							</div>
						</div>
					</div>	
				

          <div className="mainnn">
            <div className="container">
              <div className="row">
                <div className="col-1">
                    
                </div>
                  
                <div className="col-10">
                  <div className="main" >
                    <i className="fa fa-frown-o fa-4x cen"></i>
                    </div>
                    <p className="cen">Không có sản phẩm nào trong giỏ hàng, vui lòng tải lại trang</p>
                    <p className="cen link "><Link to="/">Quay về trang chủ</Link></p>
                  
                </div>   
                <div className="col-1">

                  </div>
                </div>
              </div>	
          </div>  
        </div>
    )
}
export default GioHang;
