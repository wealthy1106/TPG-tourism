
<template>
      <div class="container">
            <div class="row py-4 flex-md-row flex-column-reverse back">
                  <div class="col-md-8 col-12 left">
                        <section>
                              <div class="contact-info p-4 mb-4 bro">
                                    <div class="heading">
                                          <h5 class="fw-bold tieude">THÔNG TIN LIÊN LẠC</h5>
                                    </div>
                                    <div class="row" :key="index" v-for="(tt, index) in tttour">
                                          <div class="col-12 col-md-6">
                                                <span class="label">Họ tên</span>
                                                <p class="info">{{ tt.hotenLL }}</p>
                                          </div>
                                          <div class="col-md-6 col-12">
                                                <span class="label">Email</span>
                                                <p class="info">{{ tt.emailLL }}</p>
                                          </div>
                                          <div class="col-md-6 col-12">
                                                <span class="label">Địa chỉ</span>
                                                <p class="info">
                                                      {{ tt.diachiLL }}
                                                </p>
                                          </div>

                                          <div class="col-md-6 col-12">
                                                <span class="label">Điện thoại</span>
                                                <p class="info">{{ tt.sdtLL }}</p>
                                          </div>

                                          <div class="col-12">
                                                <span class="label">Ghi chú</span>
                                                <p class="info">
                                                      Booking từ tpg-tourism.web.app
                                                </p>
                                          </div>
                                    </div>
                              </div>
                              <div class="booking-detail p-4 mb-4 bro" :key="index" v-for="(tt, index) in tttour">
                                    <div class="heading">
                                          <h5 class="fw-bold tieude">CHI TIẾT BOOKING</h5>
                                    </div>
                                    <div class="row item">
                                          <div class="col-md-3 col-12 label">Số booking</div>
                                          <div class="col-md-9 col-12 text">
                                                <span class="text-primary fw-bold">{{ tt.idDT }}</span>
                                                (Quý khách vui lòng nhớ số booking để thuận
                                                tiện cho các giao dịch sau này)
                                          </div>
                                    </div>
                                    <div class="row item">
                                          <div class="col-md-3 col-12 label">Trị giá booking</div>
                                          <div class="col-md-9 col-12 text"> {{ tt.tongcong }} ₫</div>
                                    </div>
                                    <div class="row item">
                                          <div class="col-md-3 col-12 label">Số tiền đã thanh toán</div>
                                          <div class="col-md-9 col-12 text">0₫</div>
                                    </div>
                                    <div class="row item">
                                          <div class="col-md-3 col-12 label">Số tiền còn lại</div>
                                          <div class="col-md-9 col-12 text">{{ tt.tongcong }} ₫</div>
                                    </div>
                                    <div class="row item">
                                          <div class="col-md-3 col-12 label">Ngày đăng ký</div>
                                          <div class="col-md-9 col-12 text">
                                                {{ formatDateTime(tt.ngayDT) }}
                                          </div>
                                    </div>
                                    <div class="row item">
                                          <div class="col-md-3 col-12 label">
                                                Hình thức thanh toán
                                          </div>
                                          <div class="col-md-9 col-12 text">
                                                {{ tt.phuongthuc }}<br>
                                          </div>
                                    </div>
                                    <div class="row item">
                                          <div class="col-md-3 col-12 label">Tình trạng</div>
                                          <div class="col-md-9 col-12 text">
                                                {{ tt.trangthai }}
                                          </div>
                                    </div>
                                    <!-- <div class="row item">
                                          <div class="col-md-3 col-12 label">Thời hạn thanh toán</div>
                                          <div class="col-md-9 col-12 text">
                                                <span class="text-primary fw-bold">11/11/23 16:03:49</span>
                                                (Theo giờ Việt Nam. Booking sẽ tự động hủy nếu quá thời hạn thanh toán trên)
                                          </div>
                                    </div> -->
                              </div>
                        </section>
                  </div>
                  <div class="col-md-4 col-12 right bro" :key="index" v-for="(tt, index) in tttour">
                        <div class="group-checkout">
                              <div class="heading">
                                    <h5 class="fw-bold tieude">PHIẾU XÁC NHẬN BOOKING</h5>
                              </div>
                              <div class="product">
                                    <div class="product-image">
                                          <a href="#">
                                                <img :src="tt.hinhT" class="img-fluid" alt="image">
                                          </a>
                                    </div>
                                    <div class="product-content">
                                          <p class="title">
                                                {{ tt.tenT }}
                                          </p>
                                          <span>
                                                Số booking:
                                                <span class="text-primary fw-bold">{{ tt.idDT }}</span>
                                          </span>
                                    </div>
                              </div>
                              <div class="detail">
                                    <div class="row item">
                                          <div class="col-5 fw-bold">Mã tour</div>
                                          <div class="col-7 text-end">{{ tt.idT }}</div>
                                    </div>
                                    <div class="row item">
                                          <div class="col-5 fw-bold">Hành trình</div>
                                          <div class="col-7 text-end">{{ tt.tenT }}</div>
                                    </div>
                                    <div class="row item">
                                          <div class="col-5 fw-bold">Ngày đi</div>
                                          <div class="col-7 text-end">{{ formatDate(tt.ngaykhoihanh) }}</div>
                                    </div>
                                    <div class="row item">
                                          <div class="col-5 fw-bold">Ngày về</div>
                                          <div class="col-7 text-end">{{ tt.ngayend }}</div>
                                    </div>
                                    <div class="row item">
                                          <div class="col-5 fw-bold">Nơi khởi hành</div>
                                          <div class="col-7 text-end">{{ tt.noikhoihanh }}</div>
                                    </div>
                              </div>
                              <div class="qr-code">
                                    <div class="image">
                                          <div class="wrapper">
                                                <img style="width: 200px;" src="./../../assets/qrcode.png">
                                          </div>

                                    </div>
                                    <div>
                                          <p>
                                                Để xem thông tin chương trình tour mới nhất Quý khách có
                                                thể dùng điện thoại để quét mã QR bên cạnh để truy cập vào
                                                website.
                                          </p>
                                          <p>
                                                Để cài phần mềm quét mã QR Code quý khách có thể tìm trong
                                                kho ứng dụng của điện thoại với từ khóa sau: QRCode
                                                Scanner, QRCode Reader,..
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>
<style>
.card card-body {
      width: 400px;
}

p,
span {
      font-size: 20px;
      margin-top: 10px;
}

p .info {
      font-size: 17px;
}

span .label {
      font-size: 17px;
}

.text,
.label,
.fw-bold,
.text-end {
      font-size: 20px;
}

.find-booking .left .contact-info {
      background: #fff;
      border: 0.5px solid #d5d5d5;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border-radius: 10px;
}

.p-4 {
      padding: 1.5rem !important;
}

.mb-4 {
      margin-bottom: 1.5rem !important;
}

.contact-info {
      border: 1px solid aliceblue;
}

.back {
      background-color: aliceblue;
}

.bro {
      border: 1px solid rgb(139, 194, 243);
}

.item {
      padding: 10px;
      margin: 10px;
}

.heading {
      padding: 10px;
}

.qr-code {
      text-align: center;
}
</style>
<script>
import axios from 'axios';
export default {
      props: ['idT', 'idDT'],
      data() {
            return {
                  tttour: [],
            }

      },
      mounted() {
            var urlidTT = this.$route.params.idTT
            var urlidDT = this.$route.params.idDT
            axios.get('/api/dattour/' + urlidDT + '/' + urlidTT)
                  .then((response) => {
                        this.tttour = response.data;
                        console.log('dattour', this.tttour)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
      },
      methods: {
            formatDateTime(dateTimeString) {
                  const formattedDateTime = new Date(dateTimeString).toLocaleString('en-GB', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false, // 24-hour format
                  });
                  return formattedDateTime;
            },
            formatDate(dateString) {
                  const formattedDate = new Date(dateString).toLocaleDateString('en-GB');
                  return formattedDate;
            }
      }
}
</script>