import { Link } from "react-router-dom"

import Item from "./Item"

function GameList({games, className}){
    return(
        <div className={'game_list'+className}>
            {games.map(el=>{
                return(
                    <Link to={`/${el.url}`} key={el.url} className='link-to-game'>
                        <Item data={el}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default GameList