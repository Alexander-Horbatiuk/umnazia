<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    window.addEventListener("beforeunload", () => {
      localStorage.removeItem("b_one");
      localStorage.removeItem("b_two");
      localStorage.removeItem("b_three");
      localStorage.removeItem("b_four");
      localStorage.removeItem("b_five");
      localStorage.removeItem("b_six");
      localStorage.removeItem("b_seven");
      localStorage.removeItem("b_eight");
      localStorage.removeItem("b_nine");
      localStorage.removeItem("b_ten");
      localStorage.removeItem("b_eleven");
      localStorage.removeItem("b_twelve");
      localStorage.removeItem("b_thirteen");
      localStorage.removeItem("b_fourteen");
      localStorage.removeItem("b_fifteen");
      localStorage.removeItem("b_sixteen");
      localStorage.removeItem("b_seventeen");
      localStorage.removeItem("b_eighteen");
      localStorage.removeItem("b_nineteen");
      localStorage.removeItem("b_twenty");
      localStorage.removeItem("b_twenty_one");
      localStorage.removeItem("b_twenty_two");
      localStorage.removeItem("b_twenty_three");
      localStorage.removeItem("b_twenty_four");
    });
  }
};
</script>

<style src="./assets/styles/reset.css" lang="css"></style>
<style>
.sub_age_one,
.sub_age_two {
  color: #efe134;
}

.gallery_img_small {
  object-fit: cover;
  min-width: 255px;
  min-height: 250px;
}

.gallery_img_long {
  min-width: 255px;
  min-height: 530px;
  object-fit: cover;
}

.training_format_submit_orange_btn {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 5px 0 0 0;
  background: url(./assets/img/img_png/btn_orange.png) no-repeat top right;
  background-size: 100%;
  width: 227px;
  height: 70.17px;
  border: none;
  text-align: center;
  font-size: 16px;
  color: white;
  font-style: normal;
  font-weight: bold;
  cursor: pointer;
}

.opened-card {
  height: 100%;
  border-radius: 20px !important;
  padding-top: 15% !important;
}

.wraper_modal_form {
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(20, 33, 66, 0.5);
}

.wrap_form {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index: 101;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.head_form {
  font-family: "EuropeC_700", sans-serif;
  text-align: center;
  margin: 0 0 20px 0;
}

.name_form,
.number_form {
  padding: 0 0 0 30px;
  font-size: 18px;
  width: 282px;
  min-height: 60px;
  display: flex;
  background: #ffffff;
  border: 1px solid #aeaeae;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0 0 20px 0;
}

.bt_modal_form {
  font-family: "EuropeC_700", sans-serif;
  box-sizing: border-box;
  font-size: 16px;
  color: #142142;
  background: url(./assets/img/img_png/btn_yellow.png) right top / 100%
    no-repeat;
  border-style: none;
  max-width: 227px;
  width: 100%;
  height: 70px;
  cursor: pointer;
  border-color: initial;
  border-image: initial;
}

.bt_close {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0px;
  font-size: 20px;
  color: #aeaeae;
  transform: rotate(45deg);

  position: absolute;
  top: 11px;
  right: 11px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: #ffffff;
  border-radius: 50%;
  border: 1px solid #aeaeae;
}

.bt_close:hover {
  color: black;
  border: 1px solid black;
}
</style>

<style>
@media screen and (max-width: 1210px) {
  .mobile_menu_button {
    content: " ";
    background-image: url(./assets/img/logo/menu_tablet.png);
    width: 80px;
    height: 67px;
    background-repeat: no-repeat;
    position: fixed;
    top: 9px;
    right: 0px;
    cursor: pointer;
    z-index: 200;
  }

  .close_mobile_menu {
    content: " ";
    background: url(./assets/img/img_png/bt_for_mobile_menu.png) no-repeat;
    background-size: 100%;
    width: 75px;
    height: 75px;
    position: fixed;
    top: 0;
    right: 0;
    cursor: pointer;
  }
}

.mobile_menu {
  padding: 40px 20px 40px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  top: 80px;
  right: 0;
  width: 341px;
  height: 517px;
  position: fixed;
  background: #ffffff;
  border-radius: 10px 0px 0px 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.mobile_menu::after {
  content: " ";
  width: 128px;
  height: 240px;
  background: url(./assets/img/img_png/teacher_mobile_menu.png) no-repeat;
  background-size: 100%;
  position: absolute;
  top: 138px;
  left: 24px;
}

.mobile_menu::before {
  content: " ";
  width: 99px;
  height: 109px;
  background: url(./assets/img/img_png/bg_element_mobile_menu.png) no-repeat;
  background-size: 100%;
  position: absolute;
  top: 38px;
  left: 24px;
}

.el_menu_modal {
  color: #142142;
  text-decoration: none;
  font-size: 18px;
  font-family: "EuropeC_700", sans-serif;
}

.wrap_mobile_menu {
  width: 100%;
  height: 15000%;
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(20, 33, 66, 0.5);
}

@media screen and (max-width: 750px) {
  .mobile_menu {
    width: 300px;
    height: 480px;
  }

  .el_menu_modal {
    font-size: 15px;
  }
}

.social_wrapper::before {
  content: " ";
  width: 90px;
  height: 100px;
  background: url(./assets/img/img_png/bg_element_mobile_menu.png) no-repeat;
  background-size: 100%;
  position: absolute;
  top: -68px;
  left: 110px;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

.social_wrapper {
  max-width: 300px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}

@media screen and (max-width: 750px) {
  .head_social_wrapper {
    display: block;
  }

  .social_wrapper {
    max-width: 250px;
  }
}

.wrap_gallery {
  box-sizing: border-box;
  max-width: 1920px;
  min-height: 1030px;
  width: 100%;
  background-image: url(./assets/img/background/bg_vectot_pattern.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 347px 0 100px 0;
}

.bg_wrap_gallery {
  display: none;
}

.sub_wrap_gallery {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sub_wrap_gallery::after {
  content: " ";
  max-width: 210px;
  width: 100%;
  height: 200px;
  background-image: url(./assets/img/background/bg_elem_books.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: -180px;
  left: 0;
}

.gallery_box {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1110px;
  border-radius: 20px;
  overflow: hidden;
}

/* __________________________BTN__GALLERY__SLIDE__________ */
.box_for_click {
  position: relative;
}

.gallery_arrow_left {
  position: absolute;
  left: -70px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  fill: #fff;
}

.gallery_arrow_right {
  position: absolute;
  right: -70px;
  top: 50%;
  transform: translateY(-50%);
  transform: rotate(-60deg);
  cursor: pointer;
  fill: #fff;
}

.gallery_arrow_left:hover,
.gallery_arrow_right:hover {
  fill: #1ba6b2;
}

.gallery_content_small {
  margin: 0 0 30px 0;
}
.gallery_content_small:last-child {
  margin: 0;
}
/* ____________________________размеры картинок_________ */
.gallery_content_small {
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 255px;
  height: 250px;
  overflow: hidden;
}
.gallery_content_long {
  width: 255px;
  height: 530px;
  overflow: hidden;
}

/* ___________________________________________________________________ */
@media screen and (max-width: 1500px) {
  .center_circle_header_gallery::after {
    display: none;
  }

  .wrap_gallery {
    padding: 447px 0 0 0;
    bottom: -900px;
    background-size: cover;
  }

  .sub_wrap_gallery::after {
    max-width: 100px;
    width: 100%;
    height: 100px;
    background-size: 100%;
    top: -100px;
  }
}

@media screen and (max-width: 1250px) {
  .gallery_arrow_left {
    left: -40px;
  }
  .gallery_arrow_right {
    right: -40px;
  }
}
/* ___________________________________________________________________ */
@media screen and (max-width: 1200px) {
  .center_circle_header_gallery::after {
    display: none;
  }
  .gallery_arrow_left,
  .gallery_arrow_right {
    display: none;
  }
  .sub_wrap_gallery::after {
    display: none;
  }

  .wrap_gallery {
    position: relative;
    background-image: url(./assets/img/background/bg_vectot_pattern_tablet.png);
    background-size: cover;
  }

  .wrap_gallery {
    position: static;
    padding: 147px 0 0 0;
    justify-content: center;
    background-size: cover;
  }

  .gallery_box {
    display: flex;
    align-items: center;
    max-width: 740px;
    justify-content: space-around;
  }

  .gallery_sub_box {
    margin: 0 0 20px 0;
    min-width: 255px;
  }

  .gallery_content_small {
    margin: 0 0 30px 0;
  }

  .gallery_img_small {
    max-height: 100%;
    max-width: 100%;
  }
}
/* ___________________________________________________________________ */
@media screen and (max-width: 600px) {
  .center_circle_header_gallery::after {
    margin: 0;
    display: none;
  }
  .sub_wrap_gallery::after {
    display: none;
  }
  .center_circle_gallery {
    margin: 0 0 20px 0;
    padding: 0;
  }

  .wrap_gallery {
    min-height: 651px;
    background-size: cover;
    padding: 30px 0 0 0;
    background-position: inherit;
    margin: 0;
  }
  .gallery_sub_box {
    margin: 0 0px 10px 0;
    min-width: 150px;
  }
  .gallery_box {
    max-width: 310px;
    border-radius: 0;
  }
  .gallery_content_small {
    max-width: 150px;
    height: 109px;
    width: 100%;
    margin: 0 10px 10px 0;
    overflow: hidden;
  }

  .gallery_content_long {
    overflow: hidden;
    max-width: 150px;
    height: 228px;
    width: 100%;
    margin: 0;
  }
}

.selected_page {
  color: #f26914;
  position: relative;
}

.selected_page::after {
  content: " ";
  width: 100%;
  border-radius: 10px;
  left: 0;
  bottom: -19px;
  position: absolute;
  border-bottom: 4px solid #f26914;
}

.centrify {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
