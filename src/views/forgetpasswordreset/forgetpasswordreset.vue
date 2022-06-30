<template>
  <v-card class="mx-auto mt-16 pa-16" width="500" height="auto">
    <v-form ref="form" with="500" v-model="valid" lazy-validation>
      <v-card-title class="center"> وارد کردن گذرواژه جدید </v-card-title>

      <v-text-field
        dir="rtl"
        v-model="email"
        placeholder="گذر واژه جدید "
        dense
        outlined
        append-icon="mdi-lock"
        :rules="[rules.required, rules.email]"
      ></v-text-field>
      <v-text-field
        append-icon="mdi-lock "
        outlined
        dir="rtl"
        :counter="10"
        :rules="nameRules"
        placeholder=" تکرار گذر واژه جدید"
        required
      ></v-text-field>
      <!-- <v-text-field
        
        outlined
        :append-icon="!showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="toggelShowPassword"
                            v-model="password"
        :rules="emailRules"
        label="پسورد"
             :type="showpass ? 'text' : 'password'"
      ></v-text-field> -->

      <v-btn color="success" @click="resetValidation"> تایید اطلاعات </v-btn>

      <!-- <v-btn color="success"  @click="resetValidation"> اراسل اطلاعات </v-btn> -->
      <!-- <v-card-text>
        <v-row class="text-center mt-8 right" dense no-gutters>
          <v-col cols="12" class="mt-n10 mb-5">
            <v-btn text color="#D50000" to="/forgetpassword">
              گذرواژه را فراموش کردید؟
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text>
        <v-row class="text-center left" dense no-gutters>
          <v-col cols="12" class="mt-n10 mb-5">
            <v-btn text color="#D50000" to="/forgetpassword">
              ثبت نام در سایت
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text> -->
    </v-form>
  </v-card>
</template>
<script src="./forgetpasswordreset.js"></script>
