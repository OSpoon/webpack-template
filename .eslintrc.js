module.exports = {
  root: true,
  // 开启现代化的全环境支持
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 使用 prettier 规则和插件
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  // 现代化的解析器配置
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
