<template>
  <v-col class="ma-12" cols="10" sm="10">
    <v-card cols="4" class="ma-16 pa-16" sm="4" md="8">
      <v-text-field
        v-model="id"
        dir="rtl"
        required
        outlined
        placeholder="شماره پیگیری* "
      ></v-text-field>
      <v-btn class="mb-2" color="primary" @click="getdata">ارسال</v-btn>
      <iframe
        v-if="flag"
        width="100%"
        dir="rtl"
        height="1000px"
        class="ddd"
        :src="templateUrl"
      ></iframe>
    </v-card>
  </v-col>
</template>

<script src="./TasdighGovahi.js"></script>
<style scoped>
/* ddd. {
  overflow: hidden;
} */
.sm {
  margin: 100px;
}
</style>
