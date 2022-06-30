<template>
  <v-col dir="rtl">
    <v-form>
      <v-toolbar-title><h4 class="pb-6"></h4> </v-toolbar-title>
      <Alert
        :text="alert.text"
        :type="alert.type"
        :active="alert.active"
      ></Alert>
      <v-row>
        <v-btn
          :to="{ name: 'pigiridarkhast' }"
          right
          class="lk"
          color="primary"
        >
          <v-icon right class="kk"> mdi-note-search-outline</v-icon> پیگیری
          درخواست</v-btn
        >
      </v-row>
      <v-alert outlined type="info" text>
        <h4>صفحه درخواست های مردمی:</h4>
        <h5>
          کابرگرامی: لطفا اطلاعات زیررا بدقت وارنمایید وبعد از واردکردن اطلاعات
          بصورت دقیق آن را ثبت فرمایید. اطلاعات وارد شده در زمان ثبت نام از این
          پس بصورت رسمی جهت ارائه خدمات الکترونیک مورد استفاده شما قرار خواهد
          گرفت
        </h5>
      </v-alert>

      <v-row class="">
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="Name"
            :rules="NameRules"
            required
            dir="rtl"
            outlined
            placeholder="نام*"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="4">
          <v-text-field
            type="String"
            :rules="FamilyRules"
            required
            dir="rtl"
            outlined
            v-model="Family"
            placeholder="نام خانوادگی*"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="CodeMeli"
            type="number"
            dir="rtl"
            :rules="CodeMeliRules"
            required
            outlined
            maxlength="10"
            placeholder="کدملی* "
          ></v-text-field>
        </v-col>
        <!-- <v-col cols="12" sm="4">
          <v-text-field
            v-model="Mobile"
            :rules="mobileRules"
            required
            dir="rtl"
            type="number"
            outlined
            placeholder="موبایل*"
          ></v-text-field>
        </v-col> -->
        <!-- <v-col cols="12" sm="4">
          <v-text-field
            :rules="FathernameRules"
            v-model="Fathername"
            required
            outlined
            placeholder="نام پدر"
          ></v-text-field>
        </v-col> -->
        <!-- 
        <v-col cols="12" sm="4">
          <v-text-field
            :rules="TelRules"
            v-model="Tel"
            type="number"
            outlined
            required
            placeholder="تلفن ثابت"
          ></v-text-field>
        </v-col> -->
        <!-- <v-col cols="12" sm="4">
          <v-text-field
            outlined
            :rules="MailRules"
            v-model="Mail"
            placeholder="ایمیل"
          >
            <span></span>
          </v-text-field>
        </v-col> -->
        <!-- <v-col cols="12" sm="4">
          <v-text-field
            outlined
            :rules="PostalCodeRules"
            v-model="PostalCode"
            placeholder="کدپستی"
            type="number"
          ></v-text-field>
        </v-col> -->
        <!-- <v-flex xs6 sm4 md3 lg2>
          <v-text-field
            class="search-track-code-input"
            v-model="trackCode"
            mask="########"
            dir="ltr"
            solo
            light
            label="شماره پیگیری"
            @keyup.enter="searchReport"
            clearable
          ></v-text-field>
        </v-flex>
        <v-flex xs6 sm2 md1 lg1>
          <v-btn
            @click="searchReport"
            class="teal darken-3 white--text bold"
            :loading="loading"
            small
          >
            <span>جستجو</span>
          </v-btn>
        </v-flex> -->
        <v-col class="my-n5" cols="6" sm="12">
          <v-combobox
            v-model="peoplerequest"
            :items="peoplerequests"
            item-value="id"
            item-text="name"
            dir="rtl"
            @change="getrequest"
            outlined
            label="انتخاب موضوع"
            :return-object="true"
            @input.native="peoplerequest = $event.srcElement.value"
          ></v-combobox>
        </v-col>
        <v-col class="" cols="6" sm="6">
          <v-combobox
            class="my-n5"
            label="انتخاب گروه"
            v-model="title"
            :items="titles"
            item-value="id"
            item-text="Title"
            dir="rtl"
            outlined
            :return-object="true"
            @input.native="title = $event.srcElement.value"
          ></v-combobox>
        </v-col>

        <v-col cols="12" md="12">
          <!-- <v-autocomplete
            auto-select-first
            chips
            outlined
            itemValue="id"
            item-txt="Title"
            label="انتخاب موضوع"
            clearable
            deletable-chips
            small-chips
          ></v-autocomplete> -->
          <!-- <template>
            <div id="app">
              <FilePondDemo />
            </div>
          </template> -->
          <v-textarea
            class="my-n5"
            outlined
            name="input-7-4"
            dir="rtl"
            v-model="Description"
            placeholder="توضیحات"
          ></v-textarea>
        </v-col>
      </v-row>
      <!-- <input type="file" @change="inputChange($event)" :key="fileInputKey" />
      <button @click="clear">Clear</button> -->

      <iframe
        src="http://192.168.0.57/map/selector-map/?selectMode=1&mode=portal"
        frameborder="0"
        style=""
        height="500px"
        width="100%"
      ></iframe>
      <v-divider></v-divider>

      <!-- <v-col>
        <input type="file" @change="onFileChange" />
        <button prepend-icon="mdi-camera" @click="clear" class="redd">
          <v-icon> mdi-delete-circle </v-icon><v-icon></v-icon>
        </button>

        <div id="preview">
          <img v-if="url" :src="url" />
        </div>
      </v-col> -->
      <v-col>
        <!-- <div v-for="(n, i) in 1" :key="n">
          <div class="cccc">
            <h2 class="uu">انتخاب فایل:</h2>
            <input
              class="dd"
              :id="'test' + i"
              type="file"
              @change="onFileChange($event, i)"
            />
          </div>
          <div v-if="image[i]">
            <img :src="image[i]" />
            <button @click="removeImage($event, i)">
              <v-icon right> mdi-delete-circle <span>حذف عکس</span></v-icon>
            </button>
          </div>
        </div> -->
      </v-col>
      <template>
        <UploadImages type="image" :max="5" accept="*" @change="handleImages" />
      </template>
    </v-form>

    <!-- <template>
      <v-file-input
        cols="5"
        class="sm-4"
        label="File input"
        @change="inputChange($event)"
        :key="fileInputKey"
        filled
        prepend-icon="mdi-camera"
      ></v-file-input>
    </template> -->
    <!-- <v-col>
      <v-btn :click="getdata" color="primary">ارسال اطلاعات</v-btn>
    </v-col> -->
    <!-- <v-file-input v-model="sendimage" truncate-length="15"></v-file-input> -->
    <template>
      <v-btn class="mt-16" color="green" @click="getData" dark>
        ارسال اطلاعات
        <!-- <v-icon> mdi-arrow-left-circle </v-icon> -->
      </v-btn>
    </template>
    <!-- <v-card>
        <v-card-title class="text-h5"> ... </v-card-title>
        <v-card-text>اطلاعات با موفقیت ارسال شد!</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            باشه
          </v-btn>
        </v-card-actions>
      </v-card> -->
  </v-col>
</template>

<script src="./darkhastmardomi.js"></script>
<style scoped>
.lk {
  float: right;
}
button.lk.v-btn.v-btn--is-elevated.v-btn--has-bg.v-btn--right.theme--light.v-size--default.primary {
  right: 18px;
}
i.v-icon.notranslate.kk.v-icon--right.mdi.mdi-note-search-outline.theme--light {
  font-size: 35px;
  margin-left: 15px;
  margin-bottom: 20px;
}
p {
  margin: 0;
}

.img-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  padding-bottom: 100%;
}
input#test0 {
  float: left;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  right: 19px;
}
h2.uu {
  float: right;
}
.cccc {
  direction: rtl;
  right: 69px;
  right: -21px;
  /* float: right; */
  background: #ddd;
  left: 0;
  margin-left: 0;
  padding: 0;
}
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
button {
}
.ppp {
  margin: 1111px;
}
.redd {
  margin-right: 44px;

  font-size: 55px;
}
* {
  direction: rtl;
  font-family: IRANSans;
  margin-top: 20px;
  right: 0;
}
/**** Sass Variables ****/
.search-track-code-input {
  height: 30px;
  min-height: 30px !important;
  border-radius: 30px !important;
  margin-top: 5px;
}

.search-track-code-input label {
  top: 0 !important;
  font-size: 13px;
  margin-right: 20px !important;
}

.search-track-code-input .input-group__input {
  padding-top: 0 !important;
}

.request-result {
  font-weight: bold;
  font-size: 12pt;
}
body {
  background-color: black;
}

#app {
  padding: 20px;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 50%;
  max-height: 250px;
}

element.style {
}
i.v-icon.notranslate.v-icon--right.mdi.mdi-delete-circle.theme--light {
  font-size: 53px;
  top: -111px;
  left: 36px;
  margin-left: -112px;
  color: red;
  background: burlywood;
  border-radius: 29px;
}
input__control {
  margin-top: -25px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-application .info--text {
  color: #2196f3 !important;
  caret-color: #2196f3 !important;
  top: 15px;
}
</style>
