<template>
  <div class="post-form">
    <div class="popup">
      <div class="popup-inner">
        <h2 style="padding-left: 250px; color: black">Tạo bài</h2>
        <form @submit="handleSubmit">
          <div class="form-group">
            <label for="title">Tiêu đề</label>
            <input type="text" id="title" v-model="title" required />
          </div>
          <div class="form-group">
            <label for="content">Nội dung</label>
            <textarea
              id="content"
              v-model="content"
              rows="5"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <label for="content">Chọn ảnh</label>
            <div v-if="selectedOption === 'image'">
              <input id="image" v-on:change="onFileChange" type="file" />
            </div>

            <div v-else-if="selectedOption === 'video'">
              <input id="video" v-model="videoUrl" type="text" required />
            </div>
          </div>
          <p style="font-weight: bold; color: red; font-size: 18px">
            {{ errorM }}
          </p>
          <p style="font-weight: bold; color: green; font-size: 18px">
            {{ successM }}
          </p>
          <button type="submit" @click="createPost()">Tạo bài</button>
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
import { createPost } from "@/services/PostService.js";

export default {
  props: ["togglePopup", "id"],
  data() {
    return {
      canProcess: true,
      title: "",
      content: "",
      file: null,
      errorM: "",
      successM: "",
      videoUrl: "",
      selectedOption: "image",
    };
  },
  methods: {
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
        this.errorM = '';
      } else {
        this.errorM = "Ảnh không hợp lệ. Xin vui lòng chọn lại!";
        this.canProcess = false;
      }
    },

    async createPost() {
      const formData = new FormData();
        if (this.canProcess) {
          console.log(this.file);
          formData.append("File", this.file);
          formData.append("content", this.content);
          formData.append("title", this.title);

          console.log(formData);
          createPost(formData)
            .then((res) => {
              if (res.status === 200) {
                console.log(res);
                this.successM =
                  "Tạo bài thành công. Vui lòng reload lại trang để cập nhật lại bài đăng!";
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
