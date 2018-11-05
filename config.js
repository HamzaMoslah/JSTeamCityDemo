System.config({
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "app/app.ts",
      "app/hello.ts",
      "github:components/jquery@2.1.4.js",
      "github:components/jquery@2.1.4/jquery.js"
    ]
  },

  packages: {
    "app": {
      "main": "app.ts",
      "defaultExtension": "ts"
    },
    "tests": {
      "defaultExtension": "ts"
    }
  },

  map: {
    "jquery": "github:components/jquery@2.1.4",
    "typescript": "npm:typescript@1.7.3"
  }
});
