
<template>
      <div>
            <!-- About Start -->
            <div class="container-xxl py-5" :key="index" v-for="(tt, index) in  tour ">
                  <div class="container">
                        <div class="row g-5">
                              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style="min-height: 400px;">
                                    <div class="position-relative h-100">
                                          <img class="img-fluid position-absolute w-100 h-100" :src="tt.hinhT" alt=""
                                                style="object-fit: cover;">
                                    </div>
                              </div>
                              <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <h6 class="section-title bg-white text-start text-primary pe-3">Chi tiết tour</h6>
                                    <h4 class="mb-4">Welcome to <span class="text-primary">{{ tt.tenT }}</span></h4>
                                    <p class="mb-4">{{ tt.chitietT }} </p>
                              </div>
                        </div>
                  </div>
            </div>
            <!-- About End -->

            <div class="container" :key="index" v-for="(tt, index) in  tour ">
                  <!-- <h6 class="section-title bg-white text-center text-primary px-3"></h6> -->
                  <h3 class="mb-5">Những trải nghiệm thú vị trong chương trình</h3>
                  <ul>
                        <li>{{ tt.trainghiem }}</li>
                        <!-- <li>Cung đường Hà Giang “con đường hạnh phúc”</li>
                        <li>Dạo thuyền Sông Nho Quế</li> -->
                  </ul>
            </div>

            <div class="container">
                  <h3 class="mb-5">Chương trình tour</h3>
                  <h4>NGÀY 1: TP. HỒ CHÍ MINH - HÀ NỘI - QUẢN BẠ - YÊN MINH ( ĂN TRƯA, TỐI)</h4>
                  <p>Buổi sáng: HDV hỗ trợ quý khách làm thủ tục check in tại sân bay Tân Sơn Nhất bay đến Hà Nội.

                        Đến sân bay Nội Bài, quý khách khởi hành đi Hà Giang

                        Trên đường đi Quý khách có thể ngắm cảnh rừng núi rừng Đông Bắc vô cùng hùng vĩ và hoang sơ và dừng
                        chân
                        chụp những bức hình lưu niệm.

                        Buổi trưa: Quý khách dùng cơm trưa tại Tuyên Quang.

                        - Quý khách tiếp tục hành trình lên núi khám phá Huyện Quản Bạ với: Núi Đôi Cô Tiên - “tác phẩm nghệ
                        thuật”
                        của tạo hoá ban tặng cho vùng đất này. “Núi Đôi” nổi tiếng đã tạo cho thung lũng Quản Bạ một cảnh quan
                        độc
                        nhất vô nhị hết sức hấp dẫn.</p>
                  <img id="hinh" src="../../assets/hagiang1.jpg" alt="" style="object-fit: cover;">
                  <br>
                  <h4>Hướng dẫn viên</h4>
                  <p>Hướng Dẫn Viên (HDV) sẽ liên lạc với Quý Khách khoảng 1-2 ngày trước khi khởi hành để sắp xếp giờ đón và
                        cung
                        cấp các thông tin cần thiết cho chuyển đi.</p>
            </div>
            <div class="container">
                  <h4>Chi phí dự tính</h4>
                  <p style="font-weight: bolder;">Vận chuyển:
                  <p>Xe đời mới máy lạnh đón khách theo chương trình Xe tham quan (xe 16 chỗ, 29 chỗ) tùy theo số lượng khách
                        thực
                        tế trên chuyến đi.</p>
                  </p>
                  <p style="font-weight: bolder;">Lưu trú:
                  <p>Khách Sạn: 1 Sao, 2 Sao. Phòng: 2-3 khách/phòng. Trường hợp trong đợt khởi hành có khách lẻ ghép, Công ty
                        sẽ
                        ghép cho khách và không phải đóng phụ thu phòng đơn.</p>
                  </p>
                  <p style="font-weight: bolder;">Khác:
                  </p>
                  <ul>
                        <li>Hướng dẫn viên: 1 HDV nhiệt tình, vui vẻ phục vụ đoàn suốt tuyến</li>
                        <li> Nước suối, khăn lạnh,nón ( Nước suối: 1 chai 500ml/ngày/khách. Khăn lạnh: 1 cái/ngày/khách)</li>
                        <li>Thuế VAT</li>
                  </ul>
            </div>
            <div class="container">
                  <h3 class="mb-5">Các tour du lịch khác</h3>
                  <div>
                        <!-- Package Start -->
                        <div class="container-xxl py-5">
                              <div class="container">
                                    <div class="row g-4 justify-content-center">
                                          <div :key="index" v-for="(tt, index) in  tour1 "
                                                class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                                <div class="package-item">
                                                      <div class="overflow-hidden">
                                                            <img id="img" class="img-fluid" :src="tt.hinhT" alt="">
                                                      </div>
                                                      <div class="d-flex border-bottom">
                                                            <!-- <small class="flex-fill text-center border-end py-2"><i
                                                                        class="fa fa-map-marker-alt text-primary me-2"></i>{{  }}</small> -->
                                                            <small class="flex-fill text-center border-end py-2"><i
                                                                        class="fa fa-calendar-alt text-primary me-2"></i>{{
                                                                              tt.tgian }}</small>
                                                            <small class="flex-fill text-center py-2"><i
                                                                        class="fa fa-user text-primary me-2"></i>{{ tt.loaiT
                                                                        }}</small>
                                                      </div>
                                                      <div class="p-4">
                                                            <h5 class="mb-0">{{ tt.tenT }}</h5>
                                                            <div class="top">
                                                                  <p class="mb-0">Mã
                                                                        tua: {{ tt.idT }}</p>
                                                            </div>
                                                            <div class="top">
                                                                  <p class="mb-0">Khởi hành: {{ tt.khoihanhT }}</p>

                                                            </div>
                                                            <div class="top">
                                                                  <p class="mb-0">Nơi khởi hành: {{ tt.noikhoihanh }}
                                                                  </p>
                                                            </div>
                                                            <div class="top">
                                                                  <p class="mb-0">Giá: <button type="button"
                                                                              class="btn btn-warning top">
                                                                              <p class="mb-0">{{ tt.giaT }}</p>
                                                                        </button></p>
                                                            </div>
                                                            <div class="d-flex justify-content-center mb-2 top">
                                                                  <router-link :to="{ name: 'tour', params: { id: tt.idT } }">
                                                                        <button @click="reload"
                                                                              style="border-radius: 30px 0 0 30px;"
                                                                              class="btn btn-sm btn-primary px-3 border-end">Chi
                                                                              tiết</button>
                                                                  </router-link>
                                                                  <!-- <a href="#" class="btn btn-sm btn-primary px-3 border-end"
                                                                        style="border-radius: 30px 0 0 30px;">Chi tiết</a> -->
                                                                  <a href="#" class="btn btn-sm btn-primary px-3"
                                                                        style="border-radius: 0 30px 30px 0;">Đặt tour</a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <!-- Package End -->

                  </div>
            </div>
      </div>
</template>

<!-- <script>
ClassicEditor
      .create(document.querySelector('#editor'))
      .catch(error => {
            console.error(error);
      });
      
</script> -->
<style>
#hinh {
      width: 100%;
      height: auto;
}

.top {
      padding-top: 10px;
}

#img {
      width: 100%;
      height: 300px;
}
</style>
<script>
import axios from 'axios';
export default {
      data() {
            return {
                  tour: [],
                  tour1: []
            }
      },
      mounted() {
            // if (localStorage.getItem('reloaded')) {
            //       // The page was just reloaded. Clear the value from local storage
            //       // so that it will reload the next time this page is visited.
            //       localStorage.removeItem('reloaded');
            // } else {
            //       // Set a flag so that we know not to reload the page twice.
            //       localStorage.setItem('reloaded', '1');
            //       location.reload();
            // }
            var urlid = this.$route.params.id
            axios.get('http://localhost:3000/api/tour/' + urlid)
                  .then((response) => {
                        this.tour = response.data;
                        console.log('tour', this.tour)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/tour/')
                  .then((response) => {
                        this.tour1 = response.data;
                        console.log('tour', this.tour1)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
      },
      methods: {
            reload() {
                  window.location.reload();
            }
      }
}
</script>