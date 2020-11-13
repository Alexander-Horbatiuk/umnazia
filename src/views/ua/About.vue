<template>
  <div class="main_wrapper">
    <header>
      <div class="contacts_wrapper">
        <div class="first_block">
          <div class="logo">
            <router-link to="/ua"
              ><img
                src="../../assets/img/logo/logo_tablet.png"
                alt="logo"
                class="logo_tablet"
            /></router-link>
            <router-link to="/ua"
              ><img
                src="../../assets/img/logo/logo_phone.png"
                alt="logo"
                class="logo_phone"
            /></router-link>
          </div>

          <div @click="toggleLang" class="btn_lang_wrapper">
            <a class="btn_lang text_700_12">
              {{ lang }}
              <a class="btn_lang_ua_open">
                ua
              </a>
            </a>
          </div>
        </div>
        <div class="second_block">
          <div class="phones text_700_12">
            <div class="phone_number_wrap tel_position">
              <a
                id="anchorFooter"
                href="tel:+380970115588"
                class="num_link_header"
                >+ 38 (097) 011 55 88</a
              >
            </div>
            <div>
              <a href="tel:+380931936267" class="num_link_header "
                >+ 38 (093) 193 62 67</a
              >
            </div>
          </div>
          <div class="big_logo">
            <router-link to="/ua" class="link_logo">
              <img
                src="../../assets/img/logo/logo.png"
                alt="owl logo"
                width="308"
                class="main_logo"
              />
            </router-link>
          </div>

          <div class="adress">
            <div class="header_adress_text text_400_12">
              Ми знаходимось:
            </div>
            <div class=" text_700_12">
              <a
                href="https://goo.gl/maps/4sFRPgncGGnP5Kch8"
                target="_blank"
                class="header_text_map_link "
                >м.Одеса, просп. Шевченко 27</a
              >
            </div>
          </div>

          <div class="header_social_wrapper">
            <div class="social_text text_400_12">
              Наші соц мережі
            </div>
            <div class="social_icons_links">
              <div class="social_icon_item">
                <a
                  target="_blank"
                  style="cursor: pointer"
                  href="https://instagram.com/umnazia.ua?igshid=101pgncdk1sb9"
                  class="icon_item_link"
                >
                  <img
                    src="../../assets/img/img_png/instagram.png"
                    alt="instagram"
                  />
                </a>
              </div>
              <div class="social_icon_item">
                <a
                  target="_blank"
                  style="cursor: pointer"
                  href="https://www.facebook.com/profile.php?id=100054250201674"
                  class="icon_item_link"
                >
                  <img
                    src="../../assets/img/img_png/facebook.png"
                    alt="facebook"
                  />
                </a>
              </div>
              <div class="social_icon_item">
                <a
                  target="_blank"
                  style="cursor: pointer"
                  href="https://www.youtube.com/"
                  class="icon_item_link"
                >
                  <img
                    src="../../assets/img/img_png//youtube.png"
                    alt="youtube"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="navigation_list_wrapper ">
        <div class="contacts_wrapper contacts_wrapper_menu">
          <div class="sub_navigation_list text_700_13">
            <div class="el_menu">
              <a class="selected_page">Про нас</a>
            </div>
            <div class="el_menu">
              <router-link to="/technique/ua" class="el_menu_link"
                >Методика та формат</router-link
              >
            </div>
            <div class="el_menu">
              <router-link to="/services/ua" class="el_menu_link"
                >Наші Послуги</router-link
              >
            </div>
            <div class="el_menu">
              <router-link to="/timetable/ua" class="el_menu_link"
                >Розклад</router-link
              >
            </div>
          </div>
          <div class="sub_navigation_list text_700_13">
            <div class="el_menu">
              <router-link to="/groups/ua" class="el_menu_link"
                >Групи та вартість</router-link
              >
            </div>
            <div class="el_menu">
              <router-link to="/gallery/ua" class="el_menu_link"
                >Фотогалерея</router-link
              >
            </div>
            <div class="el_menu">
              <router-link to="/contacts/ua" class="el_menu_link"
                >Контакти</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div
        @click="showMobileMenu"
        v-if="!mobileMenuOpen"
        class="mobile_menu_button"
      ></div>
    </header>

    <main class="main_content_wrapper">
      <div class="sub_content_wrapper">
        <div class="box_line_heading text_Bold">
          <!--box-line-->
          <div class="heading_text">
            <h3>Про нас</h3>
          </div>
        </div>

        <div class="upper_content_info_main_wrapper">
          <div class="upper_content_info_wrapper">
            <div
              class="about_content_image_wrapper about_img_content_school"
            ></div>

            <div class="about_content_text_wrapper text_400_12">
              <p class="about_content_info_text_school">
                <span class="about_content_text_decoration text_Bold"
                  >Ласкаво просимо, шановні батьки допитливих і активних дітей!</span>
                Ми дуже раді, що Ви потрапили на наш сайт, тому що Вас чекає багато цікавих хвилин і творчих відкриттів.
              </p>

              <p>
                Ви хочете, щоб ваш малюк ріс міцним, веселим, товариським і талановитим? Тоді вам варто приготуватися до того, що його виховання зажадає від вас багато сил, професійних знань і часу.
              </p>
            </div>
          </div>

          <div class="down_content_info_wrapper">
            <div
              class="about_content_image_wrapper about_img_content_children img_decoration"
            ></div>

            <div
              class="about_content_text_wrapper text_400_12 down_content_text"
            >
              <p class="about_content_info_text_children">
                Адже виховання малюка - це складний процес з масою тонких нюансів, які часто відомі лише справжнім майстрам. Всі батьки знають, що найголовніше - любити свого малюка і дбати про нього. Однак далеко не всі мами і тата знають, як правильно виховувати дитину, щоб він зумів максимально розвинути свій творчий потенціал.
              </p>
            </div>
          </div>

          <div class="about_head_footer_text_wrapper">
            <div class="about_head_footer_text text_Bold">
              <p>Наші цілі</p>
            </div>
            <div class="about_footer_text text_400_12">
              <p>
                Створювати таку середу навколо дитини, де він зможе виявляти і виражати себе, розкривати свій потенціал.

              </p>
            </div>
            <div class="about_footer_text text_400_12">
              <p>
                Спонукати і стимулювати самостійність, відповідальність і вміння виявляти свої індивідуальні особливості і таланти, бути активним.
              </p>
            </div>
            <div class="about_footer_text text_400_12">
              <p>
                Формувати позитивне ставлення до себе і навколишнього світу, а також вміння взаємодіяти з іншими людьми.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer_main_wrapper">
      <div class="footer_form_wrapper">
        <div class="pseudo_img_block">
          <div class="pseudo_element_line"></div>
          <div class="pseudo_element_wave"></div>
          <div class="pseudo_element_dotted"></div>
        </div>

        <div class="footer_header_text text_700_12">
          <p>
            Пропонуємо відвідати наші
            <span class="footer_header_text_upper">уроки-презентації !</span>
          </p>
        </div>
        <div class="footer_form_text text_400_12">
          <p>Записатися на презентацію можна просто заповнивши форму нижче!</p>
        </div>

        <form
          @submit.prevent="prePresentationSend"
          class="footer_user_form_wrapper"
          name="registration_form"
          method="post"
          action="#"
        >
          <div class="input_user_wrapper">
            <input
              v-model="presentationName"
              class="input_user_name text_400_12"
              type="text"
              placeholder="Ваше имя"
            />
          </div>

          <div class="input_user_wrapper">
            <input
              v-model="presentationTel"
              class="input_user_phone text_400_12"
              type="tel"
              placeholder="Ваш номер телефона"
            />
          </div>

          <div class="submit_form_btn_wrapper">
            <button
              v-if="!b_five"
              class="submit_form_btn text_700_12"
              type="submit"
            >
              Надіслати
            </button>
            <button
              v-else
              class="training_format_submit_orange_btn"
              type="submit"
            >
              Надіслати
            </button>
          </div>
        </form>
      </div>

      <div class="google_map_wrapper">
        <iframe
          class="iframe_google_map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.9341857831632!2d30.753829015494134!3d46.4500010751442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c633e7b3172e5b%3A0x395f101608febf7e!2z0L_RgNC-0YHQvy4g0KjQtdCy0YfQtdC90LrQviwgMjcsINCe0LTQtdGB0YHQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjUwMDA!5e0!3m2!1sru!2sua!4v1600843303113!5m2!1sru!2sua"
          height="505"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>

        <div class="modal_window">
          <div class="modal_logo_wrapper">
            <img
              src="../../assets/img/img_png/umnazia_logo_footer.png"
              alt="umnaziya logo"
            />
          </div>

          <div class="modal_text_wrapper">
            <div class="modal_adress">
              <a
                class="modal_adress_link"
                href="https://goo.gl/maps/4sFRPgncGGnP5Kch8"
                target="_blank"
                >м. Одеса, просп. Шевченко 27</a
              >
            </div>
            <div class="modal_phone modal_phone_icon ">
              <a class="modal_phone_link " href="tel:+380970115588 "
                >+ 38 (097) 011 55 88</a
              >
            </div>
            <div class="modal_phone ">
              <a class="modal_phone_link " href="tel:tel:+380931936267 "
                >+ 38 (093) 193 62 67</a
              >
            </div>
            <div class="modal_email ">
              <a class="modal_email_link" href="mailto:umnazia.ua@gmail.com "
                >umnazia.ua@gmail.com</a
              >
            </div>
          </div>

          <div class="modal_social_icons_links ">
            <div class="modal_social_icon_item ">
              <a
                target="_blank"
                style="cursor: pointer"
                href="https://instagram.com/umnazia.ua?igshid=101pgncdk1sb9 "
              >
                <img
                  src="../../assets/img/img_png/instagram.png"
                  alt="instagram "
                />
              </a>
            </div>
            <div class="modal_social_icon_item ">
              <a
                target="_blank"
                style="cursor: pointer"
                href="https://www.facebook.com/profile.php?id=100054250201674"
              >
                <img
                  src="../../assets/img/img_png/facebook.png"
                  alt="facebook "
                />
              </a>
            </div>
            <div class="modal_social_icon_item ">
              <a
                target="_blank"
                style="cursor: pointer"
                href="https://www.youtube.com/"
              >
                <img
                  src="../../assets/img/img_png/youtube.png"
                  alt="youtube "
                />
              </a>
            </div>
          </div>
          <div @click="showModal('b_six')" class="modal_btn_wrapper text_Bold ">
            <button v-if="!b_six" class="modal_submit_btn">
              Записатися в<br />
              групу
            </button>
            <button v-else class="training_format_submit_orange_btn">
              Записатися в<br />
              групу
            </button>
          </div>
        </div>
      </div>

      <div class="footer_copyright text_400_12 ">
        <div class="btn_anchor_wrapper ">
          <button
            class="btn_anchor"
            @click="scrollToTop"
            style="cursor: pointer"
          ></button>
        </div>
        <p>Академія знань “Умназія” 2020 © Усі права захищені</p>
      </div>
    </footer>

    <div v-if="isModal" class="wraper_modal_form">
      <form @submit.prevent="preSend">
        <div class="wrap_form">
          <div @click="hideModal" class="bt_close">+</div>
          <p class="head_form">Записатися в групу</p>
          <input
            v-model="name"
            type="text"
            placeholder="Ваше имя"
            class="name_form"
          />
          <input
            v-model="tel"
            type="tel"
            placeholder="Ваше номер телефона"
            class="number_form"
          />
          <button class="bt_modal_form">Надіслати</button>
        </div>
      </form>
    </div>

    <div v-if="mobileMenuOpen" class="wrap_mobile_menu">
      <div @click="hideMobileMenu" class="close_mobile_menu"></div>
      <div class="mobile_menu">
        <router-link to="/about/ua" class="el_menu_modal">Про нас</router-link>
        <router-link to="/technique/ua" class="el_menu_modal"
          >Методика та формат</router-link
        >
        <router-link to="/services/ua" class="el_menu_modal"
          >Наші послуги
        </router-link>
        <router-link to="/timetable/ua" class="el_menu_modal"
          >Розклад
        </router-link>
        <router-link to="/groups/ua" class="el_menu_modal"
          >Групи та вартість</router-link
        >
        <router-link to="/gallery/ua" class="el_menu_modal"
          >Фотогалерея</router-link
        >
        <router-link to="contacts" class="el_menu_modal">Контакти</router-link>
        <div class="social_wrapper">
          <div class="head_social_wrapper">
            <div class="social_text text_400_12">
              Наші соц мережі
            </div>
            <div class="social_icons_links">
              <div class="social_icon_item">
                <a
                  target="_blank"
                  style="cursor: pointer"
                  href="https://instagram.com/umnazia.ua?igshid=101pgncdk1sb9"
                  class="icon_item_link"
                >
                  <img
                    src="../../assets/img/img_png/instagram.png"
                    alt="instagram"
                  />
                </a>
              </div>
              <div class="social_icon_item">
                <a
                  target="_blank"
                  style="cursor: pointer"
                  href="https://www.facebook.com/profile.php?id=100054250201674"
                  class="icon_item_link"
                >
                  <img
                    src="../../assets/img/img_png/facebook.png"
                    alt="facebook"
                  />
                </a>
              </div>
              <div class="social_icon_item">
                <a
                  target="_blank"
                  style="cursor: pointer"
                  href="https://www.youtube.com"
                  class="icon_item_link"
                >
                  <img
                    src="../../assets/img/img_png/youtube.png"
                    alt="youtube"
                  />
                </a>
              </div>
            </div>
          </div>
          <div @click="toggleLang" class="btn_lang_wrapper">
            <a class="btn_lang text_700_12">
              {{ lang }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "About",
  data() {
    return {
      isModal: false,
      mobileMenuOpen: false,
      name: "",
      tel: "+380",
      presentationName: "",
      presentationTel: "+380",
      b_five: localStorage.getItem("b_five"),
      b_six: localStorage.getItem("b_six"),
      currentButton: "",
      lang: "ru"
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    showModal(button) {
      this.currentButton = button;
      this.isModal = true;
    },
    toggleLang() {
      if (this.lang === "ru") {
        this.lang = "ua";
      } else {
        this.lang = "ru";
      }
    },
    hideModal() {
      this.isModal = false;
    },
    showMobileMenu() {
      this.mobileMenuOpen = true;
      document.body.style.overflowY = "hidden";
    },
    hideMobileMenu() {
      this.mobileMenuOpen = false;
      document.body.style.overflowY = "scroll";
    },
    preSend() {
      this.sendTel({
        name: this.name,
        tel: this.tel
      });
      this.name = "";
      this.tel = "";
      this.presentationName = "";
      this.presentationTel = "";
      this.isModal = false;
      localStorage.setItem(this.currentButton, true);
      this[this.currentButton] = true;
    },
    prePresentationSend() {
      this.sendTel({
        name: this.presentationName,
        tel: this.presentationTel
      });
      this.name = "";
      this.tel = "";
      this.presentationName = "";
      this.presentationTel = "";
      localStorage.setItem("b_five", true);
      this.b_five = true;
    },
    ...mapActions(["sendTel"])
  },
  created() {
    document.body.style.overflowY = "scroll";
  }
};
</script>

<style scoped src="../../assets/styles/about_style.css" lang="css"></style>
