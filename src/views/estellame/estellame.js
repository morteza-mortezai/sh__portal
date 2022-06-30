import * as axios from "axios";
import Alert from "../../components/auth-page/Alert.vue";
import UploadImages from "../../components/auth-page/vue-upload-drop-images";
// import urlshorter(){},
export default {
  // props: [
  // 'firstName',
  // 'lastName'

  // ],
  //   created(){
  // import({})
  //   },
  created() {
    this.getPeoplerequest();
    // this.gettitle();
  },
  name: "darkhastmardomi",
  components: { Alert, UploadImages },

  // name: "app",
  // components: { FilePondDemo },
  // components: {
  //   UploadImages,
  // },
  data: () => ({
    sendimage: "",
    phoneValue: 0,
    formattedPhoneValue: "0",
    preventNextIteration: false,
    peoplerequest: [],
    peoplerequests: [],
    title: [],
    titles: [],
    valid: true,
    fileInputKey: 0,
    image: new Array(1),
    i: "",
    dialog: false,
    Name: "",
    Family: "",
    Fathername: "",
    Mobile: "",
    PostalCode: "",
    PersonAddress: "",
    Tel: "",
    Description: "",
    CodeMeli: "",
    Mail: "",
    url: null,

    isSelecting: false,
    selectedFile: null,

    // for alert component
    alert: {
      text: "",
      type: "error",
      active: false,
    },

    uploaded: {
      files_temp: [],
      files: [],
    },
    shahernegars: [],
    shahernegar: null,
    log: console.log,

    // mobileRules: [
    //   (v) => !!v || "?????????? ??? ????? ???? ????",
    //   (v) => (v && v.length < 10) || "????????10??????????",
    // ],

    Mobile: "",
    mobileRules: [
      // (v) => !!v || /(\d{0,3})(\d{0,3})(\d{0,4})/.test(v) || " fgfgfgg   ",

      (v) => (v && v.length < 11) || "بیشتر از10کاراکتر",
    ],
    CodeMeli: "",
    CodeMeliRules: [
      (v) => (v && v.length < 11) || "تعدادارقام نامعتبر",
      (v) => !!v || " ",
      (v) => (v && v.length < 11) || "بیشتراز10کاراکتر",
    ],
    Mail: "",
    MailRules: [
      (v) => !!v || " ایمیل نمی تواند خالی باشد",

      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "فرمت ایمیل نادرست است",
    ],
    Name: "",
    NameRules: [(v) => !!v || "نام نمی تواند خالی باشد"],
    Family: "",
    FamilyRules: [(v) => !!v || "نام خانوادگی نمی تواند خالی باشد"],
    Fathername: "",
    FathernameRules: [(v) => !!v || "نام پدر نمی تواند خالی باشد"],
    PostalCode: "",
    PostalCodeRules: [
      (v) => !!v || "کدملی نمی تواند خالی باشد",
      (v) => (v && v.length < 11) || "بیشتراز10کاراکتر",
    ],

    Tel: "",
    TelRules: [(v) => !!v || "  تلفن نمی تواند خالی باشد"],
    PersonAddress: "",
    PersonAddressRules: [(v) => !!v || "?کدپستی نمی تواند خالی باشد"],

    watch: {
      Mail(value) {
        // binding this to the data value in the email input
        this.Mail = value;
        this.validateEmail(value);
      },
    },
  }),

  mounted() {
    // this.getprotifile();
    // this.runAlert("???", "error");
  },

  methods: {
    handleImages(files) {
      console.log(45345345);
    },
    // "image", this.sendimage,
    uploadimage() {
      // //   console.log(this.sendimage);
      let data = new FormData();
      data.append("image", this.sendimage, this.sendimage.name);
      axios
        .post("http://localhost/shahernegar/shahernegar/App/validate", {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {})
        .catch(function (error) {
          console.log(error);
          // console.log(errore)
        });
    },

    handleImages(files) {
      console.log(files);
    },
    focusOut: function (event) {
      if (["Arrow", "Backspace", "Shift"].includes(event.key)) {
        this.preventNextIteration = true;
        return;
      }
      if (this.preventNextIteration) {
        this.preventNextIteration = false;
        return;
      }
      this.phoneValue = this.formattedPhoneValue
        .replace(/-/g, "")
        .match(/(\d{1,10})/g)[0];

      // Format display value based on calculated currencyValue
      this.formattedPhoneValue = this.phoneValue.replace(
        /(\d{1,3})(\d{1,3})(\d{1,4})/g,
        "$1-$2-$3"
      );
    },

    getvalidate() {
      axios
        .get("http://localhost/shahernegar/shahernegar/App/validate", {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          if (!response.data) {
            alert("Sorry File not uploaded.");
          } else {
            alert("Your Vuejs with PHP File uploaded successfully.");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    getrequest() {
      axios
        .get(
          "http://localhost/shahernegar/shahernegar/CodePeoplerequestsubject/request",
          {
            params: {
              codePeoplerequestsubjectgropId: this.peoplerequest.id,
            },
          }
        )
        .then((response) => {
          // handle success

          this.titles = response.data.data;
          // console.log(44, this.title);
          // console.log(this.shahernegars);
          // console.log(this.customers);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },

    gettitle() {
      axios
        .get(
          "http://localhost/shahernegar/shahernegar/CodePeoplerequestsubjectgroup/read"
        )
        .then((response) => {
          // handle success
          this.titles = response.data.data;
          console.log(44, this.title);
          // console.log(this.shahernegars);
          // console.log(this.customers);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },

    getPeoplerequest() {
      axios
        .get(
          "http://localhost/shahernegar/shahernegar/CodePeoplerequestsubject/read"
        )
        .then((response) => {
          // handle success
          this.peoplerequests = response.data.data;
          console.log(44, this.peoplerequests);
          // console.log(this.shahernegars);
          // console.log(this.customers);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },

    onFileChange(e, i) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      this.image.splice(i, 0, URL.createObjectURL(files[0]));
      console.log(this.image);
    },
    removeImage: function (e, i) {
      this.image.splice(i, 1);
    },
    runAlert: function (text, type) {
      this.alert = {
        text: text,
        type: type,
        active: true,
      };
      setTimeout(() => {
        this.alert.active = false;
      }, 4000);
    }, // for alert component

    getData() {
      let param = {
        id: "",
        codePeoplerequestsubjectgropId: this.title.id,

        code_peoplerequestsubject_id: this.peoplerequest.id,
        code_peoplerequestsubjectgroup_id: this.title.id,
        title: this.title,
        Name: this.Name,
        Family: this.Family,
        Fathername: this.Fathername,
        Mobile: this.Mobile,
        PostalCode: this.PostalCode,
        Mail: this.Mail,
        PersonAddress: this.PersonAddress,
        Tel: this.Tel,
        Description: this.Description,
        CodeMeli: this.CodeMeli,
      };

      this.senddata(param);
      // console.log(param);
    },

    senddata(data) {
      // console.log("'''''''''''''''data'''''''''''''''");
      // console.log(data);
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
      axios
        .post(
          `http://localhost/shahernegar/shahernegar/peoplerequest/add`,
          data,
          {
            headers: headers,
          }
        )
        .then((response) => {
          this.runAlert("msg", "success");
          if (response.data.success == true) {
            this.runAlert(response.data.msg, "success");
          } else {
            this.runAlert(response.data.msg, "error");
          }
        })
        .catch((err) => console.warn(err));
    },

    // getprotifile() {
    //   axios
    //     .get(
    //       `http://localhost/shahernegar/shahernegar/app/getCodePeoplerequestsubjectgroup`
    //     )
    //     .then((res) => {
    //       //  console.log(res);
    //       this.code_peoplerequestsubjectgroup = res;
    //       //console.log(this.desserts);
    //     })
    //     .catch((error) => {
    //       //    console.error(error);
    //     })
    //     .finally(() => {});
    //   // console.log("getprotifile");
    // },
  },
};
