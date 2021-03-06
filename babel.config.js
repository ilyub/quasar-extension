module.exports = {
  env: {
    test: {
      plugins: ["dynamic-import-node"],
      presets: [
        [
          "@babel/preset-env",
          { modules: "commonjs", targets: { node: "current" } }
        ]
      ]
    }
  },
  plugins: ["@babel/plugin-syntax-dynamic-import"],
  presets: ["@quasar/babel-preset-app"]
};
