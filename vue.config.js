module.exports = {
  devServer: {
    proxy: "http://localhost:41783",
  },
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/mentore-fe/" // Thay tên repository của các bạn vào đây nhé
      : "/",
};
