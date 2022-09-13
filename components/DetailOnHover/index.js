import { useEffect, useState } from "react"
import { card, card_img } from '../TokenCard/index.module.css';
import { detailOnHover, cardHover, listItem, listContainer, cardHovered } from './index.module.css';

export default function DetailOnHover({tokenHovered}) {
    const [token, setToken] = useState(tokenHovered);

    useEffect(() => {
        setToken(tokenHovered);
    }, [tokenHovered]);

    return (
        <div className={card} style={{ position: 'absolute', alignSelf: 'center', height: '50%'}}>
            {!token.type && (
            <div className={cardHovered}>
                <div onClick={()=>{window.location.assign(`${window.location.origin}/user/tokens/${token.id}`)}} id={cardHover}>
                <img className={card_img} id={detailOnHover} src={token.image} alt={token.name} />
                </div>
                <div id={listContainer}>
                    <h1 style={{color: 'white', marginBottom: '20px'}}>{token.name}</h1>
                    <h2>{token.image.split("/")[7][0].toUpperCase() + token.image.split("/")[7].substring(1)}</h2>
                    <h2>{token.image.split("/")[8][0].toUpperCase() + token.image.split("/")[8].substring(1)}</h2>
                    <ul>
                        {token.attributes.filter(el => {
                            return el["trail-type"] != "TYPE" && el["trail-type"] != "COUNTRY"}
                            ).map((attribute, idx) => {
                        return (
                            <li className={listItem} key={idx}>
                                <span>{attribute['value']}</span>
                                <span>{attribute['trail-type']}</span>
                            </li>
                        );
                        })}
                    </ul>
                </div>
            </div>
            )}
            {token.type && <img className={card_img} src={token.url} alt="coming soon" />}
        </div>
    );
}