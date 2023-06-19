<template>
	<div class="page-wrapper">

<!-- Preloader -->
<div class="preloader"></div>

<!-- Main Header-->
<HeaderBar></HeaderBar>
<!-- End Main Header -->
<!-- Slider Section Two -->


<div class="section1">
	<div class="pattern-layer" style="background-image:url(../assets/images/main-slider/pattern-layer-1.png)"></div>
	<div class="pattern-layer-two" style="background-image:url(../assets/images/main-slider/pattern-layer-2.png)"></div>

	<div class="slide" style="padding-top:100px;">
		<div class="auto-container">
			<div class="row clearfix">

				<!-- Content Column -->
				<div class="content-column col-lg-6 col-md-12 col-sm-12" style="top:100px; font-size:bold" >
					<div class="inner-column">
						<h1>Đến Mentoré,</h1>
						<h1>tìm kiếm Mentor đồng hành cùng bạn</h1>
						<div class="text" style="font-weight:bold; font-size:23px; font-family:Quicksand; line-height: 1.8em">Mentoré khát khao được đồng hành cùng bạn trẻ Việt trong hành trình tìm ra ngành học và công việc trong mơ phù hợp với bạn</div>
						<div class="btns-box" style="margin-top:15px;">
							<a href="#" class="theme-btn btn-style-four" style="border-radius:15px;"><span class="txt">
									Tìm hiểu thêm</span></a>
						
						</div>
					</div>
				</div>

				<!-- Image Column -->
				<div class="image-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="image">
							<img :src="require('../assets/images/main-slider/get-started.png')" class="get-started"/>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</div>

	<!--Section 2  -->



<div class="section2">
  <div class="row" style="padding-top:35px;">
    <h3 style="position:absolute; padding-top:20px;">Bạn có đang ...</h3>
  <br/>
  <div class="column">
    <img :src= "require('@/assets/images/page2_1.png')">
    <p style="font-weight:bold; text-align: center; font-size:18px;">Mông lung</p>
    <div style="padding:0px 10px 0px 10px; font-size:16px; font-weight:580; color:black">
      <p style="text-align:center;">trong việc lựa chọn ngành học sẽ theo đuổi trong tương lai?</p>
    </div>
  
  
  </div>
  <div class="column">
	<img :src="require('@/assets/images/page2_2.png')"/>
    <p style="font-weight:bold; text-align: center; font-size:18px;">Muốn nhảy việc</p>
    <div style="padding:0px 10px 0px 10px; font-size:16px; font-weight:580; color:black">
    <p  style="text-align:center;">nhưng chưa đủ sự am hiểu với vị trí công việc ở lĩnh vực mới sợ rủi ro?</p>
    </div>
   
  </div>
  <div class="column">
    <img :src="require('../assets/images/page2_3.png')">
    <p style="font-weight:bold; text-align: center; font-size:18px;">Muốn học nghề thợ</p>
    <div style="padding:0px 10px 0px 10px; font-size:16px; font-weight:580; color:black">
    <p  style="text-align:center;">nhưng chưa có hình dung cụ thể về phạm vi nghiệp vụ của công việc?</p>
    </div>

  </div>
  <div class="column">
    <img :src="require('@/assets/images/page2_4.png')">
    <p style="font-weight:bold; text-align: center; font-size:18px;">Hứng thú</p>
    <div style="padding:0px 10px 0px 10px; font-size:16px; font-weight:580; color:black">
      <p  style="text-align:center;">với một lĩnh vực, vị trí công việc nhưng chưa dám thử vì e ngại không phù hợp?</p>
    </div>
  
  </div>
  
  </div>
  <div class="content-word" style="padding-top:50px;">
  <h3>Khó khăn của bạn, đã có Mentoré lo!</h3>
  </div>
</div>

<!-- Section 3 -->
<div class="section3" data-aos="zoom-in-left">
  <div class="row">
      <h3 style="position:absolute; top:10px">Triết lý hướng nghiệp của Mentoré</h3>
  <br/>
  <div class="column">
    <img :src="require('@/assets/images/sec3-1.png')">
    <p style="font-weight:bold; text-align: center; font-size:18px;">Học đi đôi với hành
    <br> (Hands-on Learning)</p>
    <p style="text-align:center; font-size:15px;">Một khi bắt tay vào làm thử một việc, mọi sự mơ hồ về nghề nghiệp đó sẽ tan biến. Cách để hiểu rõ nhất về một công việc là thực tế trải nghiệm nó.</p>
    <div class="form-group text-center" style="top:81px; position:relative">
    <button type="button" class="theme-btn btn-style-three"><span class="txt">Tìm hiểu thêm<i
          class="fa fa-angle-right"></i></span></button>
    </div>
  
  </div>
  <div class="column">
    <img :src="require('../assets/images/sec3-2.jpg')">
    <p style="font-weight:bold; text-align: center; font-size:18px;">Tôi quan sát, tôi lắng nghe <br> (Observational Learning)</p>
    <p  style="text-align:center; font-size:15px;">Mọi khía cạnh công việc, từng đầu mục công việc, trách nhiệm, niềm vui và những thách thức của nghề.</p>
    <div class="form-group text-center" style="top:90px; position:relative">
    <button type="button" class="theme-btn btn-style-three"><span class="txt">Tìm hiểu thêm<i
          class="fa fa-angle-right"></i></span></button>
    </div>
  </div>
  <div class="column">
    <img :src="require('../assets/images/sec3-3.jpg')">
      <p style="font-weight:bold; text-align: center; font-size:18px;">Tuổi trẻ là những phép thử
    <br>(Trial and Error)</p>
     <p  style="text-align:center;font-size:15px;">Thử, thử nữa, thử mãi!<br>Mentoré khuyến khích Mentee đa dạng văn hóa trải nghiệm ở nhiều lĩnh vực mà các bạn trẻ quan tâm. Nếu bạn đang cân nhắc 10 ngành nghề thì hãy thử kết nối đến 10 Mentor trong lĩnh vực tương ứng, cho đến khi tìm ra đam mê đích thực.</p>
      <div class="form-group text-center" style="top:28px; position:relative">
    <button type="button" class="theme-btn btn-style-three" ><span class="txt">Tìm hiểu thêm<i
          class="fa fa-angle-right"></i></span></button>
    </div>
  </div>
  </div>
 
</div>


<!-- section 4 -->
<div class="section4" data-aos="fade-up"
data-aos-duration="2000">
<div class="row" style="padding-top:30px">
    <div style="text-align:center">
      <h3>MENTORÉ CUNG CẤP ĐA DẠNG SẢN PHẨM, DỊCH VỤ HƯỚNG NGHIỆP ĐẾN <br> THẾ HỆ TRẺ VIỆT NAM</h3>
    </div>

<div class="column">
  <img :src="require('../assets/images/workshop.jpg')">
  <p style="font-weight:bold; text-align: center; font-size:18px;">WORKSHOP
  <br>"Bắt tay vào làm"</p>
  <p style="text-align:justify; font-size:16px;">Workshop được tổ chức dưới hình thức offline, số lượng nhỏ. Mentee sẽ xắn tay vào thực hiện một nhiệm vụ công việc dưới sự hướng dẫn tại chỗ của Mentor.</p>
</div>
<div class="column">
  <img :src="require('../assets/images/sohoa.jpg')">
  <p style="font-weight:bold; text-align: center; font-size:18px;">SẢN PHẨM SỐ HÓA</p>
  <p  style="text-align:justify;top:33px; position:relative; font-size:16px">Mentor sáng tạo podcast hoặc video hướng nghiệp, mang tính chia sẻ góc nhìn của người trong nghề.</p>
</div>
<div class="column">
  <img :src="require('../assets/images/oneday.jpg')">
    <p style="font-weight:bold; text-align: center; font-size:18px;">WORKSHOP
  <br>"Một ngày cùng Mentor"</p>
   <p  style="text-align:justify;font-size:16px;">Mentee sẽ theo chân Mentor đến chỗ làm thực tế. Tận mắt quan sát, tận tai lắng nghe, Mentee sẽ hình dung rõ nét về công việc hằng ngày.</p>
</div>
<div class="column">
  <img :src="require('../assets/images/motmot.jpg')">
    <p style="font-weight:bold; text-align: center; font-size:18px;">KẾT NỐI 1-1</p>
   <p  style="text-align:justify;top:33px; position:relative;font-size:16px;">Mentee được cung cấp dịch vụ cá biệt hóa thông qua gọi điện, nhắn tin. Sự đồng hành giữa mentor-mentee phát triển lâu dài, bền vững.</p>
</div>
  </div>

  <!-- section 4- 2 -->
<div class="row" style="height:250px;top:10px;">
<div class="column section4-2">
<p style="font-weight:bold; text-align: center; font-size:25px;">250+ mentor</p>
</div>
<div class="column section4-2">
  <p style="font-weight:bold; text-align: center; font-size:25px;">50+ workshop</p>
  <p  style="text-align:center;top:-20px; position:relative">mỗi tháng</p>

</div>
<div class="column section4-2">
  <p style="font-weight:bold; text-align: center; font-size:25px;">50+ lĩnh vực</p>
</div>
</div>
</div>

<!-- section 5 -->
<div id="section5">
<div class="main-list">
  <div class="main-list-bg"></div>
  <div class="bg-text" style="padding-top:10px;">
    <div class="content-right">
      <p class="text-sec5">Chọn lĩnh vực bạn <br> quan tâm để tìm kiếm Mentor.</p>
    </div>
    <div class="content-left" style="top:1130px;">
      <ul>
        <li>Kinh doanh</li>
        <li>May mặc & Thủ công nghiệp</li>
        <li>Sức khỏe & Làm đẹp</li>
        <li>Tài chính</li>
        <li>Nhân sự</li>
        <li>Xuất nhập khẩu & Logistics</li>
        <li>Thiết kế</li>
        <li>Công nghệ & Lập trình</li>
        <li>Bất động sản</li>
        <li>Tài chính</li>
        <li>Nhân sự</li>
        <li>Khác</li>
      </ul>
    </div>

  </div>

</div>
</div>

<!-- section 6 -->
<div class="section6">
<p style="font-size:25px;font-weight: bold; color:rgb(210, 74, 220)">ĐỂ MỌI LỰA CHỌN NGHỀ NGHIỆP LÀ TRÊN CẢ CHÍNH XÁC</p>
<p style="font-size:52px;font-weight:900">ĐỒNG HÀNH CÙNG MENTOR?</p>
<p style="font-size:20px">Đăng Ký & Kết Nối Cùng Mentor</p>
<div class="btns-box" style="margin-top:55px;">
  <router-link to="/register" class="theme-btn btn-style-four">Đăng ký ngay</router-link>
  <!-- <a href="account_type.html" class="theme-btn btn-style-four"><span class="txt">
      Đăng ký ngay ></span></a> -->

</div>
</div>


<div class="section7">
<div class="row">
  
    <div class="col-sm-5 find-mentor" :style="{ backgroundImage: `url(${require('@/assets/images/find-mentor.jpg')})` }">
      <router-link to="/mentors"><p>Tìm kiếm Mentor</p></router-link>
    </div>


  <div class="col-sm-0" style="width:20px;"></div>
  <div class="col-sm-5 be-mentor" :style="{ backgroundImage: `url(${require('@/assets/images/be-mentor-2.jpg')})` }">
    <router-link to="/register"><p>Đăng ký Mentor</p></router-link>
  </div>
</div>
</div>

</div>


<footer class="footer-distributed">
<div class="footer-left" style="margin-left:50px;">

  <div class="logo">
    <img :src="require('../assets/images/logo-official.png')">
  </div>

  <p class="footer-links">
    <a href="#">Trang chủ</a>
    ·
    <a href="#">Bài viết</a>
    ·
    <a href="#">Thông tin</a>
    ·
    <a href="#">Liên hệ</a>
  </p>

  <p class="footer-company-name">Mentoré &copy; 2022</p>
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p> Đà Nẵng, Việt Nam</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>Phone Number</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="/cdn-cgi/l/email-protection#3c4f494c4c534e487c5f53514c5d5245125f5351"><span class="__cf_email__" data-cfemail="13606663637c616753707c7e63727d6a3d707c7e">[email&#160;protected]</span></a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>Kết nối với Mentoré</span>
    <!-- Đoạn text -->
  </p>

  <div class="footer-icons">

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-github"></i></a>

  </div>

</div>

</footer>
</template>

<style scoped>
  @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css");
  @import url("https://fonts.googleapis.com/css?family=Cookie");
  @import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Quicksand&display=swap");

  .content-column .inner-column h1{
		color: rgb(113,63,193);
		color: linear-gradient(0deg, rgba(113,63,193,1) 0%, rgba(112,67,207,1) 3%, rgba(103,71,198,1) 15%, rgba(131,71,203,1) 27%, rgba(166,88,212,1) 44%, rgba(188,96,221,1) 58%, rgba(217,110,212,1) 80%, rgba(228,120,203,1) 94%);
	}

	.slider-section-two .content-column .text {
    	color: #ffffff;
	}

	.content-column .inner-column .text{
		color: rgb(113,63,193);
	}
	.section2 .column{
		margin: 10px;
		cursor: pointer;
		border: 1px solid;
		width:220px;
		height:300px;
		/* display:flex; */
		position: relative;
		background:white;
		border-radius: 10px;
		border:1px solid rgba(129,162,178,.25);
		margin-top:5%;
		transition:0.5s;
		margin-top:100px;
	
	}
	.section3 .column{
		margin: 10px;
		cursor: pointer;
		border: 1px solid;
		height:532px;
		/* display:flex; */
		position: relative;
		border-radius: 40px 0px 40px 0px;
		background-image: url('../assets/images/bg-img2.png');
		/* Full height */
		/* Center and scale the image nicely */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		color:white;
		border:1px solid rgba(129,162,178,.25);
		margin-top:5%;
		transition:0.5s;
	}
	.section4 .column{
		margin: 10px;
		width:300px;
		position: relative;
		color:white;
		margin-top:7%;
		transition:0.5s;
		margin-right:20px;
	}
	.section2 .column:hover{
		position: relative; 
        top: -15px;
	}

	.section3 .column:hover{
		box-shadow: 0 30px 60px -30px rgb(0 0 0 / 70%), 0 50px 100px -20px rgb(40 50 90 / 45%);
		text-decoration: none!important;
	
	}
	.row{
		justify-content:center;
	}
	.section2{
		/* background-color: rgb(113,63,193);
		background-color: linear-gradient(0deg, rgba(113,63,193,1) 0%, rgba(112,67,207,1) 3%, rgba(103,71,198,1) 15%, rgba(131,71,203,1) 27%, rgba(166,88,212,1) 44%, rgba(188,96,221,1) 58%, rgba(217,110,212,1) 80%, rgba(228,120,203,1) 94%); */
		background-image: url('../assets/images/bg-img2.png');
		/* Full height */
		height: 100%;

		/* Center and scale the image nicely */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 600px;
		
	}

	.section3{
		margin-top:130px;
		background-color: rgb(255, 255, 255);
		height:450px;
	}
	.section4{
		margin-top:350px;
		background-image: url('../assets/images/bg-img2.png');
		/* Full height */
		height: 100%;
		/* Center and scale the image nicely */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		/* height:450px; */
	}

	.section6{ 
		font-family: 'Alfa Slab One', cursive;
		font-family: 'Quicksand', sans-serif;
		margin-top:300px;
		text-align:center;
	}

	.section6 .btns-box a{
		border-radius: 50px;
	}

	.btn-style-four
	{
	
		background-image: url('../assets/images/bg-img2.png');	
		height: 100%;
		/* Center and scale the image nicely */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		transition: all 500ms ease;
	}
	.btn-style-four:hover {
		
		color:black;
	}

	.section6 .btns-box .btn-style-four:hover
	{ 
		text-decoration: none;
		position: relative;
		top:-3px;	
		color: white;
	}
	

	.section6 .btns-box  .btn-style-four:before{
		text-decoration: none;
		background-image: url('../assets/images/bg-img2.png');	
		height: 100%;
		/* Center and scale the image nicely */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		transition: all 1s ease; 
}

.section7{
	margin-top:80px;
	background-color:#ded6d6;
}
.section7 .row{
	padding-top:35px;
	padding-bottom:35px;
	justify-content:center;
	height:500px;
}


.section7 .row .col-sm-5{
		flex: 0 0 47.666667%;
		max-width: 47.666667%;
		cursor:pointer;
		height:100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		transition: all 1s ease; 
		text-align: center;
}

.section7 .row .col-sm-5 p{
		padding-top:180px;
		color:white;
		font-weight:bold;
		font-size:28px;
		font-family: 'Quicksand', sans-serif;
}



.section7 .row .col-sm-5:hover{
	transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
	.section4 .row{
		z-index: 9999;
	}

	.row .column img{
		display: block;
		margin-left: auto;
		margin-right: auto;
		width:118px;
		height:130px;
	}
	.section3 .row .column img{
		border-radius: 40px 0 0 0;
		position: relative;
		top:-5px;
		width:60%;
		height:180px;
	}
	.section4 .row .column img{
		/* border-radius: 40px 0 0 0; */
		position: relative;
		top:-5px;
		width:101%;
		height:250px;
	}
	.row .column p{
		font-family: 'Quicksand', sans-serif;
	}
	.content-word{
		text-align:center;
	}
	.section2 .content-word h3{
		color:white;
		font-family: 'Quicksand', sans-serif;
		font-size:25px;
		font-weight:bold;
	}
	.section4 .row  h3{
		color:rgb(255, 255, 255);
		font-family: 'Quicksand', sans-serif;
		font-size:25px;
		font-weight:bold;
	}
	.section3  h3{
		color:rgb(215 69 226);
		font-family: 'Quicksand', sans-serif;
		font-size:25px;
		font-weight:bold;
	}
	.section2 h3{
		color:white;
		font-family: 'Quicksand', sans-serif;
		font-size:25px;
		font-weight:bold;
	}
	

.btn-style-three {
	background-color: #ffffff;
	color:black;
}

.section4  .section4-2{
	background-color: #00000047;
	 height:100px;
	 padding-top:15px;
}


.main-list-bg{
	background-image: url('../assets/images/main-list.jpg');
	
	height:650px;
		/* Center and scale the image nicely */

		 /* Add the blur effect */
		 /* filter: blur(2px);
  -webkit-filter: blur(2px); */

 
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
}
.bg-text{
		position: absolute; z-index:2; transform: translate(-50%, -50%); top: 50%;
		left: 50%;width: 100%;
		text-align: left;
}
.main-list{
	margin-top:150px;
	justify-content:center;
	padding-top:50px;
	color:rgb(255, 255, 255);
	font-family: 'Quicksand', sans-serif;
	font-weight: bold;
}
.main-list .content-right{
  position: relative;
  padding-top:700px;
padding-left:225px;
float:left;
width:60%;
font-size:40px;
	
}
.main-list .content-left{
  position: relative;
	font-size:22px;
	float:left;
	align-items: left;
	width:40%;
	padding-left:-20px;
}

.content-left li{
	width:fit-content;
    display:block;
    margin-bottom: 10px;
	padding-bottom:10px;
    cursor: pointer;
	position: relative;
	font-size:32px;
}

.content-left li:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 4px;
  bottom: 0;
  left: 0;
  background-color: #a826e4;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.content-left li:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.section4 .row h3{
	position:absolute; 
  padding-left:495px; 
  padding-top:10px;
}

.text-sec5{
	left:246px;
	top:1150px;
	position:absolute;
}

.get-started{
	height:600px; min-width:800px;
}

/* tablet */
@media only screen and (max-width:1300px) {

	
.get-started{
	 min-width:400px;
}

	.section4 .row h3{
	padding-left:0px;
	position:relative;
	}

	.section4 .column{
		margin-left:9%;
	
	}
	.section4 .row{
		margin-right:45px;
	
	}

	.section4 .row .section4-2{
		margin-left: 4%;
   	 	width: 27%;
		right:-23px;
	}

	.footer-distributed .footer-right {
    width: 18%;
}

.text-sec5{
	left:10px;
}


.content-left li{
	line-height: 0.95em;
}

.content-left ul{
	margin-top:50px;
}

.slide
{
	margin-top:100px;
}
}
</style>

<script>
import HeaderBar from '@/components/HeaderBar.vue';


export default({
	components :{
		HeaderBar: HeaderBar
	},
	methods:{
		getImage(path) {
      		return require(path);
    },	
	}


})


</script>