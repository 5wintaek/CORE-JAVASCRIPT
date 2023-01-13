module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        'no-unused-vars':'off'
        // 저 옵션이 undefined 된 변수가 있으면 빨간줄 긋는거라서 off 해주거나 주석처리 해주시면 됩니다
    }
}
