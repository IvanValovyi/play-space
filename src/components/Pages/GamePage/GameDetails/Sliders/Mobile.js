import { useEffect, useState } from "react"
import sprite from '../../../../../assets/sprite.svg'

function MobileSlider({game}){
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    const [left, setLeft] = useState(0)

    function touchStartFunc(e){
        setTouchStart(e.targetTouches[0].clientX)
    }

    function touchEndFunc(e){
        setTouchEnd(e.changedTouches[0].clientX)
    }

    function nextSlide(){
        left <= 0 && left != -200 ? setLeft(left - 100) : setLeft(0)
    }

    function pastSlide(){
        left >= -200 && left != 0 ? setLeft(left + 100) : setLeft(-200)
    }

    useEffect(()=>{
        const difference = touchEnd - touchStart

        if (difference < -10) {
            nextSlide()
        } else if(difference > 10){
            pastSlide()
        }
    }, [touchEnd])

    const [hintClass, setHintClass] = useState('')

    return(
        <div className="slider mobile" onTouchStart={(e)=>{touchStartFunc(e)}} onTouchEnd={(e)=>{touchEndFunc(e)}} style={{left: `${left}%`}}>
            <div className='item' style={{backgroundImage: `url(${require(`../../../../../assets/images/games_preview/${game.preview_img}`)})`}}></div>
            <div className='item' style={{backgroundImage: `url(${require(`../../../../../assets/images/games_preview/${game.preview_img}`)})`}}></div>
            <div className='item' style={{backgroundImage: `url(${require(`../../../../../assets/images/games_preview/${game.preview_img}`)})`}}></div>
            
            <div className={"hint "+hintClass} onTouchEnd={()=>{setHintClass('hide')}}>
                <span>Scroll through the slide</span>
                <svg>
                    <use href={sprite+'#thin'}></use>
                </svg>
            </div>
        </div>
    )
}

export default MobileSlider