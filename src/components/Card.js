const Card = ({item}) => {

    const card = item

    console.log('card: ', card)
    console.log('keys: ', Object.keys(card.fields))

    return (
        <div data-sb-object-id={card.sys.id}>
            <h2 data-sb-field-path="title">{card.fields.title}</h2>
            <h3 data-sb-field-path="subheading">{card.fields.subheading}</h3>
            <img data-sb-field-path="image" src={card.fields.image.fields.file.url} />
            <a data-sb-field-path="url" href={card.fields.url}>{card.fields.url}</a>
        </div>
    )

}

export default Card