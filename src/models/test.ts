import Service from '../services/test';
import key from 'keymaster';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    namespace: 'test',
    state: {
        keyword: '123',
    },
    reducers: {
        update(state: MyTS.CommonObject, { payload }: MyTS.CommonObject) {
            return { ...state, ...payload };
        },
    },
    effects: {
        *get({ payload }: MyTS.dva.AnyAction, { call, put }: MyTS.dva.EffectsCommandMap) {
            const res = yield call(Service.get);
            yield put({
                type: 'update',
                payload: {
                    keyword: res,
                },
            });
        },
    },
    subscriptions: {
        setup({ dispatch, history }: any) {
            // 进入页面就调用
            // history.listen((location: any) => {
            //     if (location.pathname === '/') {
            //         dispatch({
            //             type: 'query',
            //             payload: {},
            //         })
            //     }
            // })
        },
        keyEvent(dispatch: any) {
            key('⌘+up, ctrl+up', () => { console.log(dispatch) });
        },
    },
};