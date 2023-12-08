<template>
      <body>
            <!-- <div id="spinner"
            class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                  <span class="sr-only">Loading...</span>
            </div>
      </div> -->
            <thongbaodangxuat ref="notification"></thongbaodangxuat>
            <!-- Topbar Start -->
            <div class="container-fluid bg-dark px-5 d-none d-lg-block">
                  <div class="row gx-0">
                        <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                              <div class="d-inline-flex align-items-center" style="height: 45px;" :key="index"
                                    v-for="(tt, index) in lienhe">
                                    <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>{{ tt.diachiLH
                                    }}</small>
                                    <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>{{ tt.sdtLH }}</small>
                                    <small class="text-light"><i class="fa fa-envelope-open me-2"></i>{{ tt.emailLH }}</small>
                              </div>
                        </div>
                        <div class="col-lg-4 text-center text-lg-end">
                              <div class="d-inline-flex align-items-center" style="height: 45px;">
                                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i
                                                class="fab fa-twitter fw-normal"></i></a>
                                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i
                                                class="fab fa-facebook-f fw-normal"></i></a>
                                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i
                                                class="fab fa-linkedin-in fw-normal"></i></a>
                                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i
                                                class="fab fa-instagram fw-normal"></i></a>
                                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i
                                                class="fab fa-youtube fw-normal"></i></a>
                              </div>
                        </div>
                  </div>
            </div>
            <!-- Topbar End -->


            <!-- Navbar & Hero Start -->
            <div class="container-fluid position-relative p-0">
                  <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                        <a href="" class="navbar-brand p-0 col-1">
                              <img src="../assets/logo.png" style="width: 100%; height: 180px;" alt="">
                              <!-- <h1 class="text-primary m-0">
                                     <i class="fa fa-map-marker-alt me-3"></i> 
                                    TPG Tourism
                              </h1> -->
                        </a>

                        <div style="padding: 10px;" class="col-5">
                              <div class="position-relative w-75 mx-auto animated slideInDown">
                                    <input style="height: 55px;"
                                          class="form-control border-1 rounded-pill w-100 py-3 ps-4 pe-5" type="text"
                                          placeholder="Nhập nơi bạn muốn đến" v-model="timkiem">
                                    <button type="button" @click="tk"
                                          class="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                                          style="margin-top: 7px;">Search</button>
                              </div>
                        </div>
                        <div class="collapse navbar-collapse col-6" id="navbarCollapse">
                              <div class="navbar-nav ms-auto py-0">

                                    <router-link :to="{ name: 'dautien' }" class="nav-item nav-link">
                                          Trang
                                          chủ</router-link>
                                    <router-link :to="{ name: 'trangchu' }" class="nav-item nav-link">
                                          Tour</router-link>
                                    <router-link :to="{ name: 'sukien' }" class="nav-item nav-link">
                                          Sự kiện</router-link>

                                    <router-link class="nav-item nav-link" :to="{ name: 'lienhe' }">
                                          Liên hệ

                                    </router-link>
                                    <!-- <a href="contact.html" class="nav-item nav-link">Contact</a> -->

                              </div>
                              <router-link v-if="hienlai" :to="{ name: 'dangnhap' }"
                                    class="btn btn-primary rounded-pill py-2 px-4">
                                    Đăng nhập
                              </router-link>
                              <div class="dropdown" v-if="hienlen">
                                    <button :key="index" v-for="(tt, index) in taikhoan"
                                          class="btn btn-primary rounded-pill py-2 px-4 dropdown-toggle" type="button"
                                          data-toggle="dropdown" aria-expanded="false">
                                          {{ tt.hoten }}
                                    </button>
                                    <div class="dropdown-menu">
                                          <router-link to="/canhan" class="btn rounded-pill py-2 px-4 dropdown-item">
                                                Trang cá nhân
                                          </router-link>

                                          <button @click="dangxuat" class="btn rounded-pill py-2 px-4 dropdown-item">
                                                Đăng xuất
                                          </button>
                                    </div>
                              </div>

                        </div>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                              data-bs-target="#navbarCollapse">
                              <span class="fa fa-bars"></span>
                        </button>
                  </nav>

            </div>
            <!-- Navbar & Hero End -->
            <!-- Footer Start -->
            <div class="card text-center thongbao" v-if="isVisible">
                  <div class="card-header">
                        <!-- Thêm biểu tượng xóa ở đây -->
                        <button class="close" @click="closeNotification">
                              <span aria-hidden="true">&times;</span>
                        </button>
                        Thông báo
                  </div>
                  <div class="card-body">
                        <h5 class="card-title">{{ message }}</h5>
                        <button @click="xacnhandangxuat" style="width: 100px;" type="button" class="btn btn-primary">Xác
                              nhận</button>
                  </div>
            </div>
      </body>
</template>
<script>
import axios from 'axios';
import Notification from "@/components/thongbao/Notification.vue";
import thongbaodangxuat from "@/components/thongbao/dangxuat.vue";
export default {
      components: {
            thongbaodangxuat,
      },
      data() {
            return {
                  token: '',
                  hienlen: false,
                  hienlai: false,
                  lienhe: [],
                  timkiem: '',
                  iduser: '',
                  taikhoan: '',
                  isVisible: false,
                  message: ""
            }

      },
      mounted() {
            console.log('user', localStorage.getItem('user'))
            this.iduser = localStorage.getItem('user')
            this.token = localStorage.getItem('token')
            if (this.token != null) {
                  this.hienlen = true
                  this.hienlai = false
                  // this.hienlen = false
                  // this.hienlai = true
            } else {
                  this.hienlen = false
                  this.hienlai = true

            }
            axios.get('http://localhost:3000/api/lienhe/')
                  .then((response) => {
                        this.lienhe = response.data;
                        console.log('lienhe', this.lienhe)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            if (this.iduser != null) {
                  axios.get('http://localhost:3000/api/taikhoan/' + this.iduser)
                        .then((response) => {
                              this.taikhoan = response.data;
                              console.log('taikhoan', this.taikhoan)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
            } else {
                  return 'chua dang nhap'
            }

      },
      // created() {
      //       // Hãy chắc chắn rằng đoạn mã này được đặt trong ngữ cảnh của một thành phần Vue
      //       this.$on('dang-xuat', this.xuLyDangXuat);
      // },
      methods: {
            showAlert() {
                  this.$refs.notification.showNotification("Xác nhận đăng xuất!");
            },
            showNotification(message) {
                  this.$refs.notification.showNotification(message);
            },
            xuLyDangXuat() {
                  // Thực hiện hành động khi người dùng đăng xuất (hiển thị nút đăng nhập)
                  this.hienlai = true;
                  this.notificationVisible = false; // Ẩn thông báo khi người dùng xác nhận đăng xuất
            },
            trangchu() {
                  this.$router.push({ name: "trangchu" });
            },
            tk() {
                  this.$router.push({ name: "tk", params: { tenDD: this.timkiem } });
                  // Thực hiện tìm kiếm dựa trên this.timkiem
                  console.log('Searching for:', this.timkiem);
                  // Thêm logic tìm kiếm của bạn ở đây

            },
            dangxuat() {
                  this.showNotification("Xác nhận đăng xuất");
                  // localStorage.removeItem('token');
                  // localStorage.removeItem('user')
                  // this.hienlen = false
                  // this.hienlai = true
                  // this.$router.push({ name: 'login' });
            },

            xacnhandangxuat() {
                  // Thực hiện các bước đăng xuất, ví dụ: xóa token, làm mới trang, v.v.
                  localStorage.removeItem('token');
                  localStorage.removeItem('user')
                  this.hienlen = false
                  this.hienlai = true
                  // this.$router.push({ name: 'login' });
                  this.closeNotification();

            },
            showNotification(message) {
                  this.message = message;
                  this.isVisible = true;

                  // Tự động đóng sau 30 giây
                  // setTimeout(() => {
                  //       this.closeNotification();
                  // }, 30000);
            },
            closeNotification() {
                  this.isVisible = false;
            }
      }
}
</script>
<style>
#icon {
      width: 10%;
}

.thongbao {
      width: 500px;
      margin: 0 auto;
      top: 40%;
      z-index: 2;
}
</style>