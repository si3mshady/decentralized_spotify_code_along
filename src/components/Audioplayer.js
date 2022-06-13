import React from 'react'
import './Audioplayer.css'


import {Slider} from "antd";
import { useIPFS } from "../hooks/useIPFS";

import { SoundOutlined, StepBackwardOutlined, StepForwardOutlined, PlayCircleFilled, PauseCircleFilled} from "@ant-design/icons";



export default function Audioplayer({nftAlbum}) {
    const {resolveLink} = useIPFS()
  return (
      <>
    <div className='buttons'>
        <img className='cover' src={resolveLink(JSON.parse(nftAlbum[0].metadata).image)} alt="currentCover" />

        <div>
            <div className='songTitle'>{JSON.parse(nftAlbum[0].metadata).name}</div>
            <div className='songAlbum'>{nftAlbum[0].name}</div>
        </div>

        <div className='buttons'>

            <StepBackwardOutlined className='forback' onClick={() => console.log('step backward')} />
            <PlayCircleFilled className='pauseplay' onClick={() => console.log('play')} />
            <StepForwardOutlined className='forback' onClick={() => console.log('step forward')}/>
        </div>

      
    </div>

      <div className='buttons'>
           0:00 <Slider  tooltipVisible={true} value={50}  className='progress'/> 0:00

           
        </div>

        <div className='soundDiv'>
            <SoundOutlined />
            <Slider  className='volume' defaultValue={100} tooltipVisible={true}/>
        </div>
        </>
  )
}
