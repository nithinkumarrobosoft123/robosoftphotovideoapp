<template>
  <ion-footer>
    <ion-toolbar color="white">
      <ion-title class="ion-text-capitalize ion-text-center" size="small">
        <div class="clr-grey">© Robosoft Technologies 1996-2021</div>
      </ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonFooter, IonToolbar } from "@ionic/vue";

export default defineComponent({
  name: "Footer",
  components: {
    IonFooter,
    IonToolbar
  }
});
</script>

<style scoped>
.clr-grey {
  color: #bababa;
}
</style>