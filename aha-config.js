/* 打包文件夹 */
exports.buildDir = 'postcard'
/* 部署配置 */
exports.deployConfig = {
  projectName: 'Aha口袋后台管理系统', // 项目名
  test: {
    host: '120.76.193.200', // 服务器地址
    port: 22, // 服务器端口号
    webDir: '/web_project/test', // 服务器部署路径（不可为空或'/'，不需要尾'/'）
  },
  production: {
    host: '120.76.193.200', // 服务器地址
    port: 22, // 服务器端口号
    webDir: '/web_project/production', // 服务器部署路径（不可为空或'/'）
  }
}
