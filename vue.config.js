module.exports = {
  devServer: {
    proxy: "https://mentore.azurewebsites.net",
  },
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/mentore-fe/" 
      : "/",
};
