import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
const Counter = () => {
  const [count, setCount] = useState(0)

  const handleAlertClick = () => {
    setTimeout(() => {
      alert(`Yout clicked me: ${count}`)
    }, 3000)
  }

  useEffect(() => {
      console.log(`Yout clicked ${count} times`);
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
