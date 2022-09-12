import { useEffect, useState } from "react"
import { card, card_img } from '../TokenCard/index.module.css';
import { detailOnHover, cardHover, listItem ,listContainer} from './index.module.css';

export default function DetailOnHover({tokenHovered}) {
    const [token, setToken] = useState(tokenHovered);

    const mockPlayer = {
    name: 'ACUÑA',
    image: 'https://playersnft-b264c.web.app/players/argentina/default/001.jpg',
    attributes: [
        {
        'trail-type': 'PAC',
        value: '76',
        },
        {
        'trail-type': 'SHO',
        value: '74',
        },
        {
        'trail-type': 'PAS',
        value: '82',
        },
        {
        'trail-type': 'DRI',
        value: '87',
        },
        {
        'trail-type': 'DEF',
        value: '79',
        },
        {
        'trail-type': 'PHY',
        value: '82',
        },
    ],
    };

    useEffect(() => {
        setToken(tokenHovered);
    }, [tokenHovered]);

    return (
        <div className={card} style={{ position: 'absolute', alignSelf: 'center'  }}>
            {!token.type && (
            <>
                <div id={cardHover}>
                <img className={card_img} id={detailOnHover} src={token.image} alt={token.name} />
                </div>
                <div id={listContainer}>
                    <h1>{mockPlayer.name}</h1>
                    <ul>
                        {mockPlayer.attributes.map((attribute, idx) => {
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