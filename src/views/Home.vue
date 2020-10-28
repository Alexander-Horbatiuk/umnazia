<template>
  <div class="main_wrapper">
    <header>
      <div class="contacts_wrapper">
        <!-- _____________________________________________________first_block_________________________ -->
        <div class="first_block">
          <!-- ____________________btn_________________________ -->
          <div class="logo">
            <img
              src="../assets/img/logo/logo_tablet.png"
              alt="logo"
              width="160"
              class="logo_tablet"
            />
            <img
              src="../assets/img/logo/logo_phone.png"
              alt="logo"
              width="146"
              class="logo_phone"
            />
          </div>

          <!-- ____________________btn_________________________ -->
          <div class="btn_lang_wrapper">
            <router-link to="/" class="btn_lang text_700_12">
              ru
            </router-link>
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
              <a href="tel:+380931936267" class="num_link_header "
                >+ 38 (093) 193 62 67</a
              >
            </div>
          </div>
          <div class="big_logo">
            <a class="link_logo">
              <img
                src="../assets/img/logo/logo.png"
                alt="owl logo"
                width="308"
                class="main_logo"
              />
            </a>
          </div>

          <!--_____________________adress________________________ -->
          <div class="adress">
            <div class="header_adress_text text_400_12">
              Мы находимся:
            </div>
            <div class=" text_700_12">
              <a
                href="https://goo.gl/maps/4sFRPgncGGnP5Kch8"
                target="_blank"
                class="header_text_map_link"
                >г.Одесса, просп. Шевченко 27</a
              >
            </div>
          </div>

          <!--_____________________social_wrapper________________ -->
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
                  href="https://www.youtube.com"
                  class="icon_item_link"
                >
                  <img src="../assets/img/img_png//youtube.png" alt="youtube" />
                </a>
              </div>
            </div>
          </div>
          <!-- ____________ -->
        </div>
        <!-- ______ -->
      </div>

      <!-- _____________________________________________menu________________ -->
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
    <!-- ________________________________________________________________________ -->
    <div class="wrapper_all">
      <main>
        <div class="backgraund_visor">
          <!-- ______________________________________________________ -->
          <div class="content_box_age">
            <img
              src="../assets/img/background/frame_on_visor.png"
              alt=""
              class="frame_on_visor"
            />
            <div class="sub_content_box_age">
              <div
                class="box_age_one text_700_24"
                v-html="home_header_title_first_part"
              ></div>
              <div
                class="box_age_two text_700_24"
                v-html="home_header_title_second_part"
              ></div>
              <div
                class="content_box_age_text text_400_18"
                v-html="home_header_text"
              ></div>
              <div
                @click="showModal('b_one')"
                class="content_box_age_btn text_700_16 btn_rtans"
              >
                <img
                  v-if="!b_one"
                  src="../assets/img/img_png/btn_yellow.png"
                  alt="button"
                  class="btn_yellow"
                />
                <img
                  v-else
                  src="../assets/img/img_png/btn_orange.png"
                  alt="button"
                  class="btn_orange"
                />

                <p v-if="!b_one" class="btn_text">Записаться в группу</p>
                <p v-else class="btn_text" style="color: white">
                  Записаться в группу
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
            src="../assets/img/img_png/cloud_left.png"
            alt="cloud"
            class="cloud_left"
          />
          <img
            src="../assets/img/img_png/cloud_right.png"
            alt="cloud"
            class="cloud_right"
          />
          <!-- _______________________________CLOUDS_TABLET________________________________________ -->
          <img
            src="../assets/img/img_png/cloud_right_tablet.png"
            alt="cloud"
            class="cloud_right_tablet"
          />
          <img
            src="../assets/img/img_png/cloud_left_tablet.png"
            alt="cloud"
            class="cloud_left_tablet"
          />

          <div class="wrapper_for_methodology">
            <div class="header_methodology text_700_35">
              <h3>методика</h3>
            </div>
            <div class="sub_header_methodology text_400_18">
              <p>
                Каждый день
                <span class="text_b text_700_35">новая</span> языковая среда
              </p>
              <p>
                Обучение на <span class="text_b text_700_35">трех</span> языках
              </p>
            </div>
            <div class="text_header_methodology text_400_18">
              <span>
                Занятия проходят по эксклюзивной методике языкового погружения
                на трех языках - русском, украинском и английском и разделены на
                блоки- дискусионный, гуманитарный, математический и научный.
                Каждый блок включает в себя развитие творческих способностей
                ребенка - лепка, рисование, развитие мелкой и крупной моторики,
                сюжетно-ролевые игры, игры на развитие воображения.
              </span>
            </div>
            <!-- ________book_______________________________________________ -->
            <div class="wrap_book">
              <div class="book_">
                <img
                  src="../assets/img/img_png/book_ua.png"
                  alt=""
                  width="161"
                  height="206"
                  class="book_img"
                />
                <img
                  src="../assets/img/img_png/favicon_book.png"
                  alt=""
                  width="43"
                  height="44"
                  class="favicon_logo"
                />
                <span class="text_on_book text_700_35">English</span>
              </div>
              <div class="book_">
                <img
                  src="../assets/img/img_png/book_ua.png"
                  alt=""
                  width="224"
                  height="287"
                  class="book_img_center"
                />
                <img
                  src="../assets/img/img_png/favicon_book.png"
                  alt=""
                  width="53"
                  height="58"
                  class="favicon_logo_ua"
                />
                <span class="text_on_book_center text_700_35">Українська</span>
              </div>
              <div class="book_">
                <img
                  src="../assets/img/img_png/book_ua.png"
                  alt=""
                  width="161"
                  height="206"
                  class="book_img"
                />
                <img
                  src="../assets/img/img_png/favicon_book.png"
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
                <h3>группы</h3>
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
              <div class="age_groups  z_index_four">
                <div class="circle_age_groups">
                  <img
                    src="../assets/img/img_svg/img_group_one.svg"
                    alt="children"
                    class="img_age_group img_group_one"
                  />
                </div>
                <div class="content_header_text">
                  <p class="header_groups">
                    {{ groups_description_first_block_title }}
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
                    читать полностью
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
                    скрыть
                  </div>
                </div>
              </div>

              <div class="age_groups z_index_three">
                <div class="circle_age_groups">
                  <img
                    src="../assets/img/img_svg/img_group_two.svg"
                    alt="children"
                    class="img_age_group img_group_two"
                  />
                </div>
                <div class="content_header_text">
                  <p class="header_groups">
                    {{ groups_description_second_block_title }}
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
                    читать полностью
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
                    скрыть
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
                    src="../assets/img/img_svg/img_group_three.svg"
                    alt="children"
                    class="img_age_group img_group_three"
                  />
                </div>
                <div class="content_header_text">
                  <p class="header_groups">
                    {{ groups_description_third_block_title }}
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
                    читать полностью
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
                    скрыть
                  </div>
                </div>
              </div>
              <div class="age_groups z_index_one">
                <div class="circle_age_groups">
                  <img
                    src="../assets/img/img_svg/img_group_four.svg"
                    alt="children"
                    class="img_age_group img_group_four"
                  />
                </div>
                <div class="content_header_text">
                  <p class="header_groups">
                    {{ groups_description_fourth_block_title }}
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
                    читать полностью
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
                    скрыть
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ___________________________________________________________TIME_______ -->
          <div class="training_format_wrapper">
            <div class="box_line_heading">
              <div class="heading_text ">
                <h3>формат занятий</h3>
              </div>
            </div>

            <div class="class_format_text">
              <p>
                Работаем <span class="text_b text_700_35">6 дней</span> в неделю
                (формат - полудневки)
              </p>
            </div>

            <div class="clocks_wrapper">
              <div class="class_hours class_hours_9am">
                <div class="time_text_9am text_700_35">
                  <p>{{ timetable_clock_morning }}</p>
                </div>

                <div @click="showModal('b_two')" class="text_700_35">
                  <button
                    v-if="!b_two"
                    class="training_format_submit_btn btn_rtans"
                  >
                    Записаться в<br />
                    группу
                  </button>
                  <button
                    v-else
                    class="training_format_submit_orange_btn btn_rtans"
                  >
                    Записаться в<br />
                    группу
                  </button>
                </div>
              </div>

              <div class="class_hours class_hours_14pm">
                <div class="time_text_14pm text_700_35">
                  <p>{{ timetable_clock_evening }}</p>
                </div>

                <div @click="showModal('b_three')" class="text_700_35">
                  <button
                    v-if="!b_three"
                    class="training_format_submit_btn btn_rtans"
                  >
                    Записаться в<br />
                    группу
                  </button>
                  <button
                    v-else
                    class="training_format_submit_orange_btn btn_rtans"
                  >
                    Записаться в<br />
                    группу
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- __________________CIRCLE___CENTER___________________CIRCLE___CENTER_______________ -->
          <div class="wrap_center_circle">
            <div class="box_line_heading center_circle_header">
              <div class="heading_text center_circle_header_text">
                <h3>Наши преимущества</h3>
              </div>
            </div>
            <!-- ___________________WRAP____CIRCLE_____________ -->
            <div class="sub_wrap_central_circle">
              <!-- ___________________________CIRCLE_____________ -->
              <div class="central_circle">
                <div
                  v-if="isCurrentSlide(1)"
                  class="central_circle_content_one   cllass_for_children"
                >
                  <p class="center_circ_bg_heading">
                    Изба -читальня на трёх языках
                  </p>
                  <span class="center_cercle_text">
                    Основой формирования грамотной и красивой речи является
                    чтение. Чтение -это фундамент знаний ,благодаря которому у
                    ребёнка формируются понятия о законах и правилах,социальных
                    аспектов общения,видению себя в единой связке с окружающей
                    средой и людьми. На наших занятиях уделяется большое
                    внимание чтению и обсуждению прочитанного на трёх
                    языках(русском,украинском и английском. У детей закрепляются
                    нейронные связи,при которых языки не смешиваются,а четко
                    разделены между собой. <br />
                    Ребёнок учиться пересказывать,выражать своё <br />
                    мнение, аргументировать и доказывать свою точку
                    зрения,слушать собеседника и проявлять эмпатию,ставить себя
                    на место героев книг и проецировать их поступки на
                    себя,умению думать наперёд ,развивать стратегическое
                    мышление.
                  </span>
                </div>

                <div
                  v-if="isCurrentSlide(2)"
                  class="central_circle_content_two cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Подготовка к школе</p>
                  <p class="center_cercle_text text_two_circ">
                    Курс включает в себя различные виды деятельности, которые
                    быстро сменяют друг друга:
                  </p>
                  <div class="sub_center_cercle_text">
                    <span class="sub_cercle_text_one">
                      <span class="psevdo">
                        развитие математических навыков
                      </span>
                      <span class="psevdo"> задания на логику </span>
                      <span class="psevdo"> обучение чтению </span>
                      <span class="psevdo"> развитие речи </span>
                      <span class="psevdo"> подготовка кисти к письму </span>
                      <span class="psevdo"> письмо </span>
                      <span class="psevdo"> развитие памяти </span>
                    </span>
                    <span class="sub_cercle_text">
                      <span class="psevdo"> познания окружающего мира</span>
                      <span class="psevdo">ТРИЗ</span>
                      <span class="psevdo"> украинский язык </span>
                      <span class="psevdo">
                        применение авторсой методику основаной на методике
                        Домана и кубиках Чаплыгина
                      </span>
                      <span class="psevdo"> английский язык</span>
                    </span>
                  </div>
                </div>

                <div
                  v-if="isCurrentSlide(3)"
                  class="central_circle_content_three cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Досуг первоклассника</p>
                  <span class="center_cercle_text center_cercle_text_three">
                    Занятия проводятся на трёх языках в игровой форме. Основой
                    являются настольные и подвижные игры,игры на развитие
                    навыков конкурирования и достижения поставленных целей.
                    Путём чтения художественной и научно-познавательной
                    литературы,происходит работа над формированием
                    речи,грамотного и последовательного изложения своих мыслей.
                    Помощь в обучении чтению и счету. Обучение финансовой
                    грамотности и навыкам формирования семейного бюджета.
                  </span>
                </div>
                <div
                  v-if="isCurrentSlide(4)"
                  class="central_circle_content_four cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Обучение в игре</p>
                  <span class="center_cercle_text center_cercle_text_four">
                    Игра-основной формат обучения дошкольников. Через игру
                    происходит социализация детей, формирование навыков
                    общения,постановки речи ,знакомство с буквами,цифрами и
                    окружающим миром. Наши занятия разделены на блоки и каждый
                    блок включает в себя различные виды игр-на развитие памяти и
                    внимания,ловкости и физической активности,логики и
                    изобретательности,усидчивостям и умению слушать. Через игру
                    мы формируем навыки ,которые ребёнок будет использовать не
                    только в школе,но и в жизни.
                  </span>
                </div>
                <div
                  v-if="isCurrentSlide(5)"
                  class="central_circle_content_five cllass_for_children"
                >
                  <p class="center_circ_bg_heading">
                    Реджио педагогика
                  </p>
                  <span class="center_cercle_text">
                    Главные принципы Реджио-педагогики:сотрудничество педагогов
                    с детьми, максимальная свобода Творчества и самовыражения,
                    умение педагога быть на одном уровне с ребёнком и относиться
                    к ребёнку как к маленькой личности, уважать и выслушивать
                    его мнение, развивать воображение. Педагог в нашей
                    Академии-это друг, наставник и помощник. Тот человек,
                    которого интересуют мнение и мысли ребёнка, который поможет
                    ребёнку самому найти ответы на всевозможные «Почему?» и
                    «Зачем?» и реализовать их через творчество.
                  </span>
                </div>

                <div
                  v-if="isCurrentSlide(6)"
                  class="central_circle_content_six cllass_for_children"
                >
                  <p class="center_circ_bg_heading">
                    Видеонаблюдение
                  </p>
                  <span class="center_cercle_text center_cercle_text_six">
                    В нашей Академии знаний ведётся круглосуточное
                    видеонаблюдение. Это даёт возможность родителям в течении
                    пребывания ребёнка в центре видеть и слышать,что происходит
                    на занятиях. Каждому родителю устанавливается на телефон
                    приложение и он может в любой момент насладиться чудесными и
                    незабываемыми моментами жизни своего ребёнка ,который
                    проводит время в атмосфере творчества ,знаний и игр на трёх
                    языках .
                  </span>
                </div>
                <div
                  v-if="isCurrentSlide(7)"
                  class="central_circle_content_seven cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Триз</p>
                  <span class="center_cercle_text">
                    Теория решения изобретательных задач-в процессе обучениЯ
                    происходит развитие творческого
                    мышления(вариативности,диалектичности, системности);развитие
                    творческого воображения
                    (оригинальности,гибкости,продуктивности),развитие творческой
                    речи( умении придумывать сравнения,загадки,истории)
                    ,развитие творческой личности(стремление к новизне,поисковой
                    активности,любознательности) Благодаря занятиям по методике
                    Триз -дети становятся другими:
                    любознательными,находчивыми,разговорчивыми, веселыми и
                    энергичными.</span
                  >
                </div>

                <div
                  v-if="isCurrentSlide(8)"
                  class="central_circle_content_eight cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Финансовая грамотность</p>
                  <span class="center_cercle_text">
                    Успешность взрослого зависит от того ,насколько грамотно он
                    умеет распоряжаться деньгами. Обучение финансовой
                    грамотности необходимо начинать как можно раньше,как только
                    ребёнок научиться осуществлять простые математические
                    расчеты,ориентировочно с 5-6 лет. На занятиях по финансовой
                    грамотности наши преподаватели в игровой форме показывают
                    ребёнку как распоряжаться деньгами,для чего они нужны,как
                    откладывать и экономить,как планировать бюджет. Так же в
                    основы финансовой грамотности входит курс «Профессии», в
                    котором дети знакомятся с разнообразными
                    профессиями,науками, которые нужно освоить для той или иной
                    профессии и формируют мотивацию для изучения школьных
                    предметов в связи с пониманием их применения на практике И в
                    жизни.
                  </span>
                </div>

                <div
                  v-if="isCurrentSlide(9)"
                  class="central_circle_content_nine cllass_for_children"
                >
                  <p class="center_circ_bg_heading">
                    Современная методика обучения
                  </p>
                  <span class="center_cercle_text">
                    Пособия для проведения занятий ,представлены в трёх языковых
                    форматах(украинском,английском и русском)и разработаны в
                    соответствии с Базовом компонентом дошкольного образования и
                    системы НУШ , с учетом возрастных норм ребёнка
                  </span>
                </div>

                <div
                  v-if="isCurrentSlide(10)"
                  class="central_circle_content_ten cllass_for_children"
                >
                  <p class="center_circ_bg_heading">Языки</p>
                  <span class="center_cercle_text">
                    Обучение методом погружения на трёх языках 36 часов
                    английского,украинского и русского Все методические пособия
                    представлены на трех языка
                  </span>
                </div>
                <div
                  v-if="isCurrentSlide(11)"
                  class="central_circle_content_eleven cllass_for_children"
                >
                  <p class="center_circ_bg_heading">
                    Творчество
                  </p>
                  <span class="center_cercle_text">
                    Творческий процесс является основным процессом ,мотивирующим
                    ребёнка к какому либо действию. Развитие творческого
                    потенциала -основная задача наших педагогов. Занятия
                    рисованием,лепкой,аппликацией способствует тренировке кисти
                    и становятся подготовительным этапом к освоению навыков
                    письма,развивает мелкую моторику и способствует формированию
                    образного мышления и изобретательности. Так же во время
                    занятий педагог систематизирует информацию из прочитанного
                    на Дискуссионном блоке и мотивирует детей выразить это через
                    творческий процесс. Изучение букв и цифр приносит ребёнку
                    радость и удовольствие и запоминается надолго,формируя
                    крепкие нейронные связи.
                  </span>
                </div>
                <div
                  v-if="isCurrentSlide(12)"
                  class="central_circle_content_twelve cllass_for_children"
                >
                  <p class="center_circ_bg_heading">
                    Малокомплектные группы до 8 человек
                  </p>
                  <span class="center_cercle_text">
                    Занятия проходят в малокомплектные группах,что позволяет
                    уделить качественное внимание к каждому ребёнку,выслушать
                    его мнение, аргументы и доводы,вовремя скорректировать и
                    помочь ребёнку ,если он об этом просит. Так же в
                    малокомплектные группах детки меньше болеют и имеют
                    возможность стабильно и длительно,без пропусков ,посещать
                    наши занятия,что позволяет сформировать устойчивые знания и
                    долговременную память.
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
                      src="../assets/img/circle_content/sub_one_circles.svg"
                      alt=""
                      class="img_one_circles"
                    />
                    <p class="header_circles_one    text_near_circles">
                      Изба - читальня на трёх языках
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
                      src="../assets/img/circle_content/sub_two_circles.svg"
                      alt=""
                      class="img_two_circles"
                    />
                    <p class="header_circles_two    text_near_circles">
                      Подготовка к школе
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
                      src="../assets/img/circle_content/sub_three_circles.svg"
                      alt=""
                      class="img_three_circles"
                    />
                    <p class="header_circles_three    text_near_circles">
                      Досуг первоклассника
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
                      src="../assets/img/circle_content/sub_four_circles.svg"
                      alt=""
                      class="img_four_circles"
                    />
                    <p class="header_circles_four    text_near_circles">
                      Обучение в игре
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
                      src="../assets/img/circle_content/sub_five_circles.svg"
                      alt=""
                      class="img_five_circles"
                    />
                    <p class="header_circles_five    text_near_circles">
                      Реджио педагогика
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
                      src="../assets/img/circle_content/sub_six_circles.svg"
                      alt=""
                      class="img_six_circles"
                    />
                    <p class="header_circles_six    text_near_circles">
                      Видеонаблюдение
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
                      src="../assets/img/circle_content/sub_seven_circles.svg"
                      alt=""
                      class="img_seven_circles"
                    />
                    <p class="header_circles_seven    text_near_circles">
                      Триз
                    </p>
                  </div>
                </div>

                <div
                  @click="setCurrentSlide(8)"
                  :class="{ selected_small_circle: isCurrentSlide(8) }"
                  class="external_small_circles eight_circles"
                >
                  <div class="content_small_circle sub_eight_circles">
                    <img
                      src="../assets/img/circle_content/sub_eight_circles.svg"
                      alt=""
                      class="img_eight_circles"
                    />
                    <p class="header_circles_eight   text_near_circles">
                      Финансовая грамотность
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
                      src="../assets/img/circle_content/sub_nine_circles.svg"
                      alt=""
                      class="img_nine_circles"
                    />
                    <p class="header_circles_nine    text_near_circles">
                      Современная методика обучения
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
                      src="../assets/img/circle_content/sub_ten_circles.svg"
                      alt=""
                      class="img_ten_circles"
                    />
                    <p class="header_circles_ten    text_near_circles">Языки</p>
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
                      src="../assets/img/circle_content/sub_eleven_circles.svg"
                      alt=""
                      class="img_eleven_circles"
                    />
                    <p class="header_circles_eleven   text_near_circles">
                      Творчество
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
                      src="../assets/img/circle_content/sub_twelve_circles.svg"
                      alt=""
                      class="img_twelve_circles"
                    />
                    <p class="header_circles_twelve    text_near_circles">
                      Малокомплектные группы до 8 человек
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
                <h3>Правила нашей академии</h3>
              </div>
            </div>

            <div class="wrapper_cards_our_rules">
              <div class="wrap_card_our_rules">
                <div class="head_card num_card_one"></div>

                <div class="wrap_footer_card">
                  <div class="footer_card">
                    <p class="head_card_text">
                      {{ first_home_techniques_title }}
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
                      v-if="
                        first_home_techniques_content_show_text.length > 180
                      "
                    >
                      <div
                        @click="readMore('first_home_techniques_content_show')"
                        v-if="!first_home_techniques_content_show"
                        class="btn_read_text"
                      >
                        читать полностью
                      </div>
                      <div
                        @click="
                          hideReadMore('first_home_techniques_content_show')
                        "
                        v-else
                        class="btn_hide_text"
                      >
                        скрыть
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div class="head_card num_card_two"></div>

                <div class="footer_card">
                  <p class="head_card_text">
                    {{ second_home_techniques_title }}
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
                      читать полностью
                    </div>
                    <div
                      @click="
                        hideReadMore('second_home_techniques_content_show')
                      "
                      v-else
                      class="btn_hide_text"
                    >
                      скрыть
                    </div>
                  </div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div class="head_card num_card_three"></div>

                <div class="footer_card">
                  <p class="head_card_text">
                    {{ third_home_techniques_title }}
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
                      читать полностью
                    </div>
                    <div
                      @click="
                        hideReadMore('third_home_techniques_content_show')
                      "
                      v-else
                      class="btn_hide_text"
                    >
                      скрыть
                    </div>
                  </div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div class="head_card num_card_four"></div>

                <div class="footer_card">
                  <p class="head_card_text">
                    {{ fourth_home_techniques_title }}
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
                      читать полностью
                    </div>
                    <div
                      @click="
                        hideReadMore('fourth_home_techniques_content_show')
                      "
                      v-else
                      class="btn_hide_text"
                    >
                      скрыть
                    </div>
                  </div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div class="head_card num_card_five"></div>

                <div class="footer_card">
                  <p class="head_card_text">
                    {{ fifth_home_techniques_title }}
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
                      читать полностью
                    </div>
                    <div
                      @click="
                        hideReadMore('fifth_home_techniques_content_show')
                      "
                      v-else
                      class="btn_hide_text"
                    >
                      скрыть
                    </div>
                  </div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div class="head_card num_card_six"></div>

                <div class="footer_card">
                  <p class="head_card_text">
                    {{ sixth_home_techniques_title }}
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
                      читать полностью
                    </div>
                    <div
                      @click="
                        hideReadMore('sixth_home_techniques_content_show')
                      "
                      v-else
                      class="btn_hide_text"
                    >
                      скрыть
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ________________________________________________ -->

          <!-- _________________________________GALLERY_______________ -->

          <div v-if="files.length" class="wrap_gallery">
            <div class="sub_wrap_gallery">
              <div class="box_line_heading center_circle_gallery">
                <div class="heading_text center_circle_header_gallery">
                  <h3>фото и видео нашего садика</h3>
                </div>
              </div>
              <div class="box__click">
                <svg
                  @click="prevSlide"
                  width="40"
                  height="39"
                  viewBox="0 0 40 39"
                  class="gallery_arrow_left"
                >
                  <path
                    d="M26.6837 9.89132C26.6837 8.73661 25.4337 8.01493 24.4337 8.59228L2.15184 21.4567C1.15184 22.034 1.15184 23.4774 2.15184 24.0548L24.4337 36.9192C25.4337 37.4966 26.6837 36.7749 26.6837 35.6202L26.6837 9.89132Z"
                    stroke="#1BA6B2"
                  />
                </svg>
                <carousel class="box_for_click">
                  <slide v-for="(chunk, index) in files" :key="index">
                    <div class="gallery_box">
                      <!-- _____________ -->
                      <div class="gallery_sub_box">
                        <div class="gallery_content_small centrify">
                          <img
                            v-if="
                              chunk[0].type.replace(/\/.+$/, '') === 'image'
                            "
                            :src="chunk[0].url"
                            alt=""
                            class="gallery_img_small"
                          />
                          <vue-player
                            v-else
                            :src="chunk[0].url"
                            :poster="poster"
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
                            alt=""
                            class="gallery_img_small"
                          />
                          <vue-player
                            v-else
                            :src="chunk[1].url"
                            :poster="poster"
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
                            alt=""
                            class="gallery_img_long"
                          />
                          <vue-player
                            v-else
                            :src="chunk[2].url"
                            :poster="poster"
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
                            alt=""
                            class="gallery_img_small"
                          />
                          <vue-player
                            v-else
                            :src="chunk[3].url"
                            :poster="poster"
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
                            alt=""
                            class="gallery_img_small"
                          />
                          <vue-player
                            v-else
                            :src="chunk[4].url"
                            :poster="poster"
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
                            alt=""
                            class="gallery_img_long"
                          />
                          <vue-player
                            v-else
                            :src="chunk[5].url"
                            :poster="poster"
                            class="gallery_img_long"
                          ></vue-player>
                        </div>
                      </div>
                    </div>
                  </slide>
                </carousel>
                <svg
                  @click="nextSlide"
                  width="40"
                  height="39"
                  viewBox="0 0 40 39"
                  class="gallery_arrow_right"
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
            <p class="sticker_footer_header">Родитель - не учитель!</p>
            <p class="sticker_footer_text">
              Приходите к нам и мы с удовольстием поделимся своими знаниями с
              вашими детьми!
            </p>
          </div>
        </div>

        <div class="google_map_wrapper">
          <!-- _________________MAP_________________ -->
          <iframe
            class="iframe_google_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.9341857831632!2d30.753829015494134!3d46.4500010751442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c633e7b3172e5b%3A0x395f101608febf7e!2z0L_RgNC-0YHQvy4g0KjQtdCy0YfQtdC90LrQviwgMjcsINCe0LTQtdGB0YHQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjUwMDA!5e0!3m2!1sru!2sua!4v1600843303113!5m2!1sru!2sua"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          >
          </iframe>
          <!-- ___________________STICKER__MAP______________ -->
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
                  href="https://instagram.com/umnazia.ua?igshid=101pgncdk1sb9 "
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
                  <img
                    src="../assets/img/img_png/facebook.png"
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
                  <img src="../assets/img/img_png/youtube.png" alt="youtube " />
                </a>
              </div>
            </div>

            <div @click="showModal('b_four')" class="text_700_35">
              <button
                v-if="!b_four"
                class="training_format_submit_btn btn_rtans"
              >
                Записаться в<br />
                группу
              </button>
              <button
                v-else
                class="training_format_submit_orange_btn btn_rtans"
              >
                Записаться в<br />
                группу
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
          Академия знаний “Умназія” 2020 © Все права защищены
        </p>
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
          <router-link to="contacts" class="el_menu_modal"
            >Контакты</router-link
          >
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
                    <img
                      src="../assets/img/img_png/youtube.png"
                      alt="youtube"
                    />
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
  </div>
</template>

<script>
import axios from "axios";
import "vue-snap/dist/vue-snap.css";
import vuePlayer from "@algoz098/vue-player";
import { Carousel, Slide } from "vue-snap";
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
      sixth_home_techniques_content: "",
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
      files: []
    };
  },
  components: {
    Carousel,
    Slide,
    vuePlayer
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    pageDataUpdate({ current, previous }) {
      (this.current = current), (this.previous = previous);
    },
    nextSlide() {
      const el = document.getElementsByClassName(
        "vs-carousel__arrows--right"
      )[0];
      el.click();
    },
    prevSlide() {
      const el = document.getElementsByClassName(
        "vs-carousel__arrows--left"
      )[0];
      el.click();
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
    hideReadMore(trigger) {
      this[trigger] = false;
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
    poster() {
      return process.env.VUE_APP_URL + "/Favicon_computer.png";
    },
    groups_description_first_block_content_show_text() {
      if (this.groups_description_first_block_content_show) {
        return this.groups_description_first_block_content;
      } else {
        if (this.groups_description_first_block_content.length <= 220) {
          return this.groups_description_first_block_content;
        } else {
          return this.groups_description_first_block_content
            .match(/^.{220}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    groups_description_second_block_content_show_text() {
      if (this.groups_description_second_block_content_show) {
        return this.groups_description_second_block_content;
      } else {
        if (this.groups_description_second_block_content.length <= 220) {
          return this.groups_description_second_block_content;
        } else {
          return this.groups_description_second_block_content
            .match(/^.{220}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    groups_description_third_block_content_show_text() {
      if (this.groups_description_third_block_content_show) {
        return this.groups_description_third_block_content;
      } else {
        if (this.groups_description_third_block_content.length <= 220) {
          return this.groups_description_third_block_content;
        } else {
          return this.groups_description_third_block_content
            .match(/^.{220}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    groups_description_fourth_block_content_show_text() {
      if (this.groups_description_fourth_block_content_show) {
        return this.groups_description_fourth_block_content;
      } else {
        if (this.groups_description_fourth_block_content.length <= 220) {
          return this.groups_description_fourth_block_content;
        } else {
          return this.groups_description_fourth_block_content
            .match(/^.{220}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    first_home_techniques_content_show_text() {
      if (this.first_home_techniques_content_show) {
        return this.first_home_techniques_content;
      } else {
        if (this.first_home_techniques_content.length <= 180) {
          return this.first_home_techniques_content;
        } else {
          return this.first_home_techniques_content
            .match(/^.{180}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    second_home_techniques_content_show_text() {
      if (this.second_home_techniques_content_show) {
        return this.second_home_techniques_content;
      } else {
        if (this.second_home_techniques_content.length <= 180) {
          return this.second_home_techniques_content;
        } else {
          return this.second_home_techniques_content
            .match(/^.{180}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    third_home_techniques_content_show_text() {
      if (this.third_home_techniques_content_show) {
        return this.third_home_techniques_content;
      } else {
        if (this.third_home_techniques_content.length <= 180) {
          return this.third_home_techniques_content;
        } else {
          return this.third_home_techniques_content
            .match(/^.{180}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    fourth_home_techniques_content_show_text() {
      if (this.fourth_home_techniques_content_show) {
        return this.fourth_home_techniques_content;
      } else {
        if (this.fourth_home_techniques_content.length <= 180) {
          return this.fourth_home_techniques_content;
        } else {
          return this.fourth_home_techniques_content
            .match(/^.{180}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    fifth_home_techniques_content_show_text() {
      if (this.fifth_home_techniques_content_show) {
        return this.fifth_home_techniques_content;
      } else {
        if (this.fifth_home_techniques_content.length <= 180) {
          return this.fifth_home_techniques_content;
        } else {
          return this.fifth_home_techniques_content
            .match(/^.{180}\S*\s/)[0]
            .replace(/\s$/, "...");
        }
      }
    },
    sixth_home_techniques_content_show_text() {
      if (this.sixth_home_techniques_content_show) {
        return this.sixth_home_techniques_content;
      } else {
        if (this.sixth_home_techniques_content.length <= 180) {
          return this.sixth_home_techniques_content;
        } else {
          return this.sixth_home_techniques_content
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
        url: process.env.VUE_APP_API + "/files"
      })
    ).data;

    let chunk = [];
    let i = 6;
    ids.forEach(id => {
      chunk.push({
        url: process.env.VUE_APP_API + `/files/${id.id}/x.jpg`,
        type: id.type
      });
      i--;
      if (i === 0) {
        this.files.push(chunk);
        chunk = [];
        i = 6;
      }
    });
  },
  mounted() {
    const rightInterval = setInterval(() => {
      const el = document.getElementsByClassName(
        "vs-carousel__arrows--right"
      )[0];
      if (el) {
        el.style.visibility = "hidden";
        clearInterval(rightInterval);
      }
    }, 500);

    const leftInterval = setInterval(() => {
      const el = document.getElementsByClassName(
        "vs-carousel__arrows--left"
      )[0];
      if (el) {
        el.style.visibility = "hidden";
        clearInterval(leftInterval);
      }
    }, 500);
  }
};
</script>

<style scoped src="../assets/styles/style.css" lang="css"></style>
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
