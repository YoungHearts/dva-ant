export default {
    // "disableCSSModules": true,  
      "proxy": {
        "/system": {
          "target": "http://192.168.1.174:8090",
          "changeOrigin": true,
          // "pathRewrite": { "^/system" : "" }
        },
      },
      // "proxy": {
      //     "/api": {
      //       "target": "http://jsonplaceholder.typicode.com/",
      //       "changeOrigin": true,
      //       "pathRewrite": { "^/api" : "" }
      //     }
      //   },
  }