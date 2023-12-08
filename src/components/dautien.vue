
<template>
      <div>
            <div>
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="5000">
                        <ol class="carousel-indicators">
                              <li style="background-color: #0dcaf0;" v-for="(tt, index) in tinh" :key="index"
                                    data-target="#carouselExampleIndicators" :data-slide-to="index"
                                    @click="selectImage(index)"
                                    :class="{ 'active mauli': index === selectedImageIndex, 'mauli': index !== selectedImageIndex }">
                              </li>
                        </ol>
                        <div class="carousel-inner">
                              <div :key="index" v-for="(tt, index) in tinh" class="carousel-item"
                                    :class="{ 'active': index === selectedImageIndex }" style="height: 500px;">
                                    <img :src="tt.hinh1" class="d-block w-100" style="height: 100%;" alt="...">
                              </div>
                        </div>
                  </div>
                  <br>
                  <div class="container">
                        <div class="banner-info">
                              <div class="banner-tit three_dots_2">Chào mừng đến với TPG Tourism</div>
                              <div class="banner-des three_dots_1">Đánh thức trãi nghiệm và khám phá thiên nhiên vùng miền
                              </div>
                              <div style="padding: 10px;">
                                    <div class="position-relative w-75 mx-auto animated slideInDown">
                                          <input style="height: 55px;"
                                                class="form-control border-1 rounded-pill w-100 py-3 ps-4 pe-5" type="text"
                                                placeholder="Nhập nơi bạn muốn đến" v-model="timkiem">
                                          <button type="button" @click="tk"
                                                class="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                                                style="margin-top: 7px;">Search</button>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
            <div class="container">
                  <iframe width="1100" height="480" src="https://www.youtube.com/embed/MwdmFog6fc4"
                        title="[PHIM TỰ GIỚI THIỆU] AMAZING HÀ GIANG | S35FILM" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
            </div>


      </div>
      <div>
            <div class="container-xxl py-5 destination">
                  <div class="container">
                        <div class="text-center wow fadeInUp" data-wow-delay="0.1s"
                              style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
                              <h6 class="section-title bg-white text-center text-primary px-3">Địa danh</h6>
                              <h1 class="mb-5">Các địa danh nổi bật hiện nay</h1>
                        </div>
                        <div class="g-3 row">
                              <div :key="index" v-for="(tt, index) in tinh " class="col-lg-4 col-md-6 wow zoomIn"
                                    data-wow-delay="0.7s"
                                    style="min-height: 350px; visibility: visible; animation-delay: 0.7s; animation-name: zoomIn;">
                                    <router-link :to="{ name: 'timkiem', params: { idDD: tt.idDD } }"
                                          class="position-relative d-block h-100" href="">
                                          <img class="img-fluid position-absolute w-100 h-100" :src="tt.hinh1" alt=""
                                                style="object-fit: cover;">
                                          <div
                                                class="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                                                {{ tt.tenTinh }}</div>
                                          <div
                                                class="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                                {{ tt.tenDD }}</div>
                                    </router-link>
                              </div>

                        </div>
                  </div>
            </div>
      </div>
      <div>
            <div class="container-xxl py-5 destination">
                  <div class="container">
                        <div class="text-center wow fadeInUp" data-wow-delay="0.1s"
                              style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
                              <h6 class="section-title bg-white text-center text-primary px-3">Địa danh</h6>
                              <h1 class="mb-5">Danh sách điểm đến</h1>
                        </div>
                        <div class="g-3 row">
                              <div :key="index" v-for="(tt, index) in diemden " class="col-lg-4 col-md-6 wow zoomIn"
                                    data-wow-delay="0.7s"
                                    style="min-height: 350px; visibility: visible; animation-delay: 0.7s; animation-name: zoomIn;">
                                    <router-link :to="{ name: 'timkiemtheotinh', params: { idTinh: tt.idTinh } }"
                                          class="position-relative d-block h-100" href="">
                                          <img class="img-fluid position-absolute w-100 h-100" :src="tt.hinh1" alt=""
                                                style="object-fit: cover;">
                                          <div
                                                class="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                                                {{ tt.tenTinh }}</div>
                                          <!-- <div
                                                class="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                                {{ tt.tenDD }}</div> -->
                                    </router-link>
                              </div>

                        </div>
                  </div>
            </div>
      </div>
</template>
<style>
/* .container {
      position: relative;
      width: 100%;
      max-width: 1200px;
      /* Giả sử container có chiều rộng tối đa là 1200px */
/* margin: 0 auto; */
/* Canh giữa container */


.banner-tit,
.banner-des {
      font-size: 24px;
      /* Kích thước chữ */
      font-weight: bold;
      /* Độ đậm của chữ */
}

.banner-cta a {
      display: inline-block;
      padding: 10px 20px;
      background-color: #ff4081;
      /* Màu nền của nút */
      color: #fff;
      /* Màu chữ của nút */
      text-decoration: none;
      border-radius: 5px;
      /* Độ cong góc của nút */
}

.top {
      padding-top: 10px;
}

#img {
      height: 300px;
}

.carousel-control-prev,
.carousel-control-next {
      font-size: 10rem;
      height: 50px;
      width: 50px;
      /* margin-top: 200px; */
      background-color: antiquewhite;
      margin: 200px 50px;
      /* Kích thước mong muốn, có thể điều chỉnh theo ý muốn */
}

.carousel-indicators li {
      box-sizing: content-box;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      width: 30px;
      height: 3px;
      margin-right: 3px;
      margin-left: 3px;
      text-indent: -999px;
      cursor: pointer;
      /* background-color: rgb(24, 59, 75); */
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
}

#carouselExampleIndicators {
      /* position: absolute; */
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
}

.container {
      /* position: relative; */
      z-index: 0;
}

.banner-info {
      position: absolute;
      top: 50%;
      /* Đặt vị trí ở giữa trục Y */
      left: 50%;
      /* Đặt vị trí ở giữa trục X */
      transform: translate(-50%, -50%);
      /* Dịch chuyển vị trí để căn giữa */
      text-align: center;
      z-index: 2;
      /* Đảm bảo nằm phía trên container và carousel */
      color: white;
      /* Màu chữ */
}
</style>

<script>
import axios from 'axios';
export default {
      data() {
            return {
                  tinh: [],
                  firstItem: null,
                  currentSlide: 0,
                  timkiem: '',
                  selectedImageIndex: 0, // Chỉ số của hình ảnh được chọn
                  diemden: [],
            }
      },
      mounted() {
            axios.get('http://localhost:3000/api/diadanh/tinh/')
                  .then((response) => {
                        this.tinh = response.data;
                        console.log('dstinh', this.tinh)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('/api/diadanh/diemden')
                  .then((response) => {
                        this.diemden = response.data;
                        console.log('diemden', response.data)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
      },
      methods: {
            goToSlide(index) {
                  this.currentSlide = index;
            },
            tk() {
                  this.$router.push({ name: "tk", params: { tenDD: this.timkiem } });
                  // Thực hiện tìm kiếm dựa trên this.timkiem
                  console.log('Searching for:', this.timkiem);
                  // Thêm logic tìm kiếm của bạn ở đây

            },
            selectImage(index) {
                  this.selectedImageIndex = index;
            },
      }
}

</script>