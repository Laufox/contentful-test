import Image from "next/image"
import Link from "next/link"

const Articles = ({articles}) => {

    return (
        <div className="flex flex-wrap gap-5">
            {
                articles.items.map((article) => (
                    <div 
                        key={article.sys.id} 
                        className="
                            basis-96
                            border
                          border-gray-400
                            rounded
                            p-4
                        "
                    >
                        <Link 
                            href={'/articles/'+article.sys.id}
                            className="hover:opacity-80"
                        >
                            <h3
                                className="
                                    text-xl
                                    underline
                                    mb-3
                                "
                            >
                                {article.fields.title}
                            </h3>
                            <Image 
                                src={'https:' + article.fields.image.fields.file.url}
                                width={256}
                                height={256}
                                alt={`${article.fields.title} image`}
                                className="w-full h-72"
                            />
                        </Link>
                        
                        <h4
                            className="
                                font-bold
                                mt-1.5
                                mb-3
                            "
                        >
                            {article.fields.subheading}
                        </h4>
                        <p>{article.fields.text}</p>
                    </div>
                ))
            }
        </div>
    )

}

export default Articles