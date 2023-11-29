import React, { useEffect, useMemo, useState } from 'react'

function Memo() {
  let [num, setNum] = useState(0)
  let [isDark, setIsDark] = useState(false)
  const double = (x) => {
    for(let i = 0; i < 1000000000; i++) {

    }
    return x * 2
  }
  let doubledNum = useMemo(() => double(num), [num])
  let theme = useMemo(() => {return {
    'backgroundColor': isDark? 'black': 'white',
    'color': isDark? 'white': 'black'
  }}, [isDark])
  useEffect(() => {
    console.log('theme changed')
  }, [theme])
  return (
    <div style={theme}>
        <input type='number' onChange={(e) => setNum(parseInt(e.target.value))}></input>
        <p>{num}</p>
        <p>{doubledNum}</p>
        <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
    </div>
  )
}

export default Memo