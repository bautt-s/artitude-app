import Browse from '../../../components/Browse/Browse'
import { gql } from '@apollo/client';
import apolloClient from 'lib/apollo';
import { Artpiece } from 'components/Browse/card-layout';
import Head from 'next/head';

export type PropType = {
    data: {
        getAllArtpieces: Artpiece[]
    }
}

export default function BrowsePage(props: PropType) {
    return <>
        <Head>
            <title>artitude · browse</title>
        </Head>
        <Browse data={props.data} />
    </>
}

export async function getServerSideProps() {
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
}