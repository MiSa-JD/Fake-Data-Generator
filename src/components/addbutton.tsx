import './buttons.css'
import { randomSentence, randomTitleText } from '../data/chance'
import { random } from '../data/util'
import { randomImage } from '../data/image'
import Card from './card/card'
import { useState } from 'react'
import { useContainer } from './containerBox'

function AddButton() {
  const [count, setCount] = useState<number>(0)
  const { setContainer } = useContainer()

  const onRemove = (key: number) => {
    setContainer(items => {
      const result = items.flatMap((element, _) => {
        return element.props.id !== key ? [element] : []
      })
      return result
    })
  }

  const createBlock = () => {
    const num = count
    const block = (
      <Card
        img={randomImage()}
        tag={randomSentence(random(1, 5)).replace('.', '').split(' ')}
        heading={`${num}. ${randomTitleText(random(4, 7))}`}
        content={randomSentence(random(15, 50))}
        className=""
        key={Number(num)}
        id={Number(num)}
        onRemove={() => onRemove(num)}
      />
    )

    setContainer(items => [...items, block])
    setCount(i => i + 1)
  }

  return (
    <button className="outer-btn" onClick={createBlock}>
      +
    </button>
  )
}
export default AddButton
