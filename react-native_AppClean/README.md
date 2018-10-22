# react-native_AppClean

# 概要
- 各種センサから取得した情報をデータベースから取得し，きれいさ，におい，ほこりのスコアやくまのアニメーション，コメントを表示
- 各スコアの過去の情報のグラフを表示
- とくてんによって変化する動物（部屋の中にいるもの）を表示

# 詳細
-本アプリは大きく3つのページで成立している．各ページへの切り替えはタブの操作によって可能である．また，一部のページはwebviewを使用．

## 画面1
<img src="https://user-images.githubusercontent.com/40264020/47291670-78a28280-d63f-11e8-991a-10f0a0cedcc3.PNG" height="300">

- 画面の機能の紹介
  - 部屋に設置されたセンサ,カメラから得られた情報をアプリ側で出力を行う
    - 今回設置した機器
      - raspberry Pi3 ModelB
      - Grove-Dust Senso
      - においセンサ　TGS2450
  - きれいさ，におい，ほこりのスコアやそれらのスコアから総合的に算出された「とくてん」によって，くまのアニメーション画像が変化
    - 具体的には，とくてんに応じて以下のように変化する(くまのアニメーションはLive2Dを用いて作成)  
      - <img src="https://user-images.githubusercontent.com/40264020/47291639-60326800-d63f-11e8-9551-f2b0122a6311.png" width="500px">

- 工夫した点
  - 画面更新をスクロールでできるようにした
  - 親しみやすいUIデザイン
  - きれいさ，におい，ほこりのスコアによって，背景のカラーバーの長さが変化
  - くまのアニメーション作成にLive2Dを使用
  - アプリ起動時には，loading画面を追加
    - <img src="https://user-images.githubusercontent.com/40264020/47291716-a687c700-d63f-11e8-897a-0526db13749f.PNG" height="300">
 
## 画面2
<img src="https://user-images.githubusercontent.com/40264020/47291688-848e4480-d63f-11e8-9dbe-9c86fad2fe51.PNG" height="300">

- 画面の機能の紹介
  - 過去のきれいさ，におい，ほこりの各スコアや総合的なとくてんをグラフ化して掲載
  
## 画面3
<img src="https://user-images.githubusercontent.com/40264020/47291703-996ad800-d63f-11e8-987b-abacd3d41e93.PNG" height="300">

- 画面の機能の紹介
  - 現在の部屋の状況によって，画面内の部屋に出力される動物やその種類・数が変化
