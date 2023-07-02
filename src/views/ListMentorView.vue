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
        <div class="md:grid grid-cols-2 justify-items-stretch md:space-x-4">
          <div>
            <div class="mt-1 relative rounded-md">
              <label for="search" class="sr-only">Search</label>
              <input
                @input="handleInputMentorChange"
                type="text"
                id="search"
                name="search"
                class="form-input py-3 px-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Tìm kiếm mentor..."
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
          <div class="justify-self-end">
            <div class="relative mt-1"></div>
            <div>
              <button
                type="button"
                class="inline w-auto md:w-full mb-4 md:mb-0 bg-white border-0 cursor-pointer transition-all duration-100 relative bg-gray-100 hover:bg-gray-200 rounded-full has-text-blue pl-6 pr-14 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
              >
                <span
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pt-1 pointer-events-none"
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
                      d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                    ></path>
                  </svg>
                </span>
              </button>

              <input type="hidden" name="sort" value="" id="sort" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="lg:grid grid-cols-2 justify-items-stretch lg:space-x-4 mobile-filter"
      >
        <div class="sm:flex sm:space-x-4 mt-2 space-y-4 sm:space-y-0">
          <div>
            <label style="text-align: ; font-weight: bold; padding-left: 30px"
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
              <option v-for="field in fields" :key="field.id" :value="field.type">
                {{ field.type }}
              </option>
            </select>
          </div>

          <div>
            <label style="text-align: ; font-weight: bold; padding-left: 30px"
              >Chọn địa điểm:</label
            >
            <select
              id="locationSelect"
              class="dropdown bg-white border border-solid border-gray-300 cursor-pointer transition-all duration-100 relative w-full hover:bg-gray-100 rounded-full has-text-blue pl-5 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dropbtn"
              name="duration"
              style="width: 100px"
              v-model="location"
              @change="handleSelectLocationChange()"
            >
              <option value="none">Không</option>
              <option value="An Giang">An Giang</option>
              <option value="Bắc Giang">Bắc Giang</option>
              <option value="Bắc Kạn">Bắc Kạn</option>
              <option value="Bạc Liêu">Bạc Liêu</option>
              <option value="Bắc Ninh">Bắc Ninh</option>
              <option value="Bến Tre">Bến Tre</option>
              <option value="Bình Định">Bình Định</option>
              <option value="Bình Dương">Bình Dương</option>
              <option value="Bình Phước">Bình Phước</option>
              <option value="Bình Thuận">Bình Thuận</option>
              <option value="Cà Mau">Cà Mau</option>
              <option value="Cao Bằng">Cao Bằng</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Đắk Lắk">Đắk Lắk</option>
              <option value="Đắk Nông">Đắk Nông</option>
              <option value="Điện Biên">Điện Biên</option>
              <option value="Đồng Nai">Đồng Nai</option>
              <option value="Đồng Tháp">Đồng Tháp</option>
              <option value="Gia Lai">Gia Lai</option>
              <option value="Hà Giang">Hà Giang</option>
              <option value="Hà Nam">Hà Nam</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hà Tĩnh">Hà Tĩnh</option>
              <option value="Hải Dương">Hải Dương</option>
              <option value="Hải Phòng">Hải Phòng</option>
              <option value="Hậu Giang">Hậu Giang</option>
              <option value="Hòa Bình">Hòa Bình</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Hưng Yên">Hưng Yên</option>
              <option value="Khánh Hòa">Khánh Hòa</option>
              <option value="Kiên Giang">Kiên Giang</option>
              <option value="Kon Tum">Kon Tum</option>
              <option value="Lai Châu">Lai Châu</option>
              <option value="Lâm Đồng">Lâm Đồng</option>
              <option value="Lạng Sơn">Lạng Sơn</option>
              <option value="Lào Cai">Lào Cai</option>
              <option value="Long An">Long An</option>
              <option value="Nam Định">Nam Định</option>
              <option value="Nghệ An">Nghệ An</option>
              <option value="Ninh Bình">Ninh Bình</option>
              <option value="Ninh Thuận">Ninh Thuận</option>
              <option value="Phú Thọ">Phú Thọ</option>
              <option value="Phú Yên">Phú Yên</option>
              <option value="Quảng Bình">Quảng Bình</option>
              <option value="Quảng Nam">Quảng Nam</option>
              <option value="Quảng Ngãi">Quảng Ngãi</option>
              <option value="Quảng Ninh">Quảng Ninh</option>
              <option value="Quảng Trị">Quảng Trị</option>
              <option value="Sóc Trăng">Sóc Trăng</option>
              <option value="Sơn La">Sơn La</option>
              <option value="Tây Ninh">Tây Ninh</option>
              <option value="Thái Bình">Thái Bình</option>
              <option value="Thái Nguyên">Thái Nguyên</option>
              <option value="Thanh Hóa">Thanh Hóa</option>
              <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
              <option value="Tiền Giang">Tiền Giang</option>
              <option value="Trà Vinh">Trà Vinh</option>
              <option value="Tuyên Quang">Tuyên Quang</option>
              <option value="Vĩnh Long">Vĩnh Long</option>
              <option value="Vĩnh Phúc">Vĩnh Phúc</option>
              <option value="Yên Bái">Yên Bái</option>
            </select>
          </div>

          <div
            class="relative"
            x-data="{ more: false }"
            x-on:keydown.escape="more = false"
          ></div>
        </div>
      </div>
      <div class="justify-self-end">
        <div class="relative" x-data="{ type: false, typetext: '' }">
          <div>
            <ul
              x-show="type"
              style="display: none"
              x-transition:leave="transition ease-in duration-100 transform"
              x-transition:leave-start="opacity-100"
              x-transition:leave-end="opacity-0"
              class="absolute z-10 mt-1 bg-white shadow-lg max-h-80 w-full sm:w-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              tabindex="-1"
              role="listbox"
              aria-labelledby="listbox-label"
            >
              <li
                class="text-gray-900 hover:bg-gray-100 cursor-pointer select-none relative py-2 pl-3 pr-9 truncate"
                x-bind:class="typetext != 'Sessions' ? 'font-bold' : ''"
                role="option"
              >
                Look for mentorships
              </li>
              <li
                class="text-gray-900 hover:bg-gray-100 cursor-pointer select-none relative py-2 pl-3 pr-9 truncate"
                x-bind:class="typetext == 'Sessions' ? 'font-bold' : ''"
                role="option"
              >
                Look for sessions
              </li>
            </ul>
            <input type="hidden" name="type" value="" id="type" />
          </div>
        </div>
      </div>
    </div>
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
  <main class="max-w-screen-xl mx-auto">
    <div id="search-results" class="my-16 px-4">
      <!-- test loading data -->
      <div v-for="mentor in mentors" :key="mentor.id">
        <div
          class="relative box px-7 py-8 transition-all duration-150 mb-12 max-w-screen-lg mx-auto"
          style="margin-bottom: 4rem"
        >
          <div
            class="absolute top-0 -m-4 right-12 block border-2 border-solid border-gray-200 rounded-2xl bg-white has-text-blue font-bold px-2 py-1 text-sm"
          >
            {{ mentor.locationName }}
          </div>
          <div class="sm:grid grid-cols-24 sm:space-x-8">
            <div class="col-span-7 md:col-span-5 relative">
              <img
                class="relative w-full h-72 bg-center bg-cover inline-block rounded-lg overflow-hidden mb-20"
                :src="mentor.avatar"
              />
            </div>
            <div
              class="col-span-full col-start-8 md:col-start-6 lg:col-span-13 border-0 lg:border-r border-solid border-gray-200 pr-5"
              style="position: relative"
            >
              <div class="relative h-full pb-16">
                <div class="sm:grid grid-cols-3">
                  <div class="col-span-2">
                    <a
                      href="https:localhost:8080/mentor/{{mentor.id}}"
                      title="{{mentor.name}}"
                    >
                      <h3 class="title text-2xl has-text-blue font-bold">
                        {{ mentor.name }}
                      </h3>
                    </a>
                  </div>

                  <div class="sm:text-right my-4 sm:my-0"></div>
                </div>
                <span class="has-text-blue text-base mt-2 inline-block">{{
                  mentor.currentJob
                }}</span
                ><br />
                <div class="mt-2">
                  <div class="star-rating-display" data-rating="5.0">
                    <span class="is-vishidden">4.5 stars</span>
                  </div>
                  <span class="rating-display"
                    ><b class="has-text-blue">5.0</b>&nbsp;<span
                      class="has-text-blue"
                      >(8 reviews)</span
                    ></span
                  >
                </div>
                <hr />
                <div
                  class="break-word mt-4 mb-6 max-w-screen-md text-sm leading-6"
                  style="top: -15px; position: relative"
                >
                  {{ mentor.description }}
                </div>
                <div
                  class="md:grid grid-cols-2 mt-8 space-x-4 absolute bottom-0 w-full"
                >
                  <div>
                    <a
                      :href="'http://localhost:8080/view-mentor/' + mentor.id"
                      class="w-full text-center blue-btn"
                      >Xem Profile</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden lg:block lg:col-span-6">
              <div class="font-semibold has-text-blue text-sm">
                Lĩnh vực quan tâm
              </div>
              <div
                class="my-5 text-gray-600 text-sm w-full divide-y divide-x-0 divide-gray-200 divide-solid border-solid border-0 border-t border-b border-gray-200"
              >
                <div class="w-full py-3">
                  {{ mentor.fields }}
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
/* Import the CSS files */
@import url("https://cdn.mentorcruise.com/css/bulma.css");
@import url("https://cdn.mentorcruise.com/css/app.min.css");
@import url("https://cdn.mentorcruise.com/css/tailwind.min.css");

/* Import local CSS */
@import "../assets/css/footer-distributed-with-address-and-phones.css";
.bg-mc-green {
  background-color: #ba33c6 !important;
}

.blue-btn {
  background-color: #ba33c6;
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
import { getMentors } from "../services/MentorService.js";
import { getFields } from "@/services/FieldService";

export default {
  components: {
    HeaderBar: HeaderBar,
  },
  data() {
    return {
      mentors: [],
      findListMentors: [],
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
          this.mentors = res.data;
          this.findListMentors = res.data;
          console.log(this.mentors);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    handleSelectLocationChange() {
      const selectElement = document.getElementById("locationSelect");
      const selectedOption = selectElement.value;
      if (selectedOption === "none") {
        this.mentors = this.findListMentors;
      } else {
        this.mentors = this.findListMentors.filter(
          (mentor) => mentor.locationName === selectedOption
        );
        console.log(this.mentors);
      }
    },
    handleSelectFieldChange() {
      const selectElement = document.getElementById("fieldSelect");
      const selectedOption = selectElement.value;
      if (selectedOption === "none") {
        this.mentors = this.findListMentors;
      } else {
        this.mentors = this.findListMentors.filter(mentor =>
            mentor.fields.toLowerCase().includes(selectedOption.toLowerCase())
          );
      }
    },

    handleInputMentorChange(event) {
      if (event.target.value === "") {
        this.mentors = this.findListMentors;
      } else {
        console.log("Input value:", event.target.value);
        const searchRegex = new RegExp(event.target.value, "i");
        this.mentors = this.findListMentors.filter((mentor) =>
          searchRegex.test(mentor.name)
        );
      }
    },
  },
};
</script>
