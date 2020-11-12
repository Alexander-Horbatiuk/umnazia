<template>
  <div class="wraper_modal_form_login">
    <form @submit.prevent="submitLogin">
      <div class="wrap_form_login">
        <p class="head_form">Добро Пожаловать</p>
        <input
          v-model="loginField"
          type="text"
          placeholder="Ваш логин"
          class="name_form"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Ваш пароль"
          class="number_form"
          required
        />
        <button class="bt_modal_form">Вход</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      loginField: "",
      password: ""
    };
  },
  methods: {
    async submitLogin() {
      try {
        const result = await this.login({
          login: this.loginField,
          password: this.password
        });
        localStorage.setItem("jwt", result.data.access_token);
        this.$router.push({ name: "Admin" });
      } catch (error) {
        (this.loginField = ""), (this.password = "");
      }
    },
    ...mapActions(["login"])
  },
  created() {
    if (localStorage.getItem("jwt")) {
      this.$router.push({ name: "Admin" });
    }
  }
};
</script>

<style scoped>
.wraper_modal_form_login {
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(../assets/img/background/main_bg_white.jpg);
  background-repeat: repeat-y;
}

.wrap_form_login {
  background: #ffffff;
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  z-index: 101;
  width: 350px;
  height: 350px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
}
</style>
