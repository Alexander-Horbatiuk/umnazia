<template>
  <div class="main_wrapper">
    <header>
      <div class="navigation_list_wrapper admin_header">
        <div class="open_site" @click="toMainPage">перейти на сайт</div>
      </div>
    </header>
    <main>
      <div class="main_content">
        <form @submit.prevent="fieldsSetter" class="main_form">
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Верхняя часть заголовка в начале страницы. Желательно не
                затрагивать странные конструкции выделенные знаками "больше"
                "меньше" ибо от них зависит цвет возраста детей принимаемых в
                группы
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/home_header_title_first_part.png"
              />
            </div>
            <input
              required
              v-model="home_header_title_first_part"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Нижняя часть заголовка в начале страницы. Опять таки желательно
                не затрагивать конструкции выделенные знаками "больше" "меньше",
                от них зависит цвет возраста детей принимаемых в группы
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/home_header_title_second_part.png"
              />
            </div>
            <input
              required
              v-model="home_header_title_second_part"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Текст который находится в начале страницы под заголовком, можно
                менять как угодно, но желательно чтобы текст был не слишком
                длинный так как при слишком длинном тексте сайт может не верно
                его отобразить
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/home_header_text.png"
              />
            </div>
            <input
              required
              v-model="home_header_text"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Заголовок первой карточки раздела "Группы" который встречается
                на главной странице и на странице "Группы и Стоимость". Лучше не
                использовать слишком длинный текст
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_first_block_title.png"
              />
            </div>
            <input
              required
              v-model="groups_description_first_block_title"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Текст первой карточки раздела "Группы" который встречается на
                главной странице и на странице "Группы и Стоимость"
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_first_block_content.png"
              />
            </div>
            <input
              required
              v-model="groups_description_first_block_content"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Заголовок второй карточки раздела "Группы" который встречается
                на главной странице и на странице "Группы и Стоимость". Лучше не
                использовать слишком длинный текст
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_second_block_title.png"
              />
            </div>
            <input
              required
              v-model="groups_description_second_block_title"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Текст второй карточки раздела "Группы" который встречается на
                главной странице и на странице "Группы и Стоимость"
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_second_block_content.png"
              />
            </div>
            <input
              required
              v-model="groups_description_second_block_content"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Заголовок третей карточки раздела "Группы" который встречается
                на главной странице и на странице "Группы и Стоимость". Лучше не
                использовать слишком длинный текст
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_third_block_title.png"
              />
            </div>
            <input
              required
              v-model="groups_description_third_block_title"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Текст третей карточки раздела "Группы" который встречается на
                главной странице и на странице "Группы и Стоимость"
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_third_block_content.png"
              />
            </div>
            <input
              required
              v-model="groups_description_third_block_content"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Заголовок четвертой карточки раздела "Группы" который
                встречается на главной странице и на странице "Группы и
                Стоимость". Лучше не использовать слишком длинный текст
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_fourth_block_title.png"
              />
            </div>
            <input
              required
              v-model="groups_description_fourth_block_title"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Текст четвертой карточки раздела "Группы" который встречается на
                главной странице и на странице "Группы и Стоимость"
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_fourth_block_content.png"
              />
            </div>
            <input
              required
              v-model="groups_description_fourth_block_content"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Цена за 12 занятий указанная в первой карточке раздела с
                группами на странице "Группы и Стоимость"
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_first_block_12_price.png"
              />
            </div>
            <input
              required
              v-model="groups_description_first_block_12_price"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Цена за 12 занятий указанная во второй карточке раздела с
                группами на странице "Группы и Стоимость"
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_second_block_12_price.png"
              />
            </div>
            <input
              required
              v-model="groups_description_second_block_12_price"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Цена за 12 занятий указанная в третей карточке раздела с
                группами на странице "Группы и Стоимость"
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_third_block_12_price.png"
              />
            </div>
            <input
              required
              v-model="groups_description_third_block_12_price"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Цена за 12 занятий указанная в четвертой карточке раздела с
                группами на странице "Группы и Стоимость"
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_fourth_block_12_price.png"
              />
            </div>
            <input
              required
              v-model="groups_description_fourth_block_12_price"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Цена за 24 занятия указанная в первой карточке раздела с
                группами на странице "Группы и Стоимость"
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_first_block_24_price.png"
              />
            </div>
            <input
              required
              v-model="groups_description_first_block_24_price"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Цена за 24 занятия указанная во второй карточке раздела с
                группами на странице "Группы и Стоимость"
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_second_block_24_price.png"
              />
            </div>
            <input
              required
              v-model="groups_description_second_block_24_price"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Цена за 24 занятия указанная в третей карточке раздела с
                группами на странице "Группы и Стоимость"
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_third_block_24_price.png"
              />
            </div>
            <input
              required
              v-model="groups_description_third_block_24_price"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Цена за 24 занятия указанная в четвертой карточке раздела с
                группами на странице "Группы и Стоимость"
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/groups_description_fourth_block_24_price.png"
              />
            </div>
            <input
              required
              v-model="groups_description_fourth_block_24_price"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Часы которые появляются на главной странице и в разделе
                "Расписание". Обозначают группу которая идет в утреннее время.
                Использовать текст покороче, а в идеале просто менять время при
                необходимости
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/timetable_clock_morning.png"
              />
            </div>
            <input
              required
              v-model="timetable_clock_morning"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Часы которые появляются на главной странице и в разделе
                "Расписание". Обозначают группу которая идет в вечернее время.
                Использовать текст покороче, а в идеале просто менять время при
                необходимости
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/timetable_clock_evening.png"
              />
            </div>
            <input
              required
              v-model="timetable_clock_evening"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Заголовок карточки 1, на главной странице описывающего правила
                академии,
                <p class="admin_red_text">
                  (не использовать слишком длинный текст)
                </p>
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/first_home_techniques_title.png"
              />
            </div>
            <input
              required
              v-model="first_home_techniques_title"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Текст карточки 1, на главной странице описывающего правила
                академии
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/first_home_techniques_content.png"
              />
            </div>
            <input
              required
              v-model="first_home_techniques_content"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Заголовок карточки 2, на главной странице описывающего правила
                академии,
                <p class="admin_red_text">
                  (не использовать слишком длинный текст)
                </p>
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/second_home_techniques_title.png"
              />
            </div>
            <input
              required
              v-model="second_home_techniques_title"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Текст карточки 2, на главной странице описывающего правила
                академии
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/second_home_techniques_content.png"
              />
            </div>
            <input
              required
              v-model="second_home_techniques_content"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Заголовок карточки 3, на главной странице описывающего правила
                академии,
                <p class="admin_red_text">
                  (не использовать слишком длинный текст)
                </p>
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/third_home_techniques_title.png"
              />
            </div>
            <input
              required
              v-model="third_home_techniques_title"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Текст карточки 3, на главной странице описывающего правила
                академии
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/third_home_techniques_content.png"
              />
            </div>
            <input
              required
              v-model="third_home_techniques_content"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Заголовок карточки 4, на главной странице описывающего правила
                академии,
                <p class="admin_red_text">
                  (не использовать слишком длинный текст)
                </p>
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/fourth_home_techniques_title.png"
              />
            </div>
            <input
              required
              v-model="fourth_home_techniques_title"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Текст карточки 4, на главной странице описывающего правила
                академии
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/fourth_home_techniques_content.png"
              />
            </div>
            <input
              required
              v-model="fourth_home_techniques_content"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Заголовок карточки 5, на главной странице описывающего правила
                академии,
                <p class="admin_red_text">
                  (не использовать слишком длинный текст)
                </p>
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/fifth_home_techniques_title.png"
              />
            </div>
            <input
              required
              v-model="fifth_home_techniques_title"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Текст 5 карточки, на главной странице описывающего правила
                академии
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/fifth_home_techniques_content.png"
              />
            </div>
            <input
              required
              v-model="fifth_home_techniques_content"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Заголовок карточки 6, на главной странице описывающего правила
                академии,
                <p class="admin_red_text">
                  (не использовать слишком длинный текст)
                </p>
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/sixth_home_techniques_title.png"
              />
            </div>
            <input
              required
              v-model="sixth_home_techniques_title"
              placeholder="Введите текст"
              class="admin_input"
              type="text"
            />
          </div>
          <div class="input_wrapper">
            <div class="admin_description">
              <div class="admin_text">
                Текст карточки 6, на главной странице описывающего правила
                академии
              </div>
              <img
                class="screenshot"
                src="../assets/img/admin/screenshots/sixth_home_techniques_content.png"
              />
            </div>
            <input
              required
              v-model="sixth_home_techniques_content"
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
import { mapActions, mapState } from "vuex";
export default {
  name: "Admin",
  data() {
    return {
      home_header_title_first_part: "",
      home_header_title_second_part: "",
      home_header_text: "",
      groups_description_first_block_title: "",
      groups_description_second_block_title: "",
      groups_description_third_block_title: "",
      groups_description_fourth_block_title: "",
      groups_description_first_block_content: "",
      groups_description_second_block_content: "",
      groups_description_third_block_content: "",
      groups_description_fourth_block_content: "",
      groups_description_first_block_12_price: "",
      groups_description_second_block_12_price: "",
      groups_description_third_block_12_price: "",
      groups_description_fourth_block_12_price: "",
      groups_description_first_block_24_price: "",
      groups_description_second_block_24_price: "",
      groups_description_third_block_24_price: "",
      groups_description_fourth_block_24_price: "",
      timetable_clock_morning: "",
      timetable_clock_evening: "",
      first_home_techniques_title: "",
      second_home_techniques_title: "",
      third_home_techniques_title: "",
      fourth_home_techniques_title: "",
      fifth_home_techniques_title: "",
      sixth_home_techniques_title: "",
      first_home_techniques_content: "",
      second_home_techniques_content: "",
      third_home_techniques_content: "",
      fourth_home_techniques_content: "",
      fifth_home_techniques_content: "",
      sixth_home_techniques_content: ""
    };
  },
  methods: {
    toMainPage() {
      this.$router.push({ name: "Home" });
    },
    fieldsSetter() {
      this.setFields([
        {
          fieldName: "home_header_title_first_part",
          fieldText: this.home_header_title_first_part
        },
        {
          fieldName: "home_header_title_second_part",
          fieldText: this.home_header_title_second_part
        },
        {
          fieldName: "home_header_text",
          fieldText: this.home_header_text
        },
        {
          fieldName: "timetable_clock_morning",
          fieldText: this.timetable_clock_morning
        },
        {
          fieldName: "timetable_clock_evening",
          fieldText: this.timetable_clock_evening
        },
        {
          fieldName: "first_home_techniques_title",
          fieldText: this.first_home_techniques_title
        },
        {
          fieldName: "second_home_techniques_title",
          fieldText: this.second_home_techniques_title
        },
        {
          fieldName: "third_home_techniques_title",
          fieldText: this.third_home_techniques_title
        },
        {
          fieldName: "fourth_home_techniques_title",
          fieldText: this.fourth_home_techniques_title
        },
        {
          fieldName: "fifth_home_techniques_title",
          fieldText: this.fifth_home_techniques_title
        },
        {
          fieldName: "sixth_home_techniques_title",
          fieldText: this.sixth_home_techniques_title
        },
        {
          fieldName: "first_home_techniques_content",
          fieldText: this.first_home_techniques_content
        },
        {
          fieldName: "second_home_techniques_content",
          fieldText: this.second_home_techniques_content
        },
        {
          fieldName: "third_home_techniques_content",
          fieldText: this.third_home_techniques_content
        },
        {
          fieldName: "fourth_home_techniques_content",
          fieldText: this.fourth_home_techniques_content
        },
        {
          fieldName: "fifth_home_techniques_content",
          fieldText: this.fifth_home_techniques_content
        },
        {
          fieldName: "sixth_home_techniques_content",
          fieldText: this.sixth_home_techniques_content
        },
        {
          fieldName: "groups_description_first_block_title",
          fieldText: this.groups_description_first_block_title
        },
        {
          fieldName: "groups_description_second_block_title",
          fieldText: this.groups_description_second_block_title
        },
        {
          fieldName: "groups_description_third_block_title",
          fieldText: this.groups_description_third_block_title
        },
        {
          fieldName: "groups_description_fourth_block_title",
          fieldText: this.groups_description_fourth_block_title
        },
        {
          fieldName: "groups_description_first_block_content",
          fieldText: this.groups_description_first_block_content
        },
        {
          fieldName: "groups_description_second_block_content",
          fieldText: this.groups_description_second_block_content
        },
        {
          fieldName: "groups_description_third_block_content",
          fieldText: this.groups_description_third_block_content
        },
        {
          fieldName: "groups_description_fourth_block_content",
          fieldText: this.groups_description_fourth_block_content
        },
        {
          fieldName: "groups_description_first_block_12_price",
          fieldText: this.groups_description_first_block_12_price
        },
        {
          fieldName: "groups_description_second_block_12_price",
          fieldText: this.groups_description_second_block_12_price
        },
        {
          fieldName: "groups_description_third_block_12_price",
          fieldText: this.groups_description_third_block_12_price
        },
        {
          fieldName: "groups_description_fourth_block_12_price",
          fieldText: this.groups_description_fourth_block_12_price
        },
        {
          fieldName: "groups_description_first_block_24_price",
          fieldText: this.groups_description_first_block_24_price
        },
        {
          fieldName: "groups_description_second_block_24_price",
          fieldText: this.groups_description_second_block_24_price
        },
        {
          fieldName: "groups_description_third_block_24_price",
          fieldText: this.groups_description_third_block_24_price
        },
        {
          fieldName: "groups_description_fourth_block_24_price",
          fieldText: this.groups_description_fourth_block_24_price
        }
      ]);
    },
    ...mapActions(["getFields", "setFields"])
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

<style scoped src="../assets/styles/style.css" lang="css"></style>
<style scoped lang="css">
img {
  height: auto;
}

.screenshot {
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
  width: 50%;
  height: 100%;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
}
.admin_red_text {
  color: crimson;
  padding: 0;
}
.input_wrapper {
  width: 70%;
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
  padding-bottom: 5%;
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
  -ms-flex-direction: row;
  flex-direction: row;
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
  padding-right: 2%;
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
</style>
