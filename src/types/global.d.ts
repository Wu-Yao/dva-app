interface Window {
    LXAnalytics: any;
    KNB: any; // h5 KNB
    wx: any; // 微信
    onresize: Function;
    Owl: any;
    jsonCallBack: Function;
    // [key: string]: any; // Add index signature
}

// 全局函数定义
declare namespace NodeJS {
    interface Global {
        registered: boolean;
    }
}

declare type valueof<T> = T[keyof T];
