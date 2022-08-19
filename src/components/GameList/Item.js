import sprite from '../../assets/sprite.svg'

function Item({data}){
    return(
        <div className="item">
            <div className="preview-image" style={{backgroundImage: `url(${require(`../../assets/images/games_preview/${data.preview_img}`)})`}}></div>

            <div className="info">
                <div className="content">
                    <img src={require(`../../assets/images/games_icon/${data.icon_img}`)} alt={data.name}/>

                    <div className="text">
                        <h4>{data.name}</h4>
                        <h5>Sub Title</h5>

                        <div className="rating">
                            <span>{data.rating}</span>
                            <svg>
                                <use href={sprite+'#star'}></use>
                            </svg>
                        </div>

                    </div>
                </div>

                <button className="buy">Buy {data.price}</button>
            </div>
        </div>
    )
}

export default Item