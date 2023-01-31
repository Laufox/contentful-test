import { createClient } from 'contentful'

const getClient = () => {

  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

}

export const getContentFulNavbar = async () => {

  const client = getClient()

  const navbar = await client.getEntries({
      include: 3,
      content_type: 'navbar'
  })

  return navbar.items[0]

}

export const getContentFulHero = async () => {

  const client = getClient()

  const hero = await client.getEntries({
      content_type: 'hero'
  })

  return hero.items[0]

}

export const getContentFulArticles = async () => {

  const client = getClient()

  const articles = await client.getEntries({
      content_type: 'article'
  })

  return articles

}