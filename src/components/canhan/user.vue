
<template>
      <div class="row container">
            <div class="col-7" style="padding-left: 100px;">
                  <h4>Thông tin</h4>
                  <div>
                        <div class="form-row">
                              <div class="form-group col-md-6">
                                    <label for="inputEmail4">Họ Tên</label>
                                    <input type="text" class="form-control" name="firstname" placeholder="">
                              </div>
                              <div class="form-group col-md-2">
                                    <label for="inputZip">Giới Tính</label>
                                    <select name="gioitinh" class="form-control">
                                          <!-- <option selected>Choose...</option> -->
                                          <option value="0">Nam</option>
                                          <option value="1">Nữ</option>
                                    </select>
                              </div>
                        </div>
                        <div class="form-row">
                              <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" name="email" placeholder="Email">
                              </div>
                              <div class="form-group col-md-6">
                                    <label for="inputPassword4">Mật khẩu</label>
                                    <input type="password" class="form-control" name="password" placeholder="Password">
                              </div>
                        </div>
                        <div class="form-group">
                              <label for="inputAddress2">Địa chỉ</label>
                              <input type="text" class="form-control" name="diachi" placeholder="Apartment, studio, or floor">
                        </div>
                        <div class="form">
                              <div class="form-group">
                                    <label for="inputCity">Số điện thoại</label>
                                    <input style="width: 200px;" type="text" class="form-control" name="phone" id="sdt">
                              </div>

                              <div class="form-group col-md-2" hidden>
                                    <label for="inputZip">Vai Trò</label>
                                    <select name="roleid" class="form-control">
                                          <option selected>Choose...</option>
                                          <option value="admin">Admin</option>
                                          <option value="bacsi">Doctor</option>
                                          <option value="user">User</option>
                                    </select>
                              </div>
                        </div>

                        <button class="btn btn-primary">Chỉnh sửa</button>
                  </div>
            </div>
            <div class="col-5">
                  <h4>Danh sách tour</h4>
                  <table class="table table-hover">
                        <thead>
                              <tr>
                                    <th scope="col">Mã tour</th>
                                    <th scope="col">Tour</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col">Thao tác

                                    </th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Chưa xác nhận</td>
                                    <td><!-- Button trigger modal -->
                                          <button type="button" class="btn btn-primary" data-toggle="modal"
                                                data-target="#exampleModal">
                                                Xóa
                                          </button>

                                          <!-- Modal -->
                                          <div class="modal fade" id="exampleModal" tabindex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                      <div class="modal-content">
                                                            <div class="modal-header">

                                                                  <!-- <button type="button" class="close" data-dismiss="modal"
                                                                        aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                  </button> -->
                                                            </div>
                                                            <div class="modal-body">
                                                                  Xác nhận xóa
                                                            </div>
                                                            <div class="modal-footer">
                                                                  <button type="button" class="btn btn-secondary"
                                                                        data-dismiss="modal">Close</button>
                                                                  <button type="button" class="btn btn-primary">Save
                                                                  </button>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </td>
                              </tr>
                              <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                              </tr>
                              <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      </div>
</template>