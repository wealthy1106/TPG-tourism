<template>
      <div class="container">
            <div class="row">
                  <div class="col-4">
                        <button style="width: 100%;" :key="index" v-for="(tt, index) in alltinh" :id="'tentinh-' + index"
                              type="button" class="btn btn-light" @click="handleButtonClick(tt)">
                              {{ tt.tenTinh }}
                        </button>
                        <!-- <button type="button" class="btn btn-light">Light</button> -->
                  </div>

                  <div class="col-8">
                        <div>
                              <div class="container">
                                    <div class="row g-4">
                                          <div :key="index" v-for="(tt, index) in  tour " class="col-md-6 wow fadeInUp"
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
                                                                  <router-link
                                                                        :to="{ name: 'tour', params: { id: tt.idT, idLT: tt.idLT } }"
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
                  alltinh: [],
                  tinh: [],
                  tour: [],
                  tentinh: '',
                  DD: [],
            };
      },
      mounted() {
            var urlid = this.$route.params.idTDD
            console.log('tinhDD', this.$route.params.idTDD)
            axios.get('http://localhost:3000/api/diadanh/alltinh/')
                  .then((response) => {
                        this.alltinh = response.data;
                        // console.log('dstinh', this.alltinh)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            // axios.post('http://localhost:3000/api/tour/tourtinh/')
            //       .then((response) => {
            //             this.tour = response.data
            //             console.log('diadanh', this.tour)
            //       })
            //       .catch((error) => {
            //             console.log(error);
            //       });
            axios.post('http://localhost:3000/api/diadanh/tinhtour/' + urlid)
                  .then((response) => {
                        this.tour = response.data
                        console.log('touetheotinh', this.tour)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/diadanh/timkiemtinh/' + urlid)
                  .then((response) => {
                        this.tour = response.data
                        console.log('touetheotinh', this.tour)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/diadanh/timkiemtenDD/' + urlid)
                  .then((response) => {
                        this.tour = response.data
                        console.log('touetheotinh', this.tour)
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
                        "tentinh": this.tentinh.tenTinh
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
                  this.$router.push({ name: "timkiemtinh", params: { idTDD: this.alltinh.idTinh } });
            }
      }
};
</script>
    