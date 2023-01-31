import Image from "next/image"

const Hero = ({hero}) => {

    console.log(hero)

    return (
        <div>
            <Image
                src={'https:' + hero.fields.image.fields.file.url}
                width={hero.fields.image.fields.file.details.image.width}
                height={hero.fields.image.fields.file.details.image.height}
                alt='hero image'
            />
            <h1>{hero.fields.title}</h1>
            <span>{hero.fields.subheading}</span>
            <button>{hero.fields.cta}</button>
        </div>
    )

}

export default Hero