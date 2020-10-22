<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style src="./assets/styles/reset.css" lang="css"></style>
<style>
.sub_age_one,
.sub_age_two {
  color: #efe134;
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
    position: absolute;
    top: 9px;
    right: 0px;
    cursor: pointer;
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
  height: 100%;
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
</style>
