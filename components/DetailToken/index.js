
import { DetailTokenContainer } from './index.module.css';
export default function DetailToken({dataToken}) {
    return (
        <div className={DetailTokenContainer}>
            <div>
                <h1>{dataToken.name}</h1>
            </div>
            <img src={dataToken.image} alt="" />
        </div>
    );
}