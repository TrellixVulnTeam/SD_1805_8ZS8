
// Global変数として定義して配列をつくる
// Move関数では

Ns=document.getElementById;
Ie=document.all;
Obj="";
X=0; Y=0; Xs=0; Ys=0; Xe=0; Ye=0;

var img = new Image();
img.src = 'images/color_g.gif';
var img_width  = img.width;  // 幅
var img_height = img.height; // 高さ

// image_width と image_height はhtmlからの引数
var sW,sH,s;
sW = window.innerWidth  - image_width;
sH = window.innerHeight - image_height;

content1 = document.getElementById("FlyImg1");
content2 = document.getElementById("FlyImg1").innerHTML;

console.log(content1)
console.log(content2)

img_name = 'image1'


var Ns_arr = []; var Ie_arr = []; var Obj_arr= []; var bo_arr = [];
var X_arr  = []; var Y_arr  = []; var Xs_arr = []; var Ys_arr = [];
var Xe_arr = []; var Ye_arr = []; var XX_arr = []; var YY_arr = [];


var ID_arr = ["FlyImg1", "FlyImg2", "FlyImg3"];

n = 0;
while (n < ID_arr.length) {
  Ns_arr.push(Ns); Ie_arr.push(Ie); Obj_arr.push(Obj);
  X_arr.push(X);   Y_arr.push(Y);
  Xs_arr.push(Xs); Ys_arr.push(Ys);
  Xe_arr.push(Xe); Ye_arr.push(Ye);
  XX_arr.push(0);  YY_arr.push(0);  bo_arr.push(1);
  n++;
}



function Move(id){
  // (Xs、Ys) : 移動範囲の左上端座標 = (0,0)
  // (Xe、Ye) : 移動範囲の右下端座標 = (ウィンドウの横,ウィンドウの縦)
  // (Ns、Ie) : ブラウザチェック用の変数

  //変数の取得
  if (Ie){
    Obj_arr[id]=document.all[ID_arr[id]].style;
    Xs_arr[id]=document.body.scrollLeft;
    Ys_arr[id]=document.body.scrollTop;
    Xe_arr[id]=sW
    Ye_arr[id]=sH
    px="px";
  }else if(Ns){
    Obj_arr[id]=document.getElementById(ID_arr[id]).style;
    Xs_arr[id]=pageXOffset;  // 水平方向のスクロール量
    Ys_arr[id]=pageYOffset;  // 垂直方向のスクロール量
    Xe_arr[id]=sW
    Ye_arr[id]=sH
    px="px";
  }


  //移動量( XX YY )を決める
  if(X_arr[id]<=Xs_arr[id]) XX_arr[id]=Math.floor(Math.random()*20)+10;
  if(X_arr[id]>=Xe_arr[id]) XX_arr[id]=(Math.floor(Math.random()*20)+10)*(-1);
  if(Y_arr[id]<=Ys_arr[id]) YY_arr[id]=Math.floor(Math.random()*20)+10;
  if(Y_arr[id]>=Ye_arr[id]) YY_arr[id]=(Math.floor(Math.random()*20)+10)*(-1);

  //移動後の位置
  X_arr[id]=X_arr[id]+bo_arr[id]*XX_arr[id];
  if(X_arr[id]<Xs_arr[id]){X_arr[id]=Xs_arr[id]};
  if(X_arr[id]>Xe_arr[id]){X_arr[id]=Xe_arr[id]}
  // if(X_arr[id]+img_width>Xe_arr[id]){X_arr[id]=Xe_arr[id]}

  Y_arr[id]=Y_arr[id]+bo_arr[id]*YY_arr[id];
  if(Y_arr[id]<Ys_arr[id]){Y_arr[id]=Ys_arr[id]};
  if(Y_arr[id]>Ye_arr[id]){Y_arr[id]=Ye_arr[id]}
  // if(Y_arr[id]+img_height>Ye_arr[id]){Y_arr[id]=Ye_arr[id]}

  console.log(X_arr[id])
  console.log(Y_arr[id])

  //描画
  Obj_arr[id].left=X_arr[id]+px;
  Obj_arr[id].top=Y_arr[id]+px;

  size = Y_arr[id] / Ye_arr[id]

  if(id == 0){
    document.testimg0.width = 400 * size;
    document.testimg0.height = 300 * size;
  }else if(id == 1){
    document.testimg1.width = 400 * size;
    document.testimg1.height = 300 * size;
  }else if(id == 2){
    document.testimg2.width = 400 * size;
    document.testimg2.height = 300 * size;
  }
}


function Check(){
  if(Ie || Ns){setInterval("Main()",100)}
}


function Main(){
  Move(0);
  Move(1);
  Move(2);
}



