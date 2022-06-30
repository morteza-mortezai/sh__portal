<template>
  <div class="form-container sign-up-container">
    <v-form
      class="ma-n1"
      action="#"
      :class="{
        'px-2': $vuetify.breakpoint.smAndDown,
        'px-8': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <h2
        :class="{
          'pb-4 pt-10 sm-title': $vuetify.breakpoint.smAndDown,
          'pb-4 pt-10': $vuetify.breakpoint.mdAndUp,
        }"
      >
        فرم راتکمیل کنید
      </h2>
      <v-text-field
        requiredssss
        placeholder="نام "
        filled
        v-model="formData.firstName"
        prepend-inner-icon="mdi-account"
        dir="rtl"
        :rules="[(v) => !!v || 'نام  نمیتواند خالی باشد']"
      ></v-text-field>
      <v-text-field
        placeholder="نام خانوادگی"
        prepend-inner-icon="mdi-account"
        dir="rtl"
        filled
        :rules="[(v) => !!v || 'نام خانوادگی نمیتواند خالی باشد']"
        v-model="formData.lastName"
      ></v-text-field>
      <!-- <div><input type="text" class="example1" /></div>
      <v-col cols="11" sm="5">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="تاریخ تولد"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            locale="fa"
            value="YYYY-mm"
            type="date"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col> -->

      <v-spacer></v-spacer>
      <!-- <v-text-field
        placeholder="تاریخ تولد"
        prepend-inner-icon="mdi-calendar-range"
        dir="rtl"
        filled
        v-model="formData.email"
      ></v-text-field> -->
      <v-text-field
        placeholder="کدملی"
        prepend-inner-icon="mdi-comment-edit"
        dir="rtl"
        filled
        :rules="[(v) => !!v || 'کدملی نمیتواند خالی باشد']"
        v-model="formData.address"
      ></v-text-field>

      <v-text-field
        placeholder="تلفن همراه "
        filled
        :rules="[(v) => !!v || 'تلفن همراه نمیتواند خالی باشد']"
        prepend-inner-icon="mdi-phone"
        dir="rtl"
        v-model="formData.phoneNumber"
      ></v-text-field>
      <!-- <label> تاریخ تولد </label> -->

      <!-- <template>
        <v-col class="mt-n5 pa-n16">
          <date-picker v-model="date" />
        </v-col>
      </template> -->
      <v-col dir="rtl" cols="6">
        <v-text-field
          outlined
          color="info"
          placeholder=" کدتایید "
          prepend-inner-icon=""
          v-model="formData.mobile"
        ></v-text-field>

        <v-btn>ارسال کد</v-btn>
      </v-col>
      <!-- <div>
        <date-picker
          v-model="date"
          format="YYYY-MM-DD"
          display-format="jYYYY-jMM-jDD"
        />
      </div> -->
      <!-- <v-row>
        <template>
            <v-input><v-input>
            <button @click="sendSmsCode" class="sendButton"></button>
        </template>
      </v-row> -->

      <v-row class="mb-16">
        <v-col cols="12" md="6"
          ><v-btn
            color="info"
            dark
            tile
            block
            class="pa-6 font-weight-bold"
            elevation="0"
            @click="saveFormData()"
          >
            ثبت نام
          </v-btn></v-col
        >
        <!-- <v-text-field
            v-model="nDate"
            persistent-hint
            hint=""
            required
            :rules="[(v) => !!v || 'ورود تاریخ شماره گذاری اجباری است!']"
            id="dateinput"
            label="تاریخ شماره گذاری"
          ></v-text-field>
          <date-picker v-model="nDate" element="dateinput"></date-picker> -->
        <v-col cols="12" md="6">
          <v-btn
            color="secondary"
            outlined
            tile
            block
            class="pa-6 font-weight-bold"
            elevation="0"
            @click="currentSignUpStep = 1"
            >برگشت</v-btn
          >
        </v-col>
        <!-- <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
              Click Me
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text> </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">
                پذیرش
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> -->
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      dialog: false,
      time1: "",
      time2: "",
      time3: "",
      // date: "2020-10-10",

      shortcuts: [
        {
          text: "Today",
          onClick: () => {
            this.time3 = [new Date(), new Date()];
          },
        },
      ],
      timePickerOptions: {
        start: "00:00",
        step: "00:30",
        end: "23:30",
      },
    };
  },

  computed: {
    currentSignUpStep: {
      get: function () {
        return this.$store.getters["authPageModule/getCurrentSignUpStep"];
      },
      set: function (newVal) {
        this.$store.commit("authPageModule/setCurrentSignUpStep", newVal);
      },
    },
    formData: {
      get: function () {
        return this.$store.getters["authPageModule/getFormData"];
      },
      set: function () {
        this.$store.commit("authPageModule/setFormData", this.formData);
      },
    },
  },
  methods: {
    saveFormData() {
      this.$store.commit("authPageModule/setFormData", this.formData);
      this.$router.push("/profile");
    },
  },
};
</script>
<style scoped>
.vpd-input-group {
  display: flex;
  position: relative;
  font-size: 30px;
}
* {
  direction: rtl;
}
.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}
.team-img {
  width: 50%;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}
button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default {
  top: -75px;
  margin-right: 216px;
}
.v-application .mb-16 {
  /* margin: -19px!important; */
  margin-top: -50px;
}
button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default {
  background: #2196f3;
}

.container.right-panel-active .sign-up-container[data-v-e8354a46] {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  -webkit-animation: show-data-v-e8354a46 0s;
  animation: show-data-v-e8354a46 0s;
  /* margin: -8px; */
  top: -18px;
}
span.vpd-input-group {
  font-size: 33px !important;
}
form.v-form.px-8 {
  margin: -5px;
}
</style>
