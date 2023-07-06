<template>
  <div class="first-body">
    <div class="logo">
      <router-link to="/"
        ><img :src="require('../assets/images/logo-official.png')"
      /></router-link>
    </div>
  </div>
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
            <h2>Đăng ký</h2>
            <!-- <div class="text"><span class="theme_color">Đăng nhập</span> để vào học
						</div> -->
          </div>

					<p style="font-weight:bold; color:red; font-size:18px;"> {{errorM}} </p>
					<p style="font-weight:bold; color:green; font-size:18px;"> {{successM}} </p>
          <!-- Login Form -->
          <div class="styled-form">
            <form method="post" action="index.html">
              <div class="form-group">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label>Mật khẩu</label>
                <span class="eye-icon flaticon-eye"></span>
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  v-model="password"
                />
              </div>

              <div class="form-group" style="padding-left: 27%">
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="check-box">
                      <input
                        type="checkbox"
                        name="remember-password"
                        id="type-1"
                      />
                      <label for="type-1"
                        >Tôi muốn nhận thông tin và cập nhật từ Mentoré!</label
                      >
                    </div>
                  </div>
                  <!-- <div class="pull-right">
										<a href="#" class="forgot">Forget Password?</a>
									</div> -->
                </div>
              </div>
              <div class="form-group text-center">
                <button type="button" class="theme-btn btn-style-three" v-on:click="register">
                  <span class="txt"
                    >Đăng ký
                    <i class="fa fa-angle-right"></i
                  ></span>
                </button>
              </div>

              <!-- <div class="form-group">
								<div class="users" >Quên mật khẩu? <a href="login.html">Lấy lại mật khẩu</a></div>
							</div> -->
              <div style="position: relative">
                <hr
                  style="
                    height: 1px;
                    border: none;
                    color: #333;
                    background-color: #333;
                  "
                />
                <div class="or">
                  <span
                    class="txt"
                    style="
                      padding-left: 47%;
                      font-size: 16px;
                      font-weight: bold;
                    "
                    >hoặc</span
                  >
                </div>
              </div>

              <div class="another-choices" style="margin-top: 10px">
                <button type="button" class="btn-another">
                  <img
                  :src="require('../assets/images/icons/google.png')"
                    height="40"
                    width="40"
                    text-align:left
                  />
                  <span class="txt" style="padding-left: 60px"
                    >Đăng ký bằng tài khoản Google</span
                  >
                </button>
                <button type="button" class="btn-another">
                  <img
                  :src="require('../assets/images/icons/fb.png')"
                    height="40"
                    width="40"
                    text-align:left
                  />
                  <span class="txt" style="padding-left: 50px"
                    >Đăng ký bằng tài khoản Facebook</span
                  >
                </button>
              </div>
              <div class="form-group">
                <div class="users">
                  Bạn đã có tài khoản?
                  <router-link to="/login">Đăng nhập</router-link>
                </div>
              </div>
            </form>
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
  <!--End pagewrapper-->

  <!--Scroll to top-->
  <div class="scroll-to-top scroll-to-target" data-target="html">
    <span class="fa fa-arrow-circle-up"></span>
  </div>
</template>

<script>
import {createUser} from '../services/UserService'

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      errorM:'',
      successM:'',
    };
  },
  methods: {
    async register() {
       var payload = {
        email : this.email,
        password : this.password,
        confirmPassword : this.password
     };

    if (!/^[^@]+@\w+(\.\w+)+\w$/.test(this.email)) 
    {
      var vueObject = this
      vueObject.errorM = "Hãy nhập một Email hợp lệ!"
      vueObject.successM = ""
    } 
    else
    {
      await createUser(payload)
				.then(res => {
					console.log(this.email);
					if (res.status === 200)
					{
            var vueObject = this
            vueObject.successM = "Đăng ký tài khoản thành công. Vui lòng kiểm tra Email để xác nhận!"
            vueObject.errorM = ""
					}
				})
			.catch(e => {
                    console.log(e)
                    console.log(e.response.status)
                    var vueObject = this
                    vueObject.errorM = e.response.data
                    }
                );
    }
    }
  }
}
</script>
