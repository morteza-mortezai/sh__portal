<template>
  <div id="app" class="card-overlay">
    <v-app>
      <v-app-bar dir="rtl" app dense color="grey lighten-5  " height="65px">
        <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
        <v-img
          src="@/assets/img/zarrche.png"
          max-height="82px"
          max-width="64px"
          align="center"
        ></v-img>
        <v-toolbar-title class="header-Protal"
          ><h3>سامانه خدمات الکترونیک شهرداری زارچ</h3></v-toolbar-title
        >
        <!-- <v-toolbar-title class="header-Protal mt-4"
        ><h3>سامانه خدمات الکترونیک شهرداری</h3></v-toolbar-title
      > -->
        <v-spacer></v-spacer>
 
        <v-tooltip bottom v-if="userName">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
           icon
              text
              color="transition"
              v-bind="attrs"
              v-on="on"
              class="ml-2"
              >
              <v-icon>mdi-account-plus-outline </v-icon>
            </v-btn>
          </template>
          <span>
            {{userName}}
          </span>
        </v-tooltip>
        <v-tooltip bottom v-else>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :to="{ name: 'authPage' }"
              text
              color="transition"
              v-bind="attrs"
              v-on="on"
              class="ml-2"
              >ورود به سیستم
              <v-icon>mdi-account-plus-outline </v-icon>
            </v-btn>
          </template>
          <span>لاگین</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :to="{ name: 'DefaultLayout' }"
              color="transition"
              v-bind="attrs"
              v-on="on"
              class="ml-4 mx-n1"
            >
              <v-icon color="black">mdi-home-circle </v-icon>
            </v-btn>
          </template>
          <span>صفحه اصلی</span>
        </v-tooltip>

        <button @click="goBack" class="mr-4">
          <v-icon color="black">mdi-arrow-left-circle </v-icon>
        </button>
      </v-app-bar>
      <div
        :class="{
          'sm-main-style': $vuetify.breakpoint.smAndDown,
          'md-main-style': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <div>
          <v-row class="my-4"> </v-row>
        </div>
        <router-view />
        <v-col id="create">
          <v-col v-model="bottom" label="Bottom" hide-details></v-col>
          <v-col v-model="left" label="Left" hide-details></v-col>
          <!-- <v-radio-group v-model="direction" hide-details>
          <v-col value="top" label="Top"></v-col>
        </v-radio-group> -->
          <v-speed-dial
            v-model="fab"
            :top="top"
            :left="left"
            :bottom="bottom"
            :direction="direction"
            :open-on-hover="hover"
            :transition="transition"
          >
            <template v-slot:activator>
              <v-btn v-model="fab" color="blue darken-2" dark fab>
                <v-icon v-if="fab"> mdi-close </v-icon>
                <v-icon v-else> mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  fab
                  dark
                  small
                  color="cyan darken-3"
                  v-bind="attrs"
                  v-on="on"
                  :to="{ name: 'zabete' }"
                >
                  <v-icon>mdi-pencil-box-multiple</v-icon>
                </v-btn>
              </template>
              <span>ضوابط شهرسازی </span>
            </v-tooltip>
            <!-- <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                fab
                dark
                small
                color="pink accent-3"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-arrow-u-down-right</v-icon>
              </v-btn>
            </template>
            <span>Primary </span>
          </v-tooltip> -->
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :to="{ name: 'TasdighGovahi' }"
                  fab
                  dark
                  small
                  color="lime darken-4"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-checkbox-multiple-marked</v-icon>
                </v-btn>
              </template>
              <span>تصدیق گواهی </span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  fab
                  dark
                  small
                  color="pink accent-3
"
                  v-bind="attrs"
                  v-on="on"
                  :to="{ name: 'avarا÷ez' }"
                >
                  <v-icon>mdi-cash-multiple</v-icon>
                </v-btn>
              </template>
              <span>عوارض </span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :to="{ name: 'mapView' }"
                  fab
                  dark
                  small
                  color="green darken-4"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-map-marker</v-icon>
                </v-btn>
              </template>
              <span>نقشه </span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  fab
                  dark
                  small
                  color="deep-purple lighten-2"
                  v-bind="attrs"
                  v-on="on"
                  :to="{ name: 'darkhastmardomi' }"
                >
                  <v-icon>mdi-account-question</v-icon>
                </v-btn>
              </template>
              <span>درخواست مردمی </span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  :to="{ name: 'SabtPigiri' }"
                  fab
                  dark
                  small
                  color="red"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-email-search-outline</v-icon>
                </v-btn>
              </template>
              <span> ثبت وپیگیری درخواست </span>
            </v-tooltip>
          </v-speed-dial>
        </v-col>
        <footer
          :class="{
            'footer-sm': $vuetify.breakpoint.smAndDown,
            'footer-md': $vuetify.breakpoint.mdAndUp,
          }"
        ></footer>
      </div>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    direction: "top",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: false,
    bottom: true,
    left: true,
    transition: "slide-y-reverse-transition",
  }),
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  watch: {
    top(val) {
      this.bottom = !val;
    },

    bottom(val) {
      this.top = !val;
    },
  },
  computed:{
    userName(){
      return this.$store.state.authPageModule.formData.username
    }
  }
};
</script>
<style>
/* This is for documentation purposes and will not be needed in your application */
.v-speed-dial.v-speed-dial--bottom.v-speed-dial--left.v-speed-dial--direction-top {
  position: fixed !important;
}
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
button.v-btn.v-btn--is-elevated.v-btn--fab.v-btn--has-bg.v-btn--round.theme--dark.v-size--default.blue.darken-2 {
  margin: 0 0 20px 0;
  position: relative;
}
#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

.sm-main-style {
  margin: auto;
  width: 95%;
}
.md-main-style {
  margin: auto;
  width: 70%;
}

.footer-md {
  padding: 30px 0px;
}
.footer-md a {
  text-decoration: none;
  color: white !important;
  font-size: 1.1rem;
  font-family: cursive;
  font-weight: 600;
}

.footer-sm {
  padding: 20px 0px;
}
.footer-sm a {
  text-decoration: none;
  color: white !important;
  font-size: 0.8rem;
  font-family: cursive;
  font-weight: 600;
}
* {
  font-family: IRANSans;
}
i.v-icon.notranslate.mdi.mdi-arrow-left-circle.theme--light.black--text {
  font-size: 42px;
}
th.text-start.sortable {
  background: gray;
}
</style>
