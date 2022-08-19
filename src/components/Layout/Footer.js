import sprite from '../../assets/sprite.svg'

function Footer(){
    return(
        <footer>
            <div className="logo">
                <svg>
                    <use href={sprite+'#joystick'}></use>
                </svg>
                <span>Play Space</span>
            </div>
        </footer>
    )
}

export default Footer