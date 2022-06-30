import adminPanelMenus from "@/app/common/menus/adminPanelMenus.js";

export default {
  data() {
    return {
      adminPanelMenus,
      drawer: false,
      loading: null,
      select: null,
      search: null,
    };
  },

  methods: {
    signIn: function () {
      this.$router.push("about");
    },

    // signIn: function () {},
  },
};
