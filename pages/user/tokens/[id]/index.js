import Head from 'next/head';
import { useState } from 'react';
import { DetailPageContainer, DetailContainer } from './index.module.css';
import DetailOptions from '../../../../components/DetailOptions'
import DetailToken from '../../../../components/DetailToken'

export default function Detail() {
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

    return (
        <div className={DetailPageContainer}>
            <Head>
            <title>NFT Neo FuTbol</title>
            <meta name="description" content="NFT Neo FuTbol" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={DetailContainer} style={{ height: '100vh' }}>
            <DetailToken dataToken={mockPlayer} />
            <DetailOptions />
            </div>
        </div>
    );
}
