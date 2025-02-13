import { useState, JSX, useEffect } from 'react'
import { useContainer } from './containerBox'
import './buttons.css'

function SpawnerBox() {
  const [spawners, setSpawners] = useState<JSX.Element[]>([])
  const [cols, setCols] = useState(1)
  const { container } = useContainer()
  const curWidth = window.innerWidth

  function getCol(Width: number): number {
    if (Width >= 1536) return 6 // 2xl
    else if (Width >= 1280) return 5 // xl
    else if (Width >= 1024) return 4 // lg
    else if (Width >= 768) return 3 // md
    else return 2 // sm
  }

  useEffect(() => {
    // 창 크기에 따라 세로 칸 개수 지정
    const resizeHandler = () => {
      setCols(getCol(curWidth))
    }
    setCols(getCol(window.innerWidth))
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
    if (cols !== getCol(window.innerWidth)) setCols(getCol(window.innerWidth))
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
