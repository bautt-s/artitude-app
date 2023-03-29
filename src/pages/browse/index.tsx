import Browse from '../../../components/Browse/Browse'
import Head from 'next/head';
import { Suspense } from 'react';

export default function BrowsePage() {
    return <>
        <Head>
            <title>artitude · browse</title>
        </Head>
        <Suspense fallback={<div>Page is loading</div>}>
            <Browse />
        </Suspense>
        
    </>
}

/*export async function getServerSideProps() {
    // querying database via SSR
    const { data } = await apolloClient.query({
        query: gql`
        query {
            getAllArtpieces {
                name
                type
                dimensions
                year
                image
                author {
                    name
                }
            }
        }`
    })

    return {
        props: { data }
    };
}*/