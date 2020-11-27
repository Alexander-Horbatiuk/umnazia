<template>
  <div class="main_wrapper">
    <header>
      <div class="contacts_wrapper">
        <!-- _____________________________________________________first_block_________________________ -->
        <div class="first_block">
          <!-- ____________________btn_________________________ -->
          <div class="logo">
            <img
              src="../../assets/img/logo/logo_tablet.png"
              alt="logo"
              width="160"
              class="logo_tablet"
            />
            <img
              src="../../assets/img/logo/logo_phone.png"
              alt="logo"
              width="146"
              class="logo_phone"
            />
          </div>

          <!-- ____________________btn_________________________ -->
          <div class="btn_lang_wrapper">
            <div
              class="text_700_12"
              :class="{ btn_lang_open: headLangOpen, btn_lang: !headLangOpen }"
            >
              <div class="text_700_12 main_lang_button" @click="toggleLang">
                ua
              </div>
              <router-link v-if="headLangOpen" class="btn_lang_ua_open" to="/"
                >ru</router-link
              >
            </div>
          </div>
        </div>
        <!-- ________________________________________________________second_block________________________ -->

        <div class="second_block">
          <!--_____________________phones________________________ -->

          <div class="phones text_700_12">
            <div class="phone_number_wrap tel_position">
              <a href="tel:+380970115588" class="num_link_header"
                >+ 38 (097) 011 55 88</a
              >
            </div>

            <div>
              <a href="tel:+380931936267" class="num_link_header"
                >+ 38 (093) 193 62 67</a
              >
            </div>
          </div>
          <div class="big_logo">
            <a class="link_logo">
              <img
                src="../../assets/img/logo/logo.png"
                alt="owl logo"
                width="308"
                class="main_logo"
              />
            </a>
          </div>

          <!--_____________________adress________________________ -->
          <div class="adress">
            <div class="header_adress_text text_400_12">Ми знаходимось:</div>
            <div class="text_700_12">
              <a
                href="https://goo.gl/maps/4sFRPgncGGnP5Kch8"
                target="_blank"
                class="header_text_map_link"
                >м.Одеса, просп. Шевченко 27</a
              >
            </div>
          </div>

          <!--_____________________social_wrapper________________ -->
          <div class="header_social_wrapper">
            <div class="social_text text_400_12">Наші соц мережі</div>
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
                    src="../../assets/img/img_png//youtube.png"
                    alt="youtube"
                  />
                </a>
              </div>
            </div>
          </div>
          <!-- ____________ -->
        </div>
        <!-- ______ -->
      </div>

      <!-- _____________________________________________menu________________ -->
      <div class="navigation_list_wrapper">
        <div class="contacts_wrapper contacts_wrapper_menu">
          <div class="sub_navigation_list text_700_13">
            <div class="el_menu">
              <router-link to="/about/ua" class="el_menu_link"
                >Про нас</router-link
              >
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
                >Групи та Вартість</router-link
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
    <!-- ________________________________________________________________________ -->
    <div class="wrapper_all">
      <main>
        <div class="backgraund_visor">
          <!-- ______________________________________________________ -->
          <div class="content_box_age">
            <img
              src="../../assets/img/background/frame_on_visor.png"
              alt=""
              class="frame_on_visor"
            />
            <div class="sub_content_box_age">
              <div
                class="box_age_one text_700_24"
                v-html="home_header_title_first_part_ua"
              ></div>
              <div
                class="box_age_two text_700_24"
                v-html="home_header_title_second_part_ua"
              ></div>
              <div
                class="content_box_age_text text_400_18"
                v-html="home_header_text_ua"
              ></div>
              <div
                @click="showModal('b_one')"
                class="content_box_age_btn text_700_16 btn_rtans"
              >
                <img
                  v-if="!b_one"
                  src="../../assets/img/img_png/btn_yellow.png"
                  alt="button"
                  class="btn_yellow"
                />
                <img
                  v-else
                  src="../../assets/img/img_png/btn_orange.png"
                  alt="button"
                  class="btn_orange"
                />

                <p v-if="!b_one" class="btn_text">Записатися в групу</p>
                <p v-else class="btn_text" style="color: white">
                  Записатися в групу
                </p>
              </div>
            </div>
          </div>

          <!-- _______________________bg_ander_header________________________ -->

          <div class="bg_ander_header"></div>
        </div>

        <!-- _______________________contant________________________ -->

        <div class="wrapper_contant">
          <!-- _______________________________CLOUDS_________________________________________ -->
          <img
            src="../../assets/img/img_png/cloud_left.png"
            alt="cloud"
            class="cloud_left"
          />
          <img
            src="../../assets/img/img_png/cloud_right.png"
            alt="cloud"
            class="cloud_right"
          />
          <!-- _______________________________CLOUDS_TABLET________________________________________ -->
          <img
            src="../../assets/img/img_png/cloud_right_tablet.png"
            alt="cloud"
            class="cloud_right_tablet"
          />
          <img
            src="../../assets/img/img_png/cloud_left_tablet.png"
            alt="cloud"
            class="cloud_left_tablet"
          />

          <div class="wrapper_for_methodology">
            <div class="header_methodology text_700_35">
              <h3>методика</h3>
            </div>
            <div class="sub_header_methodology text_400_18">
              <p>
                Кожен день
                <span class="text_b text_700_35">нове</span> мовне середовище
              </p>
              <p>
                Навчання на <span class="text_b text_700_35">трьох</span> мовах
              </p>
            </div>
            <div class="text_header_methodology text_400_18">
              <span>
                Заняття проходять за ексклюзивною методикою мовного занурення на
                трьох мовах - російською, українською та англійською і розділені
                на блоки- дискусійні, гуманітарний, математичний і науковий.
                Кожен блок включає в себе розвиток творчих здібностей дитини -
                ліплення, малювання, розвиток дрібної і великої моторики,
                сюжетно-рольові ігри, ігри на розвиток уяви.
              </span>
            </div>
            <!-- ________book_______________________________________________ -->
            <div class="wrap_book">
              <div class="book_">
                <img
                  src="../../assets/img/img_png/book_ua.png"
                  alt=""
                  width="161"
                  height="206"
                  class="book_img"
                />
                <img
                  src="../../assets/img/img_png/favicon_book.png"
                  alt=""
                  width="43"
                  height="44"
                  class="favicon_logo"
                />
                <span class="text_on_book text_700_35">English</span>
              </div>
              <div class="book_">
                <img
                  src="../../assets/img/img_png/book_ua.png"
                  alt=""
                  width="224"
                  height="287"
                  class="book_img_center"
                />
                <img
                  src="../../assets/img/img_png/favicon_book.png"
                  alt=""
                  width="53"
                  height="58"
                  class="favicon_logo_ua"
                />
                <span class="text_on_book_center text_700_35">Українська</span>
              </div>
              <div class="book_">
                <img
                  src="../../assets/img/img_png/book_ua.png"
                  alt=""
                  width="161"
                  height="206"
                  class="book_img"
                />
                <img
                  src="../../assets/img/img_png/favicon_book.png"
                  alt=""
                  width="43"
                  height="44"
                  class="favicon_logo"
                />
                <span class="text_on_book text_700_35">Русский</span>
              </div>
            </div>
          </div>

          <!-- ________group_____________________________менять_________________ -->
          <div class="wrapp_group">
            <div class="box_line_heading">
              <div class="heading_text">
                <h3>групи</h3>
              </div>
            </div>

            <div
              class="box_age_groups"
              :class="{
                readMorer:
                  groups_description_first_block_content_show ||
                  groups_description_second_block_content_show
              }"
            >
              <div class="age_groups z_index_four">
                <div class="circle_age_groups">
                  <img
                    src="../../assets/img/img_svg/img_group_one.svg"
                    alt="children"
                    class="img_age_group img_group_one"
                  />
                </div>
                <div class="content_header_text">
                  <p class="header_groups">
                    {{ groups_description_first_block_title_ua }}
                  </p>
                  <span class="text_group">
                    {{ groups_description_first_block_content_show_text }}
                  </span>
                </div>
                <div
                  v-if="
                    groups_description_first_block_content_show_text.length >
                      220
                  "
                >
                  <div
                    @click="
                      readMore('groups_description_first_block_content_show')
                    "
                    v-if="!groups_description_first_block_content_show"
                    class="btn_read_text"
                  >
                    читати повністю
                  </div>
                  <div
                    @click="
                      hideReadMore(
                        'groups_description_first_block_content_show'
                      )
                    "
                    v-else
                    class="btn_hide_text"
                  >
                    приховати
                  </div>
                </div>
              </div>

              <div class="age_groups z_index_three">
                <div class="circle_age_groups">
                  <img
                    src="../../assets/img/img_svg/img_group_two.svg"
                    alt="children"
                    class="img_age_group img_group_two"
                  />
                </div>
                <div class="content_header_text">
                  <p class="header_groups">
                    {{ groups_description_second_block_title_ua }}
                  </p>
                  <span class="text_group"
                    >{{ groups_description_second_block_content_show_text }}
                  </span>
                </div>
                <div
                  v-if="
                    groups_description_second_block_content_show_text.length >
                      220
                  "
                >
                  <div
                    @click="
                      readMore('groups_description_second_block_content_show')
                    "
                    v-if="!groups_description_second_block_content_show"
                    class="btn_read_text"
                  >
                    читати повністю
                  </div>
                  <div
                    @click="
                      hideReadMore(
                        'groups_description_second_block_content_show'
                      )
                    "
                    v-else
                    class="btn_hide_text"
                  >
                    приховати
                  </div>
                </div>
              </div>
            </div>

            <div
              class="box_age_groups"
              :class="{
                readMorer:
                  groups_description_third_block_content_show ||
                  groups_description_fourth_block_content_show
              }"
            >
              <div class="age_groups z_index_two">
                <div class="circle_age_groups">
                  <img
                    src="../../assets/img/img_svg/img_group_three.svg"
                    alt="children"
                    class="img_age_group img_group_three"
                  />
                </div>
                <div class="content_header_text">
                  <p class="header_groups">
                    {{ groups_description_third_block_title_ua }}
                  </p>
                  <span class="text_group"
                    >{{ groups_description_third_block_content_show_text }}
                  </span>
                </div>
                <div
                  v-if="
                    groups_description_third_block_content_show_text.length >
                      220
                  "
                >
                  <div
                    @click="
                      readMore('groups_description_third_block_content_show')
                    "
                    v-if="!groups_description_third_block_content_show"
                    class="btn_read_text"
                  >
                    читати повністю
                  </div>
                  <div
                    @click="
                      hideReadMore(
                        'groups_description_third_block_content_show'
                      )
                    "
                    v-else
                    class="btn_hide_text"
                  >
                    приховати
                  </div>
                </div>
              </div>
              <div class="age_groups z_index_one">
                <div class="circle_age_groups">
                  <img
                    src="../../assets/img/img_svg/img_group_four.svg"
                    alt="children"
                    class="img_age_group img_group_four"
                  />
                </div>
                <div class="content_header_text">
                  <p class="header_groups">
                    {{ groups_description_fourth_block_title_ua }}
                  </p>
                  <span class="text_group">{{
                    groups_description_fourth_block_content_show_text
                  }}</span>
                </div>
                <div
                  v-if="
                    groups_description_fourth_block_content_show_text.length >
                      220
                  "
                >
                  <div
                    @click="
                      readMore('groups_description_fourth_block_content_show')
                    "
                    v-if="!groups_description_fourth_block_content_show"
                    class="btn_read_text"
                  >
                    читати повністю
                  </div>
                  <div
                    @click="
                      hideReadMore(
                        'groups_description_fourth_block_content_show'
                      )
                    "
                    v-else
                    class="btn_hide_text"
                  >
                    приховати
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ___________________________________________________________TIME_______ -->
          <div class="training_format_wrapper">
            <div class="box_line_heading">
              <div class="heading_text">
                <h3>формат занять</h3>
              </div>
            </div>

            <div class="class_format_text">
              <p>
                Працюємо <span class="text_b text_700_35">6 днів</span> в
                тиждень у (форматі - Полуднівка)
              </p>
            </div>

            <div class="clocks_wrapper">
              <div class="class_hours class_hours_9am">
                <div class="time_text_9am text_700_35">
                  <p>{{ timetable_clock_morning_ua }}</p>
                </div>

                <div @click="showModal('b_two')" class="text_700_35">
                  <button
                    v-if="!b_two"
                    class="training_format_submit_btn btn_rtans"
                  >
                    Записатися в<br />
                    групу
                  </button>
                  <button
                    v-else
                    class="training_format_submit_orange_btn btn_rtans"
                  >
                    Записатися в<br />
                    групу
                  </button>
                </div>
              </div>

              <div class="class_hours class_hours_14pm">
                <div class="time_text_14pm text_700_35">
                  <p>{{ timetable_clock_evening_ua }}</p>
                </div>

                <div @click="showModal('b_three')" class="text_700_35">
                  <button
                    v-if="!b_three"
                    class="training_format_submit_btn btn_rtans"
                  >
                    Записатися в<br />
                    групу
                  </button>
                  <button
                    v-else
                    class="training_format_submit_orange_btn btn_rtans"
                  >
                    Записатися в<br />
                    групу
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- __________________CIRCLE___CENTER___________________CIRCLE___CENTER_______________ -->
          <div class="wrap_center_circle">
            <div class="box_line_heading center_circle_header">
              <div class="heading_text center_circle_header_text">
                <h3>Наші переваги</h3>
              </div>
            </div>
            <!-- ___________________WRAP____CIRCLE_____________ -->
            <div class="sub_wrap_central_circle">
              <!-- ___________________________CIRCLE_____________ -->
              <div class="central_circle">
                <div
                  v-if="isCurrentSlide(1)"
                  class="central_circle_content_one cllass_for_children"
                >
                  <p class="center_circ_bg_heading">
                    Хатинка - чітальня на трьох мовах
                  </p>
                  <span class="center_cercle_text">
                    Основою формування грамотної і красивої мови є читання.
                    Читання - це фундамент знань, завдяки якому у дитини
                    формуються поняття про закони і правила, соціальних аспектів
                    спілкування, баченню себе в єдиній зв'язці з навколишнім
                    середовищем і людьми. На наших заняттях приділяється велика
                    увага читання та обговорення прочитаного на трьох мовах
                    (російською, українською та англійською. У дітей
                    закріплюються нейронні зв'язки, при яких мови не змішуються,
                    а чітко розділені між собою.
                    <br />
                    Дитина вчиться переказувати, висловлювати свою думка,
                    аргументувати і доводити свою точку зору, слухати
                    співрозмовника і проявляти емпатію, ставити себе на місце
                    героїв книг і проектувати їх вчинки на себе, вмінню думати
                    наперед, розвивати стратегічне мислення
                  </span>
                </div>

                <div
                  v-if="isCurrentSlide(2)"
                  class="central_circle_content_two cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Підготовка до школи</p>
                  <p class="center_cercle_text text_two_circ">
                    Курс включає в себе різні види діяльності, які швидко
                    змінюють один одного:
                  </p>
                  <div class="sub_center_cercle_text">
                    <span class="sub_cercle_text_one">
                      <span class="psevdo">
                        розвиток математичних навичок
                      </span>
                      <span class="psevdo"> завдання на логіку </span>
                      <span class="psevdo"> навчання читанню </span>
                      <span class="psevdo"> розвиток мовлення </span>
                      <span class="psevdo"> підготовка кисті до листа </span>
                      <span class="psevdo"> лист </span>
                      <span class="psevdo"> розвиток пам'яті </span>
                    </span>
                    <span class="sub_cercle_text">
                      <span class="psevdo"> пізнання навколишнього світу</span>
                      <span class="psevdo">ТРИЗ</span>
                      <span class="psevdo"> Українська мова </span>
                      <span class="psevdo">
                        застосування авторс методику заснованої на методиці
                        Домана і кубиках Чаплигіна
                      </span>
                      <span class="psevdo"> англійська мова</span>
                    </span>
                  </div>
                </div>

                <div
                  v-if="isCurrentSlide(3)"
                  class="central_circle_content_three cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Дозвілля першокласника</p>
                  <span class="center_cercle_text center_cercle_text_three">
                    Заняття проводяться на трьох мовах в ігровій формі. Основою
                    є настільні та рухливі ігри, ігри на розвиток навичок
                    конкурування і досягнення поставлених цілей. Шляхом читання
                    художньої та науково-пізнавальної літератури, відбувається
                    робота над формуванням мови, грамотного і послідовного
                    викладу своїх думок. Допомога в навчанні читання і рахунку.
                    Навчання фінансової грамотності та навичкам формування
                    сімейного бюджету.
                  </span>
                </div>
                <div
                  v-if="isCurrentSlide(4)"
                  class="central_circle_content_four cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Навчання через гру</p>
                  <span class="center_cercle_text center_cercle_text_four">
                    Гра-основний формат навчання дошкільнят. Через гру
                    відбувається соціалізація дітей, формування навичок
                    спілкування, постановки мови, знайомство з буквами, цифрами
                    і навколишнім світом. Наші заняття розділені на блоки і
                    кожен блок включає в себе різні види ігор-на розвиток
                    пам'яті та уваги, спритності і фізичної активності, логіки і
                    винахідливості, посидючість і вмінню слухати. Через гру ми
                    формуємо навички, які дитина буде використовувати не тільки
                    в школі, але і в житті.
                  </span>
                </div>
                <div
                  v-if="isCurrentSlide(5)"
                  class="central_circle_content_five cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Реджіо педагогіка</p>
                  <span class="center_cercle_text"
                    >Головні принципи Реджіо-педагогіки: співпраця педагогів з
                    дітьми, максимальна свобода Творчості і самовираження,
                    уміння педагога бути на одному рівні з дитиною і ставитися
                    до дитини як до маленької особистості, поважати і
                    вислуховувати його думку, розвивати уяву. Педагог в нашій
                    Академії - це друг, наставник і помічник. Та людина, яку
                    цікавлять думка і думки дитини, який допоможе дитині самій
                    знайти відповіді на всілякі «Чому?» і навіщо?" і реалізувати
                    їх через творчість.
                  </span>
                </div>

                <div
                  v-if="isCurrentSlide(6)"
                  class="central_circle_content_six cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Відеоспостереження</p>
                  <span class="center_cercle_text center_cercle_text_six">
                    У нашій Академії знань ведеться цілодобове
                    відеоспостереження. Це дає можливість батькам протягом
                    перебування дитини в центрі бачити і чути, що відбувається
                    на заняттях. Кожному з батьків встановлюється на телефон
                    додаток і він може в будь-який момент насолодитися чудовими
                    і незабутніми моментами життя свою дитину, який проводить
                    час в атмосфері творчості, знань та ігор на трьох мовах.
                  </span>
                </div>
                <div
                  v-if="isCurrentSlide(7)"
                  class="central_circle_content_seven cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Тріз</p>
                  <span class="center_cercle_text">
                    Теорія рішення винахідливих завдань - в процесі навчання
                    відбувається розвиток творчого мислення (варіативності,
                    диалектичности, системності); розвиток творчої уяви
                    (оригінальності, гнучкості, продуктивності), розвиток
                    творчої мови (умінні придумувати порівняння, загадки,
                    історії), розвиток творчої особистості (прагнення до
                    новизні, пошукової активності, допитливості) Завдяки
                    заняттям за методикою ТРІЗ, діти стають іншими: допитливими,
                    винахідливими, балакучими, веселими і енергійними.
                  </span>
                </div>

                <div
                  v-if="isCurrentSlide(8)"
                  class="central_circle_content_eight cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Фінансова грамотність</p>
                  <span class="center_cercle_text">
                    Успішність дорослого залежить від того, наскільки грамотно
                    він вміє розпоряджатися грошима. Навчання фінансової
                    грамотності необхідно починати якомога раніше, як тільки
                    дитина навчитися здійснювати прості математичні розрахунки,
                    орієнтовно з 5-6 років. На заняттях з фінансової грамотності
                    наші викладачі в ігровій формі показують дитині як
                    розпоряджатися грошима, для чого вони потрібні, як
                    відкладати і економити, як планувати бюджет. Так само в
                    основи фінансової грамотності входить курс «Професії», в
                    якому діти знайомляться з різноманітними професіями,
                    науками, які потрібно освоїти для тієї чи іншої професії і
                    формують мотивацію для вивчення шкільних предметів в зв'язку
                    з розумінням їх застосування на практиці І в житті.
                  </span>
                </div>

                <div
                  v-if="isCurrentSlide(9)"
                  class="central_circle_content_nine cllass_for_children"
                >
                  <p class="center_circ_bg_heading">
                    Сучасна методика навчання
                  </p>
                  <span class="center_cercle_text">
                    Посібники для проведення занять, представлені в трьох мовних
                    форматах (українською, англійською та російською) і
                    розроблені відповідно до Базового компоненту дошкільної
                    освіти та системи НУШ, з урахуванням вікових норм дитини
                  </span>
                </div>

                <div
                  v-if="isCurrentSlide(10)"
                  class="central_circle_content_ten cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Мови</p>
                  <span class="center_cercle_text">
                    Навчання методом занурення на трьох мовах 36 годин
                    англійської, української та російської. Всі методичні
                    посібники представлені у трьох мовах
                  </span>
                </div>
                <div
                  v-if="isCurrentSlide(11)"
                  class="central_circle_content_eleven cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Творчість</p>
                  <span class="center_cercle_text">
                    Творчий процес є основним процесом, мотивуючи дитину до
                    якоїсь дії, розвитку творчого потенціалу - оновне завдання
                    наших педагогів. Заняття малюванням, ліпленням, аплікацією
                    сприяє тренуванню кисті і стають підготовчим етапом до
                    освоєння навичок письма, розвиває дрібну моторику і сприяє
                    формуванню образного мислення і винахідливості. Так само під
                    час занять педагог систематизує інформацію з прочитаного на
                    Дискусійному блоці і мотивує дітей висловити це через
                    творчий процес. Вивчення букв і цифр приносить дитині
                    радість і задоволення і запам' ятовується надовго, формуючи
                    міцні нейронні зв'язки.
                  </span>
                </div>
                <div
                  v-if="isCurrentSlide(12)"
                  class="central_circle_content_twelve cllass_for_children"
                >
                  <p class="center_circ_bg_heading">
                    Малокомплектні групи до 8 осіб
                  </p>
                  <span class="center_cercle_text">
                    Заняття проходять в малокомплектній групі, що дозволяє
                    приділити якісну увагу до кожної дитини, вислухати її думку,
                    аргументи і доводи, вчасно скоригувати і допомогти дитині,
                    якщо вона про це просить. Так само в малокомплектних групах
                    дітки менше хворіють і мають можливість стабільно і довго,
                    без пропусків, відвідувати наші заняття, що дозволяє
                    сформувати стійкі знання і довготривалу пам'ять.
                  </span>
                </div>
              </div>

              <!-- ______________SMALL___CIRCLE_____________ -->
              <div class="small_circ_phome">
                <div
                  @click="setCurrentSlide(1)"
                  :class="{ selected_small_circle: isCurrentSlide(1) }"
                  class="external_small_circles one_circles"
                >
                  <div class="content_small_circle sub_one_circles">
                    <img
                      src="../../assets/img/circle_content/sub_one_circles.svg"
                      alt=""
                      class="img_one_circles"
                    />
                    <p class="header_circles_one text_near_circles">
                      Хатинка - чітальня на трьох мовах
                    </p>
                  </div>
                </div>

                <div
                  @click="setCurrentSlide(2)"
                  :class="{ selected_small_circle: isCurrentSlide(2) }"
                  class="external_small_circles two_circles"
                >
                  <div class="content_small_circle sub_two_circles">
                    <img
                      src="../../assets/img/circle_content/sub_two_circles.svg"
                      alt=""
                      class="img_two_circles"
                    />
                    <p class="header_circles_two text_near_circles">
                      Підготовка до школи
                    </p>
                  </div>
                </div>
              </div>

              <div class="small_circ_phome">
                <div
                  @click="setCurrentSlide(3)"
                  :class="{ selected_small_circle: isCurrentSlide(3) }"
                  class="external_small_circles three_circles"
                >
                  <div class="content_small_circle sub_three_circles">
                    <img
                      src="../../assets/img/circle_content/sub_three_circles.svg"
                      alt=""
                      class="img_three_circles"
                    />
                    <p class="header_circles_three text_near_circles">
                      Дозвілля першокласника
                    </p>
                  </div>
                </div>

                <div
                  @click="setCurrentSlide(4)"
                  :class="{ selected_small_circle: isCurrentSlide(4) }"
                  class="external_small_circles four_circles"
                >
                  <div class="content_small_circle sub_four_circles">
                    <img
                      src="../../assets/img/circle_content/sub_four_circles.svg"
                      alt=""
                      class="img_four_circles"
                    />
                    <p class="header_circles_four text_near_circles">
                      Навчання в грі
                    </p>
                  </div>
                </div>
              </div>

              <div class="small_circ_phome">
                <div
                  @click="setCurrentSlide(5)"
                  :class="{ selected_small_circle: isCurrentSlide(5) }"
                  class="external_small_circles five_circles"
                >
                  <div class="content_small_circle sub_five_circles">
                    <img
                      src="../../assets/img/circle_content/sub_five_circles.svg"
                      alt=""
                      class="img_five_circles"
                    />
                    <p class="header_circles_five text_near_circles">
                      Реджіо педагогіка
                    </p>
                  </div>
                </div>

                <div
                  @click="setCurrentSlide(6)"
                  :class="{ selected_small_circle: isCurrentSlide(6) }"
                  class="external_small_circles six_circles"
                >
                  <div class="content_small_circle sub_six_circles">
                    <img
                      src="../../assets/img/circle_content/sub_six_circles.svg"
                      alt=""
                      class="img_six_circles"
                    />
                    <p class="header_circles_six text_near_circles">
                      Відеоспостереження
                    </p>
                  </div>
                </div>
              </div>

              <div class="small_circ_phome">
                <div
                  @click="setCurrentSlide(7)"
                  :class="{ selected_small_circle: isCurrentSlide(7) }"
                  class="external_small_circles seven_circles"
                >
                  <div class="content_small_circle sub_seven_circles">
                    <img
                      src="../../assets/img/circle_content/sub_seven_circles.svg"
                      alt=""
                      class="img_seven_circles"
                    />
                    <p class="header_circles_seven text_near_circles">Тріз</p>
                  </div>
                </div>

                <div
                  @click="setCurrentSlide(8)"
                  :class="{ selected_small_circle: isCurrentSlide(8) }"
                  class="external_small_circles eight_circles"
                >
                  <div class="content_small_circle sub_eight_circles">
                    <img
                      src="../../assets/img/circle_content/sub_eight_circles.svg"
                      alt=""
                      class="img_eight_circles"
                    />
                    <p class="header_circles_eight text_near_circles">
                      Фінансова грамотність
                    </p>
                  </div>
                </div>
              </div>

              <div class="small_circ_phome">
                <div
                  @click="setCurrentSlide(9)"
                  :class="{ selected_small_circle: isCurrentSlide(9) }"
                  class="external_small_circles nine_circles"
                >
                  <div class="content_small_circle sub_nine_circles">
                    <img
                      src="../../assets/img/circle_content/sub_nine_circles.svg"
                      alt=""
                      class="img_nine_circles"
                    />
                    <p class="header_circles_nine text_near_circles">
                      Сучасна методика навчання
                    </p>
                  </div>
                </div>

                <div
                  @click="setCurrentSlide(10)"
                  :class="{ selected_small_circle: isCurrentSlide(10) }"
                  class="external_small_circles ten_circles"
                >
                  <div class="content_small_circle sub_ten_circles">
                    <img
                      src="../../assets/img/circle_content/sub_ten_circles.svg"
                      alt=""
                      class="img_ten_circles"
                    />
                    <p class="header_circles_ten text_near_circles">Мови</p>
                  </div>
                </div>
              </div>

              <div class="small_circ_phome">
                <div
                  @click="setCurrentSlide(11)"
                  :class="{ selected_small_circle: isCurrentSlide(11) }"
                  class="external_small_circles eleven_circles"
                >
                  <div class="content_small_circle sub_eleven_circles">
                    <img
                      src="../../assets/img/circle_content/sub_eleven_circles.svg"
                      alt=""
                      class="img_eleven_circles"
                    />
                    <p class="header_circles_eleven text_near_circles">
                      Творчість
                    </p>
                  </div>
                </div>

                <div
                  @click="setCurrentSlide(12)"
                  :class="{ selected_small_circle: isCurrentSlide(12) }"
                  class="external_small_circles twelve_circles"
                >
                  <div class="content_small_circle sub_twelve_circles">
                    <img
                      src="../../assets/img/circle_content/sub_twelve_circles.svg"
                      alt=""
                      class="img_twelve_circles"
                    />
                    <p class="header_circles_twelve text_near_circles">
                      Малокомплектні групи до 8 осіб
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ________________________________________________ -->

          <!-- _____________________OUR_RULES___________________________ -->

          <div class="wrap_our_rules">
            <div class="box_line_heading center_circle_rules">
              <div class="heading_text center_circle_header_rules">
                <h3>Правила нашої акадмії</h3>
              </div>
            </div>

            <div class="wrapper_cards_our_rules">
              <div class="wrap_card_our_rules">
                <div
                  v-if="!first_home_techniques_content_show"
                  class="head_card num_card_one"
                ></div>

                <div
                  :class="{ 'opened-card': first_home_techniques_content_show }"
                  class="footer_card"
                >
                  <p class="head_card_text">
                    {{ first_home_techniques_title_ua }}
                  </p>
                  <span
                    class="text_card"
                    :class="{
                      readMorerTwo: !first_home_techniques_content_show
                    }"
                  >
                    {{ first_home_techniques_content_show_text }}
                  </span>
                  <div
                    v-if="first_home_techniques_content_show_text.length > 180"
                  >
                    <div
                      @click="readMore('first_home_techniques_content_show')"
                      v-if="!first_home_techniques_content_show"
                      class="btn_read_text"
                    >
                      читати повністю
                    </div>
                    <div
                      @click="
                        hideReadMore('first_home_techniques_content_show')
                      "
                      v-else
                      class="btn_hide_text"
                    >
                      приховати
                    </div>
                  </div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div
                  v-if="!second_home_techniques_content_show"
                  class="head_card num_card_two"
                ></div>

                <div
                  :class="{
                    'opened-card': second_home_techniques_content_show
                  }"
                  class="footer_card"
                >
                  <p class="head_card_text">
                    {{ second_home_techniques_title_ua }}
                  </p>
                  <span
                    class="text_card"
                    :class="{
                      readMorerTwo: !second_home_techniques_content_show
                    }"
                  >
                    {{ second_home_techniques_content_show_text }}
                  </span>
                  <div
                    v-if="second_home_techniques_content_show_text.length > 180"
                  >
                    <div
                      @click="readMore('second_home_techniques_content_show')"
                      v-if="!second_home_techniques_content_show"
                      class="btn_read_text"
                    >
                      читати повністю
                    </div>
                    <div
                      @click="
                        hideReadMore('second_home_techniques_content_show')
                      "
                      v-else
                      class="btn_hide_text"
                    >
                      приховати
                    </div>
                  </div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div
                  v-if="!third_home_techniques_content_show"
                  class="head_card num_card_three"
                ></div>

                <div
                  :class="{
                    'opened-card': third_home_techniques_content_show
                  }"
                  class="footer_card"
                >
                  <p class="head_card_text">
                    {{ third_home_techniques_title_ua }}
                  </p>
                  <span
                    class="text_card"
                    :class="{
                      readMorerTwo: !third_home_techniques_content_show
                    }"
                  >
                    {{ third_home_techniques_content_show_text }}
                  </span>
                  <div
                    v-if="third_home_techniques_content_show_text.length > 180"
                  >
                    <div
                      @click="readMore('third_home_techniques_content_show')"
                      v-if="!third_home_techniques_content_show"
                      class="btn_read_text"
                    >
                      читати повністю
                    </div>
                    <div
                      @click="
                        hideReadMore('third_home_techniques_content_show')
                      "
                      v-else
                      class="btn_hide_text"
                    >
                      приховати
                    </div>
                  </div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div
                  v-if="!fourth_home_techniques_content_show"
                  class="head_card num_card_four"
                ></div>

                <div
                  :class="{
                    'opened-card': fourth_home_techniques_content_show
                  }"
                  class="footer_card"
                >
                  <p class="head_card_text">
                    {{ fourth_home_techniques_title_ua }}
                  </p>
                  <span
                    class="text_card"
                    :class="{
                      readMorerTwo: !fourth_home_techniques_content_show
                    }"
                  >
                    {{ fourth_home_techniques_content_show_text }}
                  </span>
                  <div
                    v-if="fourth_home_techniques_content_show_text.length > 180"
                  >
                    <div
                      @click="readMore('fourth_home_techniques_content_show')"
                      v-if="!fourth_home_techniques_content_show"
                      class="btn_read_text"
                    >
                      читати повністю
                    </div>
                    <div
                      @click="
                        hideReadMore('fourth_home_techniques_content_show')
                      "
                      v-else
                      class="btn_hide_text"
                    >
                      приховати
                    </div>
                  </div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div
                  v-if="!fifth_home_techniques_content_show"
                  class="head_card num_card_five"
                ></div>

                <div
                  :class="{
                    'opened-card': fifth_home_techniques_content_show
                  }"
                  class="footer_card"
                >
                  <p class="head_card_text">
                    {{ fifth_home_techniques_title_ua }}
                  </p>
                  <span
                    class="text_card"
                    :class="{
                      readMorerTwo: !fifth_home_techniques_content_show
                    }"
                  >
                    {{ fifth_home_techniques_content_show_text }}
                  </span>
                  <div
                    v-if="fifth_home_techniques_content_show_text.length > 180"
                  >
                    <div
                      @click="readMore('fifth_home_techniques_content_show')"
                      v-if="!fifth_home_techniques_content_show"
                      class="btn_read_text"
                    >
                      читати повністю
                    </div>
                    <div
                      @click="
                        hideReadMore('fifth_home_techniques_content_show')
                      "
                      v-else
                      class="btn_hide_text"
                    >
                      приховати
                    </div>
                  </div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div
                  v-if="!sixth_home_techniques_content_show"
                  class="head_card num_card_six"
                ></div>

                <div
                  :class="{
                    'opened-card': sixth_home_techniques_content_show
                  }"
                  class="footer_card"
                >
                  <p class="head_card_text">
                    {{ sixth_home_techniques_title_ua }}
                  </p>
                  <span
                    class="text_card"
                    :class="{
                      readMorerTwo: !sixth_home_techniques_content_show
                    }"
                  >
                    {{ sixth_home_techniques_content_show_text }}
                  </span>
                  <div
                    v-if="sixth_home_techniques_content_show_text.length > 180"
                  >
                    <div
                      @click="readMore('sixth_home_techniques_content_show')"
                      v-if="!sixth_home_techniques_content_show"
                      class="btn_read_text"
                    >
                      читати повністю
                    </div>
                    <div
                      @click="
                        hideReadMore('sixth_home_techniques_content_show')
                      "
                      v-else
                      class="btn_hide_text"
                    >
                      приховати
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ________________________________________________ -->

          <!-- _________________________________GALLERY_______________ -->

          <div class="wrap_gallery">
            <div class="sub_wrap_gallery">
              <div class="box_line_heading center_circle_gallery">
                <div class="heading_text center_circle_header_gallery">
                  <h3>фото і відео нашого садка</h3>
                </div>
              </div>
              <div class="box_for_click">
                <svg
                  width="40"
                  height="39"
                  viewBox="0 0 40 39"
                  class="gallery_arrow_left"
                  @click="prevSlide"
                >
                  <path
                    d="M26.6837 9.89132C26.6837 8.73661 25.4337 8.01493 24.4337 8.59228L2.15184 21.4567C1.15184 22.034 1.15184 23.4774 2.15184 24.0548L24.4337 36.9192C25.4337 37.4966 26.6837 36.7749 26.6837 35.6202L26.6837 9.89132Z"
                    stroke="#1BA6B2"
                  />
                </svg>
                <swiper ref="gallerySwiper" class="swiper gallery_box">
                  <swiper-slide
                    class="gallery_box"
                    v-for="(chunk, index) in files"
                    :key="index"
                  >
                    <div class="gallery_box">
                      <!-- _____________ -->
                      <div class="gallery_sub_box">
                        <div class="gallery_content_small centrify">
                          <img
                            v-if="
                              chunk[0].type.replace(/\/.+$/, '') === 'image'
                            "
                            :src="chunk[0].url"
                            class="gallery_img_small"
                          />
                          <vue-player
                            v-else
                            :src="chunk[0].url"
                            :poster="chunk[0].poster"
                            class="gallery_img_small"
                          ></vue-player>
                        </div>
                        <!-- ________ -->
                        <div class="gallery_content_small centrify">
                          <img
                            v-if="
                              chunk[1].type.replace(/\/.+$/, '') === 'image'
                            "
                            :src="chunk[1].url"
                            class="gallery_img_small"
                          />
                          <vue-player
                            v-else
                            :src="chunk[1].url"
                            :poster="chunk[1].poster"
                            class="gallery_img_small"
                          ></vue-player>
                        </div>
                      </div>
                      <!-- _____________ -->
                      <div class="gallery_sub_box">
                        <div class="gallery_content_long centrify">
                          <img
                            v-if="
                              chunk[2].type.replace(/\/.+$/, '') === 'image'
                            "
                            :src="chunk[2].url"
                            class="gallery_img_long"
                          />
                          <vue-player
                            v-else
                            :src="chunk[2].url"
                            :poster="chunk[2].poster"
                            class="gallery_img_long"
                          ></vue-player>
                        </div>
                      </div>
                      <!-- _____________ -->
                      <div class="gallery_sub_box">
                        <div class="gallery_content_small centrify">
                          <img
                            v-if="
                              chunk[3].type.replace(/\/.+$/, '') === 'image'
                            "
                            :src="chunk[3].url"
                            class="gallery_img_small"
                          />
                          <vue-player
                            v-else
                            :src="chunk[3].url"
                            :poster="chunk[3].poster"
                            class="gallery_img_small"
                          ></vue-player>
                        </div>
                        <!-- ________ -->
                        <div class="gallery_content_small centrify">
                          <img
                            v-if="
                              chunk[4].type.replace(/\/.+$/, '') === 'image'
                            "
                            :src="chunk[4].url"
                            class="gallery_img_small"
                          />
                          <vue-player
                            v-else
                            :src="chunk[4].url"
                            :poster="chunk[4].poster"
                            class="gallery_img_small"
                          ></vue-player>
                        </div>
                      </div>
                      <!-- _____________ -->
                      <div class="gallery_sub_box">
                        <div class="gallery_content_long centrify">
                          <img
                            v-if="
                              chunk[5].type.replace(/\/.+$/, '') === 'image'
                            "
                            :src="chunk[5].url"
                            class="gallery_img_long"
                          />
                          <vue-player
                            v-else
                            :src="chunk[5].url"
                            :poster="chunk[5].poster"
                            class="gallery_img_long"
                          ></vue-player>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
                <svg
                  width="40"
                  height="39"
                  viewBox="0 0 40 39"
                  class="gallery_arrow_right"
                  @click="nextSlide"
                >
                  <path
                    d="M26.6837 9.89132C26.6837 8.73661 25.4337 8.01493 24.4337 8.59228L2.15184 21.4567C1.15184 22.034 1.15184 23.4774 2.15184 24.0548L24.4337 36.9192C25.4337 37.4966 26.6837 36.7749 26.6837 35.6202L26.6837 9.89132Z"
                    stroke="#1BA6B2"
                  />
                </svg>
              </div>
            </div>
          </div>
          <!-- ________________________________________________ -->
        </div>
      </main>

      <!-- ___________________FOOTER______________________ -->
      <footer class="wrap_footer">
        <div class="sub_wrap_footer">
          <div class="bg_teacher"></div>

          <div class="sticker_footer">
            <p class="sticker_footer_header">Батьки - не вчителi!</p>
            <p class="sticker_footer_text">
              Приходьте до нас і ми з радістю поділимося своїми знаннями з
              вашими дітьми !
            </p>
          </div>
        </div>

        <div class="google_map_wrapper">
          <!-- _________________MAP_________________ -->
          <iframe
            class="iframe_google_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.9341857831632!2d30.753829015494134!3d46.4500010751442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c633e7b3172e5b%3A0x395f101608febf7e!2z0L_RgNC-0YHQvy4g0KjQtdCy0YfQtdC90LrQviwgMjcsINCe0LTQtdGB0YHQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjUwMDA!5e0!3m2!1sru!2sua!4v1600843303113!5m2!1sru!2sua"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          >
          </iframe>
          <!-- ___________________STICKER__MAP______________ -->
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
              <div class="modal_phone modal_phone_icon">
                <a class="modal_phone_link" href="tel:+380970115588 "
                  >+ 38 (097) 011 55 88</a
                >
              </div>
              <div class="modal_phone">
                <a class="modal_phone_link" href="tel:tel:+380931936267 "
                  >+ 38 (093) 193 62 67</a
                >
              </div>
              <div class="modal_email">
                <a class="modal_email_link" href="mailto:umnazia.ua@gmail.com "
                  >umnazia.ua@gmail.com</a
                >
              </div>
            </div>

            <div class="modal_social_icons_links">
              <div class="modal_social_icon_item">
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
              <div class="modal_social_icon_item">
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
              <div class="modal_social_icon_item">
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

            <div @click="showModal('b_four')" class="text_700_35">
              <button
                v-if="!b_four"
                class="training_format_submit_btn btn_rtans"
              >
                Записатися в<br />
                групу
              </button>
              <button
                v-else
                class="training_format_submit_orange_btn btn_rtans"
              >
                Записатися в<br />
                групу
              </button>
            </div>
          </div>
          <div class="btn_anchor_wrapper">
            <button
              class="btn_anchor btn_rtans"
              @click="scrollToTop"
              style="cursor: pointer"
            ></button>
          </div>
        </div>

        <p class="administration_slogan">
          Академія знань “Умназія” 2020 © Усі права захищені
        </p>
      </footer>

      <div v-if="isModal" class="wraper_modal_form">
        <form @submit.prevent="preSend">
          <div class="wrap_form">
            <div @click="hideModal" class="bt_close">+</div>
            <p class="head_form">Записатися в групу</p>
            <input
              v-model="name"
              type="text"
              placeholder="Ваше ім'я"
              class="name_form"
              required
            />
            <input
              v-model="tel"
              type="tel"
              placeholder="Ваш номер телефона"
              class="number_form"
              required
              minlength="9"
            />
            <button class="bt_modal_form">Надіслати</button>
          </div>
        </form>
      </div>

      <div v-if="mobileMenuOpen" class="wrap_mobile_menu">
        <div @click="hideMobileMenu" class="close_mobile_menu"></div>
        <div class="mobile_menu">
          <router-link to="/about/ua" class="el_menu_modal"
            >Про нас</router-link
          >
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
          <router-link to="contacts" class="el_menu_modal"
            >Контакти</router-link
          >
          <div class="social_wrapper">
            <div class="head_social_wrapper">
              <div class="social_text text_400_12">Наші соц мережі</div>
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
            <div class="btn_lang_wrapper">
              <div
                class="text_700_12"
                :class="{
                  btn_lang_open: mobileLangOpen,
                  btn_lang: !mobileLangOpen
                }"
              >
                <div
                  class="text_700_12 main_lang_button"
                  @click="toggleLangMobile"
                >
                  ua
                </div>
                <router-link
                  v-if="mobileLangOpen"
                  class="btn_lang_ua_open"
                  to="/"
                  >ru</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import vuePlayer from "@algoz098/vue-player";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      currentSlideNumber: 1,
      isModal: false,
      name: "",
      tel: "+380",
      mobileMenuOpen: false,
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
      b_one: localStorage.getItem("b_one"),
      b_two: localStorage.getItem("b_two"),
      b_three: localStorage.getItem("b_three"),
      b_four: localStorage.getItem("b_four"),
      currentButton: "",
      groups_description_first_block_content_show: false,
      groups_description_second_block_content_show: false,
      groups_description_third_block_content_show: false,
      groups_description_fourth_block_content_show: false,
      first_home_techniques_content_show: false,
      second_home_techniques_content_show: false,
      third_home_techniques_content_show: false,
      fourth_home_techniques_content_show: false,
      fifth_home_techniques_content_show: false,
      sixth_home_techniques_content_show: false,
      files: [],
      headLangOpen: false,
      mobileLangOpen: false
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    vuePlayer
  },
  directives: {
    swiper: directive
  },
  mounted() {
    this.scrollToTop();
    let videoInterval = setInterval(() => {
      const elements = document.getElementsByClassName("start-button");
      if (elements.length > 0) {
        clearInterval(videoInterval);
        for (let index = 0; index < elements.length; index++) {
          const element = elements[index];
          element.addEventListener("click", () => {
            let parent = element.parentElement.parentElement;
            let fullscreenInterval = setInterval(() => {
              let fullscreen = parent.getElementsByClassName(
                "fullscreen-button-class"
              )[0];
              if (fullscreen) {
                clearInterval(fullscreenInterval);
                fullscreen.click();
              }
            }, 500);
          });
        }
      }
    }, 500);
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
    readMore(trigger) {
      this[trigger] = true;
    },
    toggleLang() {
      this.headLangOpen = !this.headLangOpen;
    },
    toggleLangMobile() {
      this.mobileLangOpen = !this.mobileLangOpen;
    },
    nextSlide() {
      this.$refs.gallerySwiper.$swiper.slideNext();
    },
    prevSlide() {
      this.$refs.gallerySwiper.$swiper.slidePrev();
    },
    hideReadMore(trigger) {
      this[trigger] = false;
    },
    showMobileMenu() {
      this.mobileMenuOpen = true;
      document.body.style.overflowY = "hidden";
    },
    hideMobileMenu() {
      this.mobileMenuOpen = false;
      document.body.style.overflowY = "scroll";
    },
    isCurrentSlide(number) {
      return this.currentSlideNumber === number;
    },
    setCurrentSlide(number) {
      this.currentSlideNumber = number;
    },
    preSend() {
      this.sendTel({
        name: this.name,
        tel: this.tel
      });
      this.name = "";
      this.tel = "";
      this.isModal = false;
      localStorage.setItem(this.currentButton, true);
      this[this.currentButton] = true;
    },
    ...mapActions(["sendTel", "getFields"])
  },
  computed: mapState({
    fields: state => state.fields,
    groups_description_first_block_content_show_text() {
      if (this.groups_description_first_block_content_show) {
        return this.groups_description_first_block_content_ua;
      } else {
        if (this.groups_description_first_block_content_ua.length <= 220) {
          return this.groups_description_first_block_content_ua;
        } else {
          return this.groups_description_first_block_content_ua
            .match(/^.{220}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    groups_description_second_block_content_show_text() {
      if (this.groups_description_second_block_content_show) {
        return this.groups_description_second_block_content_ua;
      } else {
        if (this.groups_description_second_block_content_ua.length <= 220) {
          return this.groups_description_second_block_content_ua;
        } else {
          return this.groups_description_second_block_content_ua
            .match(/^.{220}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    groups_description_third_block_content_show_text() {
      if (this.groups_description_third_block_content_show) {
        return this.groups_description_third_block_content_ua;
      } else {
        if (this.groups_description_third_block_content_ua.length <= 220) {
          return this.groups_description_third_block_content_ua;
        } else {
          return this.groups_description_third_block_content_ua
            .match(/^.{220}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    groups_description_fourth_block_content_show_text() {
      if (this.groups_description_fourth_block_content_show) {
        return this.groups_description_fourth_block_content_ua;
      } else {
        if (this.groups_description_fourth_block_content_ua.length <= 220) {
          return this.groups_description_fourth_block_content_ua;
        } else {
          return this.groups_description_fourth_block_content_ua
            .match(/^.{220}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    first_home_techniques_content_show_text() {
      if (this.first_home_techniques_content_show) {
        return this.first_home_techniques_content_ua;
      } else {
        if (this.first_home_techniques_content_ua.length <= 180) {
          return this.first_home_techniques_content_ua;
        } else {
          return this.first_home_techniques_content_ua
            .match(/^.{180}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    second_home_techniques_content_show_text() {
      if (this.second_home_techniques_content_show) {
        return this.second_home_techniques_content_ua;
      } else {
        if (this.second_home_techniques_content_ua.length <= 180) {
          return this.second_home_techniques_content_ua;
        } else {
          return this.second_home_techniques_content_ua
            .match(/^.{180}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    third_home_techniques_content_show_text() {
      if (this.third_home_techniques_content_show) {
        return this.third_home_techniques_content_ua;
      } else {
        if (this.third_home_techniques_content_ua.length <= 180) {
          return this.third_home_techniques_content_ua;
        } else {
          return this.third_home_techniques_content_ua
            .match(/^.{180}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    fourth_home_techniques_content_show_text() {
      if (this.fourth_home_techniques_content_show) {
        return this.fourth_home_techniques_content_ua;
      } else {
        if (this.fourth_home_techniques_content_ua.length <= 180) {
          return this.fourth_home_techniques_content_ua;
        } else {
          return this.fourth_home_techniques_content_ua
            .match(/^.{180}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    fifth_home_techniques_content_show_text() {
      if (this.fifth_home_techniques_content_show) {
        return this.fifth_home_techniques_content_ua;
      } else {
        if (this.fifth_home_techniques_content_ua.length <= 180) {
          return this.fifth_home_techniques_content_ua;
        } else {
          return this.fifth_home_techniques_content_ua
            .match(/^.{180}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    sixth_home_techniques_content_show_text() {
      if (this.sixth_home_techniques_content_show) {
        return this.sixth_home_techniques_content_ua;
      } else {
        if (this.sixth_home_techniques_content_ua.length <= 180) {
          return this.sixth_home_techniques_content_ua;
        } else {
          return this.sixth_home_techniques_content_ua
            .match(/^.{180}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    }
  }),
  async created() {
    document.body.style.overflowY = "scroll";
    await this.getFields();
    const keys = Object.keys(this.fields);
    keys.forEach(key => {
      this[key] = this.fields[key];
    });

    const ids = (
      await axios({
        method: "get",
        url: process.env.VUE_APP_API + "/files/reverse"
      })
    ).data;

    let chunk = [];
    let i = 6;
    ids.forEach(id => {
      if (id.type.replace(/\/.+$/, "") === "image") {
        chunk.push({
          url: process.env.VUE_APP_API + `/files/${id.id}/file.jpg`,
          type: id.type
        });
      } else if (id.type.replace(/\/.+$/, "") === "video") {
        chunk.push({
          url: process.env.VUE_APP_API + `/files/${id.id}/file.jpg`,
          poster: process.env.VUE_APP_API + `/files/${id.id}/screenshot.jpg`,
          type: id.type
        });
      }
      i--;
      if (i === 0) {
        this.files.push(chunk);
        chunk = [];
        i = 6;
      }
    });
  }
};
</script>

<style scoped src="../../assets/styles/style.css" lang="css"></style>
<style scoped>
.selected_small_circle {
  background: #62e5db;
}

@media all and (min-width: 740px) {
  .readMorer {
    align-items: flex-start;
  }
  .readMorerTwo {
    height: 140px;
  }
}
</style>
