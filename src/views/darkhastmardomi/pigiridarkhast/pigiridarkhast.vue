<template>
  <div class="">
    <v-alert outlined type="warning" text>
      <h4>صفحه پیگیری درخواست مردمی</h4>
      <!-- <v-spacer></v-spacer> -->
      <h5 class="pa-2">
        کابرگرامی: لطفا کدپیگیری خودرا بدقت وارنمایید وبعد از واردکردن آن نتیجه
        درخواست خود را مشاهده فرمایید
      </h5>
    </v-alert>
    <Alert
      class="ma-16 ma-n8"
      :text="alert.text"
      :type="alert.type"
      :active="alert.active"
    ></Alert>
    <v-row dir="rtl" class="mt-16">
      <v-card-title dir="rtl" class="pa-16 mt-2">
        شماره پیگیری را وارد کنید:
      </v-card-title>

      <v-col class="mr-n16 mt-16" cols="6" md="4" dir="rtl">
        <v-text-field
          class="ma-n2"
          dir="rtl"
          v-model="send"
          outlined
        ></v-text-field>
        <v-btn
          v-on:keyup="this.$data.name = $event.target.value"
          class="mb-2"
          color="primary"
          @click="getdata"
          >ارسال</v-btn
        >
        <!-- <button v-on:click="isHidden = !isHidden">Toggle text</button>
      <h1 v-if="!isHidden">Hide me</h1> -->
      </v-col>
    </v-row>
    <v-data-table
      v-if="flag"
      dir="rtl"
      :hide-default-footer="true"
      :headers="headers"
      :items="desserts"
      :items-per-page="1"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script src="./pigiridarkhast.js"></script>
<style scoped>
.v-data-footer {
  display: none !important;
}
.v-application--wrap {
  margin: -102px;
}
.v-application .warning--text {
  color: #fb8c00 !important;
  caret-color: #fb8c00 !important;
  /* top: -34px; */
  margin-top: -160px;
}
.v-input.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder {
  /* margin: 102px; */
  margin-top: 69px;
  top: 43px;
  margin: 71px;
}
</style>
