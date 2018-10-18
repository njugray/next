/// <reference types="react" />

import * as React from "react";

interface HTMLAttributesWeak extends React.HTMLAttributes<HTMLElement> {
  title?: any;
}

export interface DialogProps extends HTMLAttributesWeak {
  /**
   * 是否显示
   */
  visible?: boolean;

  /**
   * 标题
   */
  title?: React.ReactNode;

  /**
   * 内容
   */
  children?: React.ReactNode;

  /**
   * 底部内容，设置为 false，则不进行显示
   */
  footer?: boolean | React.ReactNode;

  /**
   * 底部按钮的对齐方式
   */
  footerAlign?: "left" | "center" | "right";

  /**
   * 指定确定按钮和取消按钮是否存在以及如何排列,<br><br>**可选值**：
   * ['ok', 'cancel']（确认取消按钮同时存在，确认按钮在左）
   * ['cancel', 'ok']（确认取消按钮同时存在，确认按钮在右）
   * ['ok']（只存在确认按钮）
   * ['cancel']（只存在取消按钮）
   */
  footerActions?: Array<any>;

  /**
   * 在点击确定按钮时触发的回调函数
   */
  onOk?: ((event: {}) => void);

  /**
   * 在点击取消按钮时触发的回调函数
   */
  onCancel?: ((event: {}) => void);

  /**
   * 应用于确定按钮的属性对象
   */
  okProps?: {};

  /**
   * 应用于取消按钮的属性对象
   */
  cancelProps?: {};

  /**
   * 控制对话框关闭的方式，值可以为字符串或者布尔值，其中字符串是由以下值组成：
   * **close** 表示点击关闭按钮可以关闭对话框
   * **mask** 表示点击遮罩区域可以关闭对话框
   * **esc** 表示按下 esc 键可以关闭对话框
   * 如 'close' 或 'close,esc,mask'
   * 如果设置为 true，则以上关闭方式全部生效
   * 如果设置为 false，则以上关闭方式全部失效
   */
  closeable?: string | boolean;

  /**
   * 对话框关闭时触发的回调函数
   */
  onClose?: ((trigger: string, event: {}) => void);

  /**
   * 对话框关闭后触发的回调函数, 如果有动画，则在动画结束后触发
   */
  afterClose?: (() => void);

  /**
   * 是否显示遮罩
   */
  hasMask?: boolean;

  /**
   * 显示隐藏时动画的播放方式
   */
  animation?: {} | boolean;

  /**
   * 对话框弹出时是否自动获得焦点
   */
  autoFocus?: boolean;

  /**
   * 对话框对齐方式
   */
  align?: string | boolean;

  /**
   * 当对话框高度超过浏览器视口高度时，是否显示所有内容而不是出现滚动条以保证对话框完整显示在浏览器视口内，该属性仅在对话框垂直水平居中时生效，即 align 被设置为 'cc cc' 时
   */
  isFullScreen?: boolean;

  /**
   * 是否在对话框重新渲染时及时更新对话框位置，一般用于对话框高度变化后依然能保证原来的对齐方式
   */
  shouldUpdatePosition?: boolean;

  /**
   * 对话框距离浏览器顶部和底部的最小间距，align 被设置为 'cc cc' 并且 isFullScreen 被设置为 true 时不生效
   */
  minMargin?: number;

  /**
   * 透传到弹层组件的属性对象
   */
  overlayProps?: {};

  /**
   * 自定义国际化文案对象
   */
  locale?: {
    ok: string;
    cancel: string;
  };
}

export default class Dialog extends React.Component<DialogProps, any> {
  static show(config: {}): {};
  static alert(config: {}): {};
  static confirm(config: {}): {};
}