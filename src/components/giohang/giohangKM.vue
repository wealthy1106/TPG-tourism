
<template>
      <tbdky ref="notification"></tbdky>
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
                                          v-model="form.hoten">
                              </div>
                              <div class="mail col-4">
                                    <label>Năm sinh <b>*</b></label>
                                    <input class="form-control" name="birtday" type="text" v-model="form.namsinh">
                              </div>
                              <div class="phone col-4">
                                    <label>Số điện thoại <b>*</b></label>
                                    <input class="form-control" id="mobilephone" name="Telephone"
                                          onkeypress="return funCheckInt(event)" type="text" v-model="form.sdt">
                              </div>
                        </div>
                  </form>
                  <form v-if="shouldShowFormsTre" v-for="(form, index) in formsTre" :key="index">
                        <h4>Trẻ em {{ index + 1 }}: </h4>
                        <div class="row">
                              <div class="name col-4">
                                    <label>Họ và Tên <b>*</b></label>
                                    <input class="form-control" id="contact_name" name="Fullname" type="text"
                                          v-model="form.hotenTre">
                              </div>
                              <div class="mail col-4">
                                    <label>Năm sinh <b>*</b></label>
                                    <input class="form-control" name="birtday" type="text" v-model="form.namsinhTre">
                              </div>
                              <div class="phone col-4">
                                    <label>Mối quan hệ <b>*</b></label>
                                    <input class="form-control" id="mobilephone" name="Telephone"
                                          onkeypress="return funCheckInt(event)" type="text" v-model="form.sdtTre">
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
                        <br>
                        <div>
                              <p>Chọn phương thức thanh toán</p>
                              <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline1" name="customRadioInline"
                                          class="custom-control-input" value="tructiep" v-model="selectedRadio">
                                    <label class="custom-control-label" for="customRadioInline1">Trực tiếp tại cơ sở</label>
                              </div>
                              <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline2" name="customRadioInline"
                                          class="custom-control-input" value="online" v-model="selectedRadio">
                                    <label class="custom-control-label" for="customRadioInline2">Online qua banking</label>
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

p {
      font-size: 20px;
}

label {
      font-size: 20px;
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
import tbdky from "@/components/thongbao/tbdky.vue";
export default {
      components: {
            tbdky,
      },
      data() {
            return {
                  idDT: '',
                  thanhtoan: [],
                  selectedRadio: "Trực tiếp",
                  shouldShowFormsTre: false,
                  selectedDate: '',
                  tour: [],
                  ngaythang: [],
                  inputValue: 1,
                  ipValue: 0,
                  tthk: [],
                  km: [],
                  tong: 0,
                  dattour: [],
                  forms: [
                        {
                              hoten: '',
                              namsinh: '',
                              sdt: '',
                        },
                  ],
                  formsTre: [
                        {
                              hotenTre: '',
                              namsinhTre: '',
                              sdtTre: '',
                        },
                  ],
                  giatre: 0,
                  giatritong: 0,
                  datetour: '',
                  selectedNgayKhoiHanh: '',
                  errorMesssage: '',
                  idTT: '',
            }
      },
      watch: {
            selectedRadio: function (newVal, oldVal) {
                  console.log('Giá trị đã thay đổi:', newVal);
            },
            inputValue: function (newVal, oldVal) {
                  // Cập nhật số lượng forms khi giá trị của input thay đổi
                  const currentNumberOfForms = this.forms.length;
                  const targetNumberOfForms = parseInt(newVal);

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
            ipValue(newVal, oldVal) {
                  // Cập nhật số lượng formsTre khi giá trị của ipValue thay đổi
                  this.updateFormsTre();
            },
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
                  this.giatritong = 0;
                  if (this.km.length > 0) {
                        var giaNL = this.km[0].veNL;
                        console.log('gia', giaNL);
                        // Tính toán và trả về kết quả tự động khi giá trị của input thay đổi
                        this.giatritong = (giaNL * this.inputValue) + (this.giatre * this.ipValue);

                  } console.log('Giá trị tính được của hàm tong:', this.giatritong);
                  return this.giatritong;
            },
            // giatre() {
            //       return this.giatre = this.tour.tre10
            // }
      },
      mounted() {
            if (localStorage.getItem('user') == null) {
                  window.location.href = '/login';
            }
            if (localStorage.getItem('reloaded')) {
                  //       // The page was just reloaded. Clear the value from local storage
                  //       // so that it will reload the next time this page is visited.
                  localStorage.removeItem('reloaded');
            } else {
                  //       // Set a flag so that we know not to reload the page twice.
                  localStorage.setItem('reloaded', '1');
                  location.reload();
            }
            // console.log('user', localStorage.getItem('user'))
            var urlid = this.$route.params.id
            var urlidKM = this.$route.params.idKM
            axios.get('http://localhost:3000/api/thanhtoan/all/' + urlid)
                  .then((response) => {
                        this.tour = response.data;
                        // console.log('tour', this.tour)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/thanhtoan/date/' + urlid)
                  .then((response) => {
                        this.ngaythang = response.data;
                        // console.log('ngaythang', this.ngaythang)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/khuyenmai/giaKM/' + urlid + '/' + urlidKM)
                  .then((response) => {
                        this.km = response.data;
                        // console.log('axios', 'http://localhost:3000/api/khuyenmai/giaKM/' + urlid + '/' + urltenKM)
                        // console.log('KM', this.km)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            // if (this.selectedNgayKhoiHanh === '') {
            //       // Nếu có ít nhất một ngày trong mảng ngaythang
            //       // this.selectedNgayKhoiHanh = this.ngaythang[0].ngaykhoihanh;
            //       console.log('n1', this.selectedNgayKhoiHanh)
            // }
      },
      methods: {
            validateHanhKhach() {
                  if (this.shouldValidateForms) {
                        for (const form of this.forms) {
                              if (!form.hoten || !form.namsinh || !form.sdt) {
                                    this.showNotification("Vui lòng điền đầy đủ thông tin hành khách.");
                                    return false;
                              }
                        }

                        // Kiểm tra thông tin trẻ em chỉ khi có ít nhất một trẻ em
                        if (this.formsTre.length > 0) {
                              if (!this.formsTre[0].hotenTre || !this.formsTre[0].namsinhTre || !this.formsTre[0].sdtTre) {
                                    this.showNotification("Vui lòng điền đầy đủ thông tin trẻ em.");
                                    return false;
                              }
                        }
                  }

                  return true;
            },
            addNewFormTre() {
                  // Chỉ thêm một formTre khi chưa có
                  if (this.formsTre.length === 0) {
                        this.formsTre.push({
                              hotenTre: '',
                              namsinhTre: '',
                              sdtTre: '',
                        });
                  }

                  // Hiển thị điều kiện bắt buộc cho formsTre
                  this.showFormValidation();
            },
            updateFormsTre() {
                  // Cập nhật số lượng formsTre khi giá trị của input thay đổi
                  const currentNumberOfFormsTre = this.formsTre.length;
                  const targetNumberOfFormsTre = parseInt(this.ipValue);

                  if (targetNumberOfFormsTre > currentNumberOfFormsTre) {
                        // Thêm formsTre mới nếu số lượng tăng
                        for (let i = currentNumberOfFormsTre; i < targetNumberOfFormsTre; i++) {
                              this.formsTre.push({
                                    hotenTre: '',
                                    namsinhTre: '',
                                    sdtTre: '',
                              });
                        }
                  } else if (targetNumberOfFormsTre < currentNumberOfFormsTre) {
                        // Loại bỏ formsTre nếu số lượng giảm
                        this.formsTre.splice(targetNumberOfFormsTre);
                  }

                  // Cập nhật biến shouldShowFormsTre dựa trên giá trị của ipValue
                  this.shouldShowFormsTre = this.ipValue > 0;
            },

            showNotification(message) {
                  this.$refs.notification.showNotification(message);
            },

            test() {
                  // this.tongValue = this.tong();
                  // console.log('tong', this.tongValue)
                  if (
                        !this.hotenLL ||
                        !this.emailLL ||
                        !this.sdtLL ||
                        !this.diachiLL ||
                        !this.selectedNgayKhoiHanh
                  ) {
                        this.showNotification("Vui lòng điền đầy đủ thông tin liên lạc và chọn ngày khởi hành.");
                        return;
                  }

                  // Kiểm tra thông tin hành khách
                  if (!this.validateHanhKhach()) {
                        return;
                  }

                  var urlid = this.$route.params.id

                  for (let i = 0; i < this.forms.length; i++) {
                        axios.post('http://localhost:3000/api/TTHK/', {
                              "hotenHK": this.forms[i].hoten,
                              "sdt": this.forms[i].sdt,
                              "namsinh": this.forms[i].namsinh,
                              "idT": this.$route.params.id,
                              "ngaykhoihanh": this.selectedNgayKhoiHanh,
                        })
                              .then((response) => {
                                    this.tthk.push(response.data);
                                    console.log(`Thông tin hành khách ${i + 1}:`, response.data);
                              })
                              .catch((error) => {
                                    console.log(error);
                              });
                  }
                  for (let i = 0; i < this.formsTre.length; i++) {
                        axios.post('http://localhost:3000/api/TTHK/', {
                              "hotenHK": this.formsTre[i].hotenTre,
                              "sdt": this.formsTre[i].sdtTre,
                              "namsinh": this.formsTre[i].namsinhTre,
                              "idT": this.$route.params.id,
                              "ngaykhoihanh": this.selectedNgayKhoiHanh,
                        })
                              .then((response) => {
                                    this.tthk.push(response.data);
                                    console.log(`Thông tin hành khách ${i + 1}:`, response.data);
                              })
                              .catch((error) => {
                                    console.log(error);
                              });
                  }
                  axios.post('http://localhost:3000/api/thanhtoan/', {
                        "phuongthuc": this.selectedRadio,
                        "tongcong": this.giatritong,
                        "trangthai": "Chưa xác nhận",
                        "idT": this.$route.params.id,
                        "idTK": localStorage.getItem('user'),
                        "ngaykhoihanh": this.selectedNgayKhoiHanh,
                  })
                        .then((response) => {
                              if (response.data) {
                                    this.idTT = response.data.insertId;
                                    this.thanhtoan = response.data
                                    console.log('thanhtoan', this.thanhtoan)
                                    console.log('idTT', this.idTT)
                              } else {
                                    console.error('Response không có dữ liệu hoặc có lỗi từ server.');
                              }
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  axios.post('http://localhost:3000/api/dattour/' + urlid, {
                        "idTK": localStorage.getItem('user'),
                        "giaL": this.km[0].veNL,
                        "giaN": this.giatre,
                        "slL": this.inputValue,
                        "slN": this.ipValue,
                        "trangthai": "Chưa xử lí",
                        "hotenLL": this.hotenLL,
                        "emailLL": this.emailLL,
                        "sdtLL": this.sdtLL,
                        "diachiLL": this.diachiLL,
                        "tongcong": this.giatritong,
                        "ngaykhoihanh": this.selectedNgayKhoiHanh,

                  })
                        .then((response) => {
                              if (response.data) {
                                    this.dattour = response.data;
                                    console.log('Đặt tour thành công:', this.dattour);

                                    // Kiểm tra xem response.data có chứa insertId không
                                    if (response.data.insertId) {
                                          this.idDT = response.data.insertId;
                                          if (this.idDT) {
                                                console.log('idTT', this.idTT)
                                                this.$router.push({
                                                      name: 'thanhtoan',
                                                      params: {
                                                            idT: urlid,
                                                            idDT: this.idDT,
                                                            idTT: this.idTT
                                                      },
                                                });
                                          } else {
                                                console.error("Giá trị 'idDT' không được đặt.");
                                          }
                                          console.log('ID mới:', this.idDT);
                                    } else {
                                          console.error('Response không có thuộc tính insertId hoặc có giá trị undefined.');
                                    }
                              } else {
                                    console.error('Response không có dữ liệu hoặc có lỗi từ server.');
                              }
                        })
                        .catch((error) => {
                              console.error('Có lỗi xảy ra trong quá trình gọi API:', error);
                        });

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