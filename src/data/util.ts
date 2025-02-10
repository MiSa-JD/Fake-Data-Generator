// null로 도배된 배열 생성
// 원래 크기 지정된 빈 배열을 만들면 undefined로 채워져 map 메서드를 사용할 수 없지만,
// null로 채우면 사용 가능
export const makeArray = (length: number) => new Array(length).fill(null)

export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map(
    // 배열의 map은 index번(0~length-1) 요소를
    // {처리 방법}으로 계산하여 index번 배열에 넣는 함수
    // _는 그저 원래 배열의 값을 쓰지 않겠다는 명시적 의미
    (_, index) => index + min
  )

// min~max 범위에서 랜덤 값 생성
// Math.random = (): number => {0~1 값 실수값 생성}
// Math.floor = (value: number) => { value에서 소수점 버리기 }
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min
