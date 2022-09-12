import { useEffect, useState } from "react"
import { card, card_img } from '../TokenCard/index.module.css';
import { detailOnHover, cardHover, listItem ,listContainer} from './index.module.css';

export default function DetailOnHover({tokenHovered}) {
    const [token, setToken] = useState(tokenHovered);

    useEffect(() => {
        setToken(tokenHovered);
    }, [tokenHovered]);

    console.log(token);
    return (
        <div className={card} style={{ position: 'absolute', alignSelf: 'center'  }}>
            {!token.type && (
            <>
                <div onClick={()=>{window.location.assign(`${window.location.origin}/user/tokens/${token.id}`)}} id={cardHover}>
                <img className={card_img} id={detailOnHover} src={token.image} alt={token.name} />
                </div>
                <div id={listContainer}>
                    <h1>{token.name}</h1>
                    <ul>
                        {token.attributes.map((attribute, idx) => {
                        return (
                            <li className={listItem} key={idx}>
                                <span>{attribute['value']}</span>
                                <span>{attribute['trail-type']}</span>
                            </li>
                        );
                        })}
                    </ul>
                </div>
            </>
            )}
            {token.type && <img className={card_img} src={token.url} alt="coming soon" />}
        </div>
    );
}