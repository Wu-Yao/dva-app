declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.scss';
declare module 'classnames';

/* eslint-disable */
declare module 'dva-core' {
    export function create(options: any): void;
}
/* eslint-disable */
declare module '@mtfe/knb-core' {
    export function compareVersion(version: string | undefined, tarVersion: string): number;
}
/* eslint-disable */
declare module 'react-image-lazy-load'