# Todo-App SPA

###### 概要：　Todo管理アプリ。ログインして自身のTodoリストにタスクを追加、更新、削除することができる。
###### ログイン画面
![ログイン画面のスクリーンショット](Login-page.png?raw=true)
###### トップ画面
![ホーム画面のスクリーンショット](Top-page.png?raw=true)
## 機能一覧
###### ログイン：登録されたメールアドレスとパスワードによる認証機能。ログインユーザーのTODOリストを表示する。
###### 新規タスクの追加：TODOを入力し追加ボタンをクリックすることで新規タスクをTODOリストに追加できる。
###### タスクの状態の変更：TODOリストのチェックボックスをクリックすることでタスクを完了及び未完了の状態にできる。
###### タスクの編集：TODOリストのテキストをクリックすることでタスクの編集ができる。
###### タスクの削除：TODOリストの削除ボタンをクリックすることでタスクをリストから削除できる。
###### ログアウト：ログアウト機能

## 使用技術
###### Backend
###### php: 8.4.7
###### Laravel: 12.8.1
###### Frontend
###### axios: 1.8.2
###### React: 19.1.0
###### React-dom: 19.1.0
###### React-router-dom: 7.5.1
###### React-toastify: 11.0.5
###### sass: 1.86.3
###### typescript: 5.8.3
###### vite: 6.2.4

## テーブル設計
![テーブル設計書](Table_design.png?raw=true)
## 環境構築
###### 1. $ git clone git@github.com:TsuneoHakoyama/TodoApp_spa.git
###### 2. $ cd TodoApp_spa
###### 3. $ composer install
###### 4. $ cp .env.example .env
###### 5. $ php artisan key:generate
###### 6. $ php artisan storage:link
###### 7. $ chmod -R 777 storage bootstrap/cache
###### 8. $ touch database/database.sqlite database/test.sqlite
###### 9. $ php artisan migrate:fresh --seed
###### 10.$ npm install
###### 11.$ npm run dev
###### 12.$ php artisan serve
###### 13.  http://localhost:8000にアクセス
###### ユーザーはuser1@example.com, user2@example.com, admin@example.comの3つのメールアドレスでログインが可能。passwordはすべてのユーザーが"password"。



