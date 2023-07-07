<template>
  <!-- Taskbar header -->
  <!-- Main Header-->
  <header-bar></header-bar>
  <div
    class="border-0 border-b border-solid border-gray-200"
    style="padding-top: 100px"
  >
    <div class="max-w-screen-lg mx-auto px-4">
      <div class="relative py-8">
        <form action="" method="get" id="filter">
          <div class="md:grid grid-cols-2 justify-items-stretch md:space-x-4">
            <div>
              <div class="mt-1 relative rounded-md">
                <label for="search" class="sr-only">Search</label>
                <input
                @input="handleInputWorkshopChange"
                  type="text"
                  id="search"
                  name="search"
                  class="form-input py-3 px-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder='Tìm kiếm tên Workshop...'
                  value=""
                />
                <div
                  class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-mc-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            class="lg:grid grid-cols-2 justify-items-stretch lg:space-x-4 mobile-filter" style="width:500px"
          >
            <div class="sm:flex sm:space-x-4 mt-2 space-y-4 sm:space-y-0">
              <div>
                <label
                  style="text-align: ; font-weight: bold; padding-left: 30px"
                  >Chọn lĩnh vực:</label
                >
                <select
                  id="fieldSelect"
                  class="dropdown bg-white border border-solid border-gray-300 cursor-pointer transition-all duration-100 relative w-full hover:bg-gray-100 rounded-full has-text-blue pl-5 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dropbtn"
                  name="duration"
                  v-model="field"
                  @change="handleSelectFieldChange"
                >
                  <option value="none">Không</option>
                  <option
                    v-for="field in fields"
                    :key="field.id"
                    :value="field.type"
                  >
                    {{ field.type }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </form>
        <a onclick="toggleNav()" class="arrow-navigation block md:hidden">
          <img src="https://cdn.mentorcruise.com/img/arrow.svg" alt="" />
        </a>
      </div>

      <a
        href="/mentor/browse/"
        id="resetall"
        class="hidden has-text-blue mb-6 font-bold"
      >
        <svg
          class="w-5 h-5"
          style="vertical-align: sub"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span class="ml-2">Reset all filters</span>
      </a>
    </div>
  </div>
  <main class="max-w-screen-xl mx-auto">
    <div id="search-results" class="my-16 px-4">
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
                {{ workshop.price }} đ
                <span class="inline font-bold text-lg">/&nbsp;vé tham dự</span>
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
                          v-for="mentor in workshop.workshops"
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="userGroup === 'MENTEE'">
                  <div
                    class="md:grid grid-cols-2 mt-8 space-x-4 absolute bottom-0 w-full"
                    style="pointer-events: none; opacity: 0.4"
                    v-if="workshop.percentage >= 100.0"
                  >
                    <div style="right: 150px">
                      <button
                        class="w-full text-center blue-btn"
                        @click="payment(workshop.id, workshop.price)"
                      >
                        Tham gia ngay
                      </button>
                    </div>
                  </div>

                  <div
                    class="md:grid grid-cols-2 mt-8 space-x-4 absolute bottom-0 w-full"
                    v-else
                  >
                    <div style="right: 150px">
                      <button
                        class="w-full text-center blue-btn"
                        @click="
                          payment(workshop.id, workshop.price, workshop.title)
                        "
                      >
                        Tham gia ngay
                      </button>
                    </div>
                  </div>
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
import { getWorkshops } from "../services/WorkshopService.js";
import { pay } from "../services/PaymentService.js";
import { getFields } from "@/services/FieldService";

export default {
  components: {
    HeaderBar: HeaderBar,
  },
  data() {
    return {
      workshops: [],
      findListWorkshops: [],
      id: "",
      price: 0,
      userGroup: "",
    };
  },
  methods: {
    handleInputWorkshopChange(event) {
      if (event.target.value === "") {
        this.workshops = this.findListWorkshops;
      } else {
        console.log("Input value:", event.target.value);
        const searchRegex = new RegExp(event.target.value, "i");
        this.workshops = this.findListWorkshops.filter((workshop) =>
          searchRegex.test(workshop.title)
        );
      }
    },

    handleSelectFieldChange() {
      const selectElement = document.getElementById("fieldSelect");
      const selectedOption = selectElement.value;
      if (selectedOption === "none") {
        this.workshops = this.findListWorkshops;
      } else {
        this.workshops = this.findListWorkshops.filter((workshop) =>
          workshop.fields.toLowerCase().includes(selectedOption.toLowerCase())
        );
      }
    },
    payment(id, price, title) {
      var payload = {
        id: id,
        price: price,
        title: title,
      };
      console.log(payload);
      pay(payload).then((res) => {
        console.log(res);
        if (res) {
          window.location.href = res.data;
        }
      });
    },
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

    this.userGroup = localStorage.getItem("userGroup");

    getWorkshops()
      .then((res) => {
        if (res.status === 200) {
          this.workshops = res.data;
          this.findListWorkshops = res.data;
          console.log(this.workshops);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
