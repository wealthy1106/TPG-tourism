
<template>
      <div class="container-xxl py-5">
            <div class="container">
                  <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <!-- <h6 class="section-title bg-white text-center text-primary px-3">Contact Us</h6> -->
                        <h1 class="mb-5">Liên hệ</h1>
                  </div>
                  <div class="row g-4">
                        <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s" :key="index"
                              v-for="(tt, index) in lienhe ">
                              <h5>Liên hệ với chúng tôi</h5>
                              <p class="mb-4">Liên hệ với chúng tôi bằng cách sau:</p>
                              <div class="d-flex align-items-center mb-4">
                                    <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                                          style="width: 50px; height: 50px;">
                                          <i class="fa fa-map-marker-alt text-white"></i>
                                    </div>
                                    <div class="ms-3">
                                          <h5 class="text-primary">Địa điểm</h5>
                                          <p class="mb-0">{{ tt.diachiLH }}</p>
                                    </div>
                              </div>
                              <div class="d-flex align-items-center mb-4">
                                    <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                                          style="width: 50px; height: 50px;">
                                          <i class="fa fa-phone-alt text-white"></i>
                                    </div>
                                    <div class="ms-3">
                                          <h5 class="text-primary">Điện thoại</h5>
                                          <p class="mb-0">{{ tt.sdtLH }}</p>
                                    </div>
                              </div>
                              <div class="d-flex align-items-center">
                                    <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                                          style="width: 50px; height: 50px;">
                                          <i class="fa fa-envelope-open text-white"></i>
                                    </div>
                                    <div class="ms-3">
                                          <h5 class="text-primary">Email</h5>
                                          <p class="mb-0">{{ tt.emailLH }}</p>
                                    </div>
                              </div>
                        </div>
                        <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                              <form>
                                    <div class="row g-3">
                                          <div class="col-md-6">
                                                <div class="form-floating">
                                                      <input type="text" class="form-control" id="name"
                                                            placeholder="Your Name">
                                                      <label for="name">Họ tên</label>
                                                </div>
                                          </div>
                                          <div class="col-md-6">
                                                <div class="form-floating">
                                                      <input type="email" class="form-control" id="email"
                                                            placeholder="Your Email">
                                                      <label for="email">Email</label>
                                                </div>
                                          </div>
                                          <div class="col-12">
                                                <div class="form-floating">
                                                      <input type="text" class="form-control" id="subject"
                                                            placeholder="Subject">
                                                      <label for="subject">Chủ đề</label>
                                                </div>
                                          </div>
                                          <div class="col-12">
                                                <div class="form-floating">
                                                      <textarea class="form-control" placeholder="Leave a message here"
                                                            id="message" style="height: 100px"></textarea>
                                                      <label for="message">Tin nhắn</label>
                                                </div>
                                          </div>
                                          <div class="col-12">
                                                <button class="btn btn-primary w-100 py-3" type="submit">Gửi</button>
                                          </div>
                                    </div>
                              </form>
                        </div>
                  </div>
                  <div class="" data-wow-delay="0.3s" :key="index" v-for="(tt, index) in lienhe ">
                        <iframe :src="tt.map" width="800" height="600" style="border:0;" loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
            </div>
      </div>
</template>
<style>
form {
      height: 400px;
}
</style>
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