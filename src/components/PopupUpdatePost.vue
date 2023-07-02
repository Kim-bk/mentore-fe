<template>
  <div class="post-form" style="height:100%; align-items: center; justify-content: center;  display: flex;">
    <div class="popup">
      <div class="popup-inner">
        <h2 style="padding-left: 250px; color: black">Cập nhật</h2>
        <form @submit="handleSubmit">
          <div class="form-group">
            <label for="title">Tiêu đề</label>
            <input type="text" id="title" v-model="title" required />
            <pre>{{ postData.title }}</pre>
          </div>
          <div class="form-group">
            <label for="content">Nội dung</label>
            <textarea
              id="content"
              v-model="content"
              rows="5"
              required
            ></textarea>
            <pre>{{ postData.content }}</pre>
          </div>
          <div class="form-group">
            <label for="content">Hình ảnh</label>
            <img :src="postData.fileUrl" />
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
          <button type="submit" @click="updatePost()">Cập nhật</button>
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
import { updatePost, getPostById } from "@/services/PostService.js";

export default {
  data() {
    return {
      title: "",
      content: "",
      file: null,
      errorM: "",
      successM: "",
      videoUrl: "",
      id: this.$route.params.id, //this is the id from the browser
      postData: {},
      canProcess: true
    };
  },

  mounted() {
    getPostById(this.id)
      .then((res) => {
        if (res.status === 200) {
          this.postData = res.data;
          console.log(this.postData);
        }
      })
      .catch((e) => {
        console.log(e);
      });
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
        this.errorM = "";
      } else {
        this.errorM = "Ảnh không hợp lệ. Xin vui lòng chọn lại!";
        this.canProcess = false;
      }
    },

    async updatePost() {
      if (this.canProcess) {
        const formData = new FormData();
        formData.append("File", this.file);

        formData.append("content", this.content);
        formData.append("title", this.title);

        console.log(formData);
        updatePost(formData, this.id)
          .then((res) => {
            if (res.status === 200) {
              console.log(res);
              this.successM = "Cập nhật bài thành công!";
              this.postData = res.data;
              console.log(this.postData);
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
</style>
