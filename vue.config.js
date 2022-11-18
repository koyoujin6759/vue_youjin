const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
		// 이 옵션에 변수를 모아둔 파일을 연결한다.
		additionalData: `
      @import "@/assets/scss/common.scss";
			@import "@/assets/scss/_variable.scss";      
                `,
      },
    },
  },
})
