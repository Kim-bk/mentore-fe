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
            <div class="relative mt-1"></div>
            <div>
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
              <input type="hidden" name="tagsearch" value="" id="category" />
            </div>
          </div>
          <div class="relative" x-data="{ skills: false, selections: [] }">
            <div>
              <button
                type="button"
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
              <a href="mentor_hcm.html">TP Hồ Chí Minh</a>
              <a href="mentor_danang.html">Đà Nẵng</a>
              <a href="mentor_haiphong.html">Hải Phòng</a>
              <a href="mentor_hanoi.html">Hà Nội</a>
            </div>
          </div>
          <!--  -->

          <div id="price_select" x-data="{ price: false }">
            <div class="relative">
              <div>
                <button
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
            <!-- <button type="button" @click="type = !type" class="inline w-auto lg:w-full bg-white border border-solid has-border-green cursor-pointer transition-all duration-100 relative hover:bg-gray-100 rounded-full has-text-green pl-5 pr-10 py-2 mt-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
    <span class="truncate" x-text="typetext || 'Mentors'">
    Mentors
    </span>
    <span class="absolute inset-y-0 right-0 flex items-center pr-3 ointer-events-none">

    <svg class="w-4 h-4 text-mc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </span>
    </button> -->
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
      <!-- <div
        class="relative box px-7 py-8 transition-all duration-150 mb-12 max-w-screen-lg mx-auto"
        style="margin-bottom: 4rem"
      > -->
        <!-- <div
          class="absolute top-0 -m-4 right-12 block border-2 border-solid border-gray-200 rounded-2xl bg-white has-text-blue font-bold px-2 py-1 text-sm"
        >
          Hà Nội
        </div>
        <div class="sm:grid grid-cols-24 sm:space-x-8">
          <div class="col-span-7 md:col-span-5 relative">
            <img
              href="/mentor/LilyMalykhina/"
              title="Lily Malykhina"
              class="relative w-full h-72 bg-center bg-cover inline-block rounded-lg overflow-hidden mb-20"
              src="../assets/images/avatar/gogofood.png"
            />
          </div> -->
          <!-- <div
            class="col-span-full col-start-8 md:col-start-6 lg:col-span-13 border-0 lg:border-r border-solid border-gray-200 pr-5"
            style="position: relative"
          > -->
            <!-- <div class="relative h-full pb-16">
              <div class="sm:grid grid-cols-3">
                <div class="col-span-2">
                  <a href="/mentor/LilyMalykhina/" title="Lily Malykhina">
                    <h3 class="title text-2xl has-text-blue font-bold">
                      NGUYỄN THÀNH NAM
                    </h3>
                  </a>
                </div>
                <div class="sm:text-right my-4 sm:my-0">
                  <div
                    class="whitespace-nowrap inline cursor-default py-2 px-4 rounded-full text-sm cursor-pointer font-bold bg-mc-green text-white hover:text-white"
                  >
                    <i class="fa fa-star"></i>&nbsp;5 năm
                  </div>
                </div>
              </div>
              <span class="has-text-blue text-base mt-2 inline-block"
                >CEO <span class="font-bold">Gogo food Vietnam</span></span
              ><br />
              <div class="mt-2">
                <div class="star-rating-display" data-rating="5.0">
                  <span class="is-vishidden">5.0 stars</span>
                </div>
                <span class="rating-display"
                  ><b class="has-text-blue">5.0</b>&nbsp;<span
                    class="has-text-blue"
                    >(2 reviews)</span
                  ></span
                >
              </div>
              <hr />
              <div
                class="break-word mt-4 mb-6 max-w-screen-md text-sm leading-6"
                style="top: -15px; position: relative"
              >
                Tôi đã có kinh nghiệm nhiều năm trong việc điều phối và vận hành
                các tập đoàn lớn, giúp công ty trở nên lớn mạnh với nhiều dự án
                trọng điểm được vận hành và quản lý bởi đội ngũ do tôi quản lý.
                Đối với tôi, một tiến trình được đầu tư chất lượng sẽ tạo nên
                một kết quả hoàn hảo.
              </div>
              <div class="tags">
                <a
                  href="?tagsearch=UX%20%26%20Design"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Product &amp; Marketing</a
                >
                <a href="/filter/design/" class="tag-sm mb-2 mr-2 font-semibold"
                  >Quản lý</a
                >
                <a href="/filter/ux/" class="tag-sm mb-2 mr-2 font-semibold"
                  >Tài chính</a
                >
              </div>
              <div
                class="md:grid grid-cols-2 mt-8 space-x-4 absolute bottom-0 w-full"
              >
                <div>
                  <a
                    href="/mentor/LilyMalykhina/?preselect=standard"
                    class="w-full text-center blue-btn"
                    >Xem Profile</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:block lg:col-span-6">
            <div class="font-semibold has-text-blue text-sm">
              Bạn sẽ nhận được gì ?
            </div>
            <div
              class="my-5 text-gray-600 text-sm w-full divide-y divide-x-0 divide-gray-200 divide-solid border-solid border-0 border-t border-b border-gray-200"
            >
              <div class="w-full py-3">
                Câu chuyện trong nghề của một CEO ngành kinh doanh thực phẩm
              </div>
              <div class="w-full py-3">
                Kinh nghiệm trong việc quản lý dự án
              </div>
              <div class="w-full py-3">
                Cách phân bổ nguồn lực hợp lý cho dự án
              </div>
            </div>
            <a
              href="/mentor/LilyMalykhina/"
              class="w-full block text-right uppercase has-text-blue font-semibold text-xs"
            >
              Xem thêm...
            </a>
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
          <div class="col-span-7 md:col-span-5 relative">
            <img
              href="/mentor/AdamJohannsson/"
              title="Adam Johannsson"
              class="relative w-full h-72 bg-center bg-cover inline-block rounded-lg overflow-hidden mb-20"
               src="../assets/images/avatar/grandp.jpg"
            />
              
          </div>
          <div
            class="col-span-full col-start-8 md:col-start-6 lg:col-span-13 border-0 lg:border-r border-solid border-gray-200 pr-5"
            style="position: relative"
          >
            <div class="relative h-full pb-16">
              <div class="sm:grid grid-cols-3">
                <div class="col-span-2">
                  <a href="/mentor/AdamJohannsson/" title="Adam Johannsson">
                    <h3 class="title text-2xl has-text-blue font-bold">
                      TRƯƠNG QUỐC ANH
                    </h3>
                  </a>
                </div>
                <div class="sm:text-right my-4 sm:my-0">
                  <div
                    class="whitespace-nowrap inline cursor-default py-2 px-4 rounded-full text-sm cursor-pointer font-bold bg-mc-green text-white hover:text-white"
                  >
                    <i class="fa fa-star"></i>&nbsp;3 năm
                  </div>
                </div>
                <div class="sm:text-right my-4 sm:my-0"></div>
              </div>
              <span class="has-text-blue text-base mt-2 inline-block"
                >Founder
                <span class="font-bold">chuỗi cà phê Grand.P</span></span
              ><br />
              <div class="mt-2">
                <div class="star-rating-display" data-rating="5.0">
                  <span class="is-vishidden">5.0 stars</span>
                </div>
                <span class="rating-display"
                  ><b class="has-text-blue">5.0</b>&nbsp;<span
                    class="has-text-blue"
                    >(1 review)</span
                  ></span
                >
              </div>
              <hr />
              <div
                class="break-word mt-4 mb-6 max-w-screen-md text-sm leading-6"
                style="top: -15px; position: relative"
              >
                Để có được thành công hôm nay, tôi đã phải trải nghiệm rất nhiều
                vị trí trong ngành F&B để đúc kết được những bài học quý giá.
                Nếu bạn đang tìm kiếm một người mentor có thể giúp bạn tìm hiểu
                và phát triển trong giai đoạn đầu sự nghiệp, tôi sẽ không ngần
                ngại chia sẻ và cố vấn cho bạn.
              </div>
              <div class="tags">
                <a
                  href="?tagsearch=Product%20%26%20Marketing"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >F&B</a
                >
                <a
                  href="/filter/productmanagement/"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Pha chế</a
                >
                <a
                  href="/filter/fintech/"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Tài chính</a
                >
                <a
                  href="/filter/strategy/"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Quản lý
                </a>
              </div>
              <div
                class="md:grid grid-cols-2 mt-8 space-x-4 absolute bottom-0 w-full"
              >
                <div>
                  <a
                    href="
                                /mentor/AdamJohannsson/?preselect=standard"
                    class="w-full text-center blue-btn"
                    >Xem Profile</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:block lg:col-span-6">
            <div class="font-semibold has-text-blue text-sm">
              Bạn sẽ nhận được gì ?
            </div>
            <div
              class="my-5 text-gray-600 text-sm w-full divide-y divide-x-0 divide-gray-200 divide-solid border-solid border-0 border-t border-b border-gray-200"
            >
              <div class="w-full py-3">
                Chia sẻ kinh nghiệm làm việc trong ngành F&B
              </div>
              <div class="w-full py-3">
                Tâm sự câu chuyện khởi nghiệp: kinh doanh quán cafe
              </div>
              <div class="w-full py-3">
                Những điều quan trọng cần chuẩn bị trước khi bắt tay vào kinh
                doanh trong ngành F&B
              </div>
            </div>
            <a
              href="/mentor/AdamJohannsson/"
              class="w-full block text-right uppercase has-text-blue font-semibold text-xs"
            >
              Xem thêm...
            </a>
          </div>
        </div>
      </div> -->


      <!-- test loading data -->
      <div v-for="mentor in mentors" :key="mentor.id">
        <div
        class="relative box px-7 py-8 transition-all duration-150 mb-12 max-w-screen-lg mx-auto"
        style="margin-bottom: 4rem">
        <div
          class="absolute top-0 -m-4 right-12 block border-2 border-solid border-gray-200 rounded-2xl bg-white has-text-blue font-bold px-2 py-1 text-sm"
        >
         {{mentor.locationName}}
        </div>
        <div class="sm:grid grid-cols-24 sm:space-x-8">
          <div class="col-span-7 md:col-span-5 relative">
            <img
              class="relative w-full h-72 bg-center bg-cover inline-block rounded-lg overflow-hidden mb-20"
              :src= "mentor.avatar"
            />
          </div>
          <div
            class="col-span-full col-start-8 md:col-start-6 lg:col-span-13 border-0 lg:border-r border-solid border-gray-200 pr-5"
            style="position: relative"
          >
            <div class="relative h-full pb-16">
              <div class="sm:grid grid-cols-3">
                <div class="col-span-2">
                  <a href="https:localhost:8080/mentor/{{mentor.id}}" title={{mentor.name}}>
                    <h3 class="title text-2xl has-text-blue font-bold">
                      {{mentor.name}}
                    </h3>
                  </a>
                </div>
                <div class="sm:text-right my-4 sm:my-0">
                  <div
                    class="whitespace-nowrap inline cursor-default py-2 px-4 rounded-full text-sm cursor-pointer font-bold bg-mc-green text-white hover:text-white"
                  >
                    <i class="fa fa-star"></i>&nbsp;2,5 năm
                  </div>
                </div>
                <div class="sm:text-right my-4 sm:my-0"></div>
              </div>
              <span class="has-text-blue text-base mt-2 inline-block"
                >{{ mentor.currentJob }}</span
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
                {{mentor.description}}
              </div>
              <!-- <div class="tags">
                <a
                  href="?tagsearch=Engineering%20%26%20Data"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >IT</a
                >
                <a
                  href="/filter/cybersecurity/"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Developer</a
                >
                <a
                  href="/filter/vulnerabilitymanagement/"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Lập trình</a
                >
                <a
                  href="/filter/threathunting/"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Front-end</a
                >
                <a
                  href="/filter/threathunting/"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Back-end</a
                >
              </div> -->
              <div
                class="md:grid grid-cols-2 mt-8 space-x-4 absolute bottom-0 w-full"
              >
                <div>
                  <a
                    :href= "'http://localhost:8080/profile-mentor/'+mentor.id"
                    class="w-full text-center blue-btn"
                    >Xem Profile</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:block lg:col-span-6">
            <div class="font-semibold has-text-blue text-sm">
              Bạn nhận được gì?
            </div>
            <div
              class="my-5 text-gray-600 text-sm w-full divide-y divide-x-0 divide-gray-200 divide-solid border-solid border-0 border-t border-b border-gray-200"
            >
              <div class="w-full py-3">
                Chia sẻ câu chuyện trong ngành thiết kế giao diện
              </div>
              <div class="w-full py-3">
                Tips chọn đúng lĩnh vực trong ngành IT giữa vô vàn lựa chọn
              </div>
              <div class="w-full py-3">
                Những điều quan trọng cần chuẩn bị trước khi bắt tay vào ngành
                thiết kế
              </div>
            </div>
            <a
              href="/mentor/jaredcooperband/"
              class="w-full block text-right uppercase has-text-blue font-semibold text-xs"
            >
              Xem thêm...
            </a>
          </div>
        </div>
      </div>
      </div>

      <!-- <div
        class="relative box px-7 py-8 transition-all duration-150 mb-12 max-w-screen-lg mx-auto"
        style="margin-bottom: 4rem"
      >
        <div
          class="absolute top-0 -m-4 right-12 block border-2 border-solid border-gray-200 rounded-2xl bg-white has-text-blue font-bold px-2 py-1 text-sm"
        >
          TP Hồ Chí Minh
        </div>
        <div class="sm:grid grid-cols-24 sm:space-x-8">
          <div class="col-span-7 md:col-span-5 relative">
            <a
              href="/mentor/marinakrutchinsky/"
              title="Marina Krutchinsky"
              class="relative w-full h-72 bg-center bg-cover inline-block rounded-lg overflow-hidden mb-20"
              style="
                background-image: url('@/assets/images/avatar/lacosmetic.jpg');
              "
            >
              <div
                class="absolute block w-full h-full inset-x-0 bottom-0"
                style="
                  background-image: linear-gradient(
                    to top,
                    rgba(48, 65, 96, 1),
                    rgba(48, 65, 96, 0) 60%,
                    rgba(48, 65, 96, 0)
                  );
                "
              ></div>
            </a>
          </div>
          <div
            class="col-span-full col-start-8 md:col-start-6 lg:col-span-13 border-0 lg:border-r border-solid border-gray-200 pr-5"
            style="position: relative"
          >
            <div class="relative h-full pb-16">
              <div class="sm:grid grid-cols-3">
                <div class="col-span-2">
                  <a
                    href="/mentor/marinakrutchinsky/"
                    title="Marina Krutchinsky"
                  >
                    <h3 class="title text-2xl has-text-blue font-bold">
                      MAI THANH QUỲNH
                    </h3>
                  </a>
                </div>
                <div class="sm:text-right my-4 sm:my-0">
                  <a
                    href="/top/"
                    target="_blank"
                    class="whitespace-nowrap py-2 px-4 rounded-full text-sm cursor-pointer font-bold bg-mc-green text-white hover:text-white"
                    ><i class="fa fa-star"></i>&nbsp;6 năm</a
                  >
                </div>
              </div>
              <span class="has-text-blue text-base mt-2 inline-block"
                >Senior Marketing manager
                <span class="font-bold">tại La cosmetique</span></span
              ><br />
              <div class="mt-2">
                <div class="star-rating-display" data-rating="5.0">
                  <span class="is-vishidden">5.0 stars</span>
                </div>
                <span class="rating-display"
                  ><b class="has-text-blue">5.0</b>&nbsp;<span
                    class="has-text-blue"
                    >(10 reviews)</span
                  ></span
                >
              </div>
              <hr />
              <div
                class="break-word mt-4 mb-6 max-w-screen-md text-sm leading-6"
                style="top: -15px; position: relative"
              >
                Nếu đủ đam mê và nhiệt huyết với ngành Marketing, bạn sẽ nhận
                được kết quả xứng đáng với công sức và trí tuệ mà bạn bỏ ra. Mọi
                thứ không đơn giản chỉ vì tiền mà còn là sự phát triển bản thân
                của một Marketer. Bạn phải tiếp tục học hỏi và cập nhật mọi thứ
                liên quan đến thị trường. Tôi sẽ rất hoan nghênh nếu bạn sẵn
                sàng lắng nghe.
              </div>
              <div class="tags">
                <a
                  href="?tagsearch=UX%20%26%20Design"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Marketing</a
                >
                <a
                  href="/filter/uxdesign/"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Quản lý</a
                >
                <a
                  href="/filter/productdesign/"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Mỹ phẩm</a
                >
                <a
                  href="/filter/uxcareergrowth/"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Thương hiệu nước ngoài</a
                >
              </div>
              <div
                class="md:grid grid-cols-2 mt-8 space-x-4 absolute bottom-0 w-full"
              >
                <div>
                  <a
                    href="










                                /mentor/marinakrutchinsky/?preselect=lite"
                    class="w-full text-center blue-btn"
                    >Xem Profile</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:block lg:col-span-6">
            <div class="font-semibold has-text-blue text-sm">
              Bạn sẽ nhận được gì?
            </div>
            <div
              class="my-5 text-gray-600 text-sm w-full divide-y divide-x-0 divide-gray-200 divide-solid border-solid border-0 border-t border-b border-gray-200"
            >
              <div class="w-full py-3">Tâm sự trong ngành Marketing</div>
              <div class="w-full py-3">
                Làm sao để một Marketer có thể “giữ lửa”
              </div>

              <div class="w-full py-3">
                Cần chuẩn bị gì để bước chân vào ngành
              </div>
            </div>
            <a
              href="/mentor/marinakrutchinsky/"
              class="w-full block text-right uppercase has-text-blue font-semibold text-xs"
            >
              Xem thêm...
            </a>
          </div>
        </div>
      </div> -->
      <!-- <div
        class="relative box px-7 py-8 transition-all duration-150 mb-12 max-w-screen-lg mx-auto"
        style="margin-bottom: 4rem"
      >
        <div
          class="absolute top-0 -m-4 right-12 block border-2 border-solid border-gray-200 rounded-2xl bg-white has-text-blue font-bold px-2 py-1 text-sm"
        >
          Đà Nẵng
        </div>
        <div class="sm:grid grid-cols-24 sm:space-x-8">
          <div class="col-span-7 md:col-span-5 relative">
            <a
              href="/mentor/DominicMonn/"
              title="Dominic Monn"
              class="relative w-full h-72 bg-center bg-cover inline-block rounded-lg overflow-hidden mb-20"
              style="background-image: url('@/assets/images/avatar/vanii.png')"
            >
              <div
                class="absolute block w-full h-full inset-x-0 bottom-0"
                style="
                  background-image: linear-gradient(
                    to top,
                    rgba(48, 65, 96, 1),
                    rgba(48, 65, 96, 0) 60%,
                    rgba(48, 65, 96, 0)
                  );
                "
              ></div>
            </a>
          </div>
          <div
            class="col-span-full col-start-8 md:col-start-6 lg:col-span-13 border-0 lg:border-r border-solid border-gray-200 pr-5"
            style="position: relative"
          >
            <div class="relative h-full pb-16">
              <div class="sm:grid grid-cols-3">
                <div class="col-span-2">
                  <a href="/mentor/DominicMonn/" title="Dominic Monn">
                    <h3 class="title text-2xl has-text-blue font-bold">
                      HUỲNH DIỆU MINH
                    </h3>
                  </a>
                </div>
                <div class="sm:text-right my-4 sm:my-0">
                  <a
                    href="/top/"
                    target="_blank"
                    class="whitespace-nowrap py-2 px-4 rounded-full text-sm cursor-pointer font-bold bg-mc-green text-white hover:text-white"
                    ><i class="fa fa-star"></i>&nbsp;10 năm</a
                  >
                </div>
              </div>
              <span class="has-text-blue text-base mt-2 inline-block"
                >Founder tại
                <span class="font-bold">tiệm bánh Vanii</span></span
              ><br />
              <div class="mt-2">
                <div class="star-rating-display" data-rating="5.0">
                  <span class="is-vishidden">5.0 stars</span>
                </div>
                <span class="rating-display"
                  ><b class="has-text-blue">5.0</b>&nbsp;<span
                    class="has-text-blue"
                    >(30 reviews)</span
                  ></span
                >
              </div>
              <hr />
              <div
                class="break-word mt-4 mb-6 max-w-screen-md text-sm leading-6"
                style="top: -15px; position: relative"
              >
                Nếu bạn thực sự tìm thấy được đam mê thì mỗi ngày làm việc trôi
                qua đều là những giờ phút đáng quý. Tôi may mắn khi đã tìm ra
                đam mê và gắn bó công việc mình yêu thích trong suốt một khoảng
                thời gian dài. Làm bánh và kinh doanh chúng thực ra không dễ,
                nhưng nếu muốn tìm hiểu kĩ hơn, hãy liên lạc với Vanii và tôi sẽ
                là người dẫn dắt các bạn
              </div>
              <div class="tags">
                <a
                  href="?tagsearch=Product%20%26%20Marketing"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >F&amp;B</a
                >
                <a
                  href="/filter/product/"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Làm bánh</a
                >
                <a
                  href="/filter/marketplaces/"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Kinh doanh</a
                >
                <a
                  href="/filter/founder/"
                  class="tag-sm mb-2 mr-2 font-semibold"
                  >Quản lý</a
                >
              </div>
              <div
                class="md:grid grid-cols-2 mt-8 space-x-4 absolute bottom-0 w-full"
              >
                <div>
                  <a
                    href="










                                /mentor/DominicMonn/?preselect=lite"
                    class="w-full text-center blue-btn"
                    >Xem Profile</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="hidden lg:block lg:col-span-6">
            <div class="font-semibold has-text-blue text-sm">
              Bạn sẽ nhận được gì?
            </div>
            <div
              class="my-5 text-gray-600 text-sm w-full divide-y divide-x-0 divide-gray-200 divide-solid border-solid border-0 border-t border-b border-gray-200"
            >
              <div class="w-full py-3">
                Hiểu đúng về làm bánh và kinh doanh hàng bánh
              </div>
              <div class="w-full py-3">Cách vận hành kinh doanh tiệm bánh</div>
              <div class="w-full py-3">Một ngày của một thợ làm bánh</div>
            </div>
            <a
              href="/mentor/DominicMonn/"
              class="w-full block text-right uppercase has-text-blue font-semibold text-xs"
            >
              Xem thêm...
            </a>
          </div>
        </div>
      </div> -->

      <!-- <nav
        class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 mt-8 max-w-screen-lg mx-auto"
      >
        <div class="-mt-px w-0 flex-1 flex"></div>
        <div class="hidden md:-mt-px md:flex">
          <a
            class="border-0 border-solid border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium border-indigo-500 text-indigo-600"
            aria-label="Page 1"
            aria-current="page"
            href="?search=&amp;sort=&amp;tagsearch=&amp;price__gt=0&amp;price__lt=800&amp;tz=&amp;type=&amp;page=1"
            >1</a
          >
          <a
            class="border-0 border-solid border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            aria-label="Page 2"
            aria-current="page"
            href="?search=&amp;sort=&amp;tagsearch=&amp;price__gt=0&amp;price__lt=800&amp;tz=&amp;type=&amp;page=2"
            >2</a
          >
          <a
            class="border-0 border-solid border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            aria-label="Page 3"
            aria-current="page"
            href="?search=&amp;sort=&amp;tagsearch=&amp;price__gt=0&amp;price__lt=800&amp;tz=&amp;type=&amp;page=3"
            >3</a
          >
        </div>
        <div class="-mt-px w-0 flex-1 flex justify-end">
          <a
            href="?search=&amp;sort=&amp;tagsearch=&amp;price__gt=0&amp;price__lt=800&amp;tz=&amp;type=&amp;page=2"
            class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          >
            Tiếp theo

            <svg
              class="ml-3 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </nav> -->
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
import HeaderBar from '@/components/HeaderBar.vue';
import {getMentors} from '../services/MentorService.js';
export default({
	components :{
		HeaderBar: HeaderBar
	},
  data(){
		return{
          mentors:[],
		}
	},
  mounted() {
    getMentors()
      .then(res => {
        if (res.status === 200)
        {
          this.mentors = res.data
          console.log(this.mentors)
        }
      })
    .catch(e => {
        console.log(e)
        }
    ); }
})
</script>
