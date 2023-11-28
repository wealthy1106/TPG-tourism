
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
                                    <input disabled class="col-4" type="text" v-model="this.km[0].veNL" id="gia">
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
                                                <option :value="this.km[0].tred3">Dưới 3 tuổi</option>
                                                <option :value="this.km[0].tre10">Từ 3 - 10</option>
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
                        <h4 style="color: chocolate;">Đã áp dụng mã giảm giá</h4>
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
                                    email: '',
                                    sdt: '',
                                    diachi: '',
                              });
                        }
                  } else if (targetNumberOfForms < currentNumberOfForms) {
                        // Loại bỏ forms nếu số lượng giảm
                        this.forms.splice(targetNumberOfForms);
                  }
            },
            tong: function () {
                  if (this.km.length > 0) {
                        var giaNL = this.km[0].veNL;
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
            var urltenKM = this.$route.params.tenKM
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
            axios.get('http://localhost:3000/api/khuyenmai/giaKM/' + urlid + '/' + urltenKM)
                  .then((response) => {
                        this.km = response.data;
                        // console.log('axios', 'http://localhost:3000/api/khuyenmai/giaKM/' + urlid + '/' + urltenKM)
                        console.log('KM', this.km)
                  })
                  .catch((error) => {
                        console.log(error);
                  });

      },
      methods: {
            test() {
                  var urlid = this.$route.params.id
                  axios.post('http://localhost:3000/api/dattour/' + urlid, {
                        "giaL": this.km[0].veNL,
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
                                    console.log('iddt', this.dattour.idDT)
                                    console.log('đặt tour', this.dattour)
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
                  console.log("Ngày Được Chọn:", ngayDuocChon);
                  this.selectedNgayKhoiHanh = ngayDuocChon;
                  console.log("selectedNgayKhoiHanh:", this.selectedNgayKhoiHanh);
                  // Bạn có thể sử dụng ngayDuocChon trong yêu cầu axios hoặc bất kỳ nơi nào bạn cần
            },
      }
}

</script>