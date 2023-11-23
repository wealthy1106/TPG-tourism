
<template>
      <div>
            <div>
                  <div id="carouselExampleIndicators" class="carousel slide" data-interval="5000" data-ride="carousel">
                        <ol class="carousel-indicators">
                              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        </ol>
                        <div class="carousel-inner">
                              <div class="carousel-item active" style="height: 500px;">
                                    <img src="../assets/anhdo.jpg" class="d-block w-100" style="height: 100%;" alt="...">
                              </div>
                              <div class="carousel-item" style="height: 400px;">
                                    <img src="../assets/hagiang1.jpg" style="height: 100%;" class="d-block w-100" alt="...">
                              </div>
                              <div class="carousel-item" style="height: 400px;">
                                    <img src="../assets/hagiang2.jpg" style="height: 100%;" class="d-block w-100" alt="...">
                              </div>
                              <div class="carousel-item" style="height: 400px;">
                                    <img src="../assets/hagiang3.jpg" style="height: 100%;" class="d-block w-100" alt="...">
                              </div>
                              <div class="carousel-item" style="height: 400px;">
                                    <img src="../assets/hagiang5.jpg" style="height: 100%;" class="d-block w-100" alt="...">
                              </div>
                        </div>
                  </div>
            </div>

            <div style="padding: 10px;">
                  <div class="position-relative w-75 mx-auto animated slideInDown">
                        <input style="height: 55px;" class="form-control border-1 rounded-pill w-100 py-3 ps-4 pe-5"
                              type="text" placeholder="Nhập nơi bạn muốn đến">
                        <button type="button"
                              class="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                              style="margin-top: 7px;">Search</button>
                  </div>
            </div>
      </div>
      <div class="container-xxl py-5">
            <div class="container">
                  <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 class="section-title bg-white text-center text-primary px-3">Festival</h6>
                        <h1 class="mb-5">Sự kiện/Lễ hội</h1>
                  </div>
                  <div class="row g-4 justify-content-center">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                              <div class="package-item">
                                    <div class="overflow-hidden">
                                          <img class="img-fluid" src="../assets/khachsan/le-hoi-cau-trang-ha-giang.jpg"
                                                alt="">
                                    </div>
                                    <div class="d-flex border-bottom">
                                          <small class="flex-fill text-center border-end py-2"><i
                                                      class="fa fa-map-marker-alt text-primary me-2"></i>Hà Giang</small>
                                          <small class="flex-fill text-center border-end py-2"><i
                                                      class="fa fa-calendar-alt text-primary me-2"></i>Tham quan</small>
                                          <!-- <small class="flex-fill text-center py-2"><i
                                                      class="fa fa-user text-primary me-2"></i>2 Person</small> -->
                                    </div>
                                    <div class="text-center p-4">
                                          <h3 class="mb-0">Lễ hội Cầu Trăng</h3>
                                          <!-- <div class="mb-3">
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                                <small class="fa fa-star text-primary"></small>
                            </div> -->
                                          <p>Là 1 ứng cử viên sáng giá cho những dịp vui chơi, Lễ hội cầu Trăng của người dân
                                                tộc Tày diễn ra vô cùng độc đáo. Cũng ăn mừng vào ngày Tết Trung Thu 15/8,
                                                nhưng lễ Cầu Trăng lại có thêm làn điệu dân ca, trò chơi dân gian, ẩm thực
                                                truyền thống chỉ có ở các dân tộc thiểu số. Thêm vào đó là các lễ cúng tại
                                                miếu linh thiêng để cầu được trăng tròn.</p>
                                          <!-- <div class="d-flex justify-content-center mb-2">
                                <a href="#" class="btn btn-sm btn-primary px-3 border-end" style="border-radius: 30px 0 0 30px;">Read More</a>
                                <a href="#" class="btn btn-sm btn-primary px-3" style="border-radius: 0 30px 30px 0;">Book Now</a>
                            </div> -->
                                    </div>
                              </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                              <div class="package-item">
                                    <a>
                                          <div @onclick="chitiet" class="overflow-hidden">
                                                <div class="overflow-hidden">
                                                      <img class="img-fluid"
                                                            src="../assets/khachsan/le-hoi-hoa-tam-giac-mach-ha-giangjpg.jpg"
                                                            alt="">
                                                </div>
                                          </div>
                                    </a>

                                    <div class="d-flex border-bottom">
                                          <small class="flex-fill text-center border-end py-2"><i
                                                      class="fa fa-map-marker-alt text-primary me-2"></i>Hà Giang</small>
                                          <small class="flex-fill text-center border-end py-2"><i
                                                      class="fa fa-calendar-alt text-primary me-2"></i>Tham quan</small>
                                          <!-- <small class="flex-fill text-center py-2"><i
                                                      class="fa fa-user text-primary me-2"></i>2 Person</small> -->
                                    </div>
                                    <div class="text-center p-4">
                                          <h3 class="mb-0">Lễ hội hoa tam giác mạch</h3>
                                          <!-- <div class="mb-3">
                                                <small class="fa fa-star text-primary"></small>
                                                <small class="fa fa-star text-primary"></small>
                                                <small class="fa fa-star text-primary"></small>
                                                <small class="fa fa-star text-primary"></small>
                                                <small class="fa fa-star text-primary"></small>
                                          </div> -->
                                          <p>Lễ hội này là dịp để Hà Giang quảng bá vẻ đẹp di sản, những nét văn hóa và tiềm
                                                năng du lịch. Thông thường, lễ hội hoa tam giác mạch diễn ra vào nửa cuối
                                                tháng 11 Dương lịch hàng năm. Mỗi năm, địa điểm tổ chức lại có thể thay đổi,
                                                có thể là ở sân vận động thị trấn Đồng Văn, Chợ tình Khâu Vai, …
                                          </p>
                                          <!-- <div class="d-flex justify-content-center mb-2">
                                                <a href="#" class="btn btn-sm btn-primary px-3 border-end"
                                                      style="border-radius: 30px 0 0 30px;">Read More</a>
                                                <a href="#" class="btn btn-sm btn-primary px-3"
                                                      style="border-radius: 0 30px 30px 0;">Book Now</a>
                                          </div> -->
                                    </div>
                              </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                              <div class="package-item">
                                    <a>
                                          <div @onclick="chitiet" class="overflow-hidden">
                                                <img class="img-fluid" src="../assets/khachsan/le-hoi-gau-tao-ha-gian.jpg"
                                                      alt="">
                                          </div>
                                    </a>

                                    <div class="d-flex border-bottom">
                                          <small class="flex-fill text-center border-end py-2"><i
                                                      class="fa fa-map-marker-alt text-primary me-2"></i>Hà Giang</small>
                                          <small class="flex-fill text-center border-end py-2"><i
                                                      class="fa fa-calendar-alt text-primary me-2"></i>Tham quan</small>
                                          <!-- <small class="flex-fill text-center py-2"><i
                                                      class="fa fa-user text-primary me-2"></i>2 Person</small> -->
                                    </div>
                                    <div class="text-center p-4">
                                          <h3 class="mb-0">Lễ hội Gầu Tào của người H'mông</h3>
                                          <!-- <div class="mb-3">
                                                <small class="fa fa-star text-primary"></small>
                                                <small class="fa fa-star text-primary"></small>
                                                <small class="fa fa-star text-primary"></small>
                                                <small class="fa fa-star text-primary"></small>
                                                <small class="fa fa-star text-primary"></small>
                                          </div> -->
                                          <p>Theo văn hóa của người Mông, đối với gia đình nào ít con hoặc không có con cái,
                                                gia đình làm ăn không thuận lợi,... Họ sẽ đến đồi Gầu Tào để xin thần linh ban
                                                cho con cái, sức khỏe và làm ăn thuận lợi. Khi lời khấn xin có tác dụng, họ sẽ
                                                làm lễ Gầu Tào để tạ ơn thần linh.
                                          </p>
                                          <div class="d-flex justify-content-center mb-2">
                                                <!-- <a href="#" class="btn btn-sm btn-primary px-3 border-end"
                                                      style="border-radius: 30px 0 0 30px;">Read More</a> -->

                                                <button class="btn btn-primary top">Đặt tour</button>

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
      </div>
</template>
<script>
import axios from 'axios'
export default {

      mounted() {
            //   axios.get('http://localhost:6969/api/bacsi/')
            //       .then((response) => {
            //           console.log(response.data);
            //           // console.log(response.data._id)
            //           this.taikhoan = response.data;
            //           console.log('bacsi', this.taikhoan)
            //       })
            //       .catch((error) => {
            //           console.log(error);
            //       });
      },
      methods: {
            // chitiet() {
            //       this.$router.push({ name: "chitietlehoi" });
            // },


      },
}
</script>