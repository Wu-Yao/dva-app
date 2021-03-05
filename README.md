## 1.背景

    目前工程统一采用React + redux + saga，redux + redux-sage 层，由于直接使用写法非常繁琐，所以有了rematch、dva等，可以大大简化使用流程，提高开发效率。由于dva做的比较重，打算只是用dva-core，dva中的核心功能。

## 2.dva-core 写法(适用 TS)

- 可以先了解 dva 的用法，文档：[dva 官方文档](https://dvajs.com/)
- 或者手动操作，具体使用如下步骤：

  - 安装 dva：`npm install dva-core`
  - 项目 ./src 中新建 dva.ts

```
    import { create } from 'dva-core';

    let app;
    function createApp(opt) {
    app = create(opt);
    if (!global.registered) {
    opt.models.forEach(model => app.model(model));
    }
    global.registered = true;
    app.start();
        const store = app._store;
        app.getStore = () => store;

        const { dispatch } = store;
        app.dispatch = dispatch;
        return app;

    }

    export default {
        createApp,
        getDispatch() {
            return app.dispatch;
        },
    };
```
