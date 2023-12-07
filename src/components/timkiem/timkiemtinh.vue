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
                        <div class="container">
                              <h3 class="mb-5">Danh sách các điểm đến</h3>
                              <div class="map-route">
                                    <section class="section-07 mb-5">
                                          <div class="container">
                                                <div class="timeline-section">
                                                      <div :key="index" v-for="(tt, index) in tour ">
                                                            <h3>{{ tt.tieude }}</h3>
                                                            <div class="excerpt">
                                                                  <h4>{{ tt.tenDD }}</h4>
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
                  dsdiemden: [],
            };
      },
      mounted() {
            var urlid = this.$route.params.idTinh
            console.log('tinhDD', this.$route.params.idTinh)
            axios.get('http://localhost:3000/api/diadanh/alltinh/')
                  .then((response) => {
                        this.alltinh = response.data;
                        // console.log('dstinh', this.alltinh)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.post('http://localhost:3000/api/diadanh/diemdentheotinh/' + urlid)
                  .then((response) => {
                        this.tour = response.data
                        console.log('diadanh', this.tour)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            // axios.post('http://localhost:3000/api/diadanh/tinhtour/' + urlid)
            //       .then((response) => {
            //             this.tour = response.data
            //             console.log('touetheotinh', this.tour)
            //       })
            //       .catch((error) => {
            //             console.log(error);
            //       });
            // axios.get('http://localhost:3000/api/diadanh/timkiemtinh/' + urlid)
            //       .then((response) => {
            //             this.tour = response.data
            //             console.log('touetheotinh', this.tour)
            //       })
            //       .catch((error) => {
            //             console.log(error);
            //       });
            // axios.get('http://localhost:3000/api/diadanh/timkiemtenDD/' + urlid)
            //       .then((response) => {
            //             this.tour = response.data
            //             console.log('touetheotinh', this.tour)
            //       })
            //       .catch((error) => {
            //             console.log(error);
            //       });
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
    