import { useState, JSX, useEffect } from 'react'
import { useContainer } from './containerBox'
import './buttons.css'

function SpawnerBox() {
  const [spawners, setSpawners] = useState<JSX.Element[]>([])
  const [cols, setCols] = useState(0)
  const { container } = useContainer()

  useEffect(() => {
    // 창 크기에 따라 세로 칸 개수 지정
    const resizeHandler = () => {
      const curWidth = window.innerWidth

      if (curWidth >= 1536) setCols(6) // 2xl
      else if (curWidth >= 1280) setCols(5) // xl
      else if (curWidth >= 1024) setCols(4) // lg
      else if (curWidth >= 768) setCols(3) // md
      else setCols(2) // sm
    }

    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  // 필요한 칸 수가 바뀌면 spawner의 수를 초기화하고 그에 따라 새로운 spawner를 칸 수에 맞춰 생성
  useEffect(() => {
    setSpawners(() => {
      return separateSpawners(cols, container)
    })
  }, [cols])

  useEffect(() => {
    setSpawners(() => {
      return separateSpawners(cols, container)
    })
    return () => {}
  }, [container])

  // 스포너 출력
  return <div className="spawner-box">{spawners}</div>
}

function Spawner({ items, width }: { items: JSX.Element[] | undefined; width: number }) {
  return (
    <div className="spawner" style={{ width: `${width}%` }}>
      {items}
    </div>
  )
}

// 특정 조건에 걸치는 애들만
function separateSpawners(length: number, arr: JSX.Element[]): JSX.Element[] {
  const datas = Array.from({ length: length }, (_, i) => {
    const items = arr.flatMap((element, index) => {
      return index % length === i ? [element] : []
    })
    const width = Math.round(100 / length)
    console.log(width)
    return <Spawner key={i} items={items} width={width} />
  })

  return datas
}

export default SpawnerBox
