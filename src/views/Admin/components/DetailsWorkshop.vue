<template>
  <div
    class="post-form"
    style="
      height: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      background-color: rgb(180, 176, 176);
    "
  >
    <div class="popup">
      <div class="popup-inner">
        <h2 style="color: black; text-align: center">Cập nhật Workshop</h2>
        <form @submit="handleSubmit">
          <div class="form-group">
            <label for="title">Tên</label>
            <input type="text" id="title" v-model="title" />
            <pre>{{ workshopData.title }}</pre>
          </div>
          <div class="form-group">
            <label for="content">Nội dung</label>
            <textarea id="content" v-model="content" rows="5"></textarea>
            <pre>{{ workshopData.content }}</pre>
          </div>
          <div class="form-group">
            <label for="title">Địa điểm</label>
            <input type="text" id="location" v-model="location" />
            <pre>{{ workshopData.location }}</pre>
          </div>
          <div class="form-group">
            <label for="title">Ngày</label>
            <input type="date" id="startDate" v-model="startDate" />
            <pre>{{ workshopData.startDate }}</pre>
          </div>
          <div class="form-group">
            <label for="title">Giờ</label>
            <select
              class="form-control"
              name="duration"
              v-model="time"
            >
              <option class="my-1" value="7">7h</option>
              <option class="my-1" value="7h30">7h30</option>
              <option class="my-1" value="8h">8h</option>
              <option class="my-1" value="8h30">8h30</option>
              <option class="my-1" value="9h">9h</option>
              <option class="my-1" value="9h30">9h30</option>
              <option class="my-1" value="10">10h</option>
              <option class="my-1" value="10h30">10h30</option>
              <option class="my-1" value="11">11h</option>
              <option class="my-1" value="11h30">11h30</option>
              <option class="my-1" value="12">12h</option>
              <option class="my-1" value="12h30">12h30</option>
              <option class="my-1" value="13">13h</option>
              <option class="my-1" value="13h30">13h30</option>
              <option class="my-1" value="14">14h</option>
              <option class="my-1" value="14h30">14h30</option>
              <option class="my-1" value="15">15h</option>
              <option class="my-1" value="15h30">15h30</option>
              <option class="my-1" value="16">16h</option>
              <option class="my-1" value="16h30">16h30</option>
              <option class="my-1" value="17">17h</option>
              <option class="my-1" value="17h30">17h30</option>
              <option class="my-1" value="18">18h</option>
              <option class="my-1" value="18h30">18h30</option>
              <option class="my-1" value="19">19h</option>
              <option class="my-1" value="19h30">19h30</option>
              <option class="my-1" value="20">20h</option>
              <option class="my-1" value="20h30">20h30</option>
            </select>
            <br />
            <pre>{{ workshopData.time }}</pre>
          </div>

          <label>*Chọn các lĩnh vực:</label>
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
              <label :for="f.id" style="max-width: 100%; font-weight: normal">{{
                f.type
              }}</label>
            </div>
          </div>
          <pre>Lĩnh vực đã chọn: {{ workshopData.fields }}</pre>

          <div class="form-group">
            <label for="title">Giá vé</label>
            <input type="number" id="price" v-model="price" style="border-color: black;" />
            <pre>{{ workshopData.price }}</pre>
          </div>
          <div class="form-group">
            <label for="title">Số lượng tham gia</label>
            <input type="number" id="attendees" v-model="attendees" tyle="border-color: black;"/>
            <pre>{{ workshopData.attendees }}</pre>
          </div>
          <div class="form-group">
            
            <br />
            <input
              type="text"
              id="mentors"
              v-model="findMentor"
              placeholder="Tìm kiếm Mentor"
              @input="handleInputMentorChange"
            />
            <select
              id="mentorSelect"
              class="form-control"
              name="duration"
              v-model="mentors"
              @change="handleSelectChange()"
              multiple
            >
              <option
                class="my-1"
                v-for="getMentor in getMentors"
                :key="getMentor.id"
                :value="getMentor.id"
              >
                {{ getMentor.name }}
              </option>
            </select>
            <br />
            <label for="title">Các mentors đã chọn</label>
            <br />
            <button
            @click="resetMentor()"
            style="background-color: green; color: white; border-radius: 5px; width:50px;"
          >
          Reset
          </button>
            <br />
            <pre>
                <div
                          class="avatar"
                          v-for="mentor in selectedMentors"
                          :key="mentor.id"
                        >
                          <a
                            :href="
                              'https://kim-bk.github.io/mentore-fe/view-mentor/' + mentor.id
                            "
                          >
                            <img :src="mentor.avatar" alt="Avatar" />
                            <span>{{ mentor.name }}</span>
                          </a>
                        </div></pre>
          </div>
          <div class="form-group">
            <label for="content">Hình ảnh</label>
            <img :src="workshopData.image" />
          </div>
          <div class="form-group">
            <label for="content">Chọn ảnh</label>
            <div>
              <input id="image" v-on:change="onFileChange" type="file" />
            </div>
          </div>
          <p style="font-weight: bold; color: green; font-size: 18px">
            {{ successM }}
          </p>
          <p style="font-weight: bold; color: red; font-size: 18px">
            {{ errorM }}
          </p>
          <button type="submit" @click="updateWorkshop()">Cập nhật</button>
          <button
            class="btn-close"
            @click="$router.go(-1)"
            style="margin-left: 420px; width: 150px"
          >
            Quay lại
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getWorkshops, getWorkshop, updateWorkshop } from "@/services/WorkshopService.js";
import { getFields } from "@/services/FieldService";
import { getMentors } from "@/services/MentorService.js";

export default {
  data() {
    return {
      title: "",
      content: "",
      fields: "",
      mentorIds:"",
      fields: "",
      startDate:"",
      time:"",
      attendees:0,
      price:0,
      location:"",
      errorM: "",
      successM: "",
      id: this.$route.params.id, //this is the id from the browser
      workshopData: {},
      canProcess: true,
      selectedFields: [],
      fields: [],
      getMentors: [],
      findListMentors: [],
      selectedMentors: [],
    };
  },

  mounted() {
    getFields()
      .then((res) => {
        if (res.status === 200) {
          this.fields = res.data;
          console.log(this.locations);
        }
      })
      .catch((e) => {
        console.log(e);
      });

    getMentors()
      .then((res) => {
        if (res.status === 200) {
          this.getMentors = res.data;
          this.findListMentors = res.data;
          console.log(this.getMentors);
        }
      })
      .catch((e) => {
        console.log(e);
      });

    getWorkshop(this.id)
      .then((res) => {
        if (res.status === 200) {
          this.workshopData = res.data;
          this.selectedMentors = this.workshopData.mentors;
          console.log(this.workshopData);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },

  methods: {
    handleSelectChange() {
      const selectElement = document.getElementById("mentorSelect");
      const selectedOption = selectElement.value;
      if (!this.selectedMentors.some(mentor => mentor.id === selectedOption))
      {
        var selectedMentor = this.getMentors.find(mentor => mentor.id === selectedOption);
        this.selectedMentors.push(selectedMentor);
        // Perform actions based on the selected option
        //console.log("Selected option:", this.selectedMentors);
      }
      console.log("Selected option:",  this.selectedMentors.map(mentor => mentor.id).join(', '));
     
    },

    resetMentor() {
      this.selectedMentors = [];
    },

    handleInputMentorChange(event) {
      if (event.target.value === "") {
        this.getMentors = this.findListMentors;
      } else {
        console.log("Input value:", event.target.value);
        const searchRegex = new RegExp(event.target.value, "i");
        this.getMentors = this.findListMentors.filter((mentor) =>
          searchRegex.test(mentor.name)
        );
      }
    },

    handleSubmit(event) {
      event.preventDefault();

      // Here, you can perform the necessary logic to save the post to your backend or perform any other actions.
      // For simplicity, we'll just log the post data to the console.

      // Reset the form after submitting
      this.title = "";
      this.content = "";
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      this.file = files[0];
      if (["image/png", "image/jpeg", "image/svg"].includes(files[0]["type"])) {
        console.log(this.file);
        this.canProcess = true;
        this.errorM = "";
      } else {
        this.errorM = "Ảnh không hợp lệ. Xin vui lòng chọn lại!";
        this.canProcess = false;
      }
    },

    async updateWorkshop() {
      if (this.canProcess) {
        this.mentorIds = this.selectedMentors.map(mentor => mentor.id).join(', ');

        const formData = new FormData();
        formData.append("image", this.file);
        formData.append("title", this.title);
        formData.append("content", this.content);
        formData.append("price", this.price);
        formData.append("attendees", this.attendees);
        formData.append("startDate", this.startDate);
        formData.append("time", this.time);
        formData.append("location", this.location);
        formData.append("mentorIds", this.mentorIds);
        formData.append("fields", this.selectedFields);

        console.log(formData);
        updateWorkshop(formData, this.id)
          .then((res) => {
            if (res.status === 200) {
              console.log(res);
              this.successM = "Cập nhật bài thành công!";
              this.workshopData = res.data;
              console.log(this.workshopData);
            }
          })
          .catch((res) => {
            console.log(res);
          });
      } else {
        this.errorM = "Ảnh không hợp lệ. Xin vui lòng chọn lại!";
        this.canProcess = false;
      }
    },
  },
};
</script>

<style scoped>
/* .post-form {
      margin: 0 auto;
    } */

.popup {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  display: flex;
}
.popup-inner {
  width: 700px;
  background: white;
  padding: 10px 10px 10px 10px;
  border-radius: 5px 5px 5px 5px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-close {
  padding: 10px 20px;
  background-color: #ff0404;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.avatar {
  flex: 1;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  text-align: center;
  line-height: 15px;
  margin-bottom: 32px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.styled-form .form-group .check-box label {
  max-width: 90%;
}
input[type="checkbox"] {
  position: relative;
  cursor: pointer;
}
input[type="checkbox"]:before {
  content: "";
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  top: 0;
  left: 0;
  border: 2px solid #555555;
  border-radius: 3px;
  background-color: white;
}
input[type="checkbox"]:checked:after {
  content: "";
  display: block;
  width: 5px;
  height: 10px;
  border: solid black;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  top: 2px;
  left: 6px;
}
</style>
