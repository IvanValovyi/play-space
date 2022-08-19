import { useParams } from "react-router-dom"
import { get_one, get_other } from "../../../data"

import GameList from "../../GameList"
import GameDetails from "./GameDetails"

import sprite from '../../../assets/sprite.svg'

function GamePage(){
    const url = useParams().game_url

    const game = get_one(url)

    return(
        <div className="detail-game-info">

            <div className='main-info'>
                <div className='content'>
                    <h2>{game.name}</h2>
                    <div className='flex'>
                        <button className='buy'>Buy {game.price}</button>
                        <div className="rating">
                            <span>{game.rating}</span>
                            <svg>
                                <use href={sprite+'#star'}></use>
                            </svg>
                        </div>
                    </div>
                    <p className='description'>{game.description}</p>
                </div>

                <img src={require(`../../../assets/images/games_icon/${game.icon_img}`)} alt={game.name}/>
            </div>

            <div className='preview'>
                <div className='image' style={{backgroundImage: `url(${require(`../../../assets/images/games_preview/${game.icon_img}`)})`}}></div>
                
                <div className='controls'>
                    <h3>Game controls</h3>

                    <div className='controls-list'>
                        <div className='item'>
                            <svg>
                                <use href={sprite+'#control'}></use>
                            </svg>
                            <span>Move</span>
                        </div>

                        <div className='item'>
                            <svg>
                                <use href={sprite+'#mouse'}></use>
                            </svg>
                            <span>Look around</span>
                        </div>

                        <div className='item'>
                            <svg>
                                <use href={sprite+'#mouse_click'}></use>
                            </svg>
                            
                            <span>Soot</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                <GameDetails game={game}/>

                <div className='related'>
                    <h3>Related games</h3>
                    <GameList games={get_other(game.url)} className=' relevant-offers'/>
                </div>
            </div>
            
        </div>
    )
}

export default GamePage