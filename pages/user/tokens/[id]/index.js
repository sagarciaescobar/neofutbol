import Head from 'next/head';
import { useEffect, useState } from 'react';
import { DetailPageContainer, DetailContainer } from './index.module.css';
import DetailOptions from '../../../../components/DetailOptions';
import DetailToken from '../../../../components/DetailToken';
import { useNeoFutbol } from '../../../../hooks/useNeoFutbol';
import { useRouter } from 'next/router';
import LoaderSpinner from '../../../../components/LoaderSpinner';

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
      { params: { id: '6' } },
      { params: { id: '7' } },
      { params: { id: '8' } },
      { params: { id: '9' } },
      { params: { id: '10' } },
      { params: { id: '11' } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export default function Detail() {
  const router = useRouter();
  const { query } = router;
  const [token, setToken] = useState({});
  const { contract, loading, setLoading } = useNeoFutbol();
  useEffect(() => {
    if (contract?.getNftById && query.id) {
      setLoading(true);
      contract.getNftById(query['id']).then(data => setToken(data));
      setLoading(false);
    }
  }, [contract?.getNftById, query]);

  if (loading) return <LoaderSpinner />;

  return (
    <div className={DetailPageContainer}>
      <Head>
        <title>NFT Neo FuTbol</title>
        <meta name="description" content="NFT Neo FuTbol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={DetailContainer} style={{ height: '100vh' }}>
        <DetailToken dataToken={token} />
        <DetailOptions tokenAttributes={token['attributes']} />
      </div>
    </div>
  );
}
