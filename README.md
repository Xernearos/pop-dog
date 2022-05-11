# FRONTEND-INTERN
2022 FRONTEND-INTERN-HOMEWORK

1. Clone 專案
2. 執行 ```npm install```
3. 執行 ```npm start```

如果想要用 Deploy Heroku 的方式，煩請您按照以下步驟。
1. 執行 ```heroku login```
2. 執行 ```heorku create```
3. 執行 ```git push heroku main```
4. 執行 ```heroku ps:scale web=1```
5. 快要成功了，不要放棄。執行 ```heroku open```

目標 : 

- 串接 Github REST API，並使用 REACT 實作一個瀏覽單一使用者 Github Repository 的網站。
- 完成作業後，上傳到 Github，繳交連結。

<img src="https://media.giphy.com/media/KDspjK5MT9xhqyycfR/giphy.gif" width="480" height="270"/>

基本要求 :
- 實作 Repository 列表
- [x] 必須是 `users/{username}/repos`
- [x] 串接 `GET /users/{username}/repos` 回傳的資料。 (PS. 我這邊是利用 Fetch，不知道會不會被扣分QAQ。)
- [ ] 第一次只能載入 10 個 repository 。 (PS. 這邊，我有點卡關 >_<"，真的很困難。)
- [ ] 列表在滾到頁面底部時要再自動發送 API 請求,載入額外 10 個 repository,直到沒有更多 repository 。(PS. 我有想過切割字串，用for迴圈去跑，但是卡住了。)
- [x] 上方需有 Header 顯示 username。
- [x] 下方列表內的項目至少需顯示: `repository.name`、`repository`.`stargazers_count`。
- [x] 每個 repository 可以被點擊,並切換 route 至單一 repository 頁面。
- 實作單一 Repository 頁面
- [x] route 必須要是 `/users/{username}/repos/{repo}`。
- [x] 串接 GET `/repos/{owner}/{repo}` 回傳的資料。
- [x] 頁面至少需顯示:`repository.full_name`、`repository.description`、`repository.stargazers_count`。
- [x] 有超連結可開新分頁至該 repository 在 GitHub 上的頁面。
- 加分條件
- [ ] 有處理例外狀況。 (不太確定有沒有做到OAO)
- [x] 有 deploy 至線上環境。 (PS. Deploy Heroku)

小小許願 : 
我知道我的學歷可能沒有其他人美麗，但是，可不可以不要把我那麼快刷掉。
我真的好想上低卡實習，丟了這麼多年，都沒有上 嗚嗚嗚。