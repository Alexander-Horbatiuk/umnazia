<template>
  <div class="main_wrapper" height="100%">
    <header>
      <div class="navigation_list_wrapper admin_header"></div>
    </header>
    <main>
      <div class="main_content">
        <vue-dropzone
          ref="myDropzone"
          id="dropzone"
          :options="dropzoneOptions"
          :useCustomSlot="true"
          v-on:vdropzone-success="uploadSuccess"
          v-on:vdropzone-removed-file="fileRemoved"
        >
          <div class="dropzone-custom-content">
            <h3 class="dropzone-custom-title">
              Drag and drop to upload content!
            </h3>
            <div class="subtitle">
              ...or click to select a file from your computer
            </div>
          </div>
        </vue-dropzone>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      dropzoneOptions: {
        url: process.env.VUE_APP_API + "/files",
        addRemoveLinks: true,
        duplicateCheck: true
      },
      fileName: "porosa.mp4"
    };
  },
  methods: {
    toMainPage() {
      this.$router.push({ name: "Home" });
    },
    uploadSuccess(file, response) {
      this.fileName = response.file;
    },
    async fileRemoved(file) {
      await axios({
        method: "get",
        url: process.env.VUE_APP_API + `/files/delete/${file.id}`
      });
    }
  },
  async mounted() {
    const ids = (
      await axios({
        method: "get",
        url: process.env.VUE_APP_API + "/files"
      })
    ).data;

    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      console.log(id);
      let rawMock = (
        await axios({
          method: "get",
          url: process.env.VUE_APP_API + `/files/info/${id}`
        })
      ).data.file;

      let mockFile = {
        id,
        name: rawMock.filename,
        size: rawMock.length,
        type: rawMock.contentType
      };

      let imageUrl = process.env.VUE_APP_API + `/files/${id}/x.jpg`;

      this.$refs.myDropzone.manuallyAddFile(mockFile, imageUrl);
      this.$refs.myDropzone.dropzone.options.addRemoveLinks = true;
    }
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
}
.sub_screenshot {
  width: 90%;
}
.small_screenshot {
  width: 30%;
  padding: 0 0 10px 0;
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
.price_block,
.clock_block,
.head_contebt_block,
.card_title {
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  padding: 20px 0 0 0;
  margin: 0 0 40px 0;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 34px -7px rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
}
.sub_head_contebt_block,
.sub_sub_card_title {
  width: 30%;
}
.sub_price_block,
.sub_card_title {
  width: 25%;
}
.sub_clock_block {
  width: 50%;
}
</style>
