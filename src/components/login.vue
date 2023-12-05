
<template>
      <div
            style="height: 900px;background: url(https://vcdn1-dulich.vnecdn.net/2022/04/01/cd9-1648805106-2272-1648805130.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=3c-4ukGtszUc5TFifaH3Qg) #fff;">
            <notification ref="notification"></notification>
            <!-- <div class="success-message" v-if="thongbaodangnhap"
                  style="z-index: 2;width: 600px;text-align: center;margin: 0 auto;top: 50%;height: 20%;padding: 60px;">
                  <p>Bạn đã đăng nhập thành công.</p>
            </div> -->
            <!-- <div class="success-message" v-if="thongbaodangky"
                  style="z-index: 2;width: 600px;text-align: center;margin: 0 auto;top: 50%;height: 20%;padding: 60px;">
                  <p>Bạn đã đăng ký thành công.</p>
            </div> -->
            <tbdky ref="tbdky"></tbdky>
            <div class="panel shadow1" style="z-index: 1;">
                  <form class="login-form">
                        <div class="panel-switch animated fadeIn">
                              <button type="button" id="sign_up" class="active-button">Đăng ký</button>
                              <button type="button" id="log_in" class="" disabled>Đăng nhập</button>
                        </div>
                        <h1 style="text-align: center;" class="animated fadeInUp animate1" id="title-login">Welcome Back !
                        </h1>
                        <h1 style="text-align: center;" class="animated fadeInUp animate1 hidden" id="title-signup">Welcome !
                        </h1>
                        <fieldset id="login-fieldset">
                              <input class="login animated fadeInUp animate2" name="username" type="textbox" required
                                    placeholder="Username" v-model="email1">
                              <input v-model="matkhau1" class="login animated fadeInUp animate3" name="password"
                                    type="password" required placeholder="Password">
                              <p v-if="isAlertVisible" style="color: #ff0505">Nhập sai mời nhập lại</p>

                        </fieldset>
                        <fieldset id="signup-fieldset" class="hidden">
                              <div>
                                    <div class="form-row">
                                          <div class="form-group col-md-6">
                                                <!-- <label for="inputEmail4">Họ Tên</label> -->
                                                <input style="width: 100%;" v-model="hoten" type="text"
                                                      class="login animated fadeInUp animate2" name="firstname" required
                                                      placeholder="Họ tên">
                                          </div>
                                          <div class="form-group col-md-2">
                                                <select v-model="gioitinh" name="gioitinh"
                                                      class=" select login animated fadeInUp animate2" placeholder="Nam">
                                                      <option class="login animated fadeInUp animate2" :value="'Nam'">Nam
                                                      </option>
                                                      <option class="login animated fadeInUp animate2" :value="'Nữ'">Nữ
                                                      </option>
                                                </select>
                                          </div>
                                    </div>
                                    <div class="form">
                                          <div class="form-group">
                                                <!-- <label for="inputEmail4">Email</label> -->
                                                <input v-model="email" type="email" class="login animated fadeInUp animate2"
                                                      name="email" placeholder="Email" required>
                                          </div>
                                          <div class="form-group">
                                                <input v-model="matkhau" :type="hienThiMatKhau ? 'text' : 'password'"
                                                      class="login animated fadeInUp animate2" name="password"
                                                      placeholder="Mật khẩu" required>
                                                <br>
                                                <input class="login animated fadeInUp animate2" type="checkbox" required
                                                      v-model="hienThiMatKhau" style="width: 20px;height: 20px;"> Hiển thị
                                                mật khẩu
                                          </div>
                                          <div class="form-group">
                                                <input required v-model="nhaplaimatkhau"
                                                      :type="hienThiMatKhau ? 'text' : 'password'"
                                                      class="login animated fadeInUp animate2" name="password_confirmation"
                                                      placeholder="Nhập lại mật khẩu">
                                                <p v-if="!kiemTraMatKhauHopLe()">Mật khẩu không khớp.</p>
                                          </div>
                                    </div>
                                    <div class="form-group">
                                          <!-- <label for="inputAddress2">Địa chỉ</label> -->
                                          <input required type="text" v-model="diachi"
                                                class="login animated fadeInUp animate2" name="diachi" placeholder="Địa chỉ">
                                    </div>
                                    <div class="form">
                                          <div class="form-group">
                                                <!-- <label for="inputCity">Số điện thoại</label> -->
                                                <input required v-model="sdt" style="width: 200px;" type="text"
                                                      class="login animated fadeInUp animate2" placeholder="Số điện thoại"
                                                      name="phone" id="sdt">
                                          </div>

                                          <div class="form-group col-md-2" hidden>
                                                <label for="inputZip">Vai Trò</label>
                                                <select v-model="vaitro" name="roleid"
                                                      class="login animated fadeInUp animate2">
                                                      <option selected>Choose...</option>
                                                      <option value="admin">Admin</option>>
                                                      <option value="user">User</option>
                                                </select>
                                          </div>
                                    </div>

                                    <!-- <button @click="dangky" class="btn btn-primary">Đăng ký</button> -->
                              </div>
                        </fieldset>

                        <input type="button" id="login-form-submit"
                              class="dangky login_form button animated fadeInUp animate4" value="Đăng nhập" @click="login">
                        <input type="button" id="signup-form-submit"
                              class="login_form button animated fadeInUp animate4 hidden dangky" @click="kiemTraVaDangKy"
                              value="Đăng ký">


                  </form>
            </div>
            <!-- <div v-if="registrationSuccess" class="success-message" style="z-index: 1;">
                  <p>Registration successful! Thank you for signing up.</p>
            </div> -->
      </div>

      <!-- <script src="form.js"></script> -->
</template>
<style>
.panel {
      position: relative;
      /* hoặc position: absolute; */
}

.success-message {
      position: absolute;
      /* hoặc position: absolute; */
}

.success-message {
      background-color: rgb(156, 190, 229);
      color: white;
      /* padding: 20px; */
      border-radius: 5px;
      /* margin-top: 20px; */
      width: 600px;
      text-align: center;
      margin: 20% 20%;
      top: 50%;
      height: 20%;
      padding: 50px;
}

* {
      margin: 0;
      padding: 0;
}

.dangky {
      margin-left: 50px;
}

.select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 100px;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      background-color: rgba(255, 255, 255);
      /* Màu nền trong suốt */
      color: #333;
      cursor: pointer;
      outline: none;
      /* background: #ffff; */
      /* border: none; */
      border-radius: 5em;
      height: 20px;
      /* width: 80%; */
      margin: 10px 0;
      /* padding: 5px; */
      text-indent: 10px;
      /* color: #fff; */
      font-weight: 300;
}

/* Tuỳ chỉnh kiểu hover và focus */
.select:hover,
select:focus {
      background-color: rgba(255, 255, 255, 1);
      /* Màu nền khi hover hoặc focus */
}

#radio {
      width: 30px;
}

html {
      width: 100%;
      height: 100vh;
}

body {
      background: #e5e5e5;
      width: 100%;
      /* text-align: center; */
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      letter-spacing: 1px;
}

.panel {
      width: 100%;
      max-width: 90%;
      height: 700px;
      /* background: url('') #fff; */
      background-repeat: no-repeat;
      background-position: top center;
      background-size: cover;
      margin: 5% auto 0px;
      /* border: 2px solid salmon; */
}




.shadow1 {
      -webkit-box-shadow: 0 20px 15px -15px rgba(119, 119, 119, 0.85);
      -moz-box-shadow: 0 20px 15px -15px rgba(119, 119, 119, 0.85);
      box-shadow: 0 40px 30px -30px rgba(119, 119, 119, 0.85);
}


form {
      height: 700px;
      padding: 10px;
}

.panel-switch {
      text-align: center;
      margin-top: 70px;
}

.panel-switch button {
      display: inline-block;
      width: 100px;
      height: 40px;
      background: #f03699;
      margin: 0px 10px 50px;
      border: none;
      color: #fff;
      font-family: 'Open Sans', sans-serif;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      font-size: 0.8em;

      transition: background-color 0.2s, 0.2s, 0.2s;
}

.panel-switch button:active {
      background: #b52773;
      color: #c9c9c9;
}

.active-button {
      opacity: 0.5;
}

button,
.button,
a {
      cursor: pointer;
}

form h1 {
      color: #fff;
      font-family: 'Open Sans', sans-serif;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 4px;
      margin: 30px 0;
      font-size: 1.7em;
}

fieldset {
      border: none;
      margin-left: 50px;
}

.animate1,
.animate2,
.animate3,
.animate4 {
      -webkit-animation-duration: 2s;
      -moz-animation-duration: 2s;
}

.animate1 {
      -webkit-animation-delay: 0.2s;
      -moz-animation-delay: 0.2s;
}

.animate2 {
      -webkit-animation-delay: 0.7s;
      -moz-animation-delay: 0.7s;
      height: 40px;
}

.animate3 {
      -webkit-animation-delay: 1.1s;
      -moz-animation-delay: 1.1s;
      height: 40px;
}

.animate4 {
      -webkit-animation-delay: 1.5s;
      -moz-animation-delay: 1.5s;
}

.animate5 {
      -webkit-animation-delay: 2.2s;
      -moz-animation-delay: 2.2s;
}

@-webkit-keyframes fadeInUp {
      from {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
      }

      to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
      }
}

@keyframes fadeInUp {
      from {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
      }

      to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
      }
}

fieldset input {
      background: #ffff;
      border: none;
      border-radius: 5em;
      height: 20px;
      width: 80%;
      margin: 10px 0;
      padding: 5px;
      text-indent: 10px;
      /* color: #fff; */
      font-weight: 600;
}


fieldset input::placeholder {
      color: #c7c6c6;
}


fieldset input:focus {

      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 5em;
      margin: 9px 0;
}

.login_form {
      position: relative;
      bottom: 0;
      width: 70%;
      height: 4em;
      margin-top: 10px;
      border: none;
      border-radius: 10em;
      background: #f03699;
      color: #fff;
      font-family: 'Open Sans', sans-serif;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 2px;
      z-index: 1;

      transition: background-color 0.2s, 0.2s;
}

#login-form-submit:active {
      background: #b52773;
      color: #c9c9c9;
}

p,
a {
      margin: 0;
      padding: 0;
}

a {
      color: #898787;
      font-size: 0.7em;
      text-decoration: none;
}

.hidden {
      display: none;
}

/*MEDIA QUERIES     */

@media (max-height:800px) {

      body {
            max-height: 100vh;
      }

      .panel {
            width: 450px;
            max-width: 90%;
            background-size: cover;
            margin: 1% auto;
      }

}

@media (max-width:500px) {

      html,
      body {
            background: url(https://picsum.photos/3695/5543?image=827) #fff;
            background-repeat: no-repeat;
            background-position: top center;
            background-size: cover;
            height: 100vh;
            margin: 0px;
            padding: 0px;
            position: fixed;
      }

      .panel {
            background: none;
            box-shadow: none;
      }


      form {
            padding: 10px;
      }

      .panel-switch {
            margin-top: 30px;
      }

      .panel-switch button {
            display: inline-block;
            width: 80px;
            margin: 0px 10px 50px;
            font-weight: 600;
            font-size: 0.7em;
      }

      form h1 {
            font-size: 1.5em;
      }

      .login_form {
            bottom: 0;
            width: 70%;
            margin-top: 100px;
      }

}
</style>
<script>
import axios from 'axios';
import Notification from "@/components/thongbao/Notification.vue";
import tbdky from "@/components/thongbao/tbdky.vue";
import nhapdaydu from "@/components/thongbao/nhap.vue";
export default {
      components: {
            Notification,
            tbdky,
            nhapdaydu,
      },
      data() {
            return {
                  taikhoan: [],
                  stt: 1,
                  hoten: '',
                  email: '',
                  matkhau: '',
                  diachi: '',
                  gioitinh: 'Nam',
                  sdt: '',
                  vaitro: 'user',
                  email1: '',
                  matkhau1: '',
                  isAlertVisible: false,
                  nhaplaimatkhau: '',
                  hienThiMatKhau: false,
                  user: [],
                  thongbaodangnhap: false,
                  thongbaodangky: false
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


      },
      methods: {
            showNotification(message) {
                  this.$refs.notification.showNotification(message);
            },
            showAlert() {
                  this.$refs.notification.showNotification("Đăng ký tài khoản thành công!");
            },
            kiemTraMatKhauHopLe() {
                  return this.matkhau === this.nhaplaimatkhau;
            },
            kiemTraVaDangKy() {
                  if (this.kiemTraThongTinNhap()) {
                        // Nếu kiểm tra thành công, gọi hàm đăng ký
                        this.dangky();
                  } else {
                        // Nếu có lỗi, bạn có thể hiển thị thông báo hoặc thực hiện các hành động khác
                        // console.log('Vui lòng điền đầy đủ thông tin!');
                        this.showNotification("Vui lòng điền đầy đủ thông tin!");
                  }
            },
            kiemTraThongTinNhap() {
                  // Kiểm tra các trường cần kiểm tra và trả về true nếu đúng, ngược lại trả về false
                  return (
                        this.hoten &&
                        this.gioitinh &&
                        this.email &&
                        this.matkhau &&
                        this.nhaplaimatkhau &&
                        this.diachi &&
                        this.sdt
                        // Thêm các trường khác cần kiểm tra nếu cần
                  );
            },
            dangky() {
                  axios.post('http://localhost:3000/api/taikhoan/', {
                        "hoten": this.hoten,
                        "email": this.email,
                        "matkhau": this.matkhau,
                        "diachi": this.diachi,
                        "gioitinh": this.gioitinh,
                        "sdt": this.sdt,
                        "vaitro": "user"
                  })
                        .then((response) => {
                              this.taikhoan = response.data
                              // console.log('taikhoan', this.taikhoan)
                              this.showAlert();
                              // this.$router.push({ name: 'login' });
                              window.location.reload();
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  // this.thongbaodangky = true;

            },
            login() {
                  // console.log(this.email1, this.matkhau1)
                  axios.post('http://localhost:3000/api/taikhoan/ktlogin', {
                        "email": this.email1,
                        "matkhau": this.matkhau1,
                  })
                        .then((response) => {
                              if (response.data.message == 'Login successful') {
                                    // console.log('vaitro', response.data.user.vaitro)
                                    if (response.data.user.vaitro == 'user') {
                                          // console.log(response.data.token)
                                          var token = ('token', response.data.token)
                                          this.user = response.data.user.id
                                          localStorage.setItem('token', token)
                                          localStorage.setItem('user', this.user)
                                          this.hienlen = true; // Thay đổi giá trị của hienlen ngay sau khi đăng nhập thành công
                                          this.hienlai = false;
                                          // console.log('user', localStorage.setItem('user', this.user.id))
                                          // this.thongbaodangnhap = true;
                                          this.$router.push({ name: 'trangchu' });
                                    } else {
                                          this.showNotification("Tài khoản không tồn tại!");
                                    }

                              }
                              this.taikhoan = response.data
                              // console.log('taikhoan', this.taikhoan)

                        })
                        .catch((error) => {
                              console.log(error);
                              this.isAlertVisible = true;
                        });
                  // console.log(this.email1, this.matkhau1)

            }
      }
}
$(document).ready(function () {

      //--------- change color value of the form text/password inputs -----

      const textInputs = $("input[type='textbox']");
      const passwordsInputs = $("input[type='password']");
      //--------- Login screen swicth -----

      $("button").click(function (event) {  //  prevent buttons in form to reload
            event.preventDefault();
      });

      $("a").click(function (event) {  //  prevent 'a' links in form to reload
            event.preventDefault();
      });

      $("#sign_up").click(function () { // when click Sign Up button, hide the Log In elements, and display the Sign Up elements
            $("#title-login").toggleClass("hidden", true);
            $("#login-fieldset").toggleClass("hidden", true);
            $("#login-form-submit").toggleClass("hidden", true);
            $("#lost-password-link").toggleClass("hidden", true);
            $("#sign_up").toggleClass("active-button", false);
            $("#log_in").removeAttr("disabled");

            $("#title-signup").toggleClass("hidden", false);
            $("#signup-fieldset").toggleClass("hidden", false);
            $("#signup-form-submit").toggleClass("hidden", false);
            $("#log_in").toggleClass("active-button", true);
            $("#sign_up").prop('disabled', true);
      });

      $("#log_in").click(function () { // when click Log In button, hide the Sign Up elements, and display the Log In elements
            $("#title-login").toggleClass("hidden", false);
            $("#login-fieldset").toggleClass("hidden", false);
            $("#login-form-submit").toggleClass("hidden", false);
            $("#lost-password-link").toggleClass("hidden", false);
            $("#sign_up").toggleClass("active-button", true);
            $("#log_in").prop('disabled', true);

            $("#title-signup").toggleClass("hidden", true);
            $("#signup-fieldset").toggleClass("hidden", true);
            $("#signup-form-submit").toggleClass("hidden", true);
            $("#log_in").toggleClass("active-button", false);
            $("#sign_up").removeAttr("disabled");

      });
});

</script>