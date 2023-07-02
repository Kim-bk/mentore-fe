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
                    type="text"
                    id="search"
                    name="search"
                    class="form-input py-3 px-4 focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder='"Python", "May mặc" hoặc "Thiết kế"...'
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
                <div
                  class="relative mt-1"
                  x-data="{ order: false, orderby: 'Recommended' }"
                >
                  <div @click="order = !order">
                    <button
                      type="button"
                      class="inline w-auto md:w-full mb-4 md:mb-0 bg-white border-0 cursor-pointer transition-all duration-100 relative bg-gray-100 hover:bg-gray-200 rounded-full has-text-blue pl-6 pr-14 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      aria-haspopup="listbox"
                      aria-expanded="true"
                      aria-labelledby="listbox-label"
                    >
                      <span class="truncate"> Số năm kinh nghiệm </span>
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
                <div class="relative" x-data="{ category: false, orderby: '' }">
                  <div>
                    <button
                      type="button"
                      @click="category = !category"
                      class="bg-white border border-solid border-gray-300 cursor-pointer transition-all duration-100 relative w-full hover:bg-gray-100 rounded-full has-text-blue pl-5 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      aria-haspopup="listbox"
                      aria-expanded="true"
                      aria-labelledby="listbox-label"
                      x-bind:class="orderby !== '' ? 'border-gray-600' : ''"
                    >
                      <span class="truncate" x-text="orderby || 'Lĩnh vực'">
                        Lĩnh vực
                      </span>
                      <span
                        class="absolute inset-y-0 right-0 flex items-center pr-3 ointer-events-none"
                      >
                        <svg
                          class="w-4 h-4 text-mc-green"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </span>
                    </button>
  
                    <input
                      type="hidden"
                      name="tagsearch"
                      value=""
                      id="category"
                    />
                  </div>
                </div>
                <div class="relative" x-data="{ skills: false, selections: [] }">
                  <div>
                    <button
                      type="button"
                      @click="skills = !skills"
                      class="bg-white border border-solid border-gray-300 cursor-pointer transition-all duration-100 relative w-full hover:bg-gray-100 rounded-full has-text-blue pl-5 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      aria-haspopup="listbox"
                      aria-expanded="true"
                      x-bind:class="selections.length === 0 ? '' : 'border-gray-600'"
                    >
                      <span class="truncate" x-show="selections.length === 0">
                        Kỹ năng
                      </span>
                      <span
                        class="truncate"
                        x-show="selections.length !== 0"
                        style="display: none"
                      >
                        <span x-text="selections.length"></span> skill<span
                          class="truncate"
                          x-show="selections.length !== 1"
                          style="display: none"
                          >s</span
                        >
                      </span>
                      <span
                        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                      >
                        <svg
                          class="w-4 h-4 text-mc-green"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div class="dropdown">
                  <button
                    type="button"
                    onclick="myFunction()"
                    class="bg-white border border-solid border-gray-300 cursor-pointer transition-all duration-100 relative w-full hover:bg-gray-100 rounded-full has-text-blue pl-5 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dropbtn"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    x-bind:class="selections.length === 0 ? '' : 'border-gray-600'"
                  >
                    <span class="truncate" x-show="selections.length === 0">
                      Địa điểm
                    </span>
                    <span
                      class="truncate"
                      x-show="selections.length !== 0"
                      style="display: none"
                    >
                      <span x-text="selections.length"></span> service<span
                        class="truncate"
                        x-show="selections.length !== 1"
                        style="display: none"
                        >s</span
                      >
                    </span>
                    <span
                      class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                    >
                      <svg
                        class="w-4 h-4 text-mc-green"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <!--  -->
                  <!-- <button type="button" onclick="myFunction()" class="dropbtn">Dropdown</button> -->
                  <div id="myDropdown" class="dropdown-content">
                    <a href="workshop_hcm.html">TP Hồ Chí Minh</a>
                    <a href="workshop_danang.html">Đà Nẵng</a>
                    <a href="workshop_quangtri.html">Quảng Trị</a>
                    <a href="workshop_vinh.html">TP Vinh</a>
                    <a href="workshop_hanoi.html">Hà Nội</a>
                  </div>
                </div>
                <div id="price_select" x-data="{ price: false }">
                  <div class="relative">
                    <div>
                      <button
                        type="button"
                        @click="price = !price"
                        class="bg-white border border-solid border-gray-300 cursor-pointer transition-all duration-100 relative w-full hover:bg-gray-100 rounded-full has-text-blue pl-5 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        aria-haspopup="listbox"
                        aria-expanded="true"
                        aria-labelledby="listbox-label"
                      >
                        <span class="truncate"> Giá </span>
                        <span
                          class="absolute inset-y-0 right-0 flex items-center pr-3 ointer-events-none"
                        >
                          <svg
                            class="w-4 h-4 text-mc-green"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </span>
                      </button>
                      <div
                        x-show="price"
                        style="display: none"
                        x-transition:leave="transition ease-in duration-100 transform"
                        x-transition:leave-start="opacity-100"
                        x-transition:leave-end="opacity-0"
                        class="absolute z-10 mt-1 pt-12 px-4 bg-white shadow-lg max-h-80 w-full sm:w-80 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                        tabindex="-1"
                      >
                        <div class="flex justify-center items-center">
                          <div class="w-full">
                            <div
                              id="bins"
                              class="w-full inline-block h-32 grid pr-4 items-end"
                              style="
                                grid-template-columns: repeat(
                                  8,
                                  minmax(0, 1fr)
                                ) !important;
                              "
                            >
                              <div
                                id="bin-0"
                                class="bins bg-mc-shade-light bg-mc-shade-darkest w-auto mx-1"
                                style="height: 49%"
                              ></div>
                              <div
                                id="bin-1"
                                class="bins bg-mc-shade-light bg-mc-shade-darkest w-auto mx-1"
                                style="height: 100%"
                              ></div>
                              <div
                                id="bin-2"
                                class="bins bg-mc-shade-light bg-mc-shade-darkest w-auto mx-1"
                                style="height: 9%"
                              ></div>
                              <div
                                id="bin-3"
                                class="bins bg-mc-shade-light bg-mc-shade-darkest w-auto mx-1"
                                style="height: 2%"
                              ></div>
                              <div
                                id="bin-4"
                                class="bins bg-mc-shade-light bg-mc-shade-darkest w-auto mx-1"
                                style="height: 1%"
                              ></div>
                              <div
                                id="bin-5"
                                class="bins bg-mc-shade-light bg-mc-shade-darkest w-auto mx-1"
                                style="height: 0%"
                              ></div>
                              <div
                                id="bin-6"
                                class="bins bg-mc-shade-light bg-mc-shade-darkest w-auto mx-1"
                                style="height: 0%"
                              ></div>
                              <div
                                id="bin-7"
                                class="bins bg-mc-shade-light bg-mc-shade-darkest w-auto mx-1"
                                style="height: 1%"
                              ></div>
                            </div>
                            <div
                              x-data="range()"
                              x-init="mintrigger(); maxtrigger()"
                              class="relative max-w-xl w-full"
                            >
                              <div class="mr-4">
                                <input
                                  type="range"
                                  step="10"
                                  x-bind:min="min"
                                  x-bind:max="max"
                                  x-on:input="mintrigger"
                                  x-model="minprice"
                                  class="absolute pointer-events-none appearance-none z-30 h-2 w-full opacity-0 cursor-pointer form-slider"
                                />
                                <input
                                  type="range"
                                  step="10"
                                  x-bind:min="min"
                                  x-bind:max="max"
                                  x-on:input="maxtrigger"
                                  x-model="maxprice"
                                  class="absolute pointer-events-none appearance-none z-30 h-2 w-full opacity-0 cursor-pointer form-slider"
                                />
                                <div class="relative z-20 h-2">
                                  <div
                                    class="absolute z-20 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"
                                  ></div>
                                  <div
                                    class="absolute z-30 top-0 bottom-0 rounded-md bg-green-300"
                                    x-bind:style="'right:'+maxthumb+'%; left:'+minthumb+'%'"
                                  ></div>
                                  <div
                                    class="absolute z-40 w-6 h-6 top-0 bg-green-300 rounded-full -mt-2 -ml-1"
                                    x-bind:style="'left: '+minthumb+'%'"
                                  ></div>
                                  <div
                                    class="absolute z-40 w-6 h-6 top-0 bg-green-300 rounded-full -mt-2 -mr-5"
                                    x-bind:style="'right: '+maxthumb+'%'"
                                  ></div>
                                </div>
                              </div>
                              <div
                                class="flex justify-between items-center py-5"
                                id="pricingrange"
                              >
                                <div>
                                  <input
                                    type="number"
                                    name="price__gt"
                                    min="0"
                                    x-bind:max="max"
                                    x-on:input="mintrigger"
                                    x-model="minprice"
                                    class="form-input px-3 py-2 border border-gray-200 rounded w-24 text-center"
                                  />
                                </div>
                                <div>
                                  <input
                                    type="number"
                                    name="price__lt"
                                    min="0"
                                    x-bind:max="max"
                                    x-on:input="maxtrigger"
                                    x-model="maxprice"
                                    class="form-input px-3 mr-2 py-2 border border-gray-200 rounded w-24 text-center"
                                  />
                                </div>
                              </div>
                              <span
                                class="block text-sm pt-2 pb-4 italic text-center w-full"
                              >
                                All prices in USD
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        @click="
                          typetext = 'Mentors';
                          type = false;
                        "
                        onclick="setType('')"
                        id="all-categories"
                      >
                        Look for mentorships
                      </li>
                      <li
                        class="text-gray-900 hover:bg-gray-100 cursor-pointer select-none relative py-2 pl-3 pr-9 truncate"
                        x-bind:class="typetext == 'Sessions' ? 'font-bold' : ''"
                        role="option"
                        @click="
                          typetext = 'Session';
                          type = false;
                        "
                        onclick="setType('sessions')"
                      >
                        Look for sessions
                      </li>
                    </ul>
                    <input type="hidden" name="type" value="" id="type" />
                  </div>
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
  
        <div
          class="relative box px-7 py-8 transition-all duration-150 mb-12 max-w-screen-lg mx-auto"
          style="margin-bottom: 4rem"
        >
          <div
            class="absolute top-0 -m-4 right-12 block border-2 border-solid border-gray-200 rounded-2xl bg-white has-text-blue font-bold px-2 py-1 text-sm"
          >
            Quảng Trị
          </div>
          <div class="sm:grid grid-cols-24 sm:space-x-8">
            <div class="col-span-7 md:col-span-5 relative" style="width: 350px">
              <a
                href="/mentor/AdamJohannsson/"
                title="Adam Johannsson"
                class="relative w-full h-72 bg-center bg-cover inline-block rounded-lg overflow-hidden mb-20"
                style="
                  background-image: url('@/assets/images/workshop/tailor.jpg');
                "
              >
                <div
                  class="absolute block w-full h-full inset-x-0 bottom-0"
                ></div>
              </a>
              <div
                class="block has-text-blue text-3xl lg:text-4xl font-black leading-none absolute bottom-0"
                style="font-size: 1.55rem !important"
              >
                370.000
                <span class="inline font-bold text-lg">/&nbsp;buổi</span>
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
                    <a href="/mentor/AdamJohannsson/" title="Adam Johannsson">
                      <h3 class="title text-2xl has-text-blue font-bold">
                        MỘT NGÀY THỬ LÀM THỢ MAY
                      </h3>
                    </a>
                  </div>
                  <!-- <div style="padding-top:15px; padding-left:5px">   
      <div class="w3-light-grey sm:text-right my-4 sm:my-0" style="height:68%">
      <div class="w3-container w3-green w3-center " style="width:63%">63%</div>
    </div>
  </div> -->
                </div>
                <div class="sm:text-right my-4 sm:my-0"></div>
  
                <span class="font-bold" style="position: relative; top: 20px"
                  >Mô tả</span
                >
                <hr />
                <div
                  class="break-word mt-4 mb-6 max-w-screen-md text-sm leading-6"
                  style="top: -15px; position: relative"
                >
                  Để làm nên một chiếc váy, chiếc áo, bạn cần phải trải qua những
                  công đoạn gì? Tốn bao nhiêu thời gian? Liệu ngành may mặc, thiết
                  kế có phù hợp với bạn? Hãy đến với buổi workshop để trực tiếp
                  trải nghiệm cùng founder của local brand Leix nhé.
                </div>
                <div class="tags"></div>
                <div
                  class="md:grid grid-cols-2 mt-8 space-x-4 absolute bottom-0 w-full"
                >
                  <div>
                    <a
                      href="
  
  
  
  
  
  
  
  
  
  
                              /mentor/AdamJohannsson/?preselect=standard"
                      class="w-full text-center blue-btn"
                      >Xem chi tiết</a
                    >
                  </div>
                </div>
                <div style="padding-top: 45px">
                  <div
                    class="w3-light-grey sm:text-right my-4 sm:my-0 container-progress"
                    style="height: 68%"
                  >
                    <div
                      class="w3-container w3-green w3-center skill"
                      style="width: 63%"
                    >
                      63%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative box px-7 py-8 transition-all duration-150 mb-12 max-w-screen-lg mx-auto"
          style="margin-bottom: 4rem"
        >
          <div
            class="absolute top-0 -m-4 right-12 block border-2 border-solid border-gray-200 rounded-2xl bg-white has-text-blue font-bold px-2 py-1 text-sm"
          >
            Đà Nẵng
          </div>
          <div class="sm:grid grid-cols-24 sm:space-x-8">
            <div class="col-span-7 md:col-span-5 relative" style="width: 350px">
              <a
                href="/mentor/jaredcooperband/"
                title="Jared Cooperband"
                class="relative w-full h-72 bg-center bg-cover inline-block rounded-lg overflow-hidden mb-20"
                style="
                  background-image: url('@/assets/images/workshop/grand.jpg');
                "
              >
                <div
                  class="absolute block w-full h-full inset-x-0 bottom-0"
                ></div>
              </a>
              <div
                class="block has-text-blue text-3xl lg:text-4xl font-black leading-none absolute bottom-0"
                style="font-size: 1.55rem !important"
              >
                175.000
                <span class="inline font-bold text-lg">/&nbsp;buổi</span>
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
                    <a href="/mentor/jaredcooperband/" title="Jared Cooperband">
                      <h3 class="title text-2xl has-text-blue font-bold">
                        MỞ QUÁN CAFE : NHÀN HAY NHỌC ?
                      </h3>
                    </a>
                  </div>
                  <!-- <div style="padding-top:15px; padding-left:5px">   
      <div class="w3-light-grey sm:text-right my-4 sm:my-0" style="height:35%">
      <div class="w3-container w3-green w3-center " style="width:27%">27%</div>
    </div>
  </div> -->
                  <div class="sm:text-right my-4 sm:my-0"></div>
                </div>
                <span class="font-bold" style="position: relative; top: 20px"
                  >Mô tả</span
                >
                <hr />
                <div
                  class="break-word mt-4 mb-6 max-w-screen-md text-sm leading-6"
                  style="top: -15px; position: relative"
                >
                  Bạn muốn có một quán cà phê theo phong cách của riêng mình nhưng
                  đang băn khoăn làm thế nào để xoay xở khi kinh nghiệm khởi
                  nghiệp chưa có? Trong buổi workshop tuần này có sự tham gia của
                  các chuyên gia khởi nghiệp và nhà sáng lập của chuỗi cafe lớn
                  nhất miền Trung hứa hẹn sẽ đem lại cho bạn không ít những kinh
                  nghiệm quý giá.
                  <div class="tags"></div>
                </div>
                <div
                  class="md:grid grid-cols-2 mt-8 space-x-4 absolute bottom-0 w-full"
                >
                  <div>
                    <a
                      href="  /mentor/jaredcooperband/?preselect=standard"
                      class="w-full text-center blue-btn"
                      >Xem chi tiết</a
                    >
                  </div>
                </div>
                <div style="padding-top: 15px; padding-left: 5px">
                  <div
                    class="w3-light-grey sm:text-right my-4 sm:my-0 container-progress"
                    style="height: 35%"
                  >
                    <div
                      class="w3-container w3-green w3-center skill"
                      style="width: 27%"
                    >
                      27%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative box px-7 py-8 transition-all duration-150 mb-12 max-w-screen-lg mx-auto"
          style="margin-bottom: 4rem"
        >
          <div
            class="absolute top-0 -m-4 right-12 block border-2 border-solid border-gray-200 rounded-2xl bg-white has-text-blue font-bold px-2 py-1 text-sm"
          >
            TP Vinh
          </div>
          <div class="sm:grid grid-cols-24 sm:space-x-8">
            <div class="col-span-7 md:col-span-5 relative" style="width: 350px">
              <a
                href="/mentor/marinakrutchinsky/"
                title="Marina Krutchinsky"
                class="relative w-full h-72 bg-center bg-cover inline-block rounded-lg overflow-hidden mb-20"
                style="
                  background-image: url('@/assets/images/workshop/su-pham.jpg');
                "
              >
                <div
                  class="absolute block w-full h-full inset-x-0 bottom-0"
                ></div>
              </a>
              <div
                class="block has-text-blue text-3xl lg:text-4xl font-black leading-none absolute bottom-0"
                style="font-size: 1.55rem !important"
              >
                125.000
                <span class="inline font-bold text-lg">/&nbsp;buổi</span>
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
                    <a
                      href="/mentor/marinakrutchinsky/"
                      title="Marina Krutchinsky"
                    >
                      <h3 class="title text-2xl has-text-blue font-bold">
                        CHUYỆN HỌC SƯ PHẠM: RA TRƯỜNG CÓ NHẤT THIẾT PHẢI LÀM NGHỀ
                        GIÁO?
                      </h3>
                    </a>
                  </div>
                  <!-- <div style="padding-top:15px; padding-left:5px">   
      <div class="w3-light-grey sm:text-right my-4 sm:my-0" style="height:24%">
      <div class="w3-container w3-green w3-center " style="width:80%">80%</div>
    </div>
  </div> -->
                </div>
                <span class="font-bold" style="position: relative; top: 20px"
                  >Mô tả</span
                >
                <hr />
                <div
                  class="break-word mt-4 mb-6 max-w-screen-md text-sm leading-6"
                  style="top: -15px; position: relative"
                >
                  Workshop cho bạn những hình dung cụ thể nhất về các ngành trong
                  trường sư phạm. Liệu bạn có thể đa dạng sự lựa chọn nghề nghiệp
                  của mình hay không? Với sự tư vấn của các thầy cô trong ngành,
                  các bạn sẽ không còn mơ hồ và kiên định hơn trong các quyết định
                  học và làm của mình.
                </div>
                <div class="tags"></div>
                <div
                  class="md:grid grid-cols-2 mt-8 space-x-4 absolute bottom-0 w-full"
                >
                  <div>
                    <a
                      href="
  
                              /mentor/marinakrutchinsky/?preselect=lite"
                      class="w-full text-center blue-btn"
                      >Xem chi tiết</a
                    >
                  </div>
                </div>
                <div style="padding-top: 15px">
                  <div
                    class="w3-light-grey sm:text-right my-4 sm:my-0 container-progress"
                    style="height: 24%"
                  >
                    <div
                      class="w3-container w3-green w3-center skill"
                      style="width: 80%"
                    >
                      80%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative box px-7 py-8 transition-all duration-150 mb-12 max-w-screen-lg mx-auto"
          style="margin-bottom: 4rem"
        >
          <div
            class="absolute top-0 -m-4 right-12 block border-2 border-solid border-gray-200 rounded-2xl bg-white has-text-blue font-bold px-2 py-1 text-sm"
          >
            TP Hồ Chí Minh
          </div>
          <div class="sm:grid grid-cols-24 sm:space-x-8">
            <div class="col-span-7 md:col-span-5 relative" style="width: 350px">
              <a
                href="/mentor/DominicMonn/"
                title="Dominic Monn"
                class="relative w-full h-72 bg-center bg-cover inline-block rounded-lg overflow-hidden mb-20"
                style="
                  background-image: url('@/assets/images/workshop/giao-dien.jpg');
                "
              >
                <div
                  class="absolute block w-full h-full inset-x-0 bottom-0"
                ></div>
              </a>
              <div
                class="block has-text-blue text-3xl lg:text-4xl font-black leading-none absolute bottom-0"
                style="font-size: 1.55rem !important"
              >
                300.000
                <span class="inline font-bold text-lg">/&nbsp;buổi</span>
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
                    <a href="/mentor/DominicMonn/" title="Dominic Monn">
                      <h3 class="title text-2xl has-text-blue font-bold">
                        THEO CHÂN MỘT NGÀY CỦA NGƯỜI THIẾT KẾ GIAO DIỆN APP
                      </h3>
                    </a>
                  </div>
                  <!-- <div style="padding-top:15px; padding-left:5px">   
      <div class="w3-light-grey sm:text-right my-4 sm:my-0" style="height:35%">
      <div class="w3-container w3-green w3-center " style="width:74%">74%</div>
    </div>
  </div> -->
                </div>
                <span class="font-bold" style="position: relative; top: 20px"
                  >Mô tả</span
                >
                <hr />
                <div
                  class="break-word mt-4 mb-6 max-w-screen-md text-sm leading-6"
                  style="top: -15px; position: relative"
                >
                  Bạn có thắc mắc khối lượng công việc trong một ngày của một
                  frontend developer? Tôi sẽ phải gặp những ai để hoàn thành công
                  việc? Bạn có muốn trải nghiệm cùng với tôi để xử lý các tác vụ
                  đó? Tôi sẽ rất hoan nghênh chào đón bạn ;)
                </div>
                <div class="tags"></div>
                <div
                  class="md:grid grid-cols-2 mt-8 space-x-4 absolute bottom-0 w-full"
                >
                  <div>
                    <a
                      href="
  
  
  
  
  
  
  
  
  
  
                              /mentor/DominicMonn/?preselect=lite"
                      class="w-full text-center blue-btn"
                      >Xem chi tiết</a
                    >
                  </div>
                </div>
                <div style="padding-top: 15px">
                  <div
                    class="w3-light-grey sm:text-right my-4 sm:my-0 container-progress"
                    style="height: 35%"
                  >
                    <div
                      class="w3-container w3-green w3-center skill"
                      style="width: 74%"
                    >
                      74%
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
      getWorkshops()
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
  