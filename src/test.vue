
<template>
      <div class="row">
            <div class="col-8 luoi">
                  <h2>Thông tin liên lạc</h2>
                  <form action="" method="get">
                        <div class="row">
                              <div class="name col-6">
                                    <label>Họ và Tên <b>*</b></label>
                                    <input class="form-control" v-model="hotenLL" id="contact_name" name="Fullname"
                                          type="text">
                              </div>
                              <div class="mail col-6">
                                    <label>Email <b>*</b></label>
                                    <input class="form-control" v-model="emailLL" id="email" name="Email" type="text">
                              </div>
                        </div>
                        <div class="row">
                              <div class="phone col-6">
                                    <label>Số điện thoại <b>*</b></label>
                                    <input v-model="sdtLL" class="form-control" id="mobilephone" name="Telephone"
                                          onkeypress="return funCheckInt(event)" type="text">
                              </div>
                              <div class="addess col-6">
                                    <label>Địa chỉ</label>
                                    <input v-model="diachiLL" class="form-control" id="address" name="Address" type="text">
                              </div>
                        </div>

                  </form>
                  <br>
                  <br>
                  <h2>Thông tin hành khách</h2>
                  <form v-for="(form, index) in forms" :key="index">
                        <h4>Hành khách {{ index + 1 }}: </h4>
                        <div class="row">
                              <div class="name col-4">
                                    <label>Họ và Tên <b>*</b></label>
                                    <input class="form-control" id="contact_name" name="Fullname" type="text"
                                          v-model="forms.hoten">
                              </div>
                              <div class="mail col-4">
                                    <label>Năm sinh <b>*</b></label>
                                    <input class="form-control" name="birtday" type="text" v-model="forms.namsinh">
                              </div>
                              <div class="phone col-4">
                                    <label>Số điện thoại <b>*</b></label>
                                    <input class="form-control" id="mobilephone" name="Telephone"
                                          onkeypress="return funCheckInt(event)" type="text" v-model="forms.sdt">
                              </div>
                        </div>
                  </form>
            </div>
            <div class="col-4">
                  <div id="col4">
                        <h4>Lịch khởi hành & giá</h4>
                        <div id="mar">
                              <p>Chọn ngày khởi hành</p>
                              <div class="row">
                                    <button :key="index" v-for="(tt, index) in ngaythang" @click="chonngay(tt.ngaykhoihanh)"
                                          style="padding: 5px; margin-left: 10px; border: 1px solid slateblue;" type="button"
                                          class="btn btn-light col-3">{{ tt.ngaythang }}</button>
                              </div>

                        </div>
                        <div id="congtru" :key="index" v-for="(tt, index) in  km ">
                              <div class="row" style="padding: 10px; border: 1px solid slateblue;margin-top: 10px;">
                                    <!-- <p class="col-4" style="text-align: center;">Người lớn</p> -->
                                    <!-- <p>2300000</p> -->
                                    <input disabled class="col-4" type="text" value="Người lớn" id="gia">
                                    <input disabled class="col-4" type="text" v-model="this.tour[0].nguoilon" id="gia">
                                    <p class="col-4" style="text-align: center;padding-top: 10px;">
                                          <button @click="increaseValue()" id="mau">+</button>
                                          <input id="trangtri" @input="updateForms" type="text" v-model="inputValue">
                                          <button @click="decreaseValue()" id="mau">-</button>
                                    </p>
                              </div>
                              <div class="row" style="padding: 10px;margin-top: 10px;border: 1px solid slateblue; ">
                                    <div class="col-4">
                                          <input disabled type="text" value="Trẻ em" id="gia">
                                          <select class="form-control" v-model="giatre"
                                                style="width: 110px; background-color: aliceblue;">
                                                <option :value="this.tour[0].tred3">Dưới 3 tuổi</option>
                                                <option :value="this.tour[0].tre10">Từ 3 - 10</option>
                                                <!-- <option value="option3"></option> -->
                                          </select>
                                    </div>
                                    <input disabled class="col-4" type="text" v-model="giatre" id="gia">
                                    <p class="col-4" style="text-align: center;">
                                          <button @click="plusValue" id="mau">+</button>
                                          <input id="trangtri" type="text" v-model="ipValue">
                                          <button @click="truValue" id="mau">-</button>
                                    </p>
                              </div>
                              <p style="color: blue;">Liên hệ đặt chỗ</p>
                        </div>
                        <div class="row" id="mar">
                              <h5 class="col-5">Tổng cộng</h5>
                              <input class="col-5" disabled type="text" v-model="tong" readonly>
                        </div>
                        <br>
                        <div class="thanhtoan container">
                              <input disabled type="text" value="Hình thức thanh toán" id="gia">
                              <div class="d-block my-3">
                                    <div class="custom-control custom-radio">
                                          <input id="httt-1" name="httt_ma" type="radio" class="custom-control-input"
                                                required="" v-model="tienmat">
                                          <label class="custom-control-label" for="httt-1">Tiền mặt</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                          <input id="httt-2" name="httt_ma" type="radio" class="custom-control-input"
                                                required="" v-model="vnpay">
                                          <label class="custom-control-label" for="httt-2">Chuyển khoản:
                                                <img width="30px"
                                                      src="data:image/png;base64,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"
                                                      alt="" srcset="">
                                          </label>
                                    </div>
                              </div>
                        </div>
                        <div class="row" id="martop">
                              <!-- Button trigger modal -->
                              <button id="tuvan" type="button" class="btn btn-primary col-5 " data-toggle="modal"
                                    data-target="#exampleModal">
                                    Liên hệ tư vấn
                              </button>

                              <!-- Modal -->
                              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                          <div class="modal-content">
                                                <div class="modal-header">
                                                      <h5 class="modal-title" id="exampleModalLabel">Liên hệ tư vấn</h5>
                                                      <button type="button" class="close" data-dismiss="modal"
                                                            aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                      </button>
                                                </div>
                                                <div class="modal-body">
                                                      <div class="col-xs-12 no-padding">
                                                            <div class="row">
                                                                  <p style="color: coral;">Quý khách vui lòng nhập thông tin
                                                                        liên hệ
                                                                        bên dưới</p>
                                                                  <div class="col-xs-12 v-margin-bottom-15">
                                                                        <label class="control-label">Họ &amp; Tên <span
                                                                                    class="vcolor-danger">*</span></label>
                                                                        <input maxlength="255" type="text"
                                                                              class="form-control " id="customerName"
                                                                              placeholder="">
                                                                  </div>
                                                                  <div class="col-xs-12 v-margin-bottom-15">
                                                                        <label class="control-label">Điện thoại <span
                                                                                    class="vcolor-danger">*</span></label>
                                                                        <input maxlength="100" type="text"
                                                                              class="form-control" id="customerPhone"
                                                                              placeholder="">
                                                                  </div>
                                                                  <div class="col-xs-12 v-margin-bottom-15">
                                                                        <label class="control-label">Email (nếu có)<span
                                                                                    class="vcolor-danger"></span></label>
                                                                        <input maxlength="100" type="text"
                                                                              class="form-control" id="customerEmail"
                                                                              placeholder="">
                                                                  </div>
                                                                  <div class="col-xs-12">
                                                                        <label class="control-label">Yêu cầu khác</label>
                                                                        <textarea maxlength="1000" rows="2" cols="30"
                                                                              class="form-control" id="notes"></textarea>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div class="modal-footer">
                                                      <button type="button" class="btn btn-secondary"
                                                            data-dismiss="modal">Close</button>
                                                      <button type="button" class="btn btn-primary">Gửi yêu cầu</button>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <button id="tuvan" @click="test" type="button" class="btn btn-warning col-5">Đặt
                                    tour</button>

                        </div>

                  </div>

            </div>
      </div>
</template>
<style>
.login-modal {
      color: #555863
}

#gia {
      font-size: 20px;
      font-weight: 500;
}

.luoi {
      padding-left: 100px;
}

#rong {
      width: 100px;
}

#mau {
      background-color: aliceblue;
      border: aliceblue;
}

#trangtri {
      width: 40px;
      text-align: center;
      border: 1px;
}

#martop {
      margin-top: 30px;
      margin-left: 10px;
}

#tuvan {
      height: 60px;
}

#congtru {
      width: 360px;
      margin-left: 20px;
}

#col4 {
      background-color: aliceblue;
      padding-top: 20px;
}

#mar {
      margin-left: 10px;
}

#gia {
      background-color: aliceblue;
      border: aliceblue;
}
</style>
<script>
import axios from 'axios';
export default {
      data() {
            return {
                  selectedDate: '',
                  tour: [],
                  ngaythang: [],
                  inputValue: 1,
                  ipValue: 0,
                  tthk: [],
                  km: [],
                  tong: 0,
                  dattour: [],
                  forms: [{
                        hoten: '',
                        namsinh: '',
                        sdt: '',
                  }],
                  giatre: 0,
                  datetour: '',
                  selectedNgayKhoiHanh: '',
                  thanhtoan: '',
                  tt: [],
            }
      },
      computed: {
            updateForms: function () {
                  // Cập nhật số lượng forms khi giá trị của input thay đổi
                  const currentNumberOfForms = this.forms.length;
                  const targetNumberOfForms = parseInt(this.inputValue);

                  if (targetNumberOfForms > currentNumberOfForms) {
                        // Thêm forms mới nếu số lượng tăng
                        for (let i = currentNumberOfForms; i < targetNumberOfForms; i++) {
                              this.forms.push({
                                    hoten: '',
                                    namsinh: '',
                                    sdt: '',
                              });
                        }
                  } else if (targetNumberOfForms < currentNumberOfForms) {
                        // Loại bỏ forms nếu số lượng giảm
                        this.forms.splice(targetNumberOfForms);
                  }
            },
            tong: function () {
                  if (this.tour.length > 0) {
                        var giaNL = this.tour[0].nguoilon;
                        console.log('gia', giaNL);
                        // Tính toán và trả về kết quả tự động khi giá trị của input thay đổi
                        return (giaNL * this.inputValue) + (this.giatre * this.ipValue);
                  } else {
                        return 0; // Hoặc giá trị mặc định khác tùy theo logic ứng dụng của bạn
                  }
            },
            // giatre() {
            //       return this.giatre = this.tour.tre10
            // }
      },
      mounted() {
            if (localStorage.getItem('user') == null) {
                  window.location.href = '/login';
            }
            var urlid = this.$route.params.id
            // var urltenKM = this.$route.params.tenKM
            axios.get('http://localhost:3000/api/thanhtoan/all/' + urlid)
                  .then((response) => {
                        this.tour = response.data;
                        console.log('tour', this.tour)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/thanhtoan/date/' + urlid)
                  .then((response) => {
                        this.ngaythang = response.data;
                        console.log('ngaythang', this.ngaythang)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/tour/' + urlid)
                  .then((response) => {
                        this.km = response.data;
                        console.log('KM', this.km)
                  })
                  .catch((error) => {
                        console.log(error);
                  });

      },
      methods: {
            thanhtoan() {
                  axios.get('http://localhost:3000/api/thanhtoan/vnpay_return')
                        .then((response) => {
                              this.tt = response.data;
                              console.log('thanhtoan', this.tt)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
            },
            test() {
                  var urlid = this.$route.params.id
                  axios.post('http://localhost:3000/api/dattour/' + urlid, {
                        "giaL": this.tour[0].nguoilon,
                        "giaN": this.giatre,
                        "slL": this.inputValue,
                        "slN": this.ipValue,
                        "trangthai": "Chưa xử lí",
                        "hotenLL": this.hotenLL,
                        "emailLL": this.emailLL,
                        "sdtLL": this.sdtLL,
                        "diachiLL": this.diachiLL,
                        "ngaykhoihanh": this.selectedNgayKhoiHanh,

                  })
                        .then((response) => {
                              if (response.data) {
                                    this.dattour = response.data
                                    // console.log('iddt', this.dattour.idDT)
                                    // console.log('đặt tour', this.dattour)
                              } else {
                                    console.error('Response không có dữ liệu hoặc có lỗi từ server.');
                              }
                        })
                        .catch((error) => {
                              console.error('Có lỗi xảy ra trong quá trình gọi API:', error);
                        });
                  axios.post('http://localhost:3000/api/TTHK/', {
                        "hotenHK": this.forms.hoten,
                        "sdt": this.forms.sdt,
                        "namsinh": this.forms.namsinh,
                        "idT": this.$route.params.id,
                        "ngaykhoihanh": this.selectedNgayKhoiHanh,

                  })
                        .then((response) => {
                              this.tthk = response.data
                              // console.log('iddt', this.dattour.idDT)
                              console.log('thong tin hanh khach', this.tthk)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  this.$router.push({ name: 'thanhtoan', params: { idT: urlid } });
            },
            changeAttribute() {
                  // Thay đổi giá trị isDisabled để thay đổi thuộc tính HTML
                  this.$refs.myElement.setAttribute('active', 'true');
            },
            increaseValue: function () {
                  this.inputValue++;
            },
            decreaseValue: function () {
                  if (this.inputValue > 0) {
                        this.inputValue--;
                  }
            },
            plusValue: function () {
                  this.ipValue++;
            },
            truValue: function () {
                  if (this.ipValue > 0) {
                        this.ipValue--;
                  }
            },
            // Hàm này được gọi khi chọn một option mới
            updateInputValue() {
                  // Cập nhật giá trị của input khi chọn option mới
                  this.$nextTick(() => {
                        // Đặt giá trị của input bằng giá trị của select
                        this.$refs.input.value = this.giatre;
                  });
            },
            chonngay(ngayDuocChon) {
                  // Xử lý ngày được chọn ở đây
                  // console.log("Ngày Được Chọn:", ngayDuocChon);
                  this.selectedNgayKhoiHanh = ngayDuocChon;
                  // console.log("selectedNgayKhoiHanh:", this.selectedNgayKhoiHanh);
                  // Bạn có thể sử dụng ngayDuocChon trong yêu cầu axios hoặc bất kỳ nơi nào bạn cần
            },
      }
}

</script>