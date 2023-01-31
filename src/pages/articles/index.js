import {getContentFulArticles} from '../../lib/api'

export const getStaticProps = async () => {

    return {
        props: {
            articles: await getContentFulArticles()
        }
    }

}

const articles = ({articles}) => {

    console.log(articles)

    return (
        <div>articles page</div>
    )

}

export default articles