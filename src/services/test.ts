// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: () => {
        const str = 'hello world';
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(str);
            }, 1000);
        });
    },
};