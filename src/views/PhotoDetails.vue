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
            <div class="container-image" ref="myImg">
              <img src="@/assets/photo.png" alt="" />
              <div class="heart">
                <img src="@/assets/heart-select-mobile.png" alt="" />
              </div>
              <div class="title">
                <h2 color="light">
                  loper iprem fkd kkld klkl klkl klkl klklkl klkl
                </h2>
              </div>
              <div class="zoomBtns">
                <div class="zoomin">
                  <img
                    src="@/assets/zoom.png"
                    alt=""
                    srcset=""
                    @click="zoomIn"
                  />
                </div>
                <div class="zoomout">
                  <img src="@/assets/zoomout.png" alt="" srcset="" />
                </div>
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
  name: "PhotoDetails",
  components: {
    IonContent,
    IonPage,
    Footer
  },
  methods: {
    zoomIn() {
      console.log(this.$refs.myImg);
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  margin: 0 auto;
}

.container-image {
  position: relative;
}
ion-card {
  box-shadow: none;
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
  right: 637px;
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

.border {
  border-bottom: 3px solid #e8e1e1;
}

.text-decoration-n {
  text-decoration: none;
}

.header-content {
  padding: 10px;
}

.bg-image {
  width: 100%;
  height: 500px;
}

.logo {
  position: absolute;
  top: 5%;
  left: 8%;
}

.header-container {
  position: absolute;
  margin: auto 23%;
  top: 16%;
}

.title-header {
  color: white;
}

.main-header {
  font-size: 1.7rem;
  color: white;
}
</style>