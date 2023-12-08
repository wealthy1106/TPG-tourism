
<template>
      <div class="container">
            <div class="row">
                  <div class="col-4">
                        <h4>Thông tin</h4>
                        <div :key="index" v-for="(tt, index) in taikhoan">
                              <div class="form-row">
                                    <div class="form-group col-md-6">
                                          <label for="inputEmail4">Họ Tên</label>
                                          <input readonly type="text" class="form-control" v-model="tt.hoten" placeholder="">
                                    </div>
                                    <div class="form-group col-md-4">
                                          <label for="inputZip">Giới Tính</label>
                                          <input readonly type="text" class="form-control" v-model="tt.gioitinh" name=""
                                                placeholder="">
                                    </div>
                              </div>
                              <div class="form-row">
                                    <div class="form-group col-md-6">
                                          <label for="inputEmail4">Email</label>
                                          <input readonly type="email" class="form-control" v-model="tt.email" name="email"
                                                placeholder="Email">
                                    </div>
                                    <div class="form-group col-md-6">
                                          <label for="inputPassword4">Mật khẩu</label>
                                          <input v-if="!tt.showPassword" readonly type="password" v-model="tt.matkhau"
                                                class="form-control" name="password" placeholder="Password">
                                          <input readonly v-else type="text" v-model="tt.matkhau" class="form-control"
                                                name="password" placeholder="Password">

                                    </div>
                              </div>
                              <div class="form-check">
                                    <input class="form-check-input" @click="toggleShowPassword(tt)" type="checkbox" value=""
                                          id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                          Hiện mật khẩu
                                    </label>
                              </div>
                              <div class="form-group">
                                    <label for="inputAddress2">Địa chỉ</label>
                                    <input readonly type="text" v-model="tt.diachi" class="form-control" name="diachi"
                                          placeholder="Apartment, studio, or floor">
                              </div>
                              <div class="form">
                                    <div class="form-group">
                                          <label for="inputCity">Số điện thoại</label>
                                          <input readonly style="width: 200px;" v-model="tt.sdt" type="text"
                                                class="form-control" name="phone" id="sdt">
                                    </div>

                              </div>
                              <div>
                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-primary" data-toggle="modal"
                                          data-target="#exampleModal">
                                          Chỉnh sửa
                                    </button>

                                    <!-- Modal -->
                                    <div class="modal fade" id="exampleModal" tabindex="-1"
                                          aria-labelledby="exampleModalLabel" aria-hidden="true">
                                          <div class="modal-dialog">
                                                <div class="modal-content">
                                                      <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">Chỉnh sửa thông tin
                                                                  cá
                                                                  nhân
                                                            </h5>
                                                            <button type="button" class="close" data-dismiss="modal"
                                                                  aria-label="Close">
                                                                  <span aria-hidden="true">&times;</span>
                                                            </button>
                                                      </div>
                                                      <div class="modal-body">
                                                            <h4>Thông tin</h4>
                                                            <div :key="index" v-for="(tt, index) in taikhoan">
                                                                  <div class="form-row">
                                                                        <div class="form-group col-md-6">
                                                                              <label for="inputEmail4">Họ Tên</label>
                                                                              <input type="text" class="form-control"
                                                                                    v-model="tt.hoten" name="firstname"
                                                                                    placeholder="">
                                                                        </div>
                                                                        <div class="form-group col-md-2">
                                                                              <label for="inputZip">Giới Tính</label>
                                                                              <input type="text" class="form-control"
                                                                                    v-model="tt.gioitinh" name=""
                                                                                    placeholder="">
                                                                        </div>
                                                                  </div>
                                                                  <div class="form-row">
                                                                        <div class="form-group col-md-6">
                                                                              <label for="inputEmail4">Email</label>
                                                                              <input type="email" class="form-control"
                                                                                    v-model="tt.email" name="email"
                                                                                    placeholder="Email">
                                                                        </div>
                                                                        <div class="form-group col-md-6">
                                                                              <label for="inputPassword4">Mật khẩu</label>
                                                                              <div class="input-group">
                                                                                    <input v-if="!tt.showPassword"
                                                                                          type="password" v-model="tt.matkhau"
                                                                                          class="form-control" name="password"
                                                                                          placeholder="Password">
                                                                                    <input v-else type="text"
                                                                                          v-model="tt.matkhau"
                                                                                          class="form-control" name="password"
                                                                                          placeholder="Password">

                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                                  <div class="form-group col-md-12">
                                                                        <label for="inputPasswordConfirm">Nhập lại mật
                                                                              khẩu</label>
                                                                        <div class="input-group">
                                                                              <input v-if="!tt.showConfirmPassword"
                                                                                    type="password"
                                                                                    v-model="confirmationPassword"
                                                                                    class="form-control"
                                                                                    name="confirmPassword"
                                                                                    placeholder="Confirm Password">
                                                                              <input v-else type="text"
                                                                                    v-model="confirmationPassword"
                                                                                    class="form-control"
                                                                                    name="confirmPassword"
                                                                                    placeholder="Confirm Password">

                                                                        </div>
                                                                  </div>
                                                                  <div v-if="!checkPasswordMatch(tt) && confirmationPassword !== ''"
                                                                        class="text-danger">
                                                                        Mật khẩu và xác nhận không trùng khớp.
                                                                  </div>
                                                                  <div class="input-group-append">
                                                                        <div class="form-check">
                                                                              <input class="form-check-input"
                                                                                    @click="toggleShowPassword(tt)"
                                                                                    type="checkbox" value=""
                                                                                    id="defaultCheck1">
                                                                              <label class="form-check-label"
                                                                                    for="defaultCheck1">
                                                                                    Hiện mật khẩu
                                                                              </label>
                                                                        </div>
                                                                        <!-- <button class="btn btn-outline-secondary" type="button"
                                                                        @click="toggleShowPassword(tt)">
                                                                        Hiện mật khẩu
                                                                  </button> -->
                                                                  </div>
                                                                  <div class="form-group">
                                                                        <label for="inputAddress2">Địa chỉ</label>
                                                                        <input type="text" v-model="tt.diachi"
                                                                              class="form-control" name="diachi"
                                                                              placeholder="Apartment, studio, or floor">
                                                                  </div>

                                                                  <div class="form">
                                                                        <div class="form-group">
                                                                              <label for="inputCity">Số điện thoại</label>
                                                                              <input style="width: 200px;" v-model="tt.sdt"
                                                                                    type="text" class="form-control"
                                                                                    name="phone" id="sdt">
                                                                        </div>


                                                                  </div>


                                                            </div>
                                                      </div>
                                                      <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                  data-dismiss="modal">Close</button>
                                                            <!-- Button trigger modal -->
                                                            <button type="button" class="btn btn-primary" data-toggle="modal"
                                                                  data-target="#staticBackdrop">
                                                                  Chỉnh sửa
                                                            </button>

                                                            <!-- Modal -->
                                                            <div class="modal fade" id="staticBackdrop" data-backdrop="static"
                                                                  data-keyboard="false" tabindex="-1"
                                                                  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                                  <div class="modal-dialog">
                                                                        <div class="modal-content">
                                                                              <div class="modal-header"
                                                                                    style="text-align: center;">
                                                                                    <h5 class="modal-title"
                                                                                          id="staticBackdropLabel">Chỉnh sửa
                                                                                          thông
                                                                                          tin</h5>
                                                                                    <button type="button" class="close"
                                                                                          data-dismiss="modal"
                                                                                          aria-label="Close">
                                                                                          <span
                                                                                                aria-hidden="true">&times;</span>
                                                                                    </button>
                                                                              </div>
                                                                              <div class="modal-body"
                                                                                    style="text-align: center;">
                                                                                    Xác nhận chỉnh sửa
                                                                              </div>
                                                                              <div class="modal-footer">
                                                                                    <button type="button"
                                                                                          class="btn btn-secondary"
                                                                                          data-dismiss="modal">Close</button>
                                                                                    <button type="button"
                                                                                          @click="submitChanges(tt)"
                                                                                          class="btn btn-primary">Xác
                                                                                          nhận</button>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>
                  <div class="col-8">
                        <h4>Danh sách tour</h4>
                        <table class="table table-hover">
                              <thead>
                                    <tr style="text-align: center;">
                                          <th scope="col">Mã tour</th>
                                          <th scope="col">Tour</th>
                                          <th scope="col">Trạng thái</th>
                                          <th scope="col">Thao tác

                                          </th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr :key="index" v-for="(tt, index) in toanbo">
                                          <th scope="row">{{ tt.idT }}</th>
                                          <td>{{ tt.tenT }}</td>
                                          <td>{{ tt.trangthai }}</td>
                                          <td><!-- Button trigger modal -->
                                                <router-link :to="{ name: 'CTT', params: { idDT: tt.idDT, idTT: tt.idTT } }">
                                                      <button class="btn btn-primary top">Chi tiết</button>
                                                </router-link>
                                                <button type="button" class="btn btn-primary">
                                                      Xem chi tiết
                                                </button>
                                          </td>
                                    </tr>

                              </tbody>
                        </table>
                  </div>
            </div>
      </div>
</template>
<script>
import axios from 'axios';
export default {
      data() {
            return {
                  token: '',
                  iduser: '',
                  taikhoan: '',
                  confirmationPassword: '',
                  toanbo: [],
            }

      },
      mounted() {
            console.log('user', localStorage.getItem('user'))
            this.iduser = localStorage.getItem('user')
            this.token = localStorage.getItem('token')
            if (this.iduser != null) {
                  axios.get('http://localhost:3000/api/taikhoan/' + this.iduser)
                        .then((response) => {
                              this.taikhoan = response.data;
                              console.log('taikhoan', this.taikhoan)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
            } else {
                  return 'chua dang nhap'
            }
            axios.post('http://localhost:3000/api/thanhtoan/toanbo', {
                  "idTK": this.iduser
            })
                  .then((response) => {
                        this.toanbo = response.data;
                        console.log('toanbo', this.toanbo)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
      },
      methods: {
            submitChanges(tt) {
                  // Gọi Axios post tại đây
                  console.log('idtk', tt.idTK)
                  console.log('hoten', tt.hoten)
                  console.log('diachi', tt.diachi)
                  console.log('gioitinh', tt.gioitinh)
                  console.log('email', tt.email)
                  console.log('matkhau', tt.matkhau)
                  axios.put('/api/taikhoan/' + this.iduser, {
                        // Truyền dữ liệu cần gửi lên server tại đây

                        "hoten": tt.hoten,
                        "diachi": tt.diachi,
                        "gioitinh": tt.gioitinh,
                        "sdt": tt.sdt,
                        "email": tt.email,
                        "matkhau": tt.matkhau,
                        // ... các trường khác
                  })
                        .then((response) => {
                              // Xử lý kết quả từ server nếu cần
                              console.log('Success:', response.data);
                        })
                        .catch((error) => {
                              // Xử lý lỗi nếu có
                              console.error('Error:', error);
                        });
                  window.location.reload();
            },
            // chitiet() {
            //       this.$router.push({name: 'thanhtoan', params: { idDT: this.toanbo.idDT,idTT: this.idTT
            //                                           },
            //                                     });
            // },
            checkPasswordMatch(tt) {
                  return tt.matkhau === this.confirmationPassword;
            },
            toggleShowPassword(tt) {
                  tt.showPassword = !tt.showPassword;
                  tt.showConfirmPassword = !tt.showConfirmPassword;
            },
      }
}
</script>