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
            <br />
            <div class="styled-form" style="text-align: left">
              <h4 style="font-weight: bold">Thông tin tài khoản</h4>
              <br />
              <div class="form-group">
                <label>*Email</label>
                <input type="text" name="email" v-model="email" />
              </div>
              <div class="form-group">
                <label>*Password</label>
                <input
                  type="password"
                  name="password"
                  v-model="password"
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
              <input
                type="text"
                name="username"
                v-model="name"
                placeholder=""
              />
            </div>
            <div class="form-group">
              <label>*Ngày sinh</label>
              <input
                type="date"
                name="username"
                v-model="birthDate"
                placeholder=""
              />
            </div>
            <div class="form-group">
              <label>*Chọn avatar</label>
              <input id="image" v-on:change="onFileChange" type="file" />
            </div>

            <p style="font-weight: bold; color: red; font-size: 18px">
              {{ errorImg }}
            </p>

            <div class="form-group">
              <label>*Chọn nơi ở?</label>
              <br />
              <br />
              <select name="job" id="job" v-model="location">
                <option
                  v-for="option in locations"
                  :value="option.name"
                  :key="option.id"
                >
                  {{ option.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label>*Số điện thoại</label>
              <input
                type="text"
                name="username"
                v-model="phoneNumber"
                placeholder=""
              />
            </div>

            <div class="form-group">
              <label>*Mô tả bản thân</label>
              <input
                type="text"
                name="username"
                v-model="description"
                placeholder=""
              />
            </div>

            <label style="font-weight:bold; font-size:17px;">*Chọn các lĩnh vực quan tâm:</label>
            <div
              class="form-group"
              style="
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 10px;
              "
            >
              <div class="check-box" v-for="f in fields" :key="f.id">
                <input
                  type="checkbox"
                  name="remember-password"
                  :id="f.id"
                  v-model="selectedFields"
                  :value="f.type"
                />
                <label :for="f.id" style="max-width: 100%">{{ f.type }}</label>
              </div>
            </div>

            <div class="form-group">
              <label>*Công việc hiện tại</label>
              <input
                type="text"
                name="username"
                v-model="currentJob"
                placeholder="Mô tả công việc và nơi làm việc hiện tại"
              />
            </div>
            <div class="form-group kinh-nghiem-lam-viec">
              <label
                >*Kinh nghiệm làm việc và thành tích học thuật (Nhập theo
                mẫu)</label
              >

              <div class="father">
                <div class="row">
                  <textarea
                    class="col-sm-4"
                    type="text"
                    name="username"
                    v-model="job"
                    style="border-radius: 0px"
                    placeholder="
                    - Tên công việc 1 
                    - Tên công việc 2
                    - ..."
                  ></textarea>

                  <textarea
                    class="col-sm-4"
                    type="text"
                    name="username"
                    v-model="company"
                    style="border-radius: 0px"
                    placeholder="
                    - Tên công ty 1
                    - Tên công ty 2
                    - ..."
                  ></textarea>

                  <textarea
                    class="col-sm-3"
                    type="text"
                    name="username"
                    v-model="year"
                    style="border-radius: 0px"
                    placeholder="
                    - Thời gian 1
                    - Thời gian 2
                    - ... "
                  ></textarea>
                </div>
                <p style="font-weight: bold; color: red; font-size: 18px">
                  {{ errorExp }}
                </p>
              </div>
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

            <p style="font-weight: bold; color: red; font-size: 18px">
              {{ errorM }}
            </p>
            <p style="font-weight: bold; color: green; font-size: 18px">
              {{ successM }}
            </p>

            <div class="form-group text-center">
              <button
                type="button"
                class="theme-btn btn-style-three"
                @click.prevent="mentorRegister"
              >
                <span class="txt"
                  >Đăng ký<i class="fa fa-angle-right"></i
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
import { getLocations } from "../services/LocationService";
import { getFields } from "../services/FieldService";
import { createMentor } from "../services/MentorService";

export default {
  components: {
    HeaderBar: HeaderBar,
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      errorM: "",
      successM: "",
      phoneNumber: "",
      currentJob: "",
      job: "",
      company: "",
      year: "",
      field: "",
      name: "",
      birthDate: "",
      errorExp: "",
      locations: [],
      fields: [],
      location: "",
      selectedFields: [],
      errorImg: "",
      description: "",
      file: null,
    };
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      this.file = files[0];
      if (["image/png", "image/jpeg", "image/svg"].includes(files[0]["type"])) {
        console.log(this.file);
        this.canProcess = true;
        this.errorImg = "";
      } else {
        this.errorImg = "Ảnh không hợp lệ. Xin vui lòng chọn lại!";
        this.canProcess = false;
      }
    },

    validateInput(payload) {
      const regexTime = /^- (19[0-9]{2}|20[0-1][0-9]|202[0-3])(|\n)/;
      const regexJobVsComp = /^- .*?(|\n)/;
      var rs1 = payload.year.split("\n").length;
      var rs2 = payload.company.split("\n").length;
      var rs3 = payload.job.split("\n").length;
      if (rs1 !== rs2 || rs1 !== rs3 || rs2 !== rs3) {
        this.errorExp = "Các thông tin chưa đồng bộ!";
        console.log("Các thông tin chưa đồng bộ!");
        return false;
      }

      if (!regexTime.test(payload.year)) {
        this.errorExp = "Nhập thời gian chưa phù hợp!";
        console.log("Nhập thời gian chưa phù hợp");
        return false;
      }
      if (
        !regexJobVsComp.test(payload.company) ||
        !regexJobVsComp.test(payload.job)
      ) {
        this.errorExp = "Nhập công việc hoặc công ty chưa phù hợp!";
        console.log("Nhập công việc hoặc công ty chưa phù hợp");
        return false;
      }

      return true;
    },
    mentorRegister(event) {
      this.errorM = "";
      this.successM = "";
      this.errorExp = "";
      event.preventDefault();
      console.log(this.file);
      const formData = new FormData();
      formData.append("File", this.file);
      formData.append("email", this.email);
      formData.append("password", this.password);
      formData.append("name", this.name);
      formData.append("birthDate", this.birthDate);
      formData.append("locationName", this.location);
      formData.append("phoneNumber", this.phoneNumber);
      formData.append("currentJob", this.currentJob);
      formData.append("job", this.job);
      formData.append("company", this.company);
      formData.append("year", this.year);
      formData.append("description", this.description);
      formData.append("fields", this.selectedFields);
      console.log(formData);
      const payload = {
        job: this.job,
        company: this.company,
        year: this.year,
      };
      var isValid = this.validateInput(payload);
      if (isValid) {
        if (!/^[^@]+@\w+(\.\w+)+\w$/.test(this.email)) {
          var vueObject = this;
          vueObject.errorM = "Hãy nhập một Email hợp lệ!";
        } else {
          createMentor(formData)
            .then((res) => {
              if (res.status === 200) {
                var vueObject = this;
                vueObject.successM =
                  "Đăng ký tài khoản thành công. Vui lòng kiểm tra Email để xác nhận!";
              }
            })
            .catch((e) => {
              console.log(e);
              var vueObject = this;
              vueObject.errorM = e.data;
            });
        }
      }
    },
  },

  mounted() {
    getLocations()
      .then((res) => {
        if (res.status === 200) {
          this.locations = res.data;
          console.log(this.locations);
        }
      })
      .catch((e) => {
        console.log(e);
      }),
      getFields()
        .then((res) => {
          if (res.status === 200) {
            this.fields = res.data;
            console.log(this.locations);
          }
        })
        .catch((e) => {
          console.log(e);
        }),
      $(document).ready(function () {
        var wrapper_knlv = $(".kinh-nghiem-lam-viec"); //Fields wrapper
        var x = 0;

        $("#add_field").on("click", function (e) {
          //on add input button click
          e.preventDefault();
          $(wrapper_knlv).append(
            '<div class="row field-lam-viec"><input class="col-sm-4"type="text" name="username" v-model="job1" placeholder="Tên công việc" required=""><input class="col-sm-4"type="text" name="username" v-model="company1" placeholder="Tên công ty" required=""><input class="col-sm-3"type="text" name="username" v-model="year1" placeholder="Thời gian công tác" required=""><div class="users col-sm-1 style="padding-top:10px;"><a href="#" class="remove_field" style="color:red; margin-right:40px; ">X</a></div></div>'
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
            $compile(
              '<div class="row field-lam-viec"><input class="col-sm-6"type="text" name="username" value="" placeholder="Tên vị trí" required=""><input class="col-sm-5"type="text" name="username" value="" placeholder="Số năm đảm đương vị trí" required=""><div class="users col-sm-1 style="padding-top:10px;"><a href="#" class="remove_field_vitri" style="color:red; margin-right:40px; ">X</a></div></div>'
            )
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

.row textarea {
  border-radius: 0px;
  margin-right: 5px;
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
