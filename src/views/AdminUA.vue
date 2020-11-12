<template>
  <div class="main_wrapper">
    <header>
      <div class="navigation_list_wrapper admin_header">
        <div class="open_site" @click="toMainPage">перейти на сайт</div>

        <div class="open_site" v-if="isAdmin" @click="toManager">менеджер</div>

        <div class="open_site" @click="toFieldsPage">изменить текст</div>

        <div class="open_site" @click="toFilesPage">добавить фото</div>

        <div class="open_site" @click="logout">закончить сеанс</div>
      </div>
    </header>
    <main>
      <div class="main_content">
        <form @submit.prevent="fieldsSetter" class="main_form">
          <!-- ____________________________________ -->
          <div class="head_contebt_block">
            <div class="input_wrapper sub_head_contebt_block">
              <div class="admin_description">
                <img
                  class="screenshot"
                  src="../assets/img/admin/screenshots/home_header_title_first_part.png"
                />
                <div class="admin_text">
                  Верхняя часть заголовка в начале страницы.
                  <span class="admin_red_text"
                    >Не затрагивать странные конструкции выделенные знаками
                    "больше" "меньше"</span
                  >
                  от них зависит цвет возраста
                  <span span class="admin_gold_text"> 3-6 лет</span>
                </div>
              </div>
              <input
                required
                v-model="home_header_title_first_part_ua"
                placeholder="Введите текст"
                class="admin_input"
                type="text"
              />
            </div>
            <div class="input_wrapper sub_head_contebt_block">
              <div class="admin_description">
                <img
                  class="screenshot"
                  src="../assets/img/admin/screenshots/home_header_title_second_part.png"
                />
                <div class="admin_text">
                  Нижняя часть заголовка в начале страницы.
                  <span class="admin_red_text"
                    >Не затрагивать странные конструкции выделенные знаками
                    "больше" "меньше"</span
                  >
                  от них зависит цвет возраста
                  <span span class="admin_gold_text"> 6-7 лет</span>
                </div>
              </div>
              <input
                required
                v-model="home_header_title_second_part_ua"
                placeholder="Введите текст"
                class="admin_input"
                type="text"
              />
            </div>
            <div class="input_wrapper sub_head_contebt_block">
              <div class="admin_description">
                <img
                  class="screenshot"
                  src="../assets/img/admin/screenshots/home_header_text.png"
                />
                <div class="admin_text">
                  Текст который находится в начале страницы под заголовком,
                  <span class="admin_description_small_text"
                    >можно менять как угодно, но желательно чтобы текст был не
                    слишком длинный так как при слишком длинном тексте сайт
                    может не верно его отобразить
                  </span>
                </div>
              </div>
              <input
                required
                v-model="home_header_text_ua"
                placeholder="Введите текст"
                class="admin_input"
                type="text"
              />
            </div>
          </div>
          <!-- ____________________________________ -->

          <!-- ____________________________________ -->

          <div class="card_title">
            <div class="sub_card_title">
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot sub_screenshot"
                    src="../assets/img/admin/screenshots/groups_description_first_block_title.png"
                  />
                  <div class="admin_text">
                    Заголовок карточки 1 "Группы"
                    <span class="admin_red_text"
                      >Лучше не использовать слишком длинный текст</span
                    >
                  </div>
                </div>
                <input
                  required
                  v-model="groups_description_first_block_title_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot sub_screenshot"
                    src="../assets/img/admin/screenshots/groups_description_first_block_content.png"
                  />
                  <div class="admin_text">Текст карточки 1</div>
                </div>
                <input
                  required
                  v-model="groups_description_first_block_content_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
            </div>
            <div class="sub_card_title">
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot sub_screenshot"
                    src="../assets/img/admin/screenshots/groups_description_second_block_title.png"
                  />
                  <div class="admin_text">
                    Заголовок карточки 2 "Группы"
                    <span class="admin_red_text"
                      >Лучше не использовать слишком длинный текст</span
                    >
                  </div>
                </div>
                <input
                  required
                  v-model="groups_description_second_block_title_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot sub_screenshot"
                    src="../assets/img/admin/screenshots/groups_description_second_block_content.png"
                  />
                  <div class="admin_text">Текст карточки 2</div>
                </div>
                <input
                  required
                  v-model="groups_description_second_block_content_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
            </div>
            <!-- ___________ -->

            <div class="sub_card_title">
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot sub_screenshot"
                    src="../assets/img/admin/screenshots/groups_description_third_block_title.png"
                  />
                  <div class="admin_text">
                    Заголовок карточки 3 "Группы"
                    <span class="admin_red_text"
                      >Лучше не использовать слишком длинный текст</span
                    >
                  </div>
                </div>
                <input
                  required
                  v-model="groups_description_third_block_title_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot sub_screenshot"
                    src="../assets/img/admin/screenshots/groups_description_third_block_content.png"
                  />
                  <div class="admin_text">Текст карточки 3</div>
                </div>
                <input
                  required
                  v-model="groups_description_third_block_content_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
            </div>
            <!--_________________ -->

            <div class="sub_card_title">
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot sub_screenshot"
                    src="../assets/img/admin/screenshots/groups_description_fourth_block_title.png"
                  />
                  <div class="admin_text">
                    Заголовок карточки 4 "Группы"
                    <span class="admin_red_text"
                      >Лучше не использовать слишком длинный текст</span
                    >
                  </div>
                </div>
                <input
                  required
                  v-model="groups_description_fourth_block_title_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot sub_screenshot"
                    src="../assets/img/admin/screenshots/groups_description_fourth_block_content.png"
                  />
                  <div class="admin_text">Текст карточки 4</div>
                </div>
                <input
                  required
                  v-model="groups_description_fourth_block_content_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
            </div>
          </div>

          <!-- _________________________price_block___________ -->
          <div class="price_block">
            <div class="sub_price_block">
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/groups_description_first_block_12_price.png"
                  />
                  <div class="admin_text">
                    Цена за 12 занятий карточка<span class="admin_red_text"
                      >1</span
                    >
                    на странице "Группы и Стоимость"
                  </div>
                </div>
                <input
                  required
                  v-model="groups_description_first_block_12_price_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>

              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/groups_description_first_block_24_price.png"
                  />
                  <div class="admin_text">
                    Цена за 24 занятий карточка<span class="admin_red_text"
                      >1</span
                    >
                    на странице "Группы и Стоимость"
                  </div>
                </div>
                <input
                  required
                  v-model="groups_description_first_block_24_price_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
            </div>

            <div class="sub_price_block">
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/groups_description_second_block_12_price.png"
                  />
                  <div class="admin_text">
                    Цена за 12 занятий карточка<span class="admin_red_text"
                      >2</span
                    >
                    на странице "Группы и Стоимость"
                  </div>
                </div>
                <input
                  required
                  v-model="groups_description_second_block_12_price_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>

              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/groups_description_second_block_24_price.png"
                  />
                  <div class="admin_text">
                    Цена за 24 занятий карточка<span class="admin_red_text"
                      >2</span
                    >
                    на странице "Группы и Стоимость"
                  </div>
                </div>
                <input
                  required
                  v-model="groups_description_second_block_24_price_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
            </div>

            <div class="sub_price_block">
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/groups_description_third_block_12_price.png"
                  />
                  <div class="admin_text">
                    Цена за 12 занятий карточка<span class="admin_red_text"
                      >3</span
                    >
                    на странице "Группы и Стоимость"
                  </div>
                </div>
                <input
                  required
                  v-model="groups_description_third_block_12_price_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/groups_description_third_block_24_price.png"
                  />
                  <div class="admin_text">
                    Цена за 24 занятий карточка<span class="admin_red_text"
                      >3</span
                    >
                    на странице "Группы и Стоимость"
                  </div>
                </div>
                <input
                  required
                  v-model="groups_description_third_block_24_price_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
            </div>

            <div class="sub_price_block">
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/groups_description_fourth_block_12_price.png"
                  />
                  <div class="admin_text">
                    Цена за 12 занятий карточка<span class="admin_red_text"
                      >4</span
                    >
                    на странице "Группы и Стоимость"
                  </div>
                </div>
                <input
                  required
                  v-model="groups_description_fourth_block_12_price_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/groups_description_fourth_block_24_price.png"
                  />
                  <div class="admin_text">
                    Цена за 24 занятий карточка<span class="admin_red_text"
                      >4</span
                    >
                    на странице "Группы и Стоимость"
                  </div>
                </div>
                <input
                  required
                  v-model="groups_description_fourth_block_24_price_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
            </div>
          </div>

          <!-- __________________clock_block__________________ -->

          <div class="clock_block">
            <div class="input_wrapper sub_clock_block">
              <div class="admin_description">
                <img
                  class="screenshot small_screenshot"
                  src="../assets/img/admin/screenshots/timetable_clock_morning.png"
                />
                <div class="admin_text">
                  Часы которые встречаются на главной странице и в разделе
                  "Расписание". Обозначают группу которая идет в утреннее время.
                </div>
              </div>
              <input
                required
                v-model="timetable_clock_morning_ua"
                placeholder="Введите текст"
                class="admin_input"
                type="text"
              />
            </div>
            <div class="input_wrapper sub_clock_block">
              <div class="admin_description">
                <img
                  class="screenshot small_screenshot"
                  src="../assets/img/admin/screenshots/timetable_clock_evening.png"
                />
                <div class="admin_text">
                  Часы которые встречаются на главной странице и в разделе
                  "Расписание". Обозначают группу которая идет в вечернее время.
                </div>
              </div>
              <input
                required
                v-model="timetable_clock_evening_ua"
                placeholder="Введите текст"
                class="admin_input"
                type="text"
              />
            </div>
          </div>
          <!-- ____________________________________ -->

          <!-- _______________________card_title___________________ -->
          <div class="card_title">
            <!-- __________________________________________ -->

            <!-- ________________ -->
            <div class="sub_sub_card_title">
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/first_home_techniques_title.png"
                  />
                  <div class="admin_text">
                    Заголовок карточки 1
                    <p class="admin_red_text">
                      (не использовать слишком длинный текст)
                    </p>
                  </div>
                </div>
                <input
                  required
                  v-model="first_home_techniques_title_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/first_home_techniques_content.png"
                  />
                  <div class="admin_text">Текст карточки 1</div>
                </div>
                <input
                  required
                  v-model="first_home_techniques_content_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
            </div>
            <!-- ________________ -->
            <div class="sub_sub_card_title">
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/second_home_techniques_title.png"
                  />
                  <div class="admin_text">
                    Заголовок карточки 2
                    <p class="admin_red_text">
                      (не использовать слишком длинный текст)
                    </p>
                  </div>
                </div>
                <input
                  required
                  v-model="second_home_techniques_title_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/second_home_techniques_content.png"
                  />
                  <div class="admin_text">Текст карточки 2</div>
                </div>
                <input
                  required
                  v-model="second_home_techniques_content_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
            </div>
            <!-- ________________ -->
            <div class="sub_sub_card_title">
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/third_home_techniques_title.png"
                  />
                  <div class="admin_text">
                    Заголовок карточки 3
                    <p class="admin_red_text">
                      (не использовать слишком длинный текст)
                    </p>
                  </div>
                </div>
                <input
                  required
                  v-model="third_home_techniques_title_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/third_home_techniques_content.png"
                  />
                  <div class="admin_text">Текст карточки 3</div>
                </div>
                <input
                  required
                  v-model="third_home_techniques_content_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
            </div>
          </div>
          <!-- ________________ -->
          <div class="card_title">
            <div class="sub_sub_card_title">
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/fourth_home_techniques_title.png"
                  />
                  <div class="admin_text">
                    Заголовок карточки 4
                    <p class="admin_red_text">
                      (не использовать слишком длинный текст)
                    </p>
                  </div>
                </div>
                <input
                  required
                  v-model="fourth_home_techniques_title_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/fourth_home_techniques_content.png"
                  />
                  <div class="admin_text">Текст карточки 4</div>
                </div>
                <input
                  required
                  v-model="fourth_home_techniques_content_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
            </div>
            <!-- ________________ -->
            <div class="sub_sub_card_title">
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/fifth_home_techniques_title.png"
                  />
                  <div class="admin_text">
                    Заголовок карточки 5
                    <p class="admin_red_text">
                      (не использовать слишком длинный текст)
                    </p>
                  </div>
                </div>
                <input
                  required
                  v-model="fifth_home_techniques_title_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/fifth_home_techniques_content.png"
                  />
                  <div class="admin_text">Текст карточки 5</div>
                </div>
                <input
                  required
                  v-model="fifth_home_techniques_content_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
            </div>
            <!-- ________________ -->
            <div class="sub_sub_card_title">
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/sixth_home_techniques_title.png"
                  />
                  <div class="admin_text">
                    Заголовок карточки 6
                    <p class="admin_red_text">
                      (не использовать слишком длинный текст)
                    </p>
                  </div>
                </div>
                <input
                  required
                  v-model="sixth_home_techniques_title_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
              <div class="input_wrapper">
                <div class="admin_description">
                  <img
                    class="screenshot"
                    src="../assets/img/admin/screenshots/sixth_home_techniques_content.png"
                  />
                  <div class="admin_text">Текст карточки 6</div>
                </div>
                <input
                  required
                  v-model="sixth_home_techniques_content_ua"
                  placeholder="Введите текст"
                  class="admin_input"
                  type="text"
                />
              </div>
            </div>
            <!-- ________________ -->
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
import { mapActions, mapState } from "vuex";
export default {
  name: "Admin",
  data() {
    return {
      home_header_title_first_part_ua: "",
      home_header_title_second_part_ua: "",
      home_header_text_ua: "",
      groups_description_first_block_title_ua: "",
      groups_description_second_block_title_ua: "",
      groups_description_third_block_title_ua: "",
      groups_description_fourth_block_title_ua: "",
      groups_description_first_block_content_ua: "",
      groups_description_second_block_content_ua: "",
      groups_description_third_block_content_ua: "",
      groups_description_fourth_block_content_ua: "",
      groups_description_first_block_12_price_ua: "",
      groups_description_second_block_12_price_ua: "",
      groups_description_third_block_12_price_ua: "",
      groups_description_fourth_block_12_price_ua: "",
      groups_description_first_block_24_price_ua: "",
      groups_description_second_block_24_price_ua: "",
      groups_description_third_block_24_price_ua: "",
      groups_description_fourth_block_24_price_ua: "",
      timetable_clock_morning_ua: "",
      timetable_clock_evening_ua: "",
      first_home_techniques_title_ua: "",
      second_home_techniques_title_ua: "",
      third_home_techniques_title_ua: "",
      fourth_home_techniques_title_ua: "",
      fifth_home_techniques_title_ua: "",
      sixth_home_techniques_title_ua: "",
      first_home_techniques_content_ua: "",
      second_home_techniques_content_ua: "",
      third_home_techniques_content_ua: "",
      fourth_home_techniques_content_ua: "",
      fifth_home_techniques_content_ua: "",
      sixth_home_techniques_content_ua: "",
      isAdmin: false
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("jwt");
      this.$router.push({ name: "Home" });
    },
    toManager() {
      this.$router.push({ name: "Manager" });
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
    fieldsSetter() {
      this.setFields([
        {
          fieldName: "home_header_title_first_part_ua",
          fieldText: this.home_header_title_first_part_ua
        },
        {
          fieldName: "home_header_title_second_part_ua",
          fieldText: this.home_header_title_second_part_ua
        },
        {
          fieldName: "home_header_text_ua",
          fieldText: this.home_header_text_ua
        },
        {
          fieldName: "timetable_clock_morning_ua",
          fieldText: this.timetable_clock_morning_ua
        },
        {
          fieldName: "timetable_clock_evening_ua",
          fieldText: this.timetable_clock_evening_ua
        },
        {
          fieldName: "first_home_techniques_title_ua",
          fieldText: this.first_home_techniques_title_ua
        },
        {
          fieldName: "second_home_techniques_title_ua",
          fieldText: this.second_home_techniques_title_ua
        },
        {
          fieldName: "third_home_techniques_title_ua",
          fieldText: this.third_home_techniques_title_ua
        },
        {
          fieldName: "fourth_home_techniques_title_ua",
          fieldText: this.fourth_home_techniques_title_ua
        },
        {
          fieldName: "fifth_home_techniques_title_ua",
          fieldText: this.fifth_home_techniques_title_ua
        },
        {
          fieldName: "sixth_home_techniques_title_ua",
          fieldText: this.sixth_home_techniques_title_ua
        },
        {
          fieldName: "first_home_techniques_content_ua",
          fieldText: this.first_home_techniques_content_ua
        },
        {
          fieldName: "second_home_techniques_content_ua",
          fieldText: this.second_home_techniques_content_ua
        },
        {
          fieldName: "third_home_techniques_content_ua",
          fieldText: this.third_home_techniques_content_ua
        },
        {
          fieldName: "fourth_home_techniques_content_ua",
          fieldText: this.fourth_home_techniques_content_ua
        },
        {
          fieldName: "fifth_home_techniques_content_ua",
          fieldText: this.fifth_home_techniques_content_ua
        },
        {
          fieldName: "sixth_home_techniques_content_ua",
          fieldText: this.sixth_home_techniques_content_ua
        },
        {
          fieldName: "groups_description_first_block_title_ua",
          fieldText: this.groups_description_first_block_title_ua
        },
        {
          fieldName: "groups_description_second_block_title_ua",
          fieldText: this.groups_description_second_block_title_ua
        },
        {
          fieldName: "groups_description_third_block_title_ua",
          fieldText: this.groups_description_third_block_title_ua
        },
        {
          fieldName: "groups_description_fourth_block_title_ua",
          fieldText: this.groups_description_fourth_block_title_ua
        },
        {
          fieldName: "groups_description_first_block_content_ua",
          fieldText: this.groups_description_first_block_content_ua
        },
        {
          fieldName: "groups_description_second_block_content_ua",
          fieldText: this.groups_description_second_block_content_ua
        },
        {
          fieldName: "groups_description_third_block_content_ua",
          fieldText: this.groups_description_third_block_content_ua
        },
        {
          fieldName: "groups_description_fourth_block_content_ua",
          fieldText: this.groups_description_fourth_block_content_ua
        },
        {
          fieldName: "groups_description_first_block_12_price_ua",
          fieldText: this.groups_description_first_block_12_price_ua
        },
        {
          fieldName: "groups_description_second_block_12_price_ua",
          fieldText: this.groups_description_second_block_12_price_ua
        },
        {
          fieldName: "groups_description_third_block_12_price_ua",
          fieldText: this.groups_description_third_block_12_price_ua
        },
        {
          fieldName: "groups_description_fourth_block_12_price_ua",
          fieldText: this.groups_description_fourth_block_12_price_ua
        },
        {
          fieldName: "groups_description_first_block_24_price_ua",
          fieldText: this.groups_description_first_block_24_price_ua
        },
        {
          fieldName: "groups_description_second_block_24_price_ua",
          fieldText: this.groups_description_second_block_24_price_ua
        },
        {
          fieldName: "groups_description_third_block_24_price_ua",
          fieldText: this.groups_description_third_block_24_price_ua
        },
        {
          fieldName: "groups_description_fourth_block_24_price_ua",
          fieldText: this.groups_description_fourth_block_24_price_ua
        }
      ]);
    },
    ...mapActions(["getFields", "setFields", "checkIsAdmin"])
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
    const isAdmin = await this.checkIsAdmin();
    this.isAdmin = isAdmin.data;
  }
};
</script>

<style scoped src="../assets/styles/style.css" lang="css"></style>
<style scoped lang="css">
img {
  height: auto;
}

.screenshot {
  width: 50%;
  padding: 0 0 10px 0;
}
.sub_screenshot {
  width: 90%;
}
.small_screenshot {
  width: 30%;
}

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

.admin_description_small_text {
  font-family: "EuropeC_400", sans-serif;
  font-size: 14px;
  color: #142142;
}

.admin_gold_text {
  color: #efe134;
}
.admin_red_text {
  color: crimson;
  padding: 0;
  font-size: 12px;
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

.admin_title {
  width: 80%;
  font-size: 3vw;
  padding-bottom: 2%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
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
  /* flex-wrap: wrap; */
}

.main_content {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0 48px 0;
  background-image: url(../assets/img/background/main_bg_white.jpg);
  background-repeat: repeat-y;
}

.logout,
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
}

.logout:hover,
.open_site:hover,
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
.price_block,
.clock_block,
.head_contebt_block,
.card_title {
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  padding: 20px;
  margin: 0 0 40px 0;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 34px -7px rgba(0, 0, 0, 0.75);
  justify-content: space-around;
  align-items: center;
}
.sub_head_contebt_block,
.sub_sub_card_title {
  width: 30%;
}
.sub_price_block,
.sub_card_title {
  width: 24%;
}

.sub_price_block:hover,
.sub_card_title:hover,
.sub_head_contebt_block:hover,
.sub_sub_card_title:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.03);
}

.sub_price_block,
.sub_card_title,
.sub_head_contebt_block,
.sub_sub_card_title {
  transition: 0.8s;
  border-radius: 10px;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
}

.sub_clock_block {
  width: 50%;
}
</style>
