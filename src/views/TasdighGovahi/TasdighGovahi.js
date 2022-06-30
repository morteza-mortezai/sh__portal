import * as axios from "axios";

export default {
  created() {
    // this.getdata();
  },

  data: () => ({
    id: "",
    templateUrl: "",
    flag: false,
  }),

  methods: {
    getdata() {
      // console.log(this.send);
      let param = {
        id: "",
      };

      this.flag = true;
      this.templateUrl = `http://localhost/shahernegar/shahernegar/UrlShorter/url?id=${this.id}`;
    },
    geturl() {
      // axios
      //   .post("http://localhost/shahernegar/shahernegar/UrlShorter/url")
      //   .then((response) => {
      //     // handle success
      //     this.url = response.data.result.url;
      //     console.log(44, this.url);
      //     // console.log(this.shahernegars);
      //     // console.log(this.customers);
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log(error);
      //   })
      //   .then(function () {
      //     // always executed
      //   });
    },
  },
};
