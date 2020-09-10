import Mock from "mockjs";

import Img1 from "../../assets/bgCover/1.jpg";
import Img2 from "../../assets/bgCover/2.jpg";
import Img3 from "../../assets/bgCover/3.jpg";
import Img4 from "../../assets/bgCover/4.jpg";
import Img5 from "../../assets/bgCover/5.jpg";
import Img6 from "../../assets/bgCover/6.jpg";
import Img7 from "../../assets/bgCover/7.jpg";
import Img8 from "../../assets/bgCover/8.jpg";
import Img9 from "../../assets/bgCover/9.jpg";
import Img10 from "../../assets/bgCover/10.jpg";
import Img11 from "../../assets/bgCover/11.jpg";
import Img12 from "../../assets/bgCover/12.jpg";
import Img13 from "../../assets/bgCover/13.jpg";
import Img14 from "../../assets/bgCover/14.jpg";
import Img15 from "../../assets/bgCover/15.jpg";

import audio1 from "../../assets/audio/1.mp3";
import audio2 from "../../assets/audio/2.mp3";
import audio3 from "../../assets/audio/3.mp3";
import audio4 from "../../assets/audio/4.mp3";
import audio5 from "../../assets/audio/5.mp3";
import audio6 from "../../assets/audio/6.mp3";
import audio7 from "../../assets/audio/7.mp3";
import audio8  from "../../assets/audio/8.mp3";
import audio9  from "../../assets/audio/9.mp3";
import audio10 from "../../assets/audio/10.mp3";
import audio11 from "../../assets/audio/11.mp3";
import audio12 from "../../assets/audio/12.mp3";
import audio13 from "../../assets/audio/13.mp3";
import audio14 from "../../assets/audio/14.mp3";
import audio15 from "../../assets/audio/15.mp3";

export const data = Mock.mock("/mock", {
  songData: [
    {
      id: 1,
      cover: Img1,
      name: "夜的第七章",
      singer: "周杰伦",
      audio: audio1,
    },
    {
      id: 2,
      cover: Img2,
      name: "Butter-Fly",
      singer: "和田光司",
      audio: audio2,
    },
    {
      id: 3,
      cover: Img3,
      name: "only my railgun",
      singer: "fripSide",
      audio: audio3,
    },
    {
      id: 4,
      cover: Img4,
      name: "歌に形はないけれど",
      singer: "花たん",
      audio: audio4,
    },
    {
      id: 5,
      cover: Img5,
      name: "다가올 시간들을 위해",
      singer: "Lu Sienna",
      audio: audio5,
    },
    {
      id: 6,
      cover: Img6,
      name: "Dream4U",
      singer: "정은",
      audio: audio6,
    },
    {
      id: 7,
      cover: Img7,
      name: "天马座的幻想",
      singer: "戴荃",
      audio: audio7,
    },
    {
      id: 8,
      cover: Img8,
      singer:"薛之谦",
      name:"不爱我",
      audio: audio8
    },
    {
      id: 9,
      cover: Img9,
      singer:"Jony J",
      name:"My Man",
      audio: audio9
    },
    {
      id: 10,
      cover: Img10,
      singer:"王雨桐",
      name:"尘埃",
      audio: audio10
    },
    {
      id: 11,
      cover: Img11,
      singer:"蜡笔小心",
      name:"MOM",
      audio: audio11
    },
    {
      id: 12,
      cover: Img12,
      singer:"杨和苏KenNG",
      name:"命不由天",
      audio: audio12
    },
    {
      id: 13,
      cover: Img13,
      singer:"Ailee",
      name:"보여줄게",
      audio: audio13
    },
    {
      id: 14,
      cover: Img14,
      singer:"BLACKPINK",
      name:"Sour Candy",
      audio: audio14
    },
    {
      id: 15,
      cover: Img15,
      singer:"BLACKPINK",
      name:"Kill This Love",
      audio: audio15
    }
  ],
});
