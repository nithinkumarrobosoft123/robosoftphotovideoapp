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
        <ion-row class="border">
          <ion-col class="ion-text-left" size="1">
            <a
              class="tab text-decoration-n"
              :class="[activeTab == 'photos' ? 'active' : '']"
              @click="onTabclick('photos')"
              >Photos
            </a>
          </ion-col>
          <ion-col class="ion-text-left">
            <a
              class="tab text-decoration-n"
              :class="[activeTab == 'videos' ? 'active' : '']"
              @click="onTabclick('videos')"
            >
              Videos
            </a>
          </ion-col>
          <ion-col class="ion-text-right">
            <a
              :class="[activeTab == 'favourites' ? 'active' : '']"
              class="tab text-decoration-n"
              @click="onTabclick('favourites')"
              >Favourites</a
            >
          </ion-col>
        </ion-row>
        <!-- lists -->
        <div v-if="activeTab == 'photos'">
          <ion-grid>
            <ion-row>
              <ion-col
                size-xl="3"
                size-lg="3"
                size-xs="12"
                v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
                :key="i"
              >
                <ion-card>
                  <div class="container-image">
                    <img src="@/assets/photo.png" alt="" />
                    <div class="heart">
                      <img src="@/assets/Icon-heart-deselect.png" alt="" />
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
          </ion-grid>
        </div>

        <div v-if="activeTab == 'videos'">
          <ion-grid>
            <ion-row>
              <ion-col
                size-xl="3"
                size-lg="3"
                v-for="video in videoFiles"
                :key="video.id"
              >
                <ion-card>
                  <div class="container-image">
                    <img src="@/assets/photo.png" alt="" />
                    <div class="heart">
                      <img src="@/assets/Icon-heart-deselect.png" alt="" />
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
          </ion-grid>
        </div>

        <button @click="gotoPhotDetail">photo details</button>
        <button @click="gotoVideoDetail">video details</button>
        <div class="ion-padding"></div>
        <div class="ion-padding"></div>
        <div class="ion-padding"></div>
      </div>
    </ion-content>
    <Footer />
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from "@ionic/vue";
import { defineComponent } from "vue";
import Footer from "@/components/Footer.vue";
import Common from "@/services/common";

const commonService = Common.getInstance();
export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonPage,
    Footer
  },
  data() {
    return {
      activeTab: "photos",
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
      ],
      videoPictures: [
        {
          id: 79696,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-0.jpg",
          nr: 0
        },
        {
          id: 79697,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-1.jpg",
          nr: 1
        },
        {
          id: 79698,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-2.jpg",
          nr: 2
        },
        {
          id: 79699,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-3.jpg",
          nr: 3
        },
        {
          id: 79700,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-4.jpg",
          nr: 4
        },
        {
          id: 79701,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-5.jpg",
          nr: 5
        },
        {
          id: 79702,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-6.jpg",
          nr: 6
        },
        {
          id: 79703,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-7.jpg",
          nr: 7
        },
        {
          id: 79704,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-8.jpg",
          nr: 8
        },
        {
          id: 79705,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-9.jpg",
          nr: 9
        },
        {
          id: 79706,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-10.jpg",
          nr: 10
        },
        {
          id: 79707,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-11.jpg",
          nr: 11
        },
        {
          id: 79708,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-12.jpg",
          nr: 12
        },
        {
          id: 79709,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-13.jpg",
          nr: 13
        },
        {
          id: 79710,
          picture:
            "https://static-videos.pexels.com/videos/1093662/pictures/preview-14.jpg",
          nr: 14
        }
      ]
    };
  },
  ionViewWillEnter() {
    commonService
      .getAllPhotos()
      .then((res: any) => {
        console.log("res", res);
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  },
  methods: {
    gotoPhotDetail() {
      this.$router.push("photoDetails");
    },
    onTabclick(tab: any) {
      this.activeTab = tab;
    },
    gotoVideoDetail() {
      this.$router.push("videoDetails");
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  width: 80%;
  margin: 0 auto;
}

.tabcontainer {
  width: 100%;
  margin: 0 auto;
  padding-bottom: 15px;
  border-bottom: 1px solid #276aa0;
}

.container-image {
  position: relative;
}

.heart {
  position: absolute;
  right: 0;
  top: 6px;
  right: 10px;
}

.otherSection {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.avatar {
  position: absolute;
  bottom: 6px;
  left: 2px;
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
  padding: 0;
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

.favourite {
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

.tabcontainer {
  margin: 0 auto;
}

.ion-chip {
  --background: none;
  border-radius: 0;
}

.playBtn {
  position: absolute;
  top: 50px;
  left: 130px;
}

.logo {
  position: absolute;
  top: 5%;
  left: 8%;
}

.main-header {
  font-size: 1.7rem;
  color: white;
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

.tab {
  color: #333;
  font-size: 20px;
  font-family: monospace;
}

.border {
  border-bottom: 3px solid #e8e1e1;
}

.text-decoration-n {
  text-decoration: none;
}

.active {
  color: #f53d3d;
  border-bottom: 1px solid #f53d3d;
  padding: 5px;
}
</style>