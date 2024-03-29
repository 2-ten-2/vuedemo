module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'warn',//禁止使用alert confirm prompt
    'no-cond-assign': process.env.NODE_ENV === 'production' ? 'error' : 'warn',//禁止在条件表达式中使用赋值语句
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',//禁止使用console
    'no-constant-condition': process.env.NODE_ENV === 'production' ? 'error' : 'warn',//禁止在条件中使用常量表达式 if(true) if(1)
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',//禁止使用debugger
    'no-dupe-keys': process.env.NODE_ENV === 'production' ? 'error' : 'warn',//在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-duplicate-case': process.env.NODE_ENV === 'production' ? 'error' : 'warn',//switch中的case标签不能重复
    'no-irregular-whitespace': process.env.NODE_ENV === 'production' ? 'error' : 'error',//不能有不规则的空格
    'no-ternary': process.env.NODE_ENV === 'production' ? 'off' : 'off',//禁止使用三目运算符
    'no-var': process.env.NODE_ENV === 'production' ? 'off' : 'off'//禁用var，用let和const代替
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
