import './buttons.css'
import { randomSentence, randomTitleText } from '../data/chance'
import { random } from '../data/util'
import { randomImage } from '../data/image'
import Card from './card/card'
import { JSX, useState } from 'react'

function AddButton() {
  const [items0, setItems0] = useState<JSX.Element[]>([])
  const [items1, setItems1] = useState<JSX.Element[]>([])
  const [items2, setItems2] = useState<JSX.Element[]>([])

  const [count, setCount] = useState(0)

  const resetBlocks = () => {
    setItems0([])
    setItems1([])
    setItems2([])
    setCount(0)
  }

  const createBlock = () => {
    const block = (
      <>
        <Card
          img={randomImage()}
          tag={randomSentence(random(1, 5)).replace('.', '').split(' ')}
          heading={randomTitleText(random(4, 7))}
          content={randomSentence(random(15, 50))}
          className="w-"
          key={`block-${count}`}
        />
      </>
    )
    /*Card({
      img: randomImage(),
      tag: randomSentence(random(1, 5)).split(' '),
      heading: randomTitleText(random(4, 7)),
      content: randomSentence(random(20, 50)),
      className: 'w-fit'
    })
    */

    if (count % 3 == 2) setItems2([...items2, block])
    if (count % 3 == 1) setItems1([...items1, block])
    if (count % 3 == 0) setItems0([...items0, block])

    setCount(count + 1)
  }

  return (
    <>
      <div className="flex">
        <button className="outer-btn" onClick={createBlock}>
          +
        </button>
        <button
          className="grid px-10 outer-btn place-items-center w-fit"
          onClick={resetBlocks}>
          Reset
        </button>
      </div>

      <div className="flex md:w-[100%] md:flex-wrap lg:w-[70%] lg:flex-nowrap">
        <div className="spawner">{items0}</div>
        <div className="spawner">{items1}</div>
        <div className="spawner">{items2}</div>
      </div>
    </>
  )
}
export default AddButton
