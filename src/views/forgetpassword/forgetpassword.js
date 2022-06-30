export default {
  data: () => ({
    edituser: false,
    dialog: false,
    phone: "",
    showpass: false,
    password: "123456",
    rules: {
      required: (value) => !!value || " موبایل به اشتباه وارد شده.",
      counter: (value) => value.length <= 20 || "بیشتراز20کاراکتر!!!!",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },

    subsystem_items: ["پشتیبانی فنی", "فروش و قراردادها"],
    roles_items: ["راهبر", "پشتیبان", "مدیر"],
    projects_items: ["پروژه 1", "پروژه 2", "پروژه 3", "پروژه 4"],
    upload_rules: [
      (value) =>
        !value ||
        value.size < 2000000 ||
        "حجم تصویر نباید بیش از 2 مگابایت باشد!",
    ],
    switch1: true,
  }),
};
