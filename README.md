# 開発環境

```
npm run server
```

# ビルド

```
npm run build
```

# 設計方針

Railsライクなasset管理をしたい

アプリ側からは application.js/css しか読まない

## js

jsに関しては、すでに巨大な1ファイルになるように生成しているので、
ビルド時は`application.js`をビルドするだけでOK

## css

こちらはいっぱい用意したcssをminify&concatしたものを書き出すイメージ
