import './card.css'
import renderTag from '../../scripts/createTags'

const defaultImage: string =
  'https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg'

interface CardProps {
  img?: string
  tag: Array<string>
  heading: string
  content: string
  className?: string
  onRemove: (id: number) => void
  id: number
}

function Card({
  img = defaultImage,
  tag,
  heading,
  content,
  className = '',
  onRemove,
  id
}: CardProps) {
  //const color: string = setLabelColor({ label: label })

  // console.log(color)

  return (
    <div className={`cell ${className}`}>
      <div className="card-thumbnail">
        <img src={img} className="card-thumbnail-pic" />
      </div>
      <div className="card-tag-case">
        {renderTag({ contents: tag, className: 'card-tag' })}
      </div>
      <div className="card-contents">
        <h1>{heading}</h1>
        <p>{content}</p>
      </div>
      <div className="btn-case">
        <button className="btn readmore">Read More</button>
        <button className="btn next" onClick={() => onRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default Card
