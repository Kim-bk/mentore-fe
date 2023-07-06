<template>
    <div class="post-form" style="height:100%; align-items: center; justify-content: center;  display: flex;background-color: rgb(180, 176, 176);">
      <div class="popup">
        <div class="popup-inner">
          <h2 style="padding-left: 250px; color: black">Cập nhật</h2>
          <form @submit="handleSubmit">
            <div class="form-group">
              <label for="title">Tiêu đề</label>
              <input type="text" id="title" v-model="appointment.title " required />
            </div>
            <div class="form-group">
              <label for="content">Chi tiết</label>
              <textarea
                id="content"
                v-model="appointment.detail"
                rows="5"
                required
              ></textarea>
            </div>
            <div class="form-group">
              <label for="content">Ngày diễn ra</label>
              <input type="date" id="title" v-model="appointment.dateStart" />
            </div>
            <div class="form-group">
                <label for="timeStart">Thời gian</label>
                <input type="time" class="form-control" id="timeStart" aria-describedby="emailHelp" v-model="appointment.timeStart">
            </div>
            <div class="form-group">
              <label for="content">Link Google Meet</label>
              <input type="text" id="title" v-model="appointment.linkGoogleMeet" />
            </div>
            <p style="font-weight: bold; color: green; font-size: 18px">
              {{ successM }}
            </p>
            <p style="font-weight: bold; color: red; font-size: 18px">
              {{ errorM }}
            </p>
            <button type="submit" @click="updateAppointment()">Cập nhật</button>
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
  import { updateAppointment, getAppointmentById } from "@/services/AppointmentService.js";
  
  export default {
    data() {
      return {
        errorM: "",
        successM: "",
        id: this.$route.params.id, //this is the id from the browser
        appointment: {},
      };
    },
  
    mounted() {
      getAppointmentById(this.id)
        .then((res) => {
          if (res.status === 200) {
            this.appointment = res.data;
            console.log(this.appointment);
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
        //this.title = "";
        //this.content = "";
      },
  
  
      async updateAppointment() {
          const payload = {
            "title": this.appointment.title,
            "detail": this.appointment.detail,
            "linkGoogleMeet": this.appointment.linkGoogleMeet,
            "dateStart": this.appointment.dateStart,
            "timeStart": this.appointment.timeStart,
          }
  
          console.log(payload);
          updateAppointment(payload, this.id)
            .then((res) => {
              if (res.status === 200) {
                console.log(res);
                this.successM = "Cập nhật lịch hẹn thành công!";
                this.appointment = res.data;
                console.log(this.appointment);
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
  