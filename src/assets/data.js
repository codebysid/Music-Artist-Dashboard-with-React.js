// postersImport
import attentionposter from "../assets/attentionposter.jpg"
import marvingayeposter from "../assets/marvingayeposter.jpg";
import onecallawayposter from "../assets/onecallawayposter.jpeg";
import seeyouagainposter from "../assets/seeyouagainposter.jpg";
import wedonttalkanymoreposter from "../assets/wedonttalkanymoreposter.webp";

// songsImport
import seeyouagainMp3 from "../assets/music/seeyouagain.mp3"
import attentionMp3 from "../assets/music/attention.mp3"
import marvinGayeMp3 from "../assets/music/marvinGaye.mp3"
import oneCallAwayMp3 from "../assets/music/oneCallAway.mp3"
import weDontTalkAnymoreMp3 from "../assets/music/weDontTalkAnymore.mp3"

export const musicPlayerData = [{
    posterName: "seeyouagainposter",
    posterPath: seeyouagainposter,
    songPath: seeyouagainMp3,
    id:"01",
    name:"See You Again"
  },
  {
    posterName: "wedonttalkanymoreposter",
    posterPath: wedonttalkanymoreposter,
    songPath: weDontTalkAnymoreMp3,
    id:"02",
    name:"We Dont Talk Anymore"
  },
  {
    posterName: "attentionposter",
    posterPath: attentionposter,
    songPath: attentionMp3,
    id:"03",
    name:"Attention"
  },
  {
    posterName: "onecallawayposter",
    posterPath: onecallawayposter,
    songPath: oneCallAwayMp3,
    id:"04",
    name:"One Call Away"
  },
  {
    posterName: "marvingayeposter",
    posterPath: marvingayeposter,
    songPath: marvinGayeMp3,
    id:"05",
    name:"Marvin Gaye"
  }

]

export const genRandomNumber = (lengthOfNumber) => {
  const num = "123456789";;
  var randomNum = "";
  var i;
  for (i = 0; i < lengthOfNumber; i++) {
    let temp = Math.floor(Math.random() * num.length);
    randomNum += num.substring(temp, temp + 1);
  }

  return randomNum;
};


export const flagData = [{
    code: "in",
    per: "92%",
    name: "India"
  },
  {
    code: "us",
    per: "78%",
    name: "US"
  },
  {
    code: "rus",
    per: "64%",
    name: "Russia"
  }
]