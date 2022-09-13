import { useEffect, useState } from 'react';
import SpinnerLoader from '../LoaderSpinner';
import { DetailOptionsContainer, SwapContainer, Icon, attributesList } from './index.module.css';

export default function DetailOptions({ tokenAttributes }) {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    },5000)

    return (
        <div className={DetailOptionsContainer}>
            <div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h3>Attributes</h3>
                    <ul className={attributesList}>
                        {!loading ? tokenAttributes.filter(el => {
                            return el["trail-type"] != "COUNTRY" && el["trail-type"] != "TYPE"}).map((elem, idx) => {
                                return (
                                    <>
                                        {idx < 3 ?
                                            <li>
                                                <span>{elem["value"]}</span>
                                                {' - '}
                                                <span>{elem["trail-type"]}</span>
                                            </li>
                                        : null
                                        }
                                    </>
                                    )
                        }):
                        <SpinnerLoader />
                        }
                    </ul>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h3>Attributes</h3>
                    <ul className={attributesList}>
                        {!loading ? tokenAttributes.filter(el => {
                            return el["trail-type"] != "COUNTRY" && el["trail-type"] != "TYPE"}).map((elem, idx) => {
                                return (
                                    <>
                                        {idx >= 3 ?
                                            <li>
                                                <span>{elem["value"]}</span>
                                                {' - '}
                                                <span>{elem["trail-type"]}</span>
                                            </li>
                                        : null
                                        }
                                    </>
                                    )
                        }):
                        <SpinnerLoader />
                        }
                    </ul>
                </div>
            </div>
            <div className={SwapContainer} onClick={() => (window.location.href = '/#howto')}>
            <div>
                <h3>SWAP</h3>
                <span className="material-symbols-outlined" id={Icon}>
                swap_horizontal_circle
                </span>
            </div>
            </div>
        </div>
    );
}
