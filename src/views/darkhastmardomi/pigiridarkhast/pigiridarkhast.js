import * as axios from "axios";
import Alert from "../../../components/auth-page/Alert.vue";

export default {
  created() {
    // this.getdata();
  },
  name: "pigiridarkhast",
  components: { Alert },

  data: () => ({
    send: 0,
    flag: false,
    // hide-default-footer:true
    isHidden: false,
    // for alert component
    alert: {
      text: "",
      type: "error",
      active: false,
    },
    headers: [
      {
        text: "نام",
        value: "Name",
      },
      {
        text: "نام خانوادگی",

        value: "Family",
      },
      { text: "کدملی", value: "CodeMeli" },

      {
        text: "درخواست",
        value: "code_peoplerequestsubject_title",
      },

      {
        text: "توضیحات",
        value: "Description",
      },
      { text: " تاریخ", value: "InsertDateTime" },
      { text: " نتیجه پیگیری", value: "result" },
    ],
    desserts: [],
  }),

  methods: {
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
    getdata() {
      console.log(this.send);
      let param = {
        id: this.send,
      };
      this.flag = false;

      this.getresult(param);
    },
    getresult(param) {
      axios
        .post(
          "http://localhost/shahernegar/shahernegar/peoplerequest/result",
          param
        )

        .then((response) => {
          // handle success
          //let result = response.data.data[0];
          this.desserts = response.data.data;
          this.flag = true;

          console.log(response.data.success);
          // console.log(this.customers);

          if (response.data.success === false) {
            this.runAlert(response.data.msg, "error");
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
          this.flag = true;
        });
    },
  },
};
