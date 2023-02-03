import { createClient } from 'contentful'
import { createElement } from 'react'
import Card from "@/components/Card"
import Test from "@/components/Test"

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

export const getContentFulArticle = async (id) => {

  const client = getClient()

  const article = await client.getEntry(id)

  return article

}

const components = {
  test: Test,
  card: Card
}

export const getComponent = (item) => {

  console.log('hellooooooo', item)

    return createElement(components[item.sys.contentType.sys.id], {
        card: item,
        key: item.sys.id
    })

}