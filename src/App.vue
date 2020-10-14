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
