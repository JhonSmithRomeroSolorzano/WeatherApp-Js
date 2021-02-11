const path = require("path");
const { dirname } = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
