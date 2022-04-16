
<div align="center">
  <a href="https://github.com/Hazelwu2/posts-mongoose-week2.git">
    <img src="./logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Post List</h3>

  <p align="center">
    📆 Post（貼文動態牆）API in Node.js
    <br />
    <a href="https://github.com/Hazelwu2/posts-mongoose-week2/issues">Report Bug</a>
    ·
    <a href="https://posts-mongoose-week2.herokuapp.com/">Demo</a>
  </p>
</div>

## 🛖 About This Project
第二週六角學院 Nodejs 主線任務，設計一個 /posts 路由，設計與 todolist kata 一樣的設計

* 上傳 [GitHub](https://github.com/Hazelwu2/posts-mongoose-week2.git)
* 提供 POSTMAN
* config.env 忽略，不能在 GitHub 上
* 請連接 mongodb 雲端 atlas 資料庫
* dotenv 加上環境變數，讓程式更安全
* 部署到 heroku 主機

功能面
* Create：建立 Post 貼文
* Read：閱讀 Post 貼文
* Edit：編輯 Post 貼文
* Delete：刪除 Post 貼文

多人協作以發 PR 方式
* 請下載此 repo，由小組長上傳到自己的 GitHub Repo
* 將所有組員加入到 repo 權限
* 組員認領功能，觀看此影片，並將做好的功能發 pr，再由小組長通過 pr


## 🔨 Built With
此專案會用到的 Framework / Library 或工具

* [Nodejs](https://github.com/nodejs)
* [Heroku](https://www.heroku.com/)
* [Git](https://git-scm.com/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Mongoose](https://mongoosejs.com/)

## 👨‍💻 Getting Started
以下照著範例做，可以讓你在本地端 run 此專案

1. Clone the Repo
  ```sh
    git clone git@github.com:Hazelwu2/posts-mongoose-week2.git
  ```
2. Install NPM packages
  ```
  cd posts-mongoose-week2
  npm install
  ```
3. Start Runing Server
  ```
  npm run dev
  ```

## 👨‍💻 CRUD 語法
- 新增：Model.create()
- 刪除：Model.findByIdAndDelete()
- 更新：Model.findByIdAndUpdate()
- 查詢：Model.find()