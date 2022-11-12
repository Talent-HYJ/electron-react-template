module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-jsx',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    process.env.NODE_ENV === 'development' && 'react-refresh/babel'
  ].filter(Boolean)
};
