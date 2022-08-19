import DesctopSlider from "./Sliders/Desctop"
import MobileSlider from "./Sliders/Mobile"

function GameDetails({game}){
    return(
        <div className='details'>
                <div className='screenshots'>
                    <h3>Game screenshots</h3>
                    <div className='list'>
                        <DesctopSlider game={game}/>
                        <MobileSlider game={game}/>
                    </div>
                </div>

                <div className='text'>
                    <h3>Game details</h3>
                    <p>{game.details}</p>
                    <button className='buy'>Buy {game.price}</button>
                </div>
            </div>
)
}

export default GameDetails