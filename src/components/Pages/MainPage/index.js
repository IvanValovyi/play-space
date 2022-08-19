import GameList from '../../GameList'
import Switcher from './Switcher'

function MainPage({games}){
    return(
        <>
            <h2>Games ({games.length})</h2>
            <GameList games={games} className=''/>
            <Switcher/>
        </>
    )
}

export default MainPage