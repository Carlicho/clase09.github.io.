import React, { Component } from "react";
import video from '../assets/video/marchaimperial.mp4'

export default class Video extends Component {
    render(){
        return(
            <video className='Video' controls>
                <source src={video} type='video/mp4'/>
                

            </video>



        )
    }
    

}