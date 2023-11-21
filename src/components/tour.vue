<template>
      <div class="container">
            <div class="row">
                  <div class="col-4">
                        <router-link :to="{ name: 'timkiemtinh', params: { idTDD: tt.tinhDD } }" style="width: 100%;"
                              :key="index" v-for="(tt, index) in alltinh" :id="'tentinh-' + index" type="button"
                              class="btn btn-light">
                              {{ tt.tinhDD }}
                        </router-link>
                        <!-- <button type="button" class="btn btn-light">Light</button> -->
                  </div>

                  <div class="col-8">
                        <div>
                              <div :key="index" v-for="(tt, index) in  DD ">
                                    <h3 style="text-align: center;">{{ tt.tenDD }}</h3>
                                    <div class="container-xxl py-5">
                                          <div class="container">
                                                <div class="row g-5">
                                                      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s"
                                                            style="min-height: 300px; visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
                                                            <div class="position-relative h-100">
                                                                  <img class="img-fluid position-absolute w-100 h-100"
                                                                        :src="tt.hinh1" alt="" style="object-fit: cover;">
                                                            </div>
                                                      </div>
                                                      <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s"
                                                            style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
                                                            <h5 class="mb-4">{{ tt.motaDD }}</h5>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <h2>Địa điểm trên có trong các tour sau: </h2>
                              <!-- Package Start -->
                              <div class="container">
                                    <div class="row g-4">
                                          <div :key="index" v-for="(tt, index) in  DD " class="col-md-6 wow fadeInUp"
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
                                                                  <p class="mb-0">Giá: <button type="button"
                                                                              class="btn btn-warning top">
                                                                              <p class="mb-0">{{ tt.giaT }}</p>
                                                                        </button></p>
                                                            </div>
                                                            <br>
                                                            <div class="d-flex justify-content-center mb-2 top">
                                                                  <router-link :to="{ name: 'tour', params: { id: tt.idT } }"
                                                                        style="border-radius: 30px 0 0 30px;"
                                                                        class="btn btn-sm btn-primary px-3 border-end">
                                                                        Chi tiết
                                                                  </router-link>
                                                                  <router-link
                                                                        :to="{ name: 'giohang', params: { id: tt.idT } }">
                                                                        <button class="btn btn-sm btn-primary px-3"
                                                                              style="border-radius: 0 30px 30px 0;">Đặt
                                                                              tour</button>
                                                                  </router-link>
                                                                  <!-- <a href="#" class="btn btn-sm btn-primary px-3"
                                                            style="border-radius: 0 30px 30px 0;">Đặt tour</a> -->
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

      </div>
</template>
    
<style>
hr {
      width: 40%;
}

#tentinh {
      width: 100%;
}
</style>
    
<script>
import axios from 'axios';

export default {
      data() {
            return {
                  tenmien: [],
                  isActive: false,
                  tinhMN: [],
                  tinhMT: [],
                  alltinh: [],
                  tinh: [],
                  tour: [],
                  tentinh: '',
                  DD: [],
            };
      },
      mounted() {
            var urlid = this.$route.params.idDD
            console.log('tinhDD', this.$route.params.idDD)
            axios.get('http://localhost:3000/api/diadanh/tinhMN/')
                  .then((response) => {
                        this.tinhMN = response.data;
                        console.log('dstinhMN', this.tinhMN)
                  })
                  .catch((error) => {
                        console.log(error);
                  });

            axios.get('http://localhost:3000/api/diadanh/tinhMT/')
                  .then((response) => {
                        this.tinhMT = response.data;
                        console.log('dstinhMT', this.tinhMT)
                  })
                  .catch((error) => {
                        console.log(error);
                  });

            axios.get('http://localhost:3000/api/diadanh/alltinh/')
                  .then((response) => {
                        this.alltinh = response.data;
                        console.log('dstinh', this.alltinh)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.post('http://localhost:3000/api/TDD/motdd/' + urlid)
                  .then((response) => {
                        this.DD = response.data
                        console.log('diadanh', this.DD)
                  })
                  .catch((error) => {
                        console.log(error);
                  });

      },
      methods: {
            handleButtonClick(selectedTinh) {
                  // Xử lý khi button được click. Ví dụ: In ra tên tỉnh được chọn.
                  console.log('Selected Tinh:', selectedTinh);
                  // Bạn có thể thực hiện các xử lý khác tại đây.
                  this.tentinh = selectedTinh;
                  console.log('tentinh', this.tentinh)

                  axios.post('http://localhost:3000/api/diadanh/tourtinh/', {
                        "tentinh": this.tentinh.tinhDD
                  })
                        .then((response) => {
                              this.tour = response.data;
                              console.log('dstourtheotinh', this.tour)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  console.log('tentinh', this.tentinh.tinhDD)
            },
            timkiemtheotinh() {
                  this.$router.push({ name: "timkiemtinh", params: { idTDD: this.alltinh.tinhDD } });
            }
      }
};
</script>
    