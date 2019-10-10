module.exports = {
    "parserOptions": {
        "parser": "babel-eslint"
    },
    "extends": [
        "plugin:vue/recommended"
    ],
    "plugins": [
        "vue"
    ],
    "settings": {
        "import/resolver": {
            "node": {
                "paths": ["src"]
            }
        }
    },
    "rules": {
        "max-len": ["error", 120, 2, {"ignoreComments": true}],
        "func-names": ["error", "never"],
        "indent": ["error", 4, {"SwitchCase": 1}],
        "key-spacing": ["error", { "align": "value" }],
        "no-multi-spaces": ["error", { "exceptions": { "VariableDeclarator": true, "ImportDeclaration": true } }],
        "no-new": 0,
        "no-param-reassign": 0,
        "vue/html-indent": ["error", 4],
        "linebreak-style": 0,
        "no-underscore-dangle": [2, { "enforceInMethodNames": false, "allowAfterThis": true }]
    },
    "env": {
        "browser": true,
        "jquery": true,
        "node": true,
        "jest": true
    },
    "globals": {
        "_": false,
        "Vue": false,
        "_kr": false,
        "location": false,
        "Waypoint": false
    }
};
