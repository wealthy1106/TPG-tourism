<template>
      <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                  <div class="row g-5">
                        <div class="col-lg-4 col-md-6">
                              <!-- <h4 class="text-white mb-3">Trang chủ</h4> -->
                              <a class="btn btn-link" href="">lễ hội</a>
                              <a class="btn btn-link" href="">Chính sách</a>
                              <a class="btn btn-link" href="">Liên hệ</a>
                              <a class="btn btn-link" href="">Hỗ trợ</a>
                              <!-- <a class="btn btn-link" href="">FAQs & Help</a> -->
                        </div>
                        <div class="col-lg-4 col-md-6" :key="index" v-for="(tt, index) in lienhe ">
                              <h4 class="text-white mb-3">TPG Tourism</h4>
                              <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>{{ tt.diachiLH }}</p>
                              <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>{{ tt.sdtLH }}
                              </p>
                              <p class="mb-2"><i class="fa fa-envelope me-3"></i>{{ tt.emailLH }}</p>
                              <div class="d-flex pt-2">
                                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                              </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                              <h4 class="text-white mb-3">Trưng bày</h4>
                              <div class="row g-2 pt-2">
                                    <div class="col-4">
                                          <img class="img-fluid bg-light p-1" src="../assets/anb1.jpg" alt="">
                                    </div>
                                    <div class="col-4">
                                          <img class="img-fluid bg-light p-1" src="../assets/anb2.jpg" alt="">
                                    </div>
                                    <div class="col-4">
                                          <img class="img-fluid bg-light p-1" src="../assets/anb3.jpg" alt="">
                                    </div>
                                    <div class="col-4">
                                          <img class="img-fluid bg-light p-1" src="../assets/hagiang.jpg" alt="">
                                    </div>
                                    <div class="col-4">
                                          <img class="img-fluid bg-light p-1" src="../assets/hagiang1.jpg" alt="">
                                    </div>
                                    <div class="col-4">
                                          <img class="img-fluid bg-light p-1" src="../assets/hagiang2.jpg" alt="">
                                    </div>
                              </div>
                        </div>
                        <!-- <div class="col-lg-3 col-md-6">
                                    <h4 class="text-white mb-3">Bạn cần hỗ trợ</h4>
                                    <ul>
                                          <li>CSKH: 0738293883</li>
                                          <li>Time: 8h-17h</li>
                                          <li>Email:TPG@gmail.com</li>
                                    </ul>
                              </div> -->
                  </div>
            </div>

      </div>
      <!-- Footer End -->
</template>
<script>
import axios from 'axios';
export default {
      data() {
            return {
                  lienhe: [],

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

      }
}

</script>