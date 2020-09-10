import * as React from 'react';
import './index.less';
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  PauseCircleOutlined,
  PlayCircleOutlined
} from '@ant-design/icons';
import '../mock';
import Axios from 'axios';
import AudioSpectrum from 'react-audio-spectrum';

export interface IAppProps {
  name: String
}

export default class App extends React.Component<IAppProps> {

  state = {
    songData: [], // 页面数据,播放列表
    isPlaying: false, // 播放状态, 播放/暂停
    currentIndex: 0, // 当前播放歌曲的索引, 默认为0的歌曲
    duration: 0, // 歌曲总时长
    currentTime: 0 // 当前播放时间
  }

  componentDidMount() {
    Axios.get('/mock').then(res => {
      if (res.data) {
        this.setState({ songData: res.data.songData })
      } else {
        return '没有音乐'
      }
    }).catch(err => {
      console.log(err)
    })
  }

  // 把当前歌曲的索引存到currentIndex
  handleClick = (index:number) => {
    this.setState({ currentIndex: index }, () => {
      this.togglePlay()
      this.setState({ isPlaying: true })
    })
  }

  // 播放/暂停切换
  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying }, () => {
      const { isPlaying } = this.state
      const audioRef:any = this.refs.audioRef
      isPlaying ? audioRef.play() : audioRef.pause()
    })
  }

  // 上一首
  handlePrev = () => {
    const { songData, currentIndex } = this.state
    if (songData.length === 1) {
      this.loop()
      return
    } else {
      let index = currentIndex - 1
      if (index === -1) {
        index = songData.length - 1
      } 
      this.setState({ currentIndex: index }, () => {
        this.togglePlay()
        this.setState({ isPlaying: true })
      })
    }
  }

  // 下一首
  handleNext = () => {
    const { songData, currentIndex } = this.state
    if (songData.length === 1) {
      this.loop()
      return
    } else {
      let index = currentIndex + 1
      if (index === songData.length) {
        index = 0
      } 
      this.setState({ currentIndex: index }, () => {
        this.togglePlay()
        this.setState({ isPlaying: true })
      })
    }
  }

  // 循环
  loop = () => {
    const audioRef:any = this.refs.audioRef
    audioRef.currentTime = 0
    audioRef.play()
    this.setState({ isPlaying: true })
  }


  // 歌曲准备好就获取歌曲时长
  onCanplay = () => {
    const audioRef:any = this.refs.audioRef
    this.setState({ duration: audioRef.duration })
  }

  // 计算当前播放时间
  currentTime = (e:any) => {
    const currentTime = e.target.currentTime
    this.setState({ currentTime: currentTime })
    this.percent()
  }

  // 初始化歌曲时间格式
  formatTime = (time:any) => {
    time = Math.floor(time)
    const minute = this.fillIn0(Math.floor(time / 60))
    const second = this.fillIn0(Math.floor(time % 60))
    return `${minute}:${second}`
  }

  // 时间前面补0
  fillIn0 = (num:any, n = 2) => {
    let len = num.toString().length
    while (len < n) {
      num = '0' + num
      len++
    }
    return num
  }

  // 点击进度条
  handleProgress = (e:any) => {
    e.stopPropagation()
    const { duration } = this.state
    const audioRef:any = this.refs.audioRef
    const progressBar:any = this.refs.progressBar

    // 偏移量 = 点击的X坐标 - 进度条离页面左边的距离
    const newLeft = e.pageX - progressBar.offsetLeft
    console.log(newLeft)
    
    // 当前时间 / 总时长 === 当前偏移的长度 / 进度条总长度
    // 当前时间 = (当前偏移的长度 / 进度条总长度) * 总时长
    const currentTime = duration * newLeft / progressBar.clientWidth;
    audioRef.currentTime = currentTime

    this._offsetWidth(newLeft)
    this.togglePlay()
    this.setState({ currentTime: currentTime, isPlaying: true })

  }

  // 正常播放进度条
  percent () {
    const { currentTime, duration } = this.state
    const progressBar:any = this.refs.progressBar
    const progressBarBtn:any = this.refs.progressBarBtn
    const percent = currentTime / duration
    const barWidth = progressBar.offsetWidth - progressBarBtn.offsetWidth
    const offsetWidth = percent * barWidth
    this._offsetWidth(offsetWidth)
  }

  // 进度偏移量
  _offsetWidth = (offsetWidth:any) => {
    const progress:any = this.refs.progress
    const progressBarBtn:any = this.refs.progressBarBtn
    progress.style.width = `${offsetWidth}px`
    progressBarBtn.style.transform = `translateX(${offsetWidth}px)`
  }

  public render() {
    const { songData, currentIndex, isPlaying, duration, currentTime  } = this.state
    // 当前播放歌曲
    const currenSong:any = songData.find((item:any,index:number) => index === currentIndex) || {}
    return (
      <div className="player">
        <audio id="audioId" src={currenSong.audio} ref="audioRef" onCanPlay={ this.onCanplay }
              onTimeUpdate={this.currentTime} onEnded={ this.handleNext }
        ></audio>
        <div className="player-wrapper">
          <div className="operation-wrapper">
            <div className="operation">
              <div className={ `${ isPlaying ? 'bgCover play' : 'bgCover play pause' }` }>
                <img src={ currenSong.cover } alt=""/>
              </div>
              <div className="prev" onClick={ () => this.handlePrev() }>
                <StepBackwardOutlined />
              </div>
              <div className="play" onClick={ () => this.togglePlay() }>
                { isPlaying ? <PauseCircleOutlined /> : <PlayCircleOutlined /> }
              </div>
              <div className="next" onClick={ () => this.handleNext() }>
                <StepForwardOutlined />
              </div>
              <div className="progressBar" ref="progressBar" onClick={ (e) => { this.handleProgress(e) } }>
                <div className="progress" ref="progress"></div>
                <div className="proBtn" ref="progressBarBtn"></div>
              </div>
              <div className="time">
                <span> {  this.formatTime(currentTime) } </span>/
                <span> {  this.formatTime(duration) } </span>
              </div>
            </div>
          </div>
          <div className="songlist-wrapper">
            <div className="songlist">
              {
                songData.map((item:any, index:number) => {
                  return (
                    <div className={`${ index === currentIndex ? 'active' : '' }`} key={index}
                        onDoubleClick={ () => { this.handleClick(index) } }
                    >
                      {index+1}. {item['name']}
                      <span className="singer"> - {item['singer']}</span>
                    </div>
                  )
                })
              }
            </div>
            <div className="spectrum">
              <AudioSpectrum id="audio-spectrum" height={315} width={530} audioId={'audioId'}
                capColor={'#00fff4'}
                capHeight={5}
                meterWidth={8}
                meterCount={48}
                meterColor={[
                  {stop: 0, color: '#f00'},
                  {stop: 0.5, color: '#0CD7FD'},
                  {stop: 1, color: '#8d95dc'}
                ]}
                gap={5}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
