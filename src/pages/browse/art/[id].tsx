import Head from 'next/head';
import ArtDetail from 'components/ArtDetail/ArtDetail';
import { useRouter } from 'next/router';

export default function ArtpiecePage() {
    const router = useRouter()
    const { id } = router.query

    return <>
        <Head>
            <title>artitude · something</title>
        </Head>

        <ArtDetail id={id} />
    </>
}