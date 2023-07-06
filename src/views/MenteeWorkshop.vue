<template>
    <!-- Taskbar header -->
    <!-- Main Header-->
    <header-bar></header-bar>
    <div
      class="border-0 border-b border-solid border-gray-200"
      style="padding-top: 100px"
    >
      <div class="max-w-screen-lg mx-auto px-4">
        
      </div>
    </div>
    <main class="max-w-screen-xl mx-auto">
      <div class="my-16 px-4" v-if="workshops.length===0">
        <h3 style="color:rgb(228, 96, 228); font-size:40px; text-align:center; font-weight:bold">Bạn chưa mua vé tham dự Workshop nào!</h3>
      </div>

      <div id="search-results" class="my-16 px-4" v-else>
        <div v-for="workshop in workshops" :key="workshop.id">
          <div
            class="relative box px-7 py-8 transition-all duration-150 mb-12 max-w-screen-lg mx-auto"
            style="margin-bottom: 4rem"
          >
            <div class="sm:grid grid-cols-24 sm:space-x-8">
              <div class="col-span-7 md:col-span-5 relative" style="width: 350px">
                <img
                  class="relative w-full h-72 bg-center bg-cover inline-block rounded-lg overflow-hidden mb-20"
                  :src="workshop.image"
                />
                <div
                  class="absolute block w-full h-full inset-x-0 bottom-0"
                ></div>
                <div
                  class="block has-text-blue text-3xl lg:text-4xl font-black leading-none absolute bottom-0"
                  style="font-size: 1.55rem !important"
                >
                Đã thanh toán: 
                  {{ workshop.price }} đ
                </div>
              </div>
              <div
                class="col-span-full col-start-8 md:col-start-6 lg:col-span-19 border-0 lg:border-r border-solid border-gray-200 pr-5"
                style="
                  position: relative;
                  padding-left: 145px;
                  border-right-width: 0px !important;
                "
              >
                <div class="relative h-full pb-16">
                  <div class="sm:grid grid-cols-1">
                    <div class="col-span-2">
                      <a href="/mentor/LilyMalykhina/" title="Lily Malykhina">
                        <h3 class="title text-2xl has-text-blue font-bold">
                          {{ workshop.title }}
                          <!-- <span class="text-xl ml-1 align-middle" title="United States of America"></span> -->
                        </h3>
                      </a>
                    </div>
                  </div>
                  <span class="font-bold" style="position: relative; top: 20px"
                    >Mô tả</span
                  >
                  <hr />
                  <div
                    class="break-word mt-4 mb-6 max-w-screen-md text-sm leading-6"
                    style="top: -15px; position: relative"
                  >
                    {{ workshop.content }}
                  </div>
  
                  <div class="row" style="padding-left: 15px">
                    <span class="font-bold" style="position: relative; top: -20px"
                      >Thời gian diễn ra:
                    </span>
                    <span style="position: relative; top: -20px">
                      {{ workshop.time }} ngày {{ workshop.startDate }}</span
                    >
                  </div>
  
                  <div class="row" style="padding-left: 8px">
                    <div
                      class="column"
                      style="display: flex; flex-direction: column"
                    >
                      <div>
                        <span class="font-bold" style="position: relative"
                          >Lĩnh vực</span
                        >
                        <br />
                        <br />
                        <div
                          class="break-word mt-4 mb-6 max-w-screen-md text-sm leading-6"
                          style="top: -35px; position: relative"
                        >
                          {{ workshop.fields }}
                        </div>
                      </div>
  
                      <div></div>
                      <div>
                        <span class="font-bold" style="position: relative"
                          >Địa điểm</span
                        >
                        <br />
                        <br />
                        <div
                          class="break-word mt-4 mb-6 max-w-screen-md text-sm leading-6"
                          style="top: -35px; position: relative"
                        >
                          {{ workshop.location }}
                        </div>
                      </div>
                    </div>
                    <div class="column">
                      <span
                        class="font-bold"
                        style="position: relative; left: 120px"
                        >Diễn giả</span
                      >
                      <br />
                      <br />
                      <div
                        class="break-word mt-4 mb-6 max-w-screen-md text-sm leading-6"
                        style="top: -15px; position: relative"
                      >
                        <div
                          style="
                            display: grid;
                            grid-template-columns: 1fr 1fr 1fr;
                            grid-gap: 10px;
                          "
                        >
                          <div
                            class="avatar"
                            v-for="mentor in workshop.mentors"
                            :key="mentor.id"
                          >
                            <a
                              :href="
                                'http://localhost:8080/view-mentor/' + mentor.id
                              "
                            >
                              <img :src="mentor.avatar" alt="Avatar" />
                              <span>{{ mentor.name }}</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div
                  class="block has-text-blue text-3xl lg:text-4xl font-black leading-none absolute bottom-0"
                  style="font-size: 1.55rem !important"
                >
                  Mã code: {{ workshop.invitationCode }}
                </div>

                  <div style="padding-top: 15px">
                    <div
                      class="w3-light-grey sm:text-right my-4 sm:my-0 container-progress"
                      style="height: 35%"
                    >
                      <div
                        class="w3-container w3-green w3-center skill"
                        :style="{ width: `${workshop.percentage}%` }"
                      >
                        {{ workshop.percentage }}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <style scoped>
  @import url("https://cdn.mentorcruise.com/css/bulma.css");
  @import url("https://cdn.mentorcruise.com/css/app.min.css");
  @import url("https://cdn.mentorcruise.com/css/tailwind.min.css");
  @import url("https://www.w3schools.com/w3css/4/w3.css");
  
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
  
  .bg-mc-green {
    background-color: #ba33c6 !important;
  }
  
  .blue-btn {
    background-color: #ba33c6;
  }
  .container-progress {
    border-radius: 10px;
  }
  .skill {
    text-align: right !important;
    border-radius: 10px 0px 0px 10px;
  }
  
  .w3-light-grey,
  .w3-hover-light-grey:hover,
  .w3-light-gray,
  .w3-hover-light-gray:hover {
    background-color: #c7b0b0 !important;
  }
  
  /* dropdown button */
  
  .dropbtn {
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }
  
  .dropbtn:hover,
  .dropbtn:focus {
    background-color: #2980b9;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    font-size: 14px;
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .show {
    display: block;
  }
  /*  */
  </style>
  
  <script>
  import HeaderBar from "@/components/HeaderBar.vue";
  import { getMenteeWorkshops } from "../services/WorkshopService.js";
  import { pay } from "../services/PaymentService.js";
  
  export default {
    components: {
      HeaderBar: HeaderBar,
    },
    data() {
      return {
        workshops: [],
        id: "",
        price: 0,
      };
    },
    methods: {
      payment(id, price, title) {
        var payload = {
          id: id,
          price: price,
          title: title,
        };
        console.log(payload);
        pay(payload)
          .then((res) => {
            console.log(res);
            if (res) {
              window.location.href = res.data;
            } 
          })
      },
    },
    mounted() {
        getMenteeWorkshops()
        .then((res) => {
          if (res.status === 200) {
            this.workshops = res.data;
            console.log(this.workshops);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  };
  </script>
  