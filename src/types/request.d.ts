declare namespace Request {
    interface ResponseData<T> {
        /** code码 */
        code: number |string;
        /** 业务数据，使用范型 */
        data: T;
        /** 错误提示 */
        msg: string;
    }
    interface LoadingOptions {
        text?: string;
        showMask?: boolean;
    }
    interface Options {
        /** 是否自动提示错误信息，默认true */
        showError?: boolean;
        /** 是否返回完整数据 */
        isFullData?: boolean;
        /** 是否设置提交方式为application/json，默认false */
        isJson?: boolean;
        /** 是否显示loading，默认false */
        showLoading?: boolean;
        /** loading相关配置 */
        loadingOptions?: LoadingOptions;
    }

    interface ComParams {
        wmPoiId: string;
        acctId: string;
        appType: number;
        token: string;
    }
}
