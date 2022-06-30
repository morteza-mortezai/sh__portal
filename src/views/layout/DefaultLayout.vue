<template>
  <!-- <v-card height="100%">
    <v-app-bar color="grey lighten-2" height="85px" class="mt-4">
      <v-app-bar-nav-icon
        class="mt-4"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-img
        src="@/assets/img/shzarchr.png"
        max-height="82px"
        max-width="64px"
        align="center"
      ></v-img>
      <v-toolbar-title class="header-Protal"
        ><h3>سامانه خدمات الکترونیک شهرداری</h3></v-toolbar-title
      > -->
  <!-- <v-toolbar-title class="header-Protal mt-4"
        ><h3>سامانه خدمات الکترونیک شهرداری</h3></v-toolbar-title
      > -->
  <!-- </v-app-bar> -->
  <v-row class="d-flex justify-center mt-8">
    <v-col cols="12" sm="6" md="4">
      <v-card :to="{ name: 'mapView' }" class="card education">
        <v-img src="@/assets/img/samap.png" height="5px" class=""></v-img>
        <v-card-title>نقشه</v-card-title>
      </v-card>
    </v-col>

    <v-col cols="12" sm="6" md="4">
      <v-card :to="{ name: 'zabete' }" class="card education">
        <v-img src="@/assets/img/zavabet.png" class=""></v-img>
        <v-card class=""> </v-card>
        <v-card-title>ضوابط شهرسازی</v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-card :to="{ name: 'TasdighGovahi' }" class="card education">
        <v-img src="@/assets/img/ggovahi.png" class=""></v-img>
        <v-card-title>تصدیق گواهی</v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-card :to="{ name: 'avarez' }" class="card education">
        <v-img src="@/assets/img/mm.png" height="50px" class=""></v-img>
        <v-card class=""> </v-card>
        <v-card-title>عوارض شهرداری</v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-card :to="{ name: 'darkhastmardomi' }" class="card education">
        <v-img
          src="@/assets/img/darrkhas.png"
          width="100%"
          height="50px"
          class=""
        ></v-img>
        <v-card class=""> </v-card>
        <v-card-title>درخواست مردمی</v-card-title>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <v-card :to="{ name: 'SabtPigiri' }" class="card education">
        <v-img src="@/assets/img/pigirii.png" height="50px" class=""></v-img>
        <v-card class=""> </v-card>
        <v-card-title>ثبت وپیگیری درخواست</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    drawer: false,

    group: null,
  }),
};
</script>
<style scoped>
* {
  direction: rtl;
  font-family: IRANSans;
}
body {
  background: #072257 !;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Open Sans";
}

.education {
  --bg-color: #f1f0ea;
  --bg-color-light: #ffeeba;
  --text-color-hover: #4c5656;
  --box-shadow-color: rgba(255, 215, 97, 0.48);
}
.education:hover {
  z-index: 999999;

  --box-shadow-color: rgba(255, 215, 97, 0.48);
}
.credentialing {
  --bg-color: #b8f9d3;
  --bg-color-light: #e2fced;
  --text-color-hover: #4c5656;
  --box-shadow-color: rgba(184, 249, 211, 0.48);
}

.wallet {
}

.human-resources {
  --bg-color: #dce9ff;
  --bg-color-light: #f1f7ff;
  --text-color-hover: #4c5656;
  --box-shadow-color: rgba(220, 233, 255, 0.48);
}

.card {
  width: 300px;
  height: 250px;
  background: rgb(243, 241, 241);
  border-top-right-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease-out;
  text-decoration: none;
}
.card:hover {

  background: rgb(243, 241, 241);
  border-top-right-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease-out;
  text-decoration: none;
}

.card:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
  box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
    0 24px 46px var(--box-shadow-color);
  opacity: 0.8;
}

.card:hover .overlay {
  transform: scale(4) translateZ(0);
}

.card:hover .circle {
  border-color: var(--bg-color-light);
  background: var(--bg-color);
}

.card:hover .circle:after {
  background: var(--bg-color-light);
}

.card:hover p {
  color: var(--text-color-hover);
}

.card:active {
  transform: scale(1) translateZ(0);
  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11),
    0 15px 24px var(--box-shadow-color);
}

.card p {
  font-size: 17px;
  color: #4c5656;
  margin-top: 30px;
  z-index: 1000;
  transition: color 0.3s ease-out;
}

.circle {
  width: 131px;
  height: 131px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease-out;
}

.circle:hover {
  width: 131px;
  height: 131px;
  border-radius: 50%;
  opacity: 0.2;
  border: 2px solid var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease-out;
}

.circle:after {
  content: "";
  width: 118px;
  height: 118px;
  display: block;
  position: absolute;
  background: var(--bg-color);
  border-radius: 50%;
  top: 7px;
  left: 7px;
  transition: opacity 0.3s ease-out;
}

.circle svg {
  z-index: 10000;
  transform: translateZ(0);
}

.overlay {
  width: 118px;
  position: absolute;
  height: 118px;
  border-radius: 50%;
  background: var(--bg-color);
  top: 70px;
  left: 50px;
  z-index: 0;
  transition: transform 0.3s ease-out;
}
</style>
