<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="header-content">
        <img src="@/assets/photo.png" alt="" height="300" class="bg-image" />
        <div class="logo">
          <img src="@/assets/logo_scroll.png" alt="" />
        </div>
        <ion-grid>
          <ion-row class="header-container">
            <ion-col size="12">
              <div class="main-header ion-text-center">
                Discover the world's best photo and video
              </div>
            </ion-col>
            <ion-col size="12">
              <div class="title-header ion-text-center">
                <span>Best memories online</span>
              </div>
            </ion-col>
            <ion-col size="12">
              <div class="title-header">
                <ion-searchbar class="search-bar"></ion-searchbar>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <div id="container">
        <!-- lists -->
        <div>
          <ion-card>
            <div class="containerImage">
              <video
                src="https://player.vimeo.com/external/269971860.sd.mp4?s=a3036bd1a9f15c1b31daedad98c06a3b24cdd747&profile_id=165&oauth2_token_id=57447761"
                controls
              >
                Your browser does not support the video tag.
              </video>
              <div class="heart">
                <img src="@/assets/heart-select-mobile.png" alt="" />
              </div>
              <div class="title">
                <h2 color="light">
                  loper iprem fkd kkld klkl klkl klkl klklkl klkl
                </h2>
              </div>
              <div class="avatar">
                <ion-chip>
                  <ion-avatar>
                    <img
                      src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                    />
                  </ion-avatar>
                  <ion-label color="light">Chip Avatar</ion-label>
                </ion-chip>
              </div>
            </div>
          </ion-card>
          <!-- <ion-grid>
            <ion-row>
              <ion-col
                size-xl="3"
                size-lg="3"
                v-for="video in videoFiles"
                :key="video.id"
              >
                <ion-card>
                  <div class="containerImage">
                    <img src="@/assets/photo.png" alt="" />
                    <div class="heart">
                      <img src="@/assets/heart-select-mobile.png" alt="" />
                    </div>
                    <div class="playBtn">
                      <img src="@/assets/play.png" alt="" />
                    </div>
                    <div class="avatar">
                      <ion-chip>
                        <ion-avatar>
                          <img
                            src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                          />
                        </ion-avatar>
                        <ion-label color="light">Chip Avatar</ion-label>
                      </ion-chip>
                    </div>
                  </div>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid> -->
        </div>
      </div>
    </ion-content>
    <Footer />
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/vue";
import { defineComponent } from "vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "VideoDetails",
  components: {
    IonContent,
    IonPage,
    Footer
  },
  data() {
    return {
      videoFiles: [
        {
          id: 37101,
          quality: "hd",
          fileType: "video/mp4",
          width: 1280,
          height: 720,
          link:
            "https://player.vimeo.com/external/269971860.hd.mp4?s=eae965838585cc8342bb5d5253d06a52b2415570&profile_id=174&oauth2_token_id=57447761"
        },
        {
          id: 37102,
          quality: "sd",
          fileType: "video/mp4",
          width: 640,
          height: 360,
          link:
            "https://player.vimeo.com/external/269971860.sd.mp4?s=a3036bd1a9f15c1b31daedad98c06a3b24cdd747&profile_id=164&oauth2_token_id=57447761"
        },
        {
          id: 37103,
          quality: "hd",
          fileType: "video/mp4",
          width: 1920,
          height: 1080,
          link:
            "https://player.vimeo.com/external/269971860.hd.mp4?s=eae965838585cc8342bb5d5253d06a52b2415570&profile_id=175&oauth2_token_id=57447761"
        },
        {
          id: 37104,
          quality: "sd",
          fileType: "video/mp4",
          width: 960,
          height: 540,
          link:
            "https://player.vimeo.com/external/269971860.sd.mp4?s=a3036bd1a9f15c1b31daedad98c06a3b24cdd747&profile_id=165&oauth2_token_id=57447761"
        },
        {
          id: 37105,
          quality: "hls",
          fileType: "video/mp4",
          width: null,
          height: null,
          link:
            "https://player.vimeo.com/external/269971860.m3u8?s=ac08929c597387cc77ae3d88bfe2ad66a9c4d31f&oauth2_token_id=57447761"
        }
      ]
    };
  }
});
</script>

<style scoped>
#container {
  text-align: center;
}

.tabcontainer {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 15px;
  border-bottom: 1px solid #276aa0;
}

.containerImage {
  position: relative;
}

.heart {
  position: absolute;
  right: 618px;
  top: 10px;
}

.otherSection {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.avatar {
  position: absolute;
  bottom: 10px;
  left: 489px;
}

ion-card {
  box-shadow: none;
}

.segments {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  clear: both;
}

body {
  margin: 0;
  background: #222;
  font-family: "Work Sans", sans-serif;
  font-weight: 800;
}

.container {
  width: 80%;
  margin: 0 auto;
}

header {
  background: #55d6aa;
}

header::after {
  content: "";
  display: table;
  clear: both;
}

.logo {
  display: inline-block;
  margin-left: 70px;
  padding-top: 23px;
  position: relative;
}

nav {
  float: left;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
  margin-left: 70px;
  padding-top: 23px;
  position: relative;
}

nav a {
  color: #444;
  text-decoration: none;
  text-transform: capitalize;
  font-size: 14px;
}

nav a:hover {
  color: #e81244;
}

a::before {
  content: "";
  display: block;
  height: 5px;
  background-color: #e81244;
  position: absolute;
  top: 50px;
  width: 0%;

  transition: all ease-in-out 250ms;
}

a:hover::before,
a:active::before {
  width: 100%;
}

a {
  color: #444;
  text-decoration: none;
  text-transform: capitalize;
  font-size: 14px;
}

.tabcontainer {
  margin: 0 auto;
}

.ion-chip {
  --background: none;
  border-radius: 0;
}

.avatar {
  position: absolute;
  /* bottom: 10px; */
  top: 55px;
  left: 484px;
}

.heart {
  position: absolute;
  right: 506px;
  top: 10px;
  padding: 3px;
}

.title {
  position: absolute;
  top: 0px;
  left: 495px;
  color: #fff;
}

.zoomBtns {
  position: absolute;
  right: 530px;
  top: 4px;
  display: flex;
  justify-content: space-between;
}

.zoomin,
.zoomout {
  background: #fff;
  padding: 7px;
  border-radius: 4px;
  margin: 2px;
}

.header-container {
  position: absolute;
  margin: auto 23%;
  top: 16%;
}

.title-header {
  color: white;
}

.search-bar {
  width: 70%;
  position: absolute;
  margin: auto 15%;
}

.header-content {
  padding: 10px;
}

.bg-image {
  width: 100%;
  height: 500px;
}

.main-header {
  font-size: 1.7rem;
  color: white;
}

.logo {
  position: absolute;
  top: 5%;
  left: 8%;
}
</style>