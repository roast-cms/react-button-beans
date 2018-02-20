// tools
import React from "react"
import { render } from "react-dom"
import { ThemeProvider } from "styled-components"

// theme
import { Paper } from "../src/utils"
// button components
import { Button } from "../src/index"

const Main = props => {
  return <Button>hello</Button>
}

render(
  <div>
    <ThemeProvider theme={Paper}>
      <Main />
    </ThemeProvider>
  </div>,
  window.document.getElementById("app")
)
