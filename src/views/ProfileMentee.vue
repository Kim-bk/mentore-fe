<template>
  <header-bar style="position: fixed; width: 100%; top: 0px"></header-bar>

  <div
    class="container-xl px-4 mt-4"
    style="
      top: 100px;
      left: 20%;
      position: fixed;
      font-family: 'Quicksand', sans-serif;
    "
  >
    <!-- Account page navigation-->
    <nav class="nav nav-borders">
      <a class="nav-link active ms-0" href="#" target="__blank"
        >Thông tin cá nhân</a
      >
    </nav>
    <hr class="mt-0 mb-4" />
    <div class="row">
      <div class="col-xl-4">
        <!-- Profile picture card-->
        <div class="card mb-4 mb-xl-0">
          <div
            class="card-header"
            style="
              font-weight: bold;
              color: rgb(245, 90, 245);
              text-align: center;
              font-size: 25px;
            "
          >
            Ảnh đại diện
          </div>
          <div class="card-body text-center">
            <!-- Profile picture image-->
            <img
              class="img-account-profile rounded-circle mb-2"
              :src="mentee.avatar"
              alt=""
            />
            <!-- Profile picture help block-->
            <!-- Profile picture upload button-->
            <label style="font-size: 18px">{{ mentee.name }}</label>
          </div>
        </div>
      </div>
      <div class="col-xl-8">
        <!-- Account details card-->
        <div class="card mb-4">
          <div
            class="card-header"
            style="font-weight: bold; color: rgb(245, 90, 245); font-size: 25px"
          >
            Thông tin cá nhân
          </div>
          <div class="card-body">
            <form>
              <!-- Form Group (username)-->
              <div class="mb-3">
                <label class="small mb-1" for="inputUsername">Họ và tên</label>
                <input
                  class="form-control"
                  id="inputUsername"
                  type="text"
                  placeholder="Nhập họ và tên của bạn"
                  @input="updateName"
                  v-model="mentee.name"
                />
              </div>
              <!-- Form Row        -->
              <div class="row gx-3 mb-3">
                <!-- Form Group (organization name)-->
                <div class="col-md-6">
                  <label class="small mb-1" for="inputOrgName"
                    >Nơi học tập hiện tại</label
                  >
                  <input
                    class="form-control"
                    id="inputOrgName"
                    type="text"
                    placeholder="Nhập nơi học tập hiện tại của bạn"
                    @input="studyAt = $event.target.value"
                    v-model="mentee.studyAt"
                  />
                </div>
                <!-- Form Group (location)-->
                <div class="col-md-6">
                  <label class="small mb-1" for="inputLocation">Địa chỉ</label>
                  <input
                    class="form-control"
                    id="inputLocation"
                    type="text"
                    placeholder="Nhập địa chỉ sinh sống của bạn"
                    @input="address = $event.target.value"
                    v-model="mentee.address"
                  />
                </div>
              </div>
              <!-- Form Group (email address)-->
              <div class="mb-3">
                <label class="small mb-1" for="inputEmailAddress">Email</label>
                <input
                  class="form-control"
                  id="inputEmailAddress"
                  type="email"
                  :value="mentee.email"

                  disabled
                />
              </div>
              <!-- Form Row-->
              <div class="row gx-3 mb-3">
                <!-- Form Group (phone number)-->
                <div class="col-md-6">
                  <label class="small mb-1" for="inputPhone"
                    >Số điện thoại</label
                  >
                  <input
                    class="form-control"
                    id="inputPhone"
                    type="tel"
                    placeholder="Nhập số điện thoại của bạn"
                    @input="phoneNumber = $event.target.value"
                    v-model="mentee.phoneNumber"
                  />
                </div>
                <!-- Form Group (birthday)-->
                <div class="col-md-6">
                  <label class="small mb-1" for="inputBirthday"
                    >Ngày sinh</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    id="inputBirthday"
                    name="birthday"
                    @input="birthDate = $event.target.value"
                    v-model="mentee.birthDate"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label class="small mb-1">Chọn hình nền đại diện</label>
                <br />
                <input id="image" v-on:change="onFileChange" type="file" />

                <p style="font-weight: bold; color: red; font-size: 18px">
                  {{ errorM }}
                </p>
              </div>
              <p style="font-weight: bold; color: green; font-size: 18px">
                {{ successM }}
              </p>
              <!-- Save changes button-->
              <button class="btn btn-primary" @click.prevent="updateMentee">
                Cập nhật
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from "@/components/HeaderBar.vue";
import { getMenteeData, updateUser } from "@/services/UserService.js";

export default {
  components: {
    HeaderBar: HeaderBar,
  },

  data() {
    return {
      mentee: {},
      errorM: "",
      name: "",
      phoneNumber: "",
      birthDate: "",
      address: "",
      studyAt: "",
      successM: "",
      file: null,
      canProcess: true,
    };
  },
  mounted() {
    getMenteeData()
      .then((res) => {
        if (res.status === 200) {
          this.mentee = res.data;
          console.log(this.mentor);
        }
      })
      .catch((e) => {
        console.log(e);
      });
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
    
    updateMentee(event) {
      this.errorM = "";
      this.successM = "";
      event.preventDefault();
      console.log(this.file);
      const formData = new FormData();
      formData.append("avatar", this.file);
      formData.append("name", this.name);
      formData.append("birthDate", this.birthDate);
      formData.append("address", this.address);
      formData.append("phoneNumber", this.phoneNumber);
      formData.append("studyAt", this.studyAt);
      console.log(formData);

      updateUser(formData)
        .then((res) => {
          if (res.status === 200) {
            var vueObject = this;
            vueObject.successM = "Cập nhật thông tin cá nhân thành công!";
          }
        })
        .catch((e) => {
          console.log(e);
          var vueObject = this;
          vueObject.errorM = e.data;
        });
    },
  },
};
</script>

<style scoped>
body {
  margin-top: 20px;
  background-color: #f2f6fc;
  color: #69707a;
}
.img-account-profile {
  height: 10rem;
}
.rounded-circle {
  border-radius: 50% !important;
}
.card {
  box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}
.card .card-header {
  font-weight: 500;
}
.card-header:first-child {
  border-radius: 0.35rem 0.35rem 0 0;
}
.card-header {
  padding: 1rem 1.35rem;
  margin-bottom: 0;
  background-color: rgba(33, 40, 50, 0.03);
  border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}
.form-control,
.dataTable-input {
  display: block;
  width: 100%;
  padding: 0.875rem 1.125rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1;
  color: #69707a;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #c5ccd6;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.35rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.nav-borders .nav-link.active {
  color: #0061f2;
  border-bottom-color: #0061f2;
}
.nav-borders .nav-link {
  color: #69707a;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0;
  padding-right: 0;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
