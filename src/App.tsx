import React from "react"
import "./App.css"
import ChatsPage from "./pages/ChatsPage"
import { ThemeProvider } from "@mui/material/styles"
import appTheme from "./components/constants/appTheme"

const text = "Добрый вечер. Долго мучился с ошибкой TS7016, получилось избавиться от нее с помощью декларирования модулей в файле allowJavaScriptModules.ts"

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={appTheme}>
        <ChatsPage></ChatsPage>
      </ThemeProvider>
    </div>
  )
}

export default App
