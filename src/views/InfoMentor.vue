<template>
  <HeaderBar></HeaderBar>

  <div class="page-wrapper">
    <!-- Preloader -->
    <div class="preloader"></div>

    <!-- End Main Header -->

    <!--End Page Title-->

    <!-- Login Section -->
    <section class="login-section">
      <div class="auto-container">
        <div class="login-box">
          <!-- Title Box -->
          <div class="title-box">
            <h2>Thông tin Mentor</h2>
			<br/>
            <div class="styled-form" style="text-align:left">
              <h4 style="font-weight: bold">Thông tin tài khoản</h4>
			  <br/>
              <div class="form-group">
                <label>*Email</label>
                <input type="text" name="username" value="" placeholder="" />
              </div>
              <div class="form-group">
                <label>*Password</label>
                <input
                  type="password"
                  name="username"
                  value=""
                  placeholder=""
                />
              </div>
            </div>
          </div>

          <!-- Login Form -->
          <div class="styled-form">
            <h4 style="font-weight: bold">Thông tin cá nhân</h4>
            <br />
            <div class="form-group">
              <label>*Họ và tên</label>
              <input type="text" name="username" value="" placeholder="" />
            </div>

            <div class="form-group">
              <label>*Số điện thoại</label>
              <input type="text" name="username" value="" placeholder="" />
            </div>
            <div class="form-group">
              <label>*Công việc hiện tại</label>
              <input type="text" name="username" value="" placeholder="" />
            </div>
            <div class="form-group kinh-nghiem-lam-viec">
              <label>*Kinh nghiệm làm việc và thành tích học thuật</label>

              <div class="father">
                <div class="row">
                  <input
                    class="col-sm-4"
                    type="text"
                    name="username"
                    value=""
                    placeholder="Tên công việc"
                  />
                  <input
                    class="col-sm-4"
                    type="text"
                    name="username"
                    value=""
                    placeholder="Tên công ty"
                  />
                  <input
                    class="col-sm-3"
                    type="text"
                    name="username"
                    value=""
                    placeholder="Thời gian công tác"
                  />
                </div>
                <!-- </br>
						</br>
									<input type="text" name="username" value="" placeholder="Tên công việc, Chức vụ, Tên công ty, Thời gian công tác" >	 -->
                <div class="users" style="padding-top: 10px">
                  <a href="#" id="add_field">Thêm</a>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>*Các kỹ năng</label>
              <input
                type="text"
                name="username"
                value=""
                placeholder="Kỹ năng 1, Kỹ năng 2, ..."
              />
            </div>

            <!-- <h4 style="font-weight:bold">Thông tin thêm</h4>
							</br> -->
            <div class="form-group">
              <label>*Lĩnh vực bạn muốn đăng ký làm Mentor?</label>
              <br />
              <br />
              <div>
                <select name="job" id="job">
                  <option>Chọn lĩnh vực</option>
                  <option>IT</option>
                  <option>Giáo dục</option>
                  <option>Marketing</option>
                  <option>Khác</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label>*Vị trí công việc bạn muốn làm Mentor?</label>
              <input
                type="text"
                name="username"
                value=""
                placeholder="Vị trí 1, Vị trí 2, ..."
              />
            </div>

            <div
              class="form-group"
              style="padding-left: 15%; text-align: center"
            >
              <div class="clearfix">
                <div class="pull-left">
                  <div class="check-box" style="width: 650px">
                    <input
                      type="checkbox"
                      name="remember-password"
                      id="type-0"
                    />
                    <label for="type-0" style="max-width: 100%"
                      >Bằng cách nhấp vào Hoàn thành, bạn đồng ý với Điều khoản,
                      Chính sách dữ liệu và Chính sách cookie của chúng
                      tôi.</label
                    >
                  </div>
                </div>
                <!-- <div class="pull-right">
										<a href="#" class="forgot">Forget Password?</a>
									</div> -->
              </div>
            </div>
            <div class="form-group text-center">
              <button
                type="button"
                class="theme-btn btn-style-three"
                @click="mentorRegister()"
              >
                <span class="txt"
                  >Hoàn thành<i class="fa fa-angle-right"></i
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Login Section -->

    <!-- End Call To Action Section Two -->

    <!--Main Footer-->
    <!-- <footer class="main-footer">
			<div class="pattern-layer paroller" data-paroller-factor="0.60" data-paroller-factor-lg="0.20"
				data-paroller-type="foreground" data-paroller-direction="vertical"
				style="background-image:url(images/icons/icon-1.png)"></div>
			<div class="pattern-layer-two data-paroller-factor=" 0.60"="" data-paroller-factor-lg="0.20"
				data-paroller-type="foreground" data-paroller-direction="vertical"
				style="background-image:url(images/icons/icon-3.png)"></div>

		</footer> -->
  </div>
</template>
<script>
import $ from "jquery";
import HeaderBar from "@/components/HeaderBar.vue";
export default {
  components: {
    HeaderBar: HeaderBar,
  },

  mounted() {
    $(document).ready(function () {
      var wrapper_knlv = $(".kinh-nghiem-lam-viec"); //Fields wrapper
      var x = 0;

      $("#add_field").on("click", function (e) {
        //on add input button click
        e.preventDefault();
        $(wrapper_knlv).append(
          '<div class="row field-lam-viec"><input class="col-sm-4"type="text" name="username" value="" placeholder="Tên công việc" required=""><input class="col-sm-4"type="text" name="username" value="" placeholder="Tên công ty" required=""><input class="col-sm-3"type="text" name="username" value="" placeholder="Thời gian công tác" required=""><div class="users col-sm-1 style="padding-top:10px;"><a href="#" class="remove_field" style="color:red; margin-right:40px; ">X</a></div></div>'
        ); //add input box
        x++;
      });

      $(wrapper_knlv).on("click", ".remove_field", function (e) {
        //user click on remove text
        e.preventDefault();
        $(this).parents("div").eq(1).remove();
      });

      var wrapper_vt = $(".vi-tri"); //Fields wrapper vi-tri
      $("#add_field_vitri").on("click", function (e) {
        //on add input button click
        e.preventDefault();
        $(wrapper_vt).append(
          '<div class="row field-lam-viec"><input class="col-sm-6"type="text" name="username" value="" placeholder="Tên vị trí" required=""><input class="col-sm-5"type="text" name="username" value="" placeholder="Số năm đảm đương vị trí" required=""><div class="users col-sm-1 style="padding-top:10px;"><a href="#" class="remove_field_vitri" style="color:red; margin-right:40px; ">X</a></div></div>'
        ); //add input box
        x++;
      });

      $(wrapper_vt).on("click", ".remove_field_vitri", function (e) {
        //user click on remove text
        e.preventDefault();
        $(this).parents("div").eq(1).remove();
      });
    });
  },
};
</script>

<style scoped>
.styled-form .form-group select {
  position: relative;
  height: 50px;
  padding: 6px 30px;
  /* width: 100%; */
  color: #222222;
  font-size: 16px;
  border-radius: 0px;
  transition: all 500ms ease;
  -moz-transition: all 500ms ease;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  box-shadow: 0px 0px 18px rgb(0 0 0 / 10%);
}

img:hover {
  /* border: 5px solid rgb(255, 222, 160); */
  padding: 5px;
  transition: 0.25s;
}

.styled-form .form-group img {
  width: 120px;
  max-height: 90px;
}

.field-lam-viec {
  padding-top: 18px;
}
.row {
  margin-right: -80px;
  margin-left: 0px;
}

.styled-form .form-group .check-box label {
  max-width: 90%;
}
.vi-dien-tu {
  max-height: 70px;
  margin-left: 15px;
}
.attach-file {
  position: relative;
  height: 35px;
  padding: 3px 15px;
  width: 450px;
  /* color: #222222; */
  font-size: 16px;
  /* border-radius: 10px;
				transition: all 500ms ease;
				-moz-transition: all 500ms ease;
				-webkit-transition: all 500ms ease;
				-ms-transition: all 500ms ease;
				-o-transition: all 500ms ease;
				box-shadow: 0px 0px 18px rgb(0 0 0 / 10%); */
}
</style>
