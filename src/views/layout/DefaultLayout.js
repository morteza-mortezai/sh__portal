import adminPanelMenus from "@/app/common/menus/adminPanelMenus.js";
// import DefaultLayout from "../DefaultLayout/DefaultLayout.js";

export default {
  data() {
    return {
      adminPanelMenus,
      drawer: false,
      group: null,
      usersettings: false,
      links: ["درباره ما", "تماس با ما", "مشتریان", "لیست خدمات"],
    };
  },

  methods: {
    signIn: function () {
      this.$router.push("about");
    },

    // signIn: function () {},
  },
};
