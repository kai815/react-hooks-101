import React, { useState } from 'react'

const App = () => {
  //useState() stateとstateを操作する関数が戻ってくる
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const increment2 = () => setCount(previousCount => previousCount + 2 )
  const decrement2 = () => setCount(previousCount => previousCount - 2 )
  const resete = () => setCount(0)
  const double = () => setCount(count * 2)
  const devide3 = () => setCount(previousCount => 
    previousCount % 3 === 0 ? previousCount / 3 : previousCount
  )
  // const san1 = (count) => {
    
  // }
  return (
    //通常1つの要素しか返せないがReact.Fragmentを使うことで複数要素可能になる
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={ increment }>+1</button>
        <button onClick={ decrement }>-1</button>
      </div>
      <div>
        <button onClick={ increment2 }>+2</button>
        <button onClick={ decrement2 }>-2</button>
      </div>
      <div>
        <button onClick={ resete }>resete</button>
        <button onClick={ double }>×2</button>
      </div>
      <div>
        <button onClick={ devide3 }>3の倍数の時だけ3で割る</button>
      </div>
    </>
  )
}
export default App;
