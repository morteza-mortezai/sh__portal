<template>
  <div class="form-nosazi-content">
    <div class="box-form-inline">
      <v-container grid-list-xs class="mt-4">
        <v-layout row nowrap align-center>
          <v-col xs2>
            <div class="label-form">
              <p>شماره شناسنامه ملک</p>
            </div>
          </v-col>

          <v-col xs1 v-if="uses === 'business'">
            <v-text-field
              label="شغل"
              mask="###"
              v-model="job"
              placeholder="000"
            ></v-text-field>
          </v-col>

          <v-col xs1>
            <v-text-field
              label="آپارتمان"
              mask="###"
              v-model="aparteman"
              placeholder="000"
              class="input-center"
            ></v-text-field>
          </v-col>

          <v-col xs1>
            <v-text-field
              label="ساختمان"
              mask="##"
              v-model="sakhteman"
              placeholder="00"
              class="input-center"
            ></v-text-field>
          </v-col>

          <v-col xs2>
            <v-text-field
              label="ملک"
              mask="######"
              v-model="melk"
              placeholder="000000"
              class="input-center"
            ></v-text-field>
          </v-col>

          <v-col xs1>
            <v-text-field
              label="بلوک"
              mask="####"
              v-model="block"
              placeholder="0000"
              class="input-center"
            ></v-text-field>
          </v-col>

          <v-col xs1>
            <v-text-field
              label="محله"
              mask="##"
              v-model="mahale"
              placeholder="00"
              class="input-center"
            ></v-text-field>
          </v-col>

          <v-col xs1>
            <v-text-field
              label="منطقه"
              mask="##"
              v-model="mantaghe"
              placeholder="00"
              class="input-center"
            ></v-text-field>
          </v-col>
        </v-layout>

        <v-layout row nowrap align-center class="mt-3">
          <v-col xs2>
            <div class="label-form">
              <p>کد پرونده</p>
            </div>
          </v-col>

          <v-col xs2>
            <v-text-field
              class="input-center"
              v-model="melkId"
              placeholder="کد پرونده را وارد نمایید"
              v-on:keypress="isNumbering($event)"
            ></v-text-field>
          </v-col>
        </v-layout>

        <v-layout row wrap align-center class="mt-3">
          <v-col xs2> </v-col>

          <v-col xs2>
            <v-btn
              :loading="loading"
              @click="search"
              color="blue darken-2 white--text bold"
              large
            >
              <span class="material-icons ml-1">search</span>
              <span>جستجوی پرونده</span>
            </v-btn>
          </v-col>

          <v-col xs9>
            <transition name="fade">
              <div
                v-if="error_message && error && submit"
                class="alert red darken-2 white--text mt-2"
              >
                <span class="material-icons ml-2">warning</span>
                <span class="bold pt-1 white--text">{{ error_message }}</span>
              </div>
            </transition>
          </v-col>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mapMelkId() {
      return this.$store.getters.getMelkId;
    },
  },

  data() {
    return {
      mantaghe: "",
      mahale: "",
      block: "",
      melk: "",
      sakhteman: "",
      aparteman: "",
      melkId: "",
      job: "",
      loading: false,
      submit: false,
      error: false,
      error_message: "",
      code: "",
    };
  },
  created() {
    let vm = this;
    vm;
    vm.code = this.$store.state.melks.code;
    EventBus.$on("setCode", function (c, m) {
      vm.code = c;
      // vm.melkId = m;
    });
  },
  activated() {
    // alert(132)
    let vm = this;
    if (vm.code) {
      vm.mantaghe = vm.code.substr(0, 2);
      vm.mahale = vm.code.substr(2, 2);
      vm.block = vm.code.substr(4, 4);
      vm.melk = vm.code.substr(8, 6);
      vm.sakhteman = vm.code.substr(14, 2);
      vm.aparteman = vm.code.substr(16, 3);
    }
  },
  methods: {
    search() {
      this.submit = true;
      this.error = false;
      this.error_message = "";

      if (!this.mantaghe) {
        this.error = true;
        this.error_message = "لطفا منطقه را وارد نمایید";
        return false;
      }

      if (!this.mahale) {
        this.error = true;
        this.error_message = "لطفا محله را وارد نمایید";
        return false;
      }

      if (!this.block) {
        this.error = true;
        this.error_message = "لطفا بلوک را وارد نمایید";
        return false;
      }

      if (!this.melk) {
        this.error = true;
        this.error_message = "لطفا ملک را وارد نمایید";
        return false;
      }

      if (this.mantaghe.length !== 2) {
        this.error = true;
        this.error_message = "منطقه را بدرستی وارد نمایید";
        return false;
      }

      if (this.mahale.length !== 2) {
        this.error = true;
        this.error_message = "محله را بدرستی وارد نمایید";
        return false;
      }

      if (this.block.length !== 4) {
        this.error = true;
        this.error_message = "بلوک را بدرستی وارد نمایید";
        return false;
      }

      if (this.melk.length !== 6) {
        this.error = true;
        this.error_message = "ملک را بدرستی وارد نمایید";
        return false;
      }

      if (this.sakhteman && this.sakhteman.length !== 2) {
        this.error = true;
        this.error_message = "ساختمان را بدرستی وارد نمایید";
        return false;
      }

      if (this.aparteman && this.aparteman.length !== 3) {
        this.error = true;
        this.error_message = "آپارتمان را بدرستی وارد نمایید";
        return false;
      }

      if (!this.melkId) {
        this.error = true;
        this.error_message = "کد پرونده را وارد نمایید";
        return false;
      }

      let parandeh = "";
      if (this.uses === "renovation") {
        parandeh = "R";
      } else if (this.uses === "business") {
        parandeh = "B";
      } else if (this.uses === "income") {
        parandeh = "I";
      } else {
      }

      this.loading = true;

      HTTP.post("", {
        method: "searchBillHistoryByCodeAndMelk",
        melkId: this.melkId,
        mantaghe: this.mantaghe,
        mahale: this.mahale,
        block: this.block,
        sakhteman: this.sakhteman,
        aparteman: this.aparteman,
        job: this.job,
        melk: this.melk,
        type: parandeh,
      })
        .then((r) => {
          this.loading = false;
          if (r.data.success) {
            this.$emit(
              "success",
              r.data,
              this.melkId,
              this.mantaghe +
                this.mahale +
                this.block +
                this.melk +
                this.sakhteman +
                this.aparteman
            );
          } else if (r.data.error > 0) {
            if (r.data.error === 1) {
              this.error = true;
              this.error_message = "اطلاعات را با دقت وارد نمایید";
            } else if (r.data.error === 2) {
              this.error = true;
              this.error_message = "پرونده با این اطلاعات یافت نشد";
            }
          }
        })
        .catch((error) => {});
    },

    isNumbering(evt) {
      isNumber(evt);
    },
  }, //01011069112500
  watch: {
    mapMelkId() {
      // alert(this.$store.state.melks.code);
      this.melkId = this.$store.state.melkId;
    },
  },
};
</script>
<style scoped>
* {
  direction: rtl;
  font-size: 18px;
}
.layout.row.nowrap.align-center {
  margin-top: 220px;
  /* right: 59px; */
  padding-right: 60px;
}
</style>
