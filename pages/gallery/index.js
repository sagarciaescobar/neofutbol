import Head from 'next/head';
import { useEffect, useState } from 'react';
import TokenCard from '../../components/TokenCard';
import LoaderSpinner from '../../components/LoaderSpinner';
import DetailOnHover from '../../components/DetailOnHover';
import { useNeoFutbol } from '../../hooks/useNeoFutbol';
import { gallery_container, tokens_container, row } from './index.module.css';

export default function Home() {
  const { contract, loading } = useNeoFutbol();
  const [isShown, setisShown] = useState(false);
  const [tokenHovered , setTokenHovered] = useState(undefined);

  const gridGallery = arr => {
    const total = Math.ceil(arr.length / 7);
    for (let i = 0; i < total * 7 - arr.length + 1; i++) {
      arr.push({ type: 'coming', url: "/static/coming-01.png" });
    }
    const templated = [];
    for (let i = 0; i < total; i++) {
      const nivel = arr.slice(i * 7, (i + 1) * 7);
      templated.push(nivel.slice(0, 4));
      templated.push(nivel.slice(4, 7));
    }
    return templated.filter(ar => !ar.every(obj => obj.type == 'coming'));
  };

  const handleshown = (token) => {
    setisShown(true);
    setTokenHovered(token);
  };

  const handleHide = () => {
    setisShown(false);
  }

  if (loading) return <LoaderSpinner />;

  return (
    <>
      <Head>
        <title>Neo FuTbol gallery</title>
        <meta name="description" content="NFT Neo FuTbol gallery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={gallery_container}>
        {isShown ? <DetailOnHover tokenHovered={tokenHovered} /> : <div></div>}
        <div className={tokens_container}>
          {gridGallery(contract.gallery).map((arr, i) => (
            <div key={`grid-gallery-${i}`} className={row}>
              {arr.map(token => (
                <TokenCard key={token.id} token={token} handleshown={handleshown} handleHide={handleHide} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
