
<template>
      <div>
            <div>
                  <div style="position: relative; text-align: center;">
                        <img src="https://hd1.hotdeal.vn/images/10-9/dfd/113132-body-%20%282%29.jpg" alt="">
                        <!-- <div
                              style="position: absolute; top: 25%; left: 40%; transform: translate(-50%, -50%); text-align: center; color: white;">
                              <h3 style="padding-right: 220px;padding-left: 50px; color: #2814ed;">Trãi nghiệm du lịch cùng
                                    TPG Tourism</h3>
                        </div> -->
                  </div>

            </div>

            <div style="padding: 10px;">
                  <div class="position-relative w-75 mx-auto animated slideInDown">
                        <input style="height: 55px;" class="form-control border-1 rounded-pill w-100 py-3 ps-4 pe-5"
                              type="text" placeholder="Nhập nơi bạn muốn đến">
                        <button type="button"
                              class="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                              style="margin-top: 7px;">Search</button>
                  </div>
            </div>
      </div>
      <div class="container-xxl py-5">
            <div class="container">
                  <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 class="section-title bg-white text-center text-primary px-3">Festival</h6>
                        <h1 class="mb-5">Sự kiện/Lễ hội</h1>
                  </div>
                  <div class="justify-content-center">
                        <div class="wow fadeInUp" data-wow-delay="0.1s" :key="index" v-for="(tt, index) in dslehoi ">
                              <h3>{{ tt.tenLH }}</h3>
                              <p>{{ tt.motaLH }}</p>
                              <img style="width: 100%; height: 500px;padding: 10px 100px;" :src="tt.hinhLH" alt="" srcset="">
                              <br>
                              <br>
                        </div>
                  </div>

            </div>
      </div>
</template>
<script>
import axios from 'axios'
export default {
      data() {
            return {
                  dslehoi: [],
            }
      },
      mounted() {
            axios.get('http://localhost:3000/api/lehoi/')
                  .then((response) => {
                        //      console.log(response.data);
                        // console.log(response.data._id)
                        this.dslehoi = response.data;
                        console.log('lehoi', this.dslehoi)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
      },
      methods: {
            // chitiet() {
            //       this.$router.push({ name: "chitietlehoi" });
            // },


      },
}
</script>