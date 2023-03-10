import Image from "next/image"

const Hero = ({item}) => {

    const hero = item

    console.log("hero: ", hero)

    return (
        <div className="relative" data-sb-object-id={hero.sys.id}>
            <Image
                src={'https:' + hero.fields.image.fields.file.url}
                width={hero.fields.image.fields.file.details.image.width}
                height={hero.fields.image.fields.file.details.image.height}
                alt='hero image'
                className="w-full"
            />
            <div 
                className="
                    flex 
                    flex-col 
                    justify-center 
                    items-center 
                    absolute 
                    top-0 
                    left-0 
                    w-full 
                    h-full
                    bg-white/60
                "
            >
                <h1 
                    data-sb-field-path="title"
                    className="
                        text-xl
                        sm:text-3xl
                        md:text-5xl
                        lg:text-7xl
                        font-bold
                    "
                >
                    {hero.fields.title}
                </h1>
                <p 
                    data-sb-field-path="subheading"
                    className="
                        text-lg
                        sm:text-xl
                        md:text-2xl
                        lg:text-3xl
                        italic
                    "
                >
                    {hero.fields.subheading}
                </p>
                <button
                    data-sb-field-path="cta"
                    className="
                        py-1
                        md:py-1.5
                        px-3
                        mt-2
                        md:mt-5
                        text-md
                        md:text-lg
                        font-bold
                        bg-cyan-400
                        hover:bg-cyan-200
                        rounded
                        border-black
                        border
                    "
                >
                    {hero.fields.cta}
                </button>
            </div>
            
        </div>
    )

}

export default Hero