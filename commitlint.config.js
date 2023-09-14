module.exports = {
  extends: ["@commitlint/config-conventional"],

  rules: {
    "type-enum": [
      2,
      "always",
      [
        "implement",
        "config",
        "fix",
        "style",
        "refactor",
        "ci",
        "revert",
        "build",
      ],
    ],
  },
}
