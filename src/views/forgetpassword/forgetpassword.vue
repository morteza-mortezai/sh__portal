<template>
  <v-card class="mx-auto mt-16 pa-16" width="500" height="auto">
    <v-form ref="form" with="500" v-model="valid" lazy-validation>
      <v-card-title dir="rtl" class="center"> بازیابی گذرواژه </v-card-title>

      <v-text-field
        v-model="email"
        dir="rtl"
        placeholder="موبایل "
        dense
        outlined
        append-icon="mdi-phone"
        :rules="[rules.required, rules.email]"
      ></v-text-field>
      <v-text-field
        dir="rtl"
        append-icon="mdi-recycle "
        placeholder="  کد امنیتی ارسال شده وارد کنید"
        outlined
        :counter="10"
        :rules="nameRules"
        required
      ></v-text-field>

      <v-btn
        :to="{ name: 'forgetpasswordreset' }"
        color="primary"
        @click="resetValidation"
      >
        اراسل اطلاعات
      </v-btn>
    </v-form>
  </v-card>
</template>
<script src="./forgetpassword.js"></script>
