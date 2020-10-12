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
              <a href="tel:+380669552793" class="num_link_header"
                >+ 38 (097) 011 55 88</a
              >
            </div>
            <div>
              <a href="tel:+380669552793" class="num_link_header "
                >+ 38 (093) 193 62 67</a
              >
            </div>
          </div>
          <div class="big_logo">
            <router-link href="/" class="link_logo">
              <img
                src="../assets/img/logo/logo.png"
                alt="owl logo"
                width="308"
                class="main_logo"
              />
            </router-link>
          </div>

          <!--_____________________adress________________________ -->
          <div class="adress">
            <div class="header_adress_text text_400_12">
              Мы находимся:
            </div>
            <div class=" text_700_12">
              <router-link to="/" class="header_text_map_link " target="blank"
                >г.Одесса, просп. Шевченко 27</router-link
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
                <a href="https://www.youtube.com" class="icon_item_link">
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
              <router-link to="/" class="el_menu_link">Фотогалерея</router-link>
            </div>
            <div class="el_menu">
              <router-link to="/" class="el_menu_link">Контакты</router-link>
            </div>
          </div>
        </div>
      </div>
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
              <div class="box_age_one text_700_24">
                набор дошкольников <span class="sub_age_one"> 3-6 лет</span>
              </div>
              <div class="box_age_two text_700_24">
                и первокласников <span class="sub_age_two"> 6-7 лет</span>
              </div>
              <div class="content_box_age_text text_400_18">
                Занятия проходят по эксклюзивной методике языкового погружения
                на трех языках - русском, украинском, английском
              </div>
              <div class="content_box_age_btn text_700_16">
                <img
                  src="../assets/img/img_png/btn_yellow.png"
                  alt="button"
                  class="btn_yellow"
                />

                <!-- есть display: none;  -->
                <img
                  src="../assets/img/img_png/btn_orange.png"
                  alt="button"
                  class="btn_orange"
                />

                <p class="btn_text">Записаться в группу</p>
              </div>
            </div>
          </div>

          <!-- _______________________bg_ander_header________________________ -->

          <div class="bg_ander_header">
           
          </div>
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

            <div class="box_age_groups">
              <div class="age_groups  z_index_four">
                <div class="circle_age_groups">
                  <img
                    src="../assets/img/img_svg/img_group_one.svg"
                    alt="children"
                    class="img_age_group img_group_one"
                  />
                </div>
                <div class="content_header_text">
                  <p class="header_groups">3-4 года</p>
                  <span class="text_group">
                    В этом возрасте активно формируются многие
                    навыки,развиваются психические процессы ,такие как
                    память,мышление,речь,внимание, воображение,формируется
                    самооценка. Этот возраст ещё называют возрастом «почемучек».
                  </span>
                </div>
                <!--кнопка дла развертыванья-->
                <div class="btn_read_text">читать полностью</div>
              </div>

              <div class="age_groups        z_index_three">
                <div class="circle_age_groups">
                  <img
                    src="../assets/img/img_svg/img_group_two.svg"
                    alt="children"
                    class="img_age_group img_group_two"
                  />
                </div>
                <div class="content_header_text">
                  <p class="header_groups">4-5 года</p>
                  <span class="text_group"
                    >В поведении детей пятого Года жизни увеличивается
                    потребность в двигательной активности, формируется
                    интеллектуальное и социально-эмоциональное развитие.
                    Дошкольники испытывают острую потребность в движении.
                  </span>
                </div>
                <!--кнопка дла развертыванья-->
                <div class="btn_read_text">читать полностью</div>
              </div>
            </div>

            <div class="box_age_groups">
              <div class="age_groups         z_index_two">
                <div class="circle_age_groups">
                  <img
                    src="../assets/img/img_svg/img_group_three.svg"
                    alt="children"
                    class="img_age_group img_group_three"
                  />
                </div>
                <div class="content_header_text">
                  <p class="header_groups">5-6 года</p>
                  <span class="text_group"
                    >Возраст социально-эмоционального развития, ребёнок 5-6 лет
                    стремиться познать себя и другого человека во взаимодействии
                    с друг другом и обществом в целом,осваивает навыки
                    коммуникации и взаимоотношений между людьми.
                  </span>
                </div>
                <!--кнопка дла развертыванья-->
                <div class="btn_read_text">читать полностью</div>
              </div>
              <div class="age_groups         z_index_one">
                <div class="circle_age_groups">
                  <img
                    src="../assets/img/img_svg/img_group_four.svg"
                    alt="children"
                    class="img_age_group img_group_four"
                  />
                </div>
                <div class="content_header_text">
                  <p class="header_groups">6-7 года</p>
                  <span class="text_group"
                    >Сюжетно - ролевые игры становятся более сложными. Игровое
                    пространство должно быть обеспечено различного рода
                    оборудованием для сюжетно - ролевой игры.</span
                  >
                </div>
                <!--кнопка дла развертыванья-->
                <div class="btn_read_text">читать полностью</div>
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
                  <p>С 9:00 до 13:00</p>
                </div>

                <div class="text_700_35">
                  <button class="training_format_submit_btn ">
                    Записаться в<br />
                    группу
                  </button>
                </div>
              </div>

              <div class="class_hours class_hours_14pm">
                <div class="time_text_14pm text_700_35">
                  <p>С 14:00 до 18:00</p>
                </div>

                <div class="text_Bold">
                  <button class="training_format_submit_orange_btn ">
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
                <div class="central_circle_content_one   cllass_for_children">
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

                <div class="central_circle_content_two   cllass_for_children">
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

                <div class="central_circle_content_three   cllass_for_children">
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
                <div class="central_circle_content_four   cllass_for_children">
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
                <div class="central_circle_content_five   cllass_for_children">
                  <p class="center_circ_bg_heading">
                    Реджио педагогика
                  </p>
                  <span class="center_cercle_text"></span>
                </div>

                <div class="central_circle_content_six   cllass_for_children">
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
                <div class="central_circle_content_seven   cllass_for_children">
                  <p class="center_circ_bg_heading">Триз</p>
                  <span class="center_cercle_text"></span>
                </div>

                <div class="central_circle_content_eight   cllass_for_children">
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

                <div class="central_circle_content_nine   cllass_for_children">
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

                <div class="central_circle_content_ten   cllass_for_children">
                  <p class="center_circ_bg_heading">Языки</p>
                  <span class="center_cercle_text">
                    Обучение методом погружения на трёх языках 36 часов
                    английского,украинского и русского Все методические пособия
                    представлены на трех языка
                  </span>
                </div>
                <div
                  class="central_circle_content_eleven   cllass_for_children"
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
                  class="central_circle_content_twelve   cllass_for_children"
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
                <div class="external_small_circles one_circles">
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

                <div class="external_small_circles two_circles">
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
                <div class="external_small_circles three_circles">
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

                <div class="external_small_circles four_circles">
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
                <div class="external_small_circles five_circles">
                  <div class="content_small_circle sub_five_circles">
                    <img
                      src="../assets/img/circle_content/sub_five_circles.svg"
                      alt=""
                      class="img_five_circles"
                    />
                    <p class="header_circles_five    text_near_circles">
                      Реджио педагогика (о нас)
                    </p>
                  </div>
                </div>

                <div class="external_small_circles six_circles">
                  <div class="content_small_circle sub_six_circles">
                    <img
                      src="../assets/img/circle_content/sub_six_circles.svg"
                      alt=""
                      class="img_six_circles"
                    />
                    <p class="header_circles_six    text_near_circles">
                      Видеонаблюдение (текст)
                    </p>
                  </div>
                </div>
              </div>

              <div class="small_circ_phome">
                <div class="external_small_circles seven_circles">
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

                <div class="external_small_circles eight_circles">
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
                <div class="external_small_circles nine_circles">
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

                <div class="external_small_circles ten_circles">
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
                <div class="external_small_circles eleven_circles">
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

                <div class="external_small_circles twelve_circles">
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

                <div class="footer_card">
                  <p class="head_card_text">
                    Уважать ребенка и смотреть ему в глаза
                  </p>
                  <span class="text_card">
                    Мы говорим : надо не опуститься до ребёнка,а подняться до
                    него! Сидеть с ним на детском стуле или на
                    полу,разговаривать ,глядя ему в глаза,есть с ним -и когда мы
                    едим,наша цель находиться на одном уровне.
                  </span>
                  <!--кнопка дла развертыванья-->
                  <div class="btn_read_text">читать полностью</div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div class="head_card num_card_two"></div>

                <div class="footer_card">
                  <p class="head_card_text">
                    Объяснить правила и задать вопрос
                  </p>
                  <span class="text_card">
                    Ребёнку необходимо объяснить, что существуют правила. Наша
                    задача,и педагогов,и родителей,как можно больше задавать
                    открытых вопросов и почти не задавать закрытых,на которые
                    можно ответить «Да» или «Нет»
                  </span>
                  <!--кнопка дла развертыванья-->
                  <div class="btn_read_text">читать полностью</div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div class="head_card num_card_three"></div>

                <div class="footer_card">
                  <p class="head_card_text">Задавать открытые вопросы</p>
                  <span class="text_card">
                    Реджио-педагогика взяла многое у Льва Выготского. Он
                    говорил: мы должны понять, где, в какой точке по тому или
                    иному вопросу ребенок находиться сейчас, и мы узнаем зону
                    его ближайшего развития. Основной задачей для нас является
                    не давать ребенку готовых знаний, правил и понятий, а путем
                    размышлений дать возможность ребенку самостоятельно найти
                    ответы на вопросы
                  </span>
                  <!--кнопка дла развертыванья-->
                  <div class="btn_read_text">читать полностью</div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div class="head_card num_card_four"></div>

                <div class="footer_card">
                  <p class="head_card_text">Не “неправильно”, а “по-другому”</p>
                  <span class="text_card">
                    Часто,неправильный ответ может стать толчком к какому-то
                    исследованию,к расширению знаний.
                  </span>
                  <!--кнопка дла развертыванья-->
                  <div class="btn_read_text">читать полностью</div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div class="head_card num_card_five"></div>

                <div class="footer_card">
                  <p class="head_card_text">Предлагать выбор и не торопить</p>
                  <span class="text_card">
                    Наши педагоги всегда дают ребенку выбор, объясняя
                    последствия. Ребенок научится понимать: нет безвыходных
                    ситуаций, есть решение проблемы.
                  </span>
                  <!--кнопка дла развертыванья-->
                  <div class="btn_read_text">читать полностью</div>
                </div>
              </div>

              <div class="wrap_card_our_rules">
                <div class="head_card num_card_six"></div>

                <div class="footer_card">
                  <p class="head_card_text">Учиться через дискуссию</p>
                  <span class="text_card">
                    Мы уважаем мнение любого ребенка и учим его грамотно
                    выражать свои мысли в устнои и письменном виде.
                  </span>
                  <!--кнопка дла развертыванья-->
                  <div class="btn_read_text">читать полностью</div>
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
                  <h3>фото и видео нашего садика</h3>
                </div>
              </div>
              <div class="box_for_click">
                <svg
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
                <div class="gallery_box">
                  <!-- _____________ -->
                  <div class="gallery_sub_box">
                    <div class="gallery_content_small">
                      <img
                        src="../assets/img/gallery/funny-clown-play-with-boys.jpg"
                        width="255"
                        height="250"
                        alt=""
                        class="gallery_img_small"
                      />
                    </div>
                    <!-- ________ -->
                    <div class="gallery_content_small">
                      <video
                        width="255"
                        height="250"
                        controls="controls"
                        poster="#"
                        class="gallery_img_small"
                      >
                        <source src="video.mp4" type="video/mp4" />
                        <!-- MP4 для Safari, IE9, iPhone, iPad, Android, и Windows Phone 7 -->
                        <source src="video.webm" type="video/webm" />
                        <!-- WebM/VP8 для Firefox4, Opera, и Chrome -->
                        <source src="video.ogv" type="video/ogg" />
                        <!-- Ogg/Vorbis для старых версий браузеров Firefox и Opera -->
                        <object
                          data="video.swf"
                          type="application/x-shockwave-flash"
                          ><!-- добавляем видеоконтент для устаревших браузеров, в которых нет поддержки элемента video -->
                          <param name="movie" value="video.swf" />
                        </object>
                      </video>
                    </div>
                  </div>
                  <!-- _____________ -->
                  <div class="gallery_sub_box">
                    <div class="gallery_content_long">
                      <img
                        src="../assets/img/gallery/funny-clown-with-children-long.jpg"
                        width="255"
                        height="530"
                        alt="children"
                        class="gallery_img_small"
                      />
                    </div>
                  </div>
                  <!-- _____________ -->
                  <div class="gallery_sub_box">
                    <div class="gallery_content_small">
                      <img
                        src="../assets/img/gallery/scandi-kindergarten-with-easel.jpg"
                        width="255"
                        height="250"
                        alt="children"
                        class="gallery_img_small"
                      />
                    </div>
                    <!-- ________ -->
                    <div class="gallery_content_small">
                      <video
                        width="255"
                        height="250"
                        controls="controls"
                        poster="#"
                        class="gallery_img_small"
                      >
                        <source src="video.mp4" type="video/mp4" />
                        <!-- MP4 для Safari, IE9, iPhone, iPad, Android, и Windows Phone 7 -->
                        <source src="video.webm" type="video/webm" />
                        <!-- WebM/VP8 для Firefox4, Opera, и Chrome -->
                        <source src="video.ogv" type="video/ogg" />
                        <!-- Ogg/Vorbis для старых версий браузеров Firefox и Opera -->
                        <object
                          data="video.swf"
                          type="application/x-shockwave-flash"
                          ><!-- добавляем видеоконтент для устаревших браузеров, в которых нет поддержки элемента video -->
                          <param name="movie" value="video.swf" />
                        </object>
                      </video>
                    </div>
                  </div>
                  <!-- _____________ -->
                  <div class="gallery_sub_box">
                    <div class="gallery_content_long">
                      <img
                        src="../assets/img/gallery/leisure-in-kindergarten.jpg"
                        width="255"
                        height="530"
                        alt="children"
                        class="gallery_img_small"
                      />
                    </div>
                  </div>
                </div>
                <svg
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
                  href="https://instagram.com/umnazia.ua?igshid=101pgncdk1sb9 "
                >
                  <img
                    src="../assets/img/img_png/instagram.png"
                    alt="instagram "
                  />
                </a>
              </div>
              <div class="modal_social_icon_item ">
                <a href="# ">
                  <img
                    src="../assets/img/img_png/facebook.png"
                    alt="facebook "
                  />
                </a>
              </div>
              <div class="modal_social_icon_item ">
                <a href="# ">
                  <img src="../assets/img/img_png/youtube.png" alt="youtube " />
                </a>
              </div>
            </div>

            <div class="modal_btn_wrapper text_Bold ">
              <button class="modal_submit_btn ">
                Записаться в<br />
                группу
              </button>
            </div>
          </div>
          <div class="btn_anchor_wrapper">
            <button
              class="btn_anchor"
              @click="scrollToTop"
              style="cursor: pointer"
            ></button>
          </div>
        </div>

        <p class="administration_slogan">
          Академия знаний “Умназія” 2020 © Все права защищены
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style src="../assets/styles/style.css" lang="css"></style>
