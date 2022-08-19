import sprite from '../../assets/sprite.svg'

import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
            <Link to='/' className="logo">
                <svg>
                    <use href={sprite+'#joystick'}></use>
                </svg>
                <h1>Play Space</h1>
            </Link>

            <button>Admin Panel</button>
        </header>
    )
}

export default Header