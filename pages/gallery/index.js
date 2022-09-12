import Head from 'next/head';
import TokenCard from '../../components/TokenCard';
import { Container } from 'react-bootstrap';
import { useNeoFutbol } from '../../hooks/useNeoFutbol';
import { tokens_container, title, gallery_container } from './index.module.css';

export default function Home() {
  const { contract, loading } = useNeoFutbol();

  if (loading) return <p>loading</p>;

  return (
    <div className={gallery_container}>
      <Container className="mb-5">
        <Head>
          <title>Neo FuTbol gallery</title>
          <meta name="description" content="NFT Neo FuTbol gallery" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className={title}>Los NFTs de nuestros usuarios</h1>
        <div className={tokens_container}>
          {contract.gallery.map(token => {
            return <TokenCard token={token} />;
          })}
        </div>
      </Container>
    </div>
  );
}
