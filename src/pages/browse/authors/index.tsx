import AuthorsBrowse from 'components/Authors/AuthorsBrowse';
import Head from 'next/head';

export default function AuthorsPage() {
    return <>
        <Head>
            <title>artitude · browse</title>
        </Head>

        <AuthorsBrowse />
    </>
}