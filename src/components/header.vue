<template>
      <body>
            <!-- <div id="spinner"
            class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                  <span class="sr-only">Loading...</span>
            </div>
      </div> -->
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
                        <a href="" class="navbar-brand p-0">
                              <img src="../assets/logo.png" style="width: 150%; height: 180px;" alt="">
                              <!-- <h1 class="text-primary m-0">
                                     <i class="fa fa-map-marker-alt me-3"></i> 
                                    TPG Tourism
                              </h1> -->
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                              data-bs-target="#navbarCollapse">
                              <span class="fa fa-bars"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                              <div class="navbar-nav ms-auto py-0">

                                    <router-link :to="{ name: 'trangchu' }" class="nav-item nav-link">
                                          Trang
                                          chủ</router-link>
                                    <router-link :to="{ name: 'sukien' }" class="nav-item nav-link">
                                          Sự kiện</router-link>

                                    <router-link class="nav-item nav-link" :to="{ name: 'lienhe' }">
                                          Liên hệ

                                    </router-link>
                                    <!-- <a href="contact.html" class="nav-item nav-link">Contact</a> -->
                              </div>
                              <router-link v-if="hienlai" to="/login" class="btn btn-primary rounded-pill py-2 px-4">
                                    Đăng ký
                              </router-link>
                              <div class="nav-item dropdown" v-if="hienlen">
                                    <button class="nav-link dropdown-toggle btn btn-primary rounded-pill py-2 px-4"
                                          data-bs-toggle="dropdown">
                                          Min
                                    </button>
                                    <div class="dropdown-menu m-0">
                                          <router-link to="/canhan" class="btn rounded-pill py-2 px-4 dropdown-item">
                                                Trang cá nhân
                                          </router-link>
                                          <button @click="test" class="btn rounded-pill py-2 px-4 dropdown-item">
                                                Đăng xuất
                                          </button>
                                    </div>
                              </div>


                        </div>
                  </nav>


            </div>
            <!-- Navbar & Hero End -->
            <!-- Footer Start -->

      </body>
      <!-- <button @click="test1">test1</button>
      <button @click="test2">test2</button>
      <button @click="test">đăng xuất</button> -->
      <!-- <router-link :to="{ name: 'tour', params: { id: 2 } }">
            <button>test</button>
      </router-link> -->
      <!-- Messenger Plugin chat Code -->
</template>
<script>
import axios from 'axios';
export default {
      data() {
            return {
                  token: '',
                  hienlen: false,
                  hienlai: false,
                  lienhe: [],
            }

      },
      mounted() {

            // console.log('aaa')
            // console.log(this.token)
            this.token = localStorage.getItem('token')
            // console.log(this.token)
            // console.log(this.hienlen)
            if (this.token != null) {
                  // console.log('a')
                  this.hienlen = true
                  this.hienlai = false
                  // this.hienlen = true
                  // // console.log(this.hienlen)
                  // this.hienlai = false
            } else {
                  // this.hienlen = false
                  // this.hienlai = true
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

      },
      methods: {
            trangchu() {
                  this.$router.push({ name: "trangchu" });
            },
            // tai_lai_trang() {
            //       window.location.reload();
            // },
            test() {
                  localStorage.removeItem('token');
                  this.hienlen = false
                  this.hienlai = true
                  // this.$router.push({ name: 'login' });
            },
            test1() {
                  this.hienlen = true
                  this.hienlai = false
            },
            test2() {
                  this.hienlen = false
                  this.hienlai = true
            }
      }
}
</script>
<style>
#icon {
      width: 10%;
}
</style>