<template>
      <div class="container">
            <div class="row">
                  <div class="col-2">
                        <div class="list-group" style="width: 100%;" :key="index" v-for="(tt, index) in alltinh"
                              :id="'tentinh-' + index" type="button" @click="handleButtonClick(tt)">
                              <a href="#" :class="{ 'active': selectedIndex === index }"
                                    class="list-group-item list-group-item-action" aria-current="true">
                                    {{ tt.tenTinh }}
                              </a>

                        </div>

                  </div>

                  <div class="col-10">
                        <div class="container">
                              <div>
                                    <h3 class="mb-5">Danh sách các địa danh</h3>
                              </div>
                              <div class="map-route">
                                    <section class="section-07 mb-5">
                                          <div class="container">
                                                <div class="timeline-section">
                                                      <div :key="index" v-for="(tt, index) in tour ">
                                                            <div class="excerpt">
                                                                  <h4>{{ tt.tenDD }} ({{ tt.tenTinh }})</h4>
                                                                  <span class="line"></span>
                                                                  <title>{{ tt.tenDD }}</title>
                                                                  <p style="text-align:justify">{{ tt.motaDD }}</p>
                                                                  <img class="hinh" :src="tt.hinh1" alt="" srcset="">
                                                                  <p style="margin: 10px auto;text-align: center;">{{ tt.tenDD
                                                                  }}
                                                                  </p>
                                                            </div>

                                                      </div>

                                                </div>
                                          </div>
                                    </section>
                              </div>

                        </div>
                  </div>
            </div>
            <h2>Địa điểm trên có trong các tour sau: </h2>
            <!-- Package Start -->
            <div class="container">
                  <div class="row g-4">
                        <div :key="index" v-for="(tt, index) in  DD " class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
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
                                          <br>
                                          <div class="d-flex justify-content-center mb-2 top">
                                                <router-link :to="{ name: 'tour', params: { id: tt.idT, idLT: tt.idLT } }"
                                                      style="border-radius: 30px 0 0 30px;"
                                                      class="btn btn-sm btn-primary px-3 border-end">
                                                      Chi tiết
                                                </router-link>
                                                <router-link :to="{ name: 'giohang', params: { id: tt.idT } }">
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
</template>
    
<style>
hr {
      width: 40%;
}

#tentinh {
      width: 100%;
}

#img {
      width: 100%;
      height: 200px;
}

.hinh {
      width: 810px;
      height: 399px;
}

.active {
      background-color: #3b969c;
      /* Add other styling as needed */
}
</style>
    
<script>
import axios from 'axios';

export default {
      data() {
            return {
                  selectedIndex: null,
                  tenmien: [],
                  isActive: false,
                  alltinh: [],
                  tinh: [],
                  tour: [],
                  tentinh: '',
                  DD: [],
                  dsdiemden: [],
                  urlid: '',
                  tinhthanh: [],
                  shouldPerformSearch: true,
                  // DD: [],
            };
      },
      watch: {
            '$route.params': {
                  immediate: true,  // Để gọi ngay từ lúc ban đầu
                  handler(newParams, oldParams) {
                        // Thực hiện tìm kiếm dựa trên newParams
                        this.performSearch(newParams);
                  }
            }
      },
      mounted() {

            var urlid = this.$route.params.tenDD
            this.urlid = urlid
            // console.log('tinhDD', this.$route.params.idTinh)

            axios.get('http://localhost:3000/api/diadanh/alltinh/')
                  .then((response) => {
                        this.alltinh = response.data;
                        // console.log('dstinh', this.alltinh)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            // axios.get('http://localhost:3000/api/diadanh/timkiemtentinh/' + urlid)
            //       .then((response) => {
            //             this.tinhthanh = response.data
            //             console.log('tinh', this.tinhthanh)
            //       })
            //       .catch((error) => {
            //             console.log(error);
            //       });
            axios.get('http://localhost:3000/api/TDD/timkiemDD/' + urlid)
                  .then((response) => {
                        this.tour = response.data
                        console.log('tourtheotinh', this.tour)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/TDD/timkiemDD/ ' + urlid)
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
                  // this.selectedIndex = index;
                  axios.post('http://localhost:3000/api/diadanh/tourtinh/', {
                        "idTinh": this.tentinh.idTinh
                  })
                        .then((response) => {
                              this.tour = response.data;
                              console.log('tour', this.tour)
                              // console.log('tentinh', this.tour[0].idTinh)

                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  if (this.shouldPerformSearch) {
                        this.performSearch(this.$route.params.tenDD)
                        this.shouldPerformSearch = false; // Đặt biến cờ thành false sau khi đã gọi performSearch()
                  }
            },
            // timkiemtheotinh() {
            //       this.$router.push({ name: "timkiemtinh", params: { idTDD: this.alltinh.idTinh } });
            // },
            performSearch(params) {
                  // Gọi API hoặc thực hiện tìm kiếm với params
                  axios.get(`http://localhost:3000/api/TDD/timkiemDD/${params.tenDD}`)
                        .then((response) => {
                              this.tour = response.data;
                              console.log('timkiem', this.tour);
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  axios.get(`http://localhost:3000/api/diadanh/tour/timkiemtour/${params.tenDD}`)
                        .then((response) => {
                              this.DD = response.data
                              console.log('diadanh', this.DD)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
            },
      }
};
</script>
    