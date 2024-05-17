export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [0, "never"], // This line turns off the rule
    "footer-max-line-length": [0, "never"], // This line turns off the rule
  },
};
