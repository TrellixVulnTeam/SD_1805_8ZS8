
var clova = require("love-clova");

const fetch = require("isomorphic-fetch");
const request = require('sync-request');

var url = 'https://morning-ravine-52217.herokuapp.com/messies'
// var url = 'https://mysterious-caverns-19353.herokuapp.com/users'
// var url = 'https://morning-ravine-52217.herokuapp.com/users/latest';


// const : 再代入不可能な変数
const LaunchRequest2Handler = {
  canHandle: function(handlerInput){
    return handlerInput.requestEnvelope.isMatch('LaunchRequest2');
  },
  handle: function(handlerInput){
    var msg = "あなたの星座を教えてください";
    return handlerInput.responseBuilder.speak(msg).reprompt(msg).getResponse();
  }
}

const SessionEndedRequestHandler = {
  canHandle: function(handlerInput){
    return handlerInput.requestEnvelope.isMatch('SessionEndedRequest');
  },
  handle: function(handlerInput){
    var msg = "";
    return handlerInput.responseBuilder.speak(msg).reprompt(msg).getResponse();
  }
}

const ClovaGuideIntentHandler = {
  canHandle: function(handlerInput){
    return handlerInput.requestEnvelope.isMatch('Clova.GuideIntent');
  },
  handle: function(handlerInput){
    var msg = "このスキルは今日のあなたの運勢を占います。あなたの星座を教えてください。";
    return handlerInput.responseBuilder.speak(msg).reprompt(msg).getResponse();
  }
}


const DivinationIntentHandler = {

  canHandle: function(handlerInput){
    return handlerInput.requestEnvelope.isMatch('DivinationIntent');
  },
  handle: function(handlerInput){

    var val1;
    var val2;
    const res2 = request('get', url);     // お部屋の最新状況を取得
    val1 = JSON.parse(res2.getBody());
    val2 = val1.slice(-1)[0].total_score;

    if (val2 < 20){
      var msg = 'こんなクソ汚い部屋じゃ友達呼べないぜ？掃除しろし';
    }else if (20 < val2 && val2 < 40){
      var msg = 'そんなmessyな部屋で飯食べるんか？先に掃除しような';
    }else if (40 < val2 && val2 < 60){
      var msg = '部屋がきれいな人は心もきれいなんだよ';
    }else if (60 < val2 && val2 < 60){
      var msg = '部屋がきれいな人は心もきれいなんだよ';
    }else if (80 < val2 && val2 < 100){
      var msg = '君の部屋はずっときれいだね.惚れてまう';
    }else{
      var msg = '君の部屋どういう状況？';
    }

    return handlerInput.responseBuilder.speak(msg).getResponse();

  }
}

const errorHandler = {
  canHandle: function(handlerInput){
    return true;
  },
  handle: function(handlerInput){
    var msg = "エラー発生";
    return handlerInput.responseBuilder.speak(msg).reprompt(msg).getResponse();
  }
}


exports.handler = clova.extensionBuilders
  .addRequestHandlers(LaunchRequest2Handler,SessionEndedRequestHandler,ClovaGuideIntentHandler,DivinationIntentHandler)
  .addErrorHandlers(errorHandler)
  .lambda()
