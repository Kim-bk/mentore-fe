<template>
    <div class="post-form" style="height:100%; align-items: center; justify-content: center;  display: flex; background-color:rgb(180, 176, 176)">
      <div class="popup">
        <div class="popup-inner">
          <h2 style="color: black; text-align:center">Thông tin bài đăng</h2>
          <form @submit="handleSubmit">
            <div class="form-group">
              <label for="title">Tiêu đề</label>
              <input type="text" id="title" v-model="postData.title" disabled/>
            </div>
            <div class="form-group">
              <label for="content">Nội dung</label>
              <textarea
                id="content"
                v-model="postData.content"
                rows="5"
                disabled
              ></textarea>
            </div>
            <div class="form-group">
              <label for="content">Hình ảnh</label>
              <img :src="postData.fileUrl" />
            </div>

            <p style="font-weight: bold; color: green; font-size: 18px">
              {{ successM }}
            </p>
            <p style="font-weight: bold; color: red; font-size: 18px">
              {{ errorM }}
            </p>
            <a
              class="btn-close"
              href="https://kim-bk.github.io/admin/posts"
              style="margin-left: 470px; width: 200px"
            >
              Quay lại
          </a>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getPostById } from "@/services/PostService.js";
  
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
    getPreviousPageUrl() {
        console.log("back");
        javascript:history.go(-1)
    }
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
  