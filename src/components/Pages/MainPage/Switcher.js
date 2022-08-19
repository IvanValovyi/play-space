import sprite from '../../../assets/sprite.svg'

function Switcher(){
    return(
        <div className="switcher">
            <svg style={{transform: 'rotateY(180deg)'}}>
                <use href={sprite+'#thin'}></use>
            </svg>

            <span className='active'>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span className='dots'></span>
            <span>20</span>

            <svg>
                <use href={sprite+'#thin'}></use>
            </svg>
        </div>
    )
}

export default Switcher