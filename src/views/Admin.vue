<template>
  <div class="main_wrapper">
    <header>
      <div class="navigation_list_wrapper admin_header">
        <img
          @click="toMainPage"
          class="admin_logo"
          src="../assets/img/logo/favicon_tablet.png"
        />
        <router-link to="/logout" class="logout">Выйти</router-link>
      </div>
    </header>
    <main>
      <div class="main_content">
        <form class="main_form">
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel
                cupiditate accusamus atque excepturi quidem reiciendis, dolor
                possimus amet ipsum ipsam, totam maxime molestiae veniam aliquam
                ad dolore non beatae.
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/home_header_title_first_part.png"
              />
            </div>
            <input
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel
                cupiditate accusamus atque excepturi quidem reiciendis, dolor
                possimus amet ipsum ipsam, totam maxime molestiae veniam aliquam
                ad dolore non beatae.
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/home_header_title_second_part.png"
              />
            </div>
            <input
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel
                cupiditate accusamus atque excepturi quidem reiciendis, dolor
                possimus amet ipsum ipsam, totam maxime molestiae veniam aliquam
                ad dolore non beatae.
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/home_header_text.png"
              />
            </div>
            <input
              placeholder="Введите текст"
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
export default {
  name: "Admin",
  methods: {
    toMainPage() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped src="../assets/styles/style.css" lang="css"></style>
<style scoped lang="css">
img {
  height: auto;
}

.admin_logo {
  width: 3%;
  padding-left: 2%;
  cursor: pointer;
}

.screenshot {
  width: 40%;
}

.admin_text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
}

.input_wrapper {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 5%;
}

.admin_title {
  width: 80%;
  font-size: 3vw;
  padding-bottom: 2%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
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
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}

.main_form {
  padding-top: 5%;
  font-family: "EuropeC_700", sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
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

.logout {
  font-family: "EuropeC_700", sans-serif;
  font-size: 1.5vw;
  padding-right: 2%;
  color: white;
  text-decoration: none;
}

.admin_header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
