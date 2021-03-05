import { create } from 'dva-core';

let app: any;
function createApp(opt: MyTS.dva.OptProps) {
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createApp,
    getDispatch() {
        return app.dispatch;
    },
};
