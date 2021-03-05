declare namespace MyTS {
    interface Element { }
    interface IntrinsicElements {
        [elemName: string]: any;
    }

    interface IntrinsicAttributes {
        [key: string]: any;
    }

    interface CommonObject {
        [key: string]: any;
    }

    // dva 请求实体
    namespace dva {
        interface OptProps {
            initialState: any;
            models: Array<Object>;
            onError: Function;
            onAction?: Function;
        }

        interface Dispatch {
            <A extends Action>(action: A): A;
        }

        interface Action {
            type: any;
        }

        interface AnyAction extends Action {
            [extraProps: string]: any;
        }


        interface EffectsCommandMap {
            put: <A extends AnyAction>(action: A) => any,
            call: Function;
            select: Function;
            take: Function;
            cancel: Function;
            [key: string]: any;
        }
    }


}
