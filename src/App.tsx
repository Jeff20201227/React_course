import React from "react"
import Message from "./components/Message"
import "./App.css"

const text = "Добрый вечер. Долго мучился с ошибкой TS7016, получилось избавиться от нее с помощью декларирования модулей в файле allowJavaScriptModules.ts"

function App() {
  return (
    <div className="app">
      <Message message={text} />
    </div>
  )
}

export default App
