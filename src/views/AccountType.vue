<template>
  <header-bar></header-bar>
  <body>
    <div class="second-body" :style="{ backgroundImage: `url(${require('@/assets/images/bg-img2.png')})` }">
    <div>
      <h3 style="font-weight: bold">Chọn loại tài khoản của bạn</h3>
    </div>
    <br />
    <div class="account-type">
      <div class="main">
        <div class="khoi">
          <img src="@/assets/images/account-type/mentor.png" />
          <router-link to="/info-mentor">Mentor</router-link>
        </div>
      </div>
      <div class="main">
        <div class="khoi">
          <img src="@/assets/images/account-type/mentee.png" />
          <a href="">Mentee</a>
        </div>
      </div>
    </div>
    <div class="form-group" style="padding-top: 115px">
    </div>
  </div>
  </body>
  
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  border: none;
}

.main {
  /* width: 1110px; */
  margin: auto;
  cursor: pointer;
}

.khoi {
  width: 270px;
  /* height: 320px; */
  margin-right: 10px;
  background-color: #ffffff;
  position: relative;
  border-radius: 10px 10px 0px 0px;
}

.khoi img {
  width: 220px;
  height: 200px;
  padding: 10px 0px 10px 50px;
  z-index: 1;
}

.khoi a {
  width: 270px;
  display: block;
  height: 90px;
  padding-top: 25px;
  text-decoration: none;
  background-color: white;
  color: black;
  text-align: center;
  font-size: 30px;
  position: absolute;
  /* bottom: 0px; */
  /* left: 0px; */
  z-index: 2;
  line-height: 1;
  font-size: 27px;
  font-weight: bold;
  font-family: "Quicksand", sans-serif;
  border-radius: 0px 0px 10px 10px;
}

.khoi p {
  width: 150px;
  height: 40px;
  font-size: 30px;
  border-radius: 10px;

  background-color: orange;
  text-align: center;
  position: absolute;
  bottom: 120px;
  left: 56px;
  color: white;
  z-index: 3;
}

.second-body {
  padding-top: 40px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  top: 3.5rem;
  box-sizing: border-box;
  width: 100%;
  min-height: calc(100vh - 3.5rem);
  z-index: 90;
  flex-direction: column;
  background-color: transparent;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

h3 {
  font-family: "Quicksand", sans-serif;
  color: rgb(0, 0, 0);
}

.main:hover .khoi {
  background-color: rgba(208, 45, 236, 0.625);
  transition: 0.5s;
}

.main:hover a {
  background-color: rgba(208, 45, 236, 0.625);
  color: white;
  transition: 0.5s;
}
.users::hover a {
  color: blue;
}

.account-type {
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
}
.form-group {
  color: black;
  font-size: 24px;
}

@media screen and (min-width: 768px) and (max-width: 1400px) {
  .khoi {
    width: 190px;
  }

  .khoi img {
    width: 180px;
    padding: 10px 0px 10px 10px;
  }

  .khoi a {
    width: 190px;
  }
}
</style>


<script>
import HeaderBar from '@/components/HeaderBar.vue';

export default({
	components :{
		HeaderBar: HeaderBar
	}
})
</script>