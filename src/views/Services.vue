<template>
  <div class="main_wrapper">
    <!--header-->
    <header>
      <div class="contacts_wrapper">
        <div class="first_block">
          <div class="logo">
            <router-link to="/"
              ><img
                src="../assets/img/logo/logo_tablet.png"
                alt="logo"
                class="logo_tablet"
            /></router-link>
            <router-link to="/"
              ><img
                src="../assets/img/logo/logo_phone.png"
                alt="logo"
                class="logo_phone"
            /></router-link>
          </div>

          <div class="btn_lang_wrapper">
            <a href="#" class="btn_lang text_700_12">
              ru
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
            <router-link to="/" class="link_logo">
              <img
                src="../assets/img/logo/logo.png"
                alt="owl logo"
                width="308"
                class="main_logo"
              />
            </router-link>
          </div>

          <div class="adress">
            <div class="header_adress_text text_400_12">
              Мы находимся:
            </div>
            <div class=" text_700_12">
              <a
                href="https://goo.gl/maps/4sFRPgncGGnP5Kch8"
                target="_blank"
                class="header_text_map_link "
                >г.Одессa, просп. Шевченко 27</a
              >
            </div>
          </div>

          <div class="header_social_wrapper">
            <div class="social_text text_400_12">
              Наши соц сети
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
                    src="../assets/img/img_png/instagram.png"
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
                    src="../assets/img/img_png/facebook.png"
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
                  <img src="../assets/img/img_png//youtube.png" alt="youtube" />
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
              <router-link to="/about" class="el_menu_link">О нас</router-link>
            </div>
            <div class="el_menu">
              <router-link to="/technique" class="el_menu_link"
                >Методика и формат</router-link
              >
            </div>
            <div class="el_menu">
              <a class="selected_page">Наши Услуги</a>
            </div>
            <div class="el_menu">
              <router-link to="/timetable" class="el_menu_link"
                >Расписание</router-link
              >
            </div>
          </div>
          <div class="sub_navigation_list text_700_13">
            <div class="el_menu">
              <router-link to="/groups" class="el_menu_link"
                >Группы и Стоимость</router-link
              >
            </div>
            <div class="el_menu">
              <router-link to="/gallery" class="el_menu_link"
                >Фотогалерея</router-link
              >
            </div>
            <div class="el_menu">
              <router-link to="/contacts" class="el_menu_link"
                >Контакты</router-link
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
    <!--Main-->
    <main class="main_content_wrapper">
      <div class="sub_content_wrapper">
        <div class="box_line_heading text_bold">
          <!--box-line-->
          <div class="heading_text">
            <h3>наши услуги</h3>
          </div>
        </div>

        <div class="services_content_wrapper">
          <div>
            <!-- class="preparing_school_wrapper"-->

            <div class="preparing_school_img">
              <div>
                <img
                  class="main_content_images"
                  src="../assets/img/services/boy_on_horse.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="main_content_images"
                  src="../assets/img/services/children_with_teacher.png"
                  alt=""
                />
              </div>
            </div>

            <div class="preparing_school_text_wrapper">
              <div class="preparing_school_text_header text_bold">
                <p>Подготовка к школе (3-6 лет)</p>
              </div>

              <div class="preparing_school_sub_text text_400_12">
                <p>
                  Занятия проводятся на трёх языках в игровой форме.
                  <span class="preparing_school_sub_sub_text_320px"
                    >Основой являются настольные и подвижные игры,игры на
                    развитие навыков конкурирования и достижения поставленных
                    целей. <br />
                    Путём чтения художественной и научно-познавательной
                    литературы,происходит работа над формированием
                    речи,грамотного и последовательного изложения своих
                    мыслей.</span
                  >
                  <br />
                  Помощь в обучении чтению и счету. Обучение финансовой
                  грамотности и навыкам формирования семейного бюджета.
                </p>
              </div>

              <div
                @click="showModal('b_eleven')"
                class="services_btn_wrapper text_bold"
              >
                <button v-if="!b_eleven" class="services_submit_btn">
                  Записаться в<br />
                  группу
                </button>
                <button v-else class="training_format_submit_orange_btn">
                  Записаться в<br />
                  группу
                </button>
              </div>
            </div>
          </div>

          <div>
            <div class="leisure_img">
              <div>
                <img
                  class="main_content_images"
                  src="../assets/img/services/children_on_road.png"
                  alt=""
                />
              </div>
            </div>

            <div class="leisure_text_wrapper">
              <div class="leisure_text_header text_bold">
                <p>Досуг первоклассника (7-8лет)</p>
              </div>

              <div class="leisure_sub_text text_400_12">
                -чтение художественной и научно-познавательной литературы,
                настольные игры, финансовая грамотность, творчество; <br />
                С 14.00 до 18.00<br /><br />
                <p class="text_bold">Группы английского языка</p>
                Пн.- Ср.- Птн.<br />
                16.00 -17.00<br />
                Вт.-Чт.<br />
                16.00-17.00<br /><br />
                <p class="text_bold">«Няня на час»</p>
                Вы можете оставить ребёнка у нас и освободить время для
                себя.Наши педагоги займут ребёнка за чтением интересных
                книг,творчеством и настольными играми. 100 грн/час
              </div>

              <div
                @click="showModal('b_twelve')"
                class="services_btn_wrapper text_700_12"
              >
                <button v-if="!b_twelve" class="services_submit_btn">
                  Записаться в<br />
                  группу
                </button>
                <button v-else class="training_format_submit_orange_btn">
                  Записаться в<br />
                  группу
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!--footer-->
    <footer class="footer_main_wrapper">
      <div class="footer_form_wrapper">
        <div class="pseudo_img_block">
          <div class="pseudo_element_line"></div>
          <div class="pseudo_element_wave"></div>
          <div class="pseudo_element_dotted"></div>
        </div>

        <div class="footer_header_text text_700_12">
          <p>
            Предлагаем посетить наши
            <span class="footer_header_text_upper">уроки-презентации !</span>
          </p>
        </div>
        <div class="footer_form_text text_400_12">
          <p>Записаться на презентацию можно просто заполнив форму ниже!</p>
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
              v-if="!b_thirteen"
              class="submit_form_btn text_700_12"
              type="submit"
            >
              Отправить
            </button>
            <button
              v-else
              class="training_format_submit_orange_btn"
              type="submit"
            >
              Отправить
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
              src="../assets/img/img_png/umnazia_logo_footer.png"
              alt="umnaziya logo"
            />
          </div>

          <div class="modal_text_wrapper">
            <div class="modal_adress">
              <a
                class="modal_adress_link"
                href="https://goo.gl/maps/4sFRPgncGGnP5Kch8"
                target="_blank"
                >г. Одесса, просп. Шевченко 27</a
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
              <a class="modal_email_link " href="mailto:umnazia.ua@gmail.com "
                >umnazia.ua@gmail.com</a
              >
            </div>
          </div>

          <div class="modal_social_icons_links ">
            <div class="modal_social_icon_item ">
              <a
                target="_blank"
                style="cursor: pointer"
                href="https://instagram.com/umnazia.ua?igshid=101pgncdk1sb9"
              >
                <img
                  src="../assets/img/img_png/instagram.png"
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
                <img src="../assets/img/img_png/facebook.png" alt="facebook " />
              </a>
            </div>
            <div class="modal_social_icon_item">
              <a
                target="_blank"
                style="cursor: pointer"
                href="https://www.youtube.com/"
              >
                <img src="../assets/img/img_png/youtube.png" alt="youtube" />
              </a>
            </div>
          </div>
          <div
            @click="showModal('b_fourteen')"
            class="modal_btn_wrapper text_Bold"
          >
            <button v-if="!b_fourteen" class="modal_submit_btn">
              Записаться в<br />
              группу
            </button>
            <button v-else class="training_format_submit_orange_btn">
              Записаться в<br />
              группу
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
        <p>Академия знаний “Умназія” 2020 © Все права защищены</p>
      </div>
    </footer>

    <div v-if="isModal" class="wraper_modal_form">
      <form @submit.prevent="preSend">
        <div class="wrap_form">
          <div @click="hideModal" class="bt_close">+</div>
          <p class="head_form">Записаться в группу</p>
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
          <button class="bt_modal_form">Отправить</button>
        </div>
      </form>
    </div>

    <div v-if="mobileMenuOpen" class="wrap_mobile_menu">
      <div @click="hideMobileMenu" class="close_mobile_menu"></div>
      <div class="mobile_menu">
        <router-link to="/about" class="el_menu_modal">О нас</router-link>
        <router-link to="/technique" class="el_menu_modal"
          >Методика и формат</router-link
        >
        <router-link to="/services" class="el_menu_modal"
          >Наши Услуги
        </router-link>
        <router-link to="/timetable" class="el_menu_modal"
          >Расписание
        </router-link>
        <router-link to="/groups" class="el_menu_modal"
          >Группы и Стоимость</router-link
        >
        <router-link to="/gallery" class="el_menu_modal"
          >Фотогалерея</router-link
        >
        <router-link to="contacts" class="el_menu_modal">Контакты</router-link>
        <div class="social_wrapper">
          <div class="head_social_wrapper">
            <div class="social_text text_400_12">
              Наши соц сети
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
                    src="../assets/img/img_png/instagram.png"
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
                    src="../assets/img/img_png/facebook.png"
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
                  <img src="../assets/img/img_png/youtube.png" alt="youtube" />
                </a>
              </div>
            </div>
          </div>
          <div class="btn_lang_wrapper">
            <a href="#" class="btn_lang text_700_12">
              ru
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
  name: "Services",
  data() {
    return {
      isModal: false,
      name: "",
      tel: "+380",
      mobileMenuOpen: false,
      presentationName: "",
      presentationTel: "+380",
      b_eleven: localStorage.getItem("b_eleven"),
      b_twelve: localStorage.getItem("b_twelve"),
      b_thirteen: localStorage.getItem("b_thirteen"),
      b_fourteen: localStorage.getItem("b_fourteen")
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
    hideModal() {
      this.isModal = false;
    },
    showMobileMenu() {
      this.mobileMenuOpen = true;
      window.scrollTo(0, 0);
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
      localStorage.setItem("b_thirteen", true);
      this.b_thirteen = true;
    },
    ...mapActions(["sendTel"])
  },
  created() {
    document.body.style.overflowY = "scroll";
  }
};
</script>

<style scoped src="../assets/styles/services_style.css" lang="css"></style>
