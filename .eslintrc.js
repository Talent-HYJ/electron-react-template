module.exports = {
  extends: 'eslint:recommended',
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  rules: {
    'react/jsx-uses-react': 0,
    'react/jsx-uses-vars': 0,
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': 'warn',

    // 'no-unused-vars': 'off',
    // eqeqeq: 'error',
    // 'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',
    // 'react-hooks/exhaustive-deps': 'warn'
    'no-cond-assign': 'error',
    'no-constant-condition': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty': ['warn', { allowEmptyCatch: true }],
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-unexpected-multiline': 'error',
    // 'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'warn',
    'no-else-return': 'error',
    'no-empty-pattern': 'error',
    'no-redeclare': 'error',
    'no-delete-var': 'error',
    // 'no-lonely-if': 'error',
    'no-self-assign': 'error',
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'spaced-comment': 'warn',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'comma-dangle': ['warn', 'always-multiline'],
    semi: 'error',
    'semi-spacing': 'error',
    'key-spacing': 'error',
    curly: 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'accessor-pairs': 'error',
    eqeqeq: 'error',
    radix: 'error',
    quotes: ['error', 'single'],
    indent: ['warn', 2, { SwitchCase: 1, MemberExpression: 1, ignoredNodes: ['TemplateLiteral'] }],
    'keyword-spacing': 'error',
    'arrow-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/ban-ts-comment': 'off',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    /* React */
    'jsx-quotes': 'error',
    // 'react/no-array-index-key': 'warn',
    'react/no-deprecated': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-string-refs': 'error',
    'react/prefer-es6-class': 'error',
    'react/jsx-uses-vars': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-max-props-per-line': ['warn', { maximum: 3 }],
    'react/jsx-closing-bracket-location': 'warn',
    /* Hooks */
    'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
    /* Typescript */
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
    // import-sort, see: https://dev.to/julioxavierr/sorting-your-imports-with-eslint-3ped
    'simple-import-sort/imports': 'warn'
  }
};
