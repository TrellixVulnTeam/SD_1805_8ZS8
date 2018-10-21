
// Global変数として定義して配列をつくる
// Move関数では

Ns=document.getElementById;
Ie=document.all;
Obj="";
X=0; Y=0; Xs=0; Ys=0; Xe=0; Ye=0;

var img = new Image();
img.src = 'images/dance_buta.gif';
var img_width  = img.width;  // 幅
var img_height = img.height; // 高さ


// image_width と image_height はhtmlからの引数
var sW,sH,s;
sW = window.innerWidth  - image_width;
sH = window.innerHeight - image_height;

<<<<<<< HEAD
console.log(sW)
console.log(sH)
=======

console.log("Hello")
console.log(sW)
console.log(sH)
console.log(sH)
>>>>>>> origin2/master



var Ns_arr = [];
var Ie_arr = [];
var Obj_arr= [];
var X_arr  = [];
var Y_arr  = [];
var Xs_arr = [];
var Ys_arr = [];
var Xe_arr = [];
var Ye_arr = [];
var XX_arr = [];
var YY_arr = [];
var bo_arr = [];


var ID_arr = ["FlyImg1", "FlyImg2", "FlyImg3"];

<<<<<<< HEAD
=======

function scale(size, img_name) {
  width = 400 * size;
  height = 300 * size;
  document.img_name.width = width;
  document.img_name.height = height;
  console.log(width)
  console.log(height)
}

scale(0.1, "image1")

// var targetImg = document.getElementById(ID_arr[1]);
// targetImg.width = 600;
// targetImg.height = 20;

>>>>>>> origin2/master
n = 0;
while (n < ID_arr.length) {
  Ns_arr.push(Ns);
  Ie_arr.push(Ie);
  Obj_arr.push(Obj);
  X_arr.push(X);
  Y_arr.push(Y);
  Xs_arr.push(Xs);
  Ys_arr.push(Ys);
  Xe_arr.push(Xe);
  Ye_arr.push(Ye);
  XX_arr.push(0);
  YY_arr.push(0);
  bo_arr.push(1);
  n++;
}



function Move(id){
  // (Xs、Ys) : 移動範囲の左上端座標
  // (Xe、Ye) : 移動範囲の右下端座標
  // (Ns、Ie) : ブラウザチェック用の変数

  //変数の取得
  if (Ie){
    Obj_arr[id]=document.all[ID_arr[id]].style;
    Xs_arr[id]=((document.body.scrollLeft)+sW)/2;
    Ys_arr[id]=((document.body.scrollTop )+sH)/2;
    Xe_arr[id]=sW
    Ye_arr[id]=sH
    px="px";
  }else if(Ns){
    Obj_arr[id]=document.getElementById(ID_arr[id]).style;
    Xs_arr[id]=((pageXOffset)+sW)/2 ;  // 水平方向のスクロール量
    Ys_arr[id]=((pageYOffset)+sH)/2 ;  // 垂直方向のスクロール量
    Xe_arr[id]=sW
    Ye_arr[id]=sH
    px="px";
  }

  //移動量( XX YY )を決める
  if(X_arr[id]<=Xs_arr[id]) XX_arr[id]= Math.floor(Math.random()*20)+10;
  if(X_arr[id]>=Xe_arr[id]) XX_arr[id]=(Math.floor(Math.random()*20)+10)*(-1);
  if(Y_arr[id]<=Ys_arr[id]) YY_arr[id]= Math.floor(Math.random()*20)+10;
  if(Y_arr[id]>=Ye_arr[id]) YY_arr[id]=(Math.floor(Math.random()*20)+10)*(-1);

  //移動後の位置
  X_arr[id]=X_arr[id]+bo_arr[id]*XX_arr[id];
  if(X_arr[id]<Xs_arr[id]){X_arr[id]=Xs_arr[id]};
  if(X_arr[id]>Xe_arr[id]){X_arr[id]=Xe_arr[id]}

  Y_arr[id]=Y_arr[id]+bo_arr[id]*YY_arr[id];
  if(Y_arr[id]<Ys_arr[id]){Y_arr[id]=Ys_arr[id]};
  if(Y_arr[id]>Ye_arr[id]){Y_arr[id]=Ye_arr[id]}

  //描画
  Obj_arr[id].left=X_arr[id]+px;
  Obj_arr[id].top=Y_arr[id]+px;
}



<<<<<<< HEAD
function Check(){
   if(Ie || Ns){setInterval("Main()",200)}
}


function Main(){
  Move(0);
  Move(1);
  Move(2);
=======
// function Check(){
//    if(Ie || Ns){setInterval("Main()",200)}
// }


function Main(){
  // Move(0);
  // Move(1);
  // Move(2);
  // console.log("Hello")
>>>>>>> origin2/master
}



