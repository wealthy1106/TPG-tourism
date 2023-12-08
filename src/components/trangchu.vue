
<template>
      <!-- <div>
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
            </div>

            <div style="padding: 10px;">
                  <div class="position-relative w-75 mx-auto animated slideInDown">
                        <input style="height: 55px;" class="form-control border-1 rounded-pill w-100 py-3 ps-4 pe-5"
                              type="text" placeholder="Nhập nơi bạn muốn đến" v-model="timkiem">
                        <button type="button" @click="tk"
                              class="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                              style="margin-top: 7px;">Search</button>
                  </div>
            </div>
      </div> -->
      <div class="text-center">
            <h6 class="section-title bg-white text-center text-primary px-3">Ưu đãi</h6>
            <h1 class="mb-5">Ưu đãi hấp dẫn</h1>
      </div>
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <!-- <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol> -->
            <div class="carousel-inner container">
                  <div class="carousel-item active" style="position: relative;">
                        <div class="container">
                              <div class="card-deck">
                                    <div class="card" :key="index" v-for="(tt, index) in  tour ">
                                          <div style="position: relative;">
                                                <img id="img" :src="tt.hinhT" class="card-img-top" alt="...">
                                                <div style="position: absolute;top: 50px;">
                                                      <button type="button" class="btn btn-danger">Giảm {{ tt.phantram
                                                      }}%</button>
                                                </div>
                                          </div>

                                          <div class="card-body">
                                                <h5 class="card-title">{{ tt.tenT }}</h5>
                                                <!-- <h6>Ưu đãi</h6> -->
                                                <div class="row gy-2 gx-4 mb-4">
                                                      <div>
                                                            <p class="mb-0">Mã
                                                                  tour: {{ tt.idT }}</p>
                                                      </div>
                                                      <div class="top">
                                                            <p class="mb-0">Khởi hành: {{ tt.dateKH }}</p>

                                                      </div>
                                                      <div class="top">
                                                            <p class="mb-0">Nơi khởi hành: {{ tt.noikhoihanh }}
                                                            </p>
                                                      </div>
                                                      <div class="col-5 mr-3 p-0">
                                                            <button type="button" class="btn btn-light">
                                                                  <p class="mb-0" style="text-decoration: line-through;">Giá:
                                                                        {{ tt.giaT }} VND</p>
                                                            </button>
                                                      </div>
                                                      <div class="col-5 mr-3 p-0">
                                                            <button type="button" class="btn btn-warning top">
                                                                  Giảm còn<p class="mb-0">{{ tt.tich }} VND</p>
                                                            </button>
                                                      </div>
                                                </div>
                                                <div style="text-align: center;">
                                                      <router-link
                                                            :to="{ name: 'chitietKM', params: { id: tt.idT, idLT: tt.idLT, idKM: tt.idKM } }">
                                                            <button class="btn btn-primary top">Chi tiết</button>
                                                      </router-link>
                                                      ||
                                                      <router-link
                                                            :to="{ name: 'tourKM', params: { id: tt.idT, idKM: tt.idKM } }">
                                                            <button class="btn btn-primary top">Đặt tour</button>
                                                      </router-link>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="carousel-item">
                        <div class="container">
                              <div class="card-deck">
                                    <div class="card" :key="index" v-for="(tt, index) in  tour1 ">
                                          <div style="position: relative;">
                                                <img id="img" :src="tt.hinhT" class="card-img-top" alt="...">
                                                <div style="position: absolute;top: 50px;">
                                                      <button type="button" class="btn btn-danger">Giảm {{ tt.phantram
                                                      }}%</button>
                                                </div>
                                          </div>
                                          <div class="card-body">
                                                <h5 class="card-title">{{ tt.tenT }}</h5>
                                                <!-- <h6>Ưu đãi</h6> -->
                                                <div class="row gy-2 gx-4 mb-4">
                                                      <div>
                                                            <p class="mb-0">Mã
                                                                  tour: {{ tt.idT }}</p>
                                                      </div>
                                                      <div class="top">
                                                            <p class="mb-0">Khởi hành: {{ tt.dateKH }}</p>

                                                      </div>
                                                      <div class="top">
                                                            <p class="mb-0">Nơi khởi hành: {{ tt.noikhoihanh }}
                                                            </p>
                                                      </div>
                                                      <div class="col-5 mr-3 p-0">
                                                            <button type="button" class="btn btn-light">
                                                                  <p class="mb-0" style="text-decoration: line-through;">Giá:
                                                                        {{ tt.giaT }} VND</p>
                                                            </button>
                                                      </div>
                                                      <div class="col-5 mr-3 p-0">
                                                            <button type="button" class="btn btn-warning top">
                                                                  Giảm còn<p class="mb-0">{{ tt.tich }} VND</p>
                                                            </button>
                                                      </div>
                                                </div>
                                                <div style="text-align: center;">
                                                      <router-link
                                                            :to="{ name: 'chitietKM', params: { id: tt.idT, idLT: tt.idLT, idKM: tt.idKM } }">
                                                            <button class="btn btn-primary top">Chi tiết</button>
                                                      </router-link>
                                                      ||
                                                      <router-link
                                                            :to="{ name: 'tourKM', params: { id: tt.idT, idKM: tt.idKM } }">
                                                            <button class="btn btn-primary top">Đặt tour</button>
                                                      </router-link>
                                                </div>

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="carousel-item">
                        <div class="container">
                              <div class="card-deck">
                                    <div class="card" :key="index" v-for="(tt, index) in  tour2 ">
                                          <div style="position: relative;">
                                                <img id="img" :src="tt.hinhT" class="card-img-top" alt="...">
                                                <div style="position: absolute;top: 50px;">
                                                      <button type="button" class="btn btn-danger">Giảm {{ tt.phantram
                                                      }}%</button>
                                                </div>
                                          </div>
                                          <div class="card-body">
                                                <h5 class="card-title">{{ tt.tenT }}</h5>
                                                <!-- <h6>Ưu đãi</h6> -->
                                                <div class="row gy-2 gx-4 mb-4">
                                                      <div>
                                                            <p class="mb-0">Mã
                                                                  tour: {{ tt.idT }}</p>
                                                      </div>
                                                      <div class="top">
                                                            <p class="mb-0">Khởi hành: {{ tt.dateKH }}</p>

                                                      </div>
                                                      <div class="top">
                                                            <p class="mb-0">Nơi khởi hành: {{ tt.noikhoihanh }}
                                                            </p>
                                                      </div>
                                                      <div class="col-5 mr-3 p-0">
                                                            <button type="button" class="btn btn-light">
                                                                  <p class="mb-0" style="text-decoration: line-through;">Giá:
                                                                        {{ tt.giaT }} VND</p>
                                                            </button>
                                                      </div>
                                                      <div class="col-5 mr-3 p-0">
                                                            <button type="button" class="btn btn-warning top">
                                                                  Giảm còn<p class="mb-0">{{ tt.tich }} VND</p>
                                                            </button>
                                                      </div>
                                                </div>
                                                <div style="text-align: center;">
                                                      <router-link
                                                            :to="{ name: 'chitietKM', params: { id: tt.idT, idLT: tt.idLT, idKM: tt.idKM } }">
                                                            <button class="btn btn-primary top">Chi tiết</button>
                                                      </router-link>
                                                      ||
                                                      <router-link
                                                            :to="{ name: 'tourKM', params: { id: tt.idT, idKM: tt.idKM } }">
                                                            <button class="btn btn-primary top">Đặt tour</button>
                                                      </router-link>
                                                </div>

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
            </a>
      </div>

      <div>
            <!-- Package Start -->
            <div class="container-xxl py-5">
                  <div class="container">
                        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                              <h6 class="section-title bg-white text-center text-primary px-3">Nổi bật</h6>
                              <h1 class="mb-5">Top tour nổi bật</h1>
                        </div>
                        <div class="row g-4 justify-content-center">
                              <div :key="index" v-for="(tt, index) in  tourNB " class="col-lg-4 col-md-6 wow fadeInUp"
                                    data-wow-delay="0.1s">
                                    <div class="package-item">
                                          <div class="overflow-hidden">
                                                <img id="img" class="img-fluid" :src="tt.hinhT" alt="">
                                          </div>

                                          <div class="p-4">
                                                <h5 class="mb-0">{{ tt.tenT }}</h5>

                                                <div class="top">
                                                      <p class="mb-0">Mã
                                                            tour: {{ tt.idT }}</p>
                                                </div>
                                                <div class="top">
                                                      <p class="mb-0">Khởi hành: {{ tt.dateKH }}</p>

                                                </div>
                                                <div class="top">
                                                      <p class="mb-0">Nơi khởi hành: {{ tt.noikhoihanh }}
                                                      </p>
                                                </div>
                                                <div class="top">
                                                      <p class="mb-0">Giá: <button type="button" class="btn btn-warning top">
                                                                  <p class="mb-0">{{ tt.giaT }}</p>
                                                            </button></p>
                                                </div>
                                                <div class="d-flex justify-content-center mb-2 top">
                                                      <router-link
                                                            :to="{ name: 'tour', params: { id: tt.idT, idLT: tt.idLT } }"
                                                            style="border-radius: 30px 0 0 30px;"
                                                            class="btn btn-sm btn-primary px-3 border-end">
                                                            Chi tiết
                                                      </router-link>
                                                      <router-link :to="{ name: 'giohang', params: { id: tt.idT } }">
                                                            <button class="btn btn-sm btn-primary px-3"
                                                                  style="border-radius: 0 30px 30px 0;">Đặt tour</button>
                                                      </router-link>
                                                      <!-- <a href="#" class="btn btn-sm btn-primary px-3"
                                                            style="border-radius: 0 30px 30px 0;">Đặt tour</a> -->
                                                </div>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>
            </div>
            <!-- Package End -->

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
      <div class="text-center">
            <h1 class="mb-5">Vì sau chọn chúng tôi</h1>
      </div>
      <div class="hinh">
            <img src="../assets/img.png" alt="">
      </div>
</template>
<style>
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
      background-color: rgb(24, 59, 75);
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
}
</style>

<script>
import axios from 'axios';
export default {
      data() {
            return {
                  tour: [],
                  tour1: [],
                  tour2: [],
                  tourNB: [],
                  tinh: [],
                  firstItem: null,
                  currentSlide: 0,
                  timkiem: '',
                  selectedImageIndex: 0, // Chỉ số của hình ảnh được chọn
            }
      },
      mounted() {
            $('#yourCarouselId').carousel();
            // if (localStorage.getItem('reloaded')) {
            //       // The page was just reloaded. Clear the value from local storage
            //       // so that it will reload the next time this page is visited.
            //       localStorage.removeItem('reloaded');
            // } else {
            //       // Set a flag so that we know not to reload the page twice.
            //       localStorage.setItem('reloaded', '1');
            //       location.reload();
            // }
            axios.get('http://localhost:3000/api/khuyenmai/all3')
                  .then((response) => {
                        this.tour = response.data;
                        console.log('tour', this.tour)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/khuyenmai/all33')
                  .then((response) => {
                        this.tour1 = response.data;
                        console.log('tour1', this.tour1)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/khuyenmai/all63')
                  .then((response) => {
                        this.tour2 = response.data;
                        console.log('tour2', this.tour2)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/diadanh/tinh/')
                  .then((response) => {
                        this.tinh = response.data;
                        console.log('dstinh', this.tinh)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/tour/tourNB')
                  .then((response) => {
                        this.tourNB = response.data;
                        console.log('tourNB', this.tourNB)
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
                  this.$router.push({ name: "timkiemtinh", params: { idTDD: this.timkiem } });
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