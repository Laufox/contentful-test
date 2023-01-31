import Head from 'next/head'

import {getContentFulNavbar, getContentFulHero, getContentFulArticles} from '../lib/api'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Articles from '@/components/Articles'
import Link from 'next/link'

export const getStaticProps = async () => {
  
  return {
    props: {
      elements: {
        navbar: await getContentFulNavbar(),
        hero: await getContentFulHero(),
        articles: await getContentFulArticles()
      }
    }
  }

}

export default function Home({elements}) {

  console.log(elements.articles)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navbar={elements.navbar}>
        <Hero hero={elements.hero} />
        <Link 
          href='/articles'
          className='
            text-lg
          text-sky-600
            hover:text-sky-400
            underline
            m-5
            inline-block
          '
        >
          Se all of our articles
        </Link>
      </Layout>
      
    </>
  )

}
