<template>
  <div class="main_wrapper">
    <header>
      <div class="contacts_wrapper">
        <div class="first_block">
          <div class="logo">
            <a href="index.html"
              ><img
                src="../assets/img/logo/logo_tablet.png"
                alt="logo"
                class="logo_tablet"
            /></a>
            <a href="index.html"
              ><img
                src="../assets/img/logo/logo_phone.png"
                alt="logo"
                class="logo_phone"
            /></a>
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
              <a href="#" class="header_text_map_link "
                >г.Одессф, просп. Шевченко 27</a
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
              <router-link to="/services" class="el_menu_link"
                >Наши Услуги</router-link
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
              <router-link to="/timetable" class="el_menu_link"
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
    </header>
    <!--main-->
    <main class="main_content_wrapper">
      <div class="sub_content_wrapper">
        <div class="timetable_header_info_wrapper">
          <div class="box_line_heading text_bold">
            <!--box-line-->
            <div class="heading_text">
              <h3>Расписание</h3>
            </div>
          </div>

          <div class="main_content_header_sub_text text_400_12">
            <p>
              Работаем <span class="sub_text_bold text_700_12"> 6 дней</span> в
              неделю в формате полудневки
            </p>
          </div>

          <div class="main_content_header_sub_text text_400_12">
            <p>
              <span class="sub_text_bold text_700_12">4 часа</span> разделены
              на<span class="sub_text_bold text_700_12"> 4 блока</span>
            </p>
          </div>
        </div>

        <div class="timetable_content_info_wrapper">
          <div class="timetable_content_info_sub_wrapper">
            <div class="timetable_info_random_blocks">
              <div class="discussion_wrapper">
                <div class="timetable_discussion_round"></div>
              </div>

              <div class="info_random_header text_bold">
                <p>Дискусионный блок</p>
              </div>

              <div class="info_random_sub_text text_400_12">
                <p>
                  Чтение художественной литературы, обсуждение прочитанного,
                  игры на развитие воображения с применением методики ТРИЗ.
                  <br />
                  Цель-научить ребёнка грамотно высказывать свои мысли и мнение,
                  научиться слушать собеседника, учитывать мнение другого
                  собеседника, развитие фонематического слуха.
                </p>
              </div>
            </div>

            <div class="timetable_info_random_blocks">
              <div class="humanitarian_wrapper">
                <div class="timetable_discussion_round"></div>
              </div>

              <div class="info_random_header text_bold">
                <p>Гуманитарный блок</p>
              </div>

              <div class="info_random_sub_text text_400_12">
                <p>
                  -Знакомство с буквами и чтением с использованием карточек
                  Домана, кубиков Чаплыгина и авторского методического пособия
                  <br />
                  -развитие моторики в системной связке с изучаемым
                  грамматическим материалом<br />
                  -формирование навыков письма и каллиграфии<br />
                  -упражнения на развитие фонематического слуха<br />
                </p>
              </div>
            </div>
          </div>

          <div class="timetable_content_info_sub_wrapper">
            <div class="timetable_info_random_blocks">
              <div class="math_wrapper">
                <div class="timetable_discussion_round"></div>
              </div>

              <div class="info_random_header info_random_math text_bold">
                <p>Математический блок</p>
              </div>

              <div class="info_random_sub_text text_400_12">
                <p>
                  -Знакомство с цифрами и числами <br />
                  -формирование навыков простого счёта <br />
                  -Обучение финансовой грамотности <br />
                  -тренировка памяти и логического мышления <br />
                </p>
              </div>
            </div>

            <div class="timetable_info_random_blocks">
              <div class="scientific_wrapper">
                <div class="timetable_discussion_round"></div>
              </div>

              <div class="info_random_header text_bold">
                <p>Научный блок</p>
              </div>

              <div class="info_random_sub_text text_400_12">
                <p>
                  -знакомство с законами природы и влиянии человека на
                  окружающий мир <br />
                  -изучение истории, географии, физики, Химии и астрономии в
                  соответствии с возрастными особенностями ребёнка
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="timetable_calendar_wrapper">
          <div class="timetable_calendar_sub_wrapper">
            <div class="timetable_calendar_monday">
              <div class="calendar_day text_400_12">
                <p>Пн</p>
              </div>
              <div class="green_calendar_mark"></div>
              <div class="green_calendar_mark"></div>
              <div class="green_calendar_mark"></div>
              <div class="green_calendar_mark"></div>
              <div class="green_calendar_mark"></div>
            </div>

            <div class="timetable_calendar_tuesday">
              <div class="calendar_day text_400_12">
                <p>Вт</p>
              </div>
              <div class="orange_calendar_mark"></div>
              <div class="orange_calendar_mark"></div>
              <div class="orange_calendar_mark"></div>
              <div class="orange_calendar_mark"></div>
              <div class="orange_calendar_mark"></div>
            </div>

            <div class="timetable_calendar_wednesday">
              <div class="calendar_day text_400_12">
                <p>Ср</p>
              </div>
              <div class="dark_blue_calendar_mark"></div>
              <div class="dark_blue_calendar_mark"></div>
              <div class="dark_blue_calendar_mark"></div>
              <div class="dark_blue_calendar_mark"></div>
              <div class="dark_blue_calendar_mark"></div>
            </div>

            <div class="timetable_calendar_thursday">
              <div class="calendar_day text_400_12">
                <p>Чт</p>
              </div>
              <div class="green_calendar_mark"></div>
              <div class="green_calendar_mark"></div>
              <div class="green_calendar_mark"></div>
              <div class="green_calendar_mark"></div>
            </div>

            <div class="timetable_calendar_friday">
              <div class="calendar_day text_400_12">
                <p>Пт</p>
              </div>
              <div class="orange_calendar_mark"></div>
              <div class="orange_calendar_mark"></div>
              <div class="orange_calendar_mark"></div>
              <div class="orange_calendar_mark"></div>
            </div>

            <div class="timetable_calendar_saturday">
              <div class="calendar_day text_400_12">
                <p>Сб</p>
              </div>
              <div class="dark_blue_calendar_mark"></div>
              <div class="dark_blue_calendar_mark"></div>
              <div class="dark_blue_calendar_mark"></div>
              <div class="dark_blue_calendar_mark"></div>
            </div>

            <div class="timetable_calendar_sunday">
              <div class="calendar_day text_400_12">
                <p>Вс</p>
              </div>
              <div class="grey_calendar_mark"></div>
              <div class="grey_calendar_mark"></div>
              <div class="grey_calendar_mark"></div>
              <div class="grey_calendar_mark"></div>
            </div>
          </div>

          <div class="learning_days_wrapper">
            <div class="russian_day_wrapper">
              <div class="russian_day_text text_400_12">
                <div class="green_calendar_mark_russian"></div>
                <p>Понедельник, Четверг - Русский день</p>
              </div>
            </div>

            <div class="ukrainian_day_wrapper">
              <div class="ukrainian_day_text text_400_12">
                <div class="orange_calendar_mark_ukraine"></div>
                <p>Вторник, Пятница - Украинский день</p>
              </div>
            </div>

            <div class="english_day_wrapper">
              <div class="english_day_text text_400_12">
                <div class="dark_blue_calendar_mark_engl"></div>
                <p>Среда, Суббота - English day</p>
              </div>
            </div>
          </div>
        </div>

        <div class="training_format_wrapper">
          <!--Clock-block-->

          <div class="training_format_header_text text_bold">
            <p>Формат занятий</p>
          </div>

          <div class="training_format_header_subtext text_bold">
            <p>
              Работаем <span class="text_bold">6 дней</span> в неделю (формат -
              полудневки)
            </p>
          </div>

          <div class="clocks_wrapper">
            <div class="class_hours class_hours_9am">
              <div class="time_text_9am text_bold">
                <p>{{ timetable_clock_morning }}</p>
              </div>

              <div @click="showModal" class="text_bold">
                <button class="training_format_submit_btn ">
                  Записаться в<br />
                  группу
                </button>
              </div>
            </div>

            <div class="class_hours class_hours_14pm">
              <div class="time_text_14pm text_bold">
                <p>{{ timetable_clock_evening }}</p>
              </div>

              <div @click="showModal" class="text_bold">
                <button class="training_format_submit_orange_btn ">
                  Записаться в<br />
                  группу
                </button>
              </div>
            </div>
          </div>
        </div>
        <!--Clock-block-end-->
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
            <button class="submit_form_btn text_700_12" type="submit">
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
                href="https://instagram.com/umnazia.ua?igshid=101pgncdk1sb9 "
              >
                <img
                  src="../assets/img/img_png/instagram.png"
                  alt="instagram "
                />
              </a>
            </div>
            <div class="modal_social_icon_item">
              <a
                target="_blank"
                style="cursor: pointer"
                href="https://www.facebook.com/profile.php?id=100054250201674"
              >
                <img src="../assets/img/img_png/facebook.png" alt="facebook " />
              </a>
            </div>
            <div class="modal_social_icon_item ">
              <a
                target="_blank"
                style="cursor: pointer"
                href="https://www.youtube.com/"
              >
                <img src="../assets/img/img_png/youtube.png" alt="youtube " />
              </a>
            </div>
          </div>

          <div @click="showModal" class="modal_btn_wrapper text_Bold ">
            <button class="modal_submit_btn ">
              Записаться в<br />
              группу
            </button>
          </div>
        </div>
      </div>

      <div class="footer_copyright text_400_12">
        <div class="btn_anchor_wrapper">
          <button class="btn_anchor" @click="scrollToTop"></button>
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
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Timetable",
  data() {
    return {
      isModal: false,
      name: "",
      tel: "",
      presentationName: "",
      presentationTel: "",
      timetable_clock_morning: "",
      timetable_clock_evening: ""
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    showModal() {
      this.isModal = true;
    },
    hideModal() {
      this.isModal = false;
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
    },
    ...mapActions(["sendTel", "getFields"])
  },
  computed: mapState({
    fields: state => state.fields
  }),
  async created() {
    await this.getFields();
    const keys = Object.keys(this.fields);
    keys.forEach(key => {
      this[key] = this.fields[key];
    });
  }
};
</script>

<style scoped src="../assets/styles/timetable_style.css" lang="css"></style>
