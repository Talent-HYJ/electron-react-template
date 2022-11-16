module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
  ],
  plugins: ['stylelint-order'],
  includes: ['*.less'],
  rules: {
    'color-no-invalid-hex': true, // 禁止无效的 16 进制颜色。
    'font-family-no-duplicate-names': true, // 禁止重复的字体族名称
    'font-family-no-missing-generic-family-keyword': true, // 禁止在字体族名称列表中缺少通用字体族关键字
    // 'function-calc-no-invalid': false, // 禁止在 calc 函数中使用无效表达式。
    'function-calc-no-unspaced-operator': true, // 禁止在 calc 函数中使用没有间隔的运算符
    'string-no-newline': true, // 禁止字符串中的(未转义)换行符。
    'unit-no-unknown': true, // 禁止未知的单位。
    'property-no-unknown': [
      // 禁止未知的属性。
      true,
      {
        ignoreProperties: ['composes'] // 忽略 composes 属性
      }
    ],
    'declaration-block-no-duplicate-properties': true, // 禁止声明块的重复属性
    'selector-id-pattern': '^[a-z][a-zA-Z0-9]+$', // 指定 ID 选择器的模式。
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]|^ant-', // 指定 类 选择器的模式。
    'selector-pseudo-class-no-unknown': [
      // 禁止未知的伪类选择器。
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'selector-pseudo-element-no-unknown': true, //禁止未知的伪元素选择器。
    'selector-type-no-unknown': true, // 禁止未知的类型选择器。
    'selector-pseudo-class-case': 'lower',
    'selector-type-case': 'lower', // 指定类型选择器的大小写（可自动修复）
    'media-feature-name-no-unknown': true, // 禁止未知的媒体功能名
    'at-rule-no-unknown': true, // 禁止未知的@规则。
    'comment-no-empty': true, // 禁止空注释。
    'no-descending-specificity': true, //禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。
    'no-duplicate-at-import-rules': true, // 禁止在样式表中使用重复的 @import 规则。
    'no-duplicate-selectors': true, // 禁止样式表中的重复选择器
    'no-empty-source': true, // 禁止空源码
    'no-extra-semicolons': true, // 禁止额外的分号（可自动修复）。
    'string-quotes': 'single', // 指定字符串使用单引号或双引号（可自动修复）。
    'property-case': 'lower', // 指定属性的大小写（可自动修复）。
    'max-empty-lines': 1, // 限制相邻空行的数量。
    // 'no-eol-whitespace': true,                       // issue: #3842
    'function-name-case': 'lower',
    indentation: 4 // 指定缩进。
  }
};
