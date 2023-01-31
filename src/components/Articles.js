import Image from "next/image"
import Link from "next/link"

const Articles = ({articles}) => {

    return (
        <div>
            {
                articles.items.map((article) => (
                    <div key={article.sys.id}>
                        <Link href={''}>
                            <h3>{article.fields.title}</h3>
                            <Image 
                                src={'https:' + article.fields.image.fields.file.url}
                                width={256}
                                height={256}
                                alt={`${article.fields.title} image`}
                            />
                        </Link>
                        
                        <h4>{article.fields.subheading}</h4>
                        <p>{article.fields.text}</p>
                    </div>
                ))
            }
        </div>
    )

}

export default Articles