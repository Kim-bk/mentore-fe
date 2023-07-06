<template>
  <div class="post-form">
    <div class="popup">
      <div class="popup-inner">
        <h2 style="text-align:center; color: black">Kinh nghiệm</h2>
        <form @submit="handleSubmit">
          <div class="form-group">
            <label for="title">Công việc</label>
            <input type="text" id="title" v-model="job" required />
          </div>
          <div class="form-group">
            <label for="content">Công ty làm việc</label>
            <input type="text" id="title" v-model="company" required />
          </div>
          <div class="form-group">
            <label for="content">Năm</label>
            <input type="text" id="title" v-model="year" required />
          </div>

          <button type="submit" @click="createExp()">Thêm</button>
          <button
            class="btn-close"
            @click="togglePopup()"
            style="margin-left: 480px; width: 100px"
          >
            Đóng
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { createExp } from "@/services/MentorService.js";

export default {
  props: ["togglePopup", "id"],
  data() {
    return {
      job: "",
      company: "",
      year: "",
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();

      // Here, you can perform the necessary logic to save the post to your backend or perform any other actions.
      // For simplicity, we'll just log the post data to the console.

      // Reset the form after submitting
      this.job = "";
      this.company = "";
      this.year = "";
    },

    async createExp() {
    const payload={
        "job": this.job,
        "company": this.company,
        "year":this.year
    }
      console.log(payload);
      createExp(payload)
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            this.successM = "Thêm thành công! Reload lại trang để cập nhật";
          }
        })
        .catch((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
.post-form {
  margin: 0 auto;
}

.popup {
  position: fixed;
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
</style>
