declare module '*.less';
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.webp';

// eslint-disable-next-line no-redeclare
interface Window {
  [x: string]: any;
  api: {
    operateWindow: (type: WindowOperateType) => void;
    isMaximze: () => boolean;
  };
}
type WindowOperateType = 'minimize' | 'close' | 'maximize';
