import React from "react"
import Message from "./components/Message"
import "./App.css"

const text = "Добрый вечер. Долго мучился с ошибкой TS7016, получилось избавиться от нее с помощью декларирования модуля. Но из-за этого возникла ошибка TS1208. На форуме вычитал, что это из-за VSCode :(. Ошибку пока не исправил."

function App() {
  return (
    <div className="app">
      <Message message={text} />
    </div>
  )
}

export default App
