# syllabus_api
シラバス検索システム. 

https://github.com/Stead08/syllabus_search_deno_aleph

で利用する為の検索条件に応じたJSONを返すAPI。

## 機能
- HTTP GETリクエストに応じてJSONを返す。

指定に応じて、リストを生成したり、詳細情報を生成して送る。

## 使用技術
- Deno
- TypeScript
- docker
- postgreSQL

## 言語とフレームワーク選定の経緯
- フロントエンドもDeno&TypeScriptで開発しており、同環境でAPIも作ったらサーバ同士のやり取りが楽になると思ったから。
- プログラミング初心者のためサーバサイドで違う言語（Go, Python, Rustなど）を利用するとなると、学習コストが大きく開発に時間がかかるから
- 将来的には(周辺知識を学習した上で）Rustで同じ機能を実装してどれくらい速く動作するか試してみたい（完全に興味本位かつ、DenoがRustで書かれているため効果が実感できるかは不明）
