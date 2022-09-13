import { DetailTokenContainer } from './index.module.css';
import { detailCard, DetailTokenSignature, DetailCardRight, DetailCardLeft } from './index.module.css';

export default function DetailToken({dataToken}) {
    return (
        <div className={DetailTokenContainer}>
            <div className={DetailCardLeft}>
                <h1>{dataToken.name}</h1>
                <p>{dataToken.description}</p>
            </div>
            <div className={DetailCardRight}>
            <div className={DetailTokenSignature}>se</div>
            <img className={detailCard} src={dataToken.image} alt="" />
            </div>
        </div>
    );
}