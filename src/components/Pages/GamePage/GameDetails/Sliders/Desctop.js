import { useState, useEffect } from "react"

import sprite from '../../../../../assets/sprite.svg'

function DesctopSlider({game}){
    const [left, setLeft] = useState(0)
    const [btn_class, setBtnClass] = useState('next')

    function changeLeft(){
        if (left==0) {
            setLeft(-30) 
            setBtnClass('next left')
        } else {
            setLeft(0)
            setBtnClass('next')
        }
    }

    useEffect(()=>{
        setLeft(0)
        setBtnClass('next')
    }, [game])

    return(
        <>
        <button className={btn_class} onClick={()=>{changeLeft()}}>
            <svg>
                <use href={sprite+'#thin'}></use>
            </svg>
        </button>
        
        <div className="slider desctop" style={{left: `${left}%`}}>
            <div className='item' style={{backgroundImage: `url(${require(`../../../../../assets/images/games_preview/${game.preview_img}`)})`}}></div>
            <div className='item' style={{backgroundImage: `url(${require(`../../../../../assets/images/games_preview/${game.preview_img}`)})`}}></div>
            <div className='item' style={{backgroundImage: `url(${require(`../../../../../assets/images/games_preview/${game.preview_img}`)})`}}></div>
        </div>
        </>
    )
}

export default DesctopSlider