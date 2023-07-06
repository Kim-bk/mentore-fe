<template>
  <header-bar style="position: fixed; width: 100%; top: 0px"></header-bar>

  <div
    class="container-xl px-4 mt-4"
    style="top: 100px; left: 20%; font-family: 'Quicksand', sans-serif"
  >
    <PopupCreateExp
      v-if="popupTriggers.buttonTrigger"
      :togglePopup="() => togglePopup('buttonTrigger')"
    ></PopupCreateExp>

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
              :src="mentor.avatar"
              alt=""
            />
            <!-- Profile picture help block-->
            <!-- Profile picture upload button-->
            <label style="font-size: 18px">{{ mentor.name }}</label>
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
            <!-- Form Group (username)-->
            <div class="mb-3">
              <label class="small mb-1" for="inputUsername">Họ và tên</label>
              <input
                class="form-control"
                id="inputUsername"
                type="text"
                placeholder="Nhập họ và tên của bạn"
                @input="name = $event.target.value"
                v-model="mentor.name"
              />
            </div>
            <!-- Form Row        -->
            <div class="row gx-3 mb-3">
              <!-- Form Group (organization name)-->
              <div class="col-md-6">
                <label class="small mb-1" for="inputOrgName"
                  >Công việc hiện tại</label
                >
                <input
                  class="form-control"
                  id="inputOrgName"
                  type="text"
                  placeholder="Nhập công việc học tập hiện tại của bạn"
                  @input="currentJob = $event.target.value"
                  v-model="mentor.currentJob"
                />
              </div>
              <!-- Form Group (location)-->
              <div class="col-md-6">
                <label class="small mb-1" for="inputLocation">Nơi ở</label>
                <select
                  class="form-control"
                  name="job"
                  id="job"
                  v-model="mentor.locationName"
                  @input="location = $event.target.value"
                  style="height: calc(2.25rem + 13px)"
                >
                  <option
                    v-for="option in locations"
                    :value="option.name"
                    :key="option.id"
                  >
                    {{ option.name }}
                  </option>
                </select>
              </div>
            </div>
            <!-- Form Group (email location)-->
            <div class="mb-3">
              <label class="small mb-1" for="inputEmaillocation">Email</label>
              <input
                class="form-control"
                id="inputEmaillocation"
                type="email"
                :value="mentor.email"
                disabled
              />
            </div>
            <div class="mb-3">
              <label class="small mb-1" for="inputEmaillocation"
                >Lĩnh vực</label
              >
              <input
                type="text"
                id="mentors"
                class="form-control"
                v-model="findField"
                placeholder="Tìm kiếm lĩnh vực"
                @input="handleInputFieldChange"
              />
              <select
                id="fieldSelect"
                class="form-control"
                name="duration"
                v-model="fields"
                @change="handleSelectChange()"
                multiple
              >
                <option
                  class="my-1"
                  v-for="f in getFields"
                  :key="f.id"
                  :value="f.type"
                >
                  {{ f.type }}
                </option>
              </select>
              <br />
              <button
                @click="resetMentor()"
                style="
                  background-color: green;
                  color: white;
                  border-radius: 5px;
                  width: 50px;
                "
              >
                Reset
              </button>
              <br />
              <!-- <input
                class="form-control"
                id="inputEmaillocation"
                type="email"
                :value="mentor.fields"
                disabled
              /> -->
              <pre>
                        
                  <span style="text-align:left; font-weight:bold">{{ selectedFields }}</span>
              </pre>
            </div>
            <!-- Form Row-->
            <div class="row gx-3 mb-3">
              <!-- Form Group (phone number)-->
              <div class="col-md-6">
                <label class="small mb-1" for="inputPhone">Số điện thoại</label>
                <input
                  class="form-control"
                  id="inputPhone"
                  type="tel"
                  placeholder="Nhập số điện thoại của bạn"
                  @input="phoneNumber = $event.target.value"
                  v-model="mentor.phoneNumber"
                />
              </div>
              <!-- Form Group (birthday)-->
              <div class="col-md-6">
                <label class="small mb-1" for="inputBirthday">Ngày sinh</label>
                <input
                  type="date"
                  class="form-control"
                  id="inputBirthday"
                  name="birthday"
                  @input="birthDate = $event.target.value"
                  v-model="mentor.birthDate"
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
            <button class="btn btn-primary" @click.prevent="updateMentor">
              Cập nhật
            </button>
          </div>
        </div>
        <div class="card mb-4">
          <div
            class="card-header"
            style="
              color: rgb(232, 103, 236);
              font-size: 23px;
              font-weight: bold;
            "
          >
            Kinh nghiệm làm việc
          </div>
          <div class="card-body">
            <!-- Form Row        -->
            <div
              class="row"
              v-for="exp in mentor.experiences"
              :key="exp.id"
              style="margin-bottom: 10px"
            >
              <div class="col" style="width: 70px">
                <img
                  :src="require('../assets/images/logo-official.png')"
                  style="width: 40px"
                />
              </div>
              <div class="col-6" style="padding-top: 15px">
                {{ exp.job }} tại {{ exp.company }}
              </div>
              <div class="col" style="padding-top: 15px">
                {{ exp.year }}
              </div>
              <div class="col" style="padding-top: 15px">
                <a @click="deleteExp(exp.id)" style="color: red">Xóa</a>
              </div>
              <br />
            </div>
            <div class="row">
              <button
                @click="() => togglePopup('buttonTrigger')"
                style="color: green"
              >
                + Thêm mới
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from "@/components/HeaderBar.vue";
import { getMentorData, updateUser } from "@/services/UserService.js";
import { getFields } from "@/services/FieldService";
import { getLocations } from "../services/LocationService";
import { createExp, deleteExp } from "../services/MentorService";
import PopupCreateExp from "@/components/PopupCreateExp.vue";
import { ref } from "vue";
export default {
  components: {
    HeaderBar: HeaderBar,
    PopupCreateExp: PopupCreateExp,
  },

  data() {
    return {
      mentor: {},
      errorM: "",
      name: "",
      phoneNumber: "",
      birthDate: "",
      location: "",
      currentJob: "",
      successM: "",
      file: null,
      canProcess: true,
      locations: [],
      fields: [],
      getFields: [],
      findListFields: [],
      selectedFields: "",
    };
  },

  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });

    const popupTriggersUpdate = ref({
      buttonTriggerUpdate: true,
    });

    const togglePopupUpdate = (trigger) => {
      popupTriggersUpdate.value[trigger] = !popupTriggersUpdate.value[trigger];
    };

    const togglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      popupTriggers,
      togglePopup,
      popupTriggersUpdate,
      togglePopupUpdate,
    };
  },

  mounted() {
    getFields()
      .then((res) => {
        if (res.status === 200) {
          this.getFields = res.data;
          this.findListFields = res.data;
          console.log(this.fields);
        }
      })
      .catch((e) => {
        console.log(e);
      });
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
      getMentorData()
        .then((res) => {
          if (res.status === 200) {
            this.mentor = res.data;
            this.selectedFields = res.data.fields;
            console.log(this.mentor);
          }
        })
        .catch((e) => {
          console.log(e);
        });
  },

  methods: {
    handleSelectChange() {
      var selectElement = document.getElementById("fieldSelect");
      var selectedValue = selectElement.value;
      // Check if the selected value is already in the current string
      if ( this.selectedFields === null) {
        this.selectedFields = selectedValue;
      }
      else
      {
        var values = this.selectedFields.split(", ");
        if (values.includes(selectedValue)) {
          return; // Do not add if it's already present
        }
        this.selectedFields +=  ", " + selectedValue;
      }
    },

    resetMentor() {
      this.selectedFields = "";
    },

    handleInputFieldChange(event) {
      if (event.target.value === "") {
        this.getFields = this.findListFields;
      } else {
        console.log("Input value:", event.target.value);
        const searchRegex = new RegExp(event.target.value, "i");
        this.getFields = this.findListFields.filter((field) =>
          searchRegex.test(field.type)
        );
      }
    },

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
    deleteExp(id) {
      deleteExp(id)
        .then((res) => {
          if (res.status === 200) {
            getMentorData()
              .then((res) => {
                if (res.status === 200) {
                  this.mentor = res.data;
                  console.log(this.mentor);
                }
              })
              .catch((e) => {
                console.log(e);
              });
          }
        })
        .catch((e) => {
          console.log(e);
          var vueObject = this;
          vueObject.errorM = e.data;
        });
    },

    updateMentor(event) {
      this.errorM = "";
      this.successM = "";
      event.preventDefault();
      console.log(this.file);
      const formData = new FormData();
      formData.append("avatar", this.file);
      formData.append("name", this.name);
      formData.append("birthDate", this.birthDate);
      formData.append("locationName", this.location);
      formData.append("phoneNumber", this.phoneNumber);
      formData.append("currentJob", this.currentJob);
      formData.append("fields", this.selectedFields);
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
