module.exports = {
  devServer: {
    proxy: "https://mentore.azurewebsites.net",
  },
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/mentore-fe/" // Thay tên repository của các bạn vào đây nhé
      : "/",
};
