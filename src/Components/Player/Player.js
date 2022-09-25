import React from "react"
import '../Player/Player.css'
import imgdisk from "../assets/images/imgdisk.jpg"
import lattente from "../assets/audio/lattente.mp3"

function Player(props) {
    return (
        <div className="Player">
            <div className="Player_controls">
                <div className="player__btn player__btn--small" player__btn >
                    <i className="fas fa-arrow-left"></i>
                </div>
                <h5 className="player__title">playing now</h5>
                <div className="player__btn player__btn--small" player__btn >
                    <i className="fas fa-bars"></i>
                </div>
            </div>

            <div className="player__album">
                <img 
                    src={imgdisk}
                    alt="Album cover"
                    className="player__img"
                />
            </div>

            <h2 className="player__artist">Ezéchiel Pailhès</h2>
            <h3 className="player__song">L'attente</h3>

            <input type="range" value="20" min="0" class="player__level"></input>

            <div className="audio__duration">
                <div className="start"></div>
                <div className="end"></div>
            </div>

            <audio className="player__audio" controls id="audio">
                 <source src={lattente} type="audio/mp3"></source>
                 </audio>

                 <div className="Player_controls">
                <div className="player__btn player__btn--medium" player__btn >
                    <i className="fas fa-backward"></i>
                </div>

                <div className="player__btn player__btn--medium " id="player__btn ">
                      <i className="fas fa-play play-btn"></i>
                      <i className="fas fa-pause pause-btn hide"></i>
                </div>
                


                <div className="player__btn player__btn--small"  >
                    <i className="fas fa-backward"></i>
                    
                </div>
                </div>

        </div>
    )
}

export default Player