<template>
  <div class="main_wrapper">
    <header>
      <div class="navigation_list_wrapper admin_header">
        <div class="open_site" @click="toMainPage">перейти на сайт</div>

        <div class="open_site" @click="toFieldsPage">изменить текст</div>

        <div class="open_site" @click="toFilesPage">добавить фото</div>

        <div class="open_site" @click="logout">закончить сеанс</div>
      </div>
    </header>
    <main>
      <div class="main_content">
        <form @submit.prevent="setPassword" class="main_form">
          <div class="input_wrapper sub_head_contebt_block">
            <div class="admin_description">
              <div class="admin_text">Пароль для аккаунта менеджера</div>
            </div>
            <input
              required
              v-model="managerPassword"
              placeholder="Введите пароль"
              class="admin_input"
              type="text"
            />
          </div>
          <input
            type="submit"
            class="bt_modal_form"
            value="Сохранить изменения"
          />
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Manager",
  data() {
    return {
      managerPassword: ""
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("jwt");
      this.$router.push({ name: "Home" });
    },
    toMainPage() {
      this.$router.push({ name: "Home" });
    },
    toFilesPage() {
      this.$router.push({ name: "AdminFiles" });
    },
    toFieldsPage() {
      this.$router.push({ name: "Admin" });
    },
    async setPassword() {
      await this.setManagerPassword({ password: this.managerPassword });
      this.$router.push({ name: "Admin" });
    },
    ...mapActions(["getManagerPassword", "setManagerPassword"])
  },
  async created() {
    const password = await this.getManagerPassword();
    this.managerPassword = password.data;
  }
};
</script>

<style scoped src="../assets/styles/style.css" lang="css"></style>
<style scoped lang="css">
.admin_text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
}

.input_wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0 0 20px 0;
}

.open_site:hover {
  color: #361f4d;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.admin_input {
  width: 75%;
  padding: 1%;
  margin-top: 1%;
}

.admin_description {
  width: 80%;
  padding-bottom: 2%;
  font-size: 1.8vw;
  line-height: 2vw;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: distribute;
  justify-content: space-around;
}

.main_form {
  padding-top: 5%;
  font-family: "EuropeC_700", sans-serif;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.main_content {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0 48px 0;
  background-image: url(../assets/img/background/main_bg_white.jpg);
  background-repeat: repeat-y;
}

.open_site {
  font-family: "EuropeC_700", sans-serif;
  font-size: 1.5vw;
  color: white;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
}

.bt_modal_form {
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
  margin-top: 2%;
}

.bt_modal_form:hover {
  color: #361f4d;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.admin_header {
  background: #1ba6b2;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 30px;
}

.sub_head_contebt_block {
  width: 30%;
}

.sub_head_contebt_block:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.03);
}

.sub_head_contebt_block {
  transition: 0.8s;
  border-radius: 10px;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  background: #fff;
}
</style>
