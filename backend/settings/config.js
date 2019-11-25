module.exports = {
    port : process.env.PORT || process.env.BZ_WEB_PORT  ||  5000,
    apiVersion : process.env.BZ_API_VERSION  ||  "1.0.0.0",
    appName : process.env.BZ_APP_NAME  ||  'Being Zero Sample App'
}