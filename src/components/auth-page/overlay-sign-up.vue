<template>
  <div class="overlay-panel overlay-left">
    <h1
      :class="{
        'px-2 my-4 sm-title font-weight-bold': $vuetify.breakpoint.smAndDown,
        'px-8 my-4 md-title font-weight-bold': $vuetify.breakpoint.mdAndUp,
      }"
    >
      ثبت نام در سامانه
    </h1>
    <p
      :class="{
        'pa-4  sm-description': $vuetify.breakpoint.smAndDown,
        'pa-8 md-description': $vuetify.breakpoint.mdAndUp,
      }"
    ></p>
    اگرحساب کاربری دارید اینجاکلیک کنید
    <v-btn
      color="info"
      dark
      rounded
      :class="{
        'pa-4 my-10 btn-login font-weight-bold': $vuetify.breakpoint.smAndDown,
        'pa-6 my-10 btn-login font-weight-bold': $vuetify.breakpoint.mdAndUp,
      }"
      elevation="0"
      @click="isSignInPanelActive = false"
    >
      ورود
    </v-btn>
  </div>
</template>
<style src="@/assets/styles/app.css" />

<script>
export default {
  computed: {
    isSignInPanelActive: {
      get: function () {
        return this.$store.getters["authPageModule/getIsSignInPanelActive"];
      },
      set: function (newVal) {
        this.$store.commit("authPageModule/setIsSignInPanelActive", newVal);
      },
    },
  },
};
</script>

<style scoped>
.overlay-left {
  transform: translateX(-20%);
}
</style>
