// tools
import React from "react"
import { render } from "react-dom"
import { ThemeProvider } from "styled-components"

// theme
import { Sugar } from "@roast-cms/react-sugar-styled"

// button components
import { Button, TinyButton, ButtonStrip, LinkButton, Item } from "../src/index"
import Loader from "../src/Loader"

const Main = props => {
  return [
    <Button key="PlainButton">Plain Button</Button>,
    <Button black key="BlackButton">
      Black Button
    </Button>,
    <Button red key="RedButton">
      Red Button
    </Button>,
    <Button red loading loaderComponent={Loader} key="RedLoadingButton">
      Red Loading Button
    </Button>,
    <Button loading loaderComponent={Loader} key="PlainLoadingButton">
      Plain Loading Button
    </Button>,
    <LinkButton
      key="PlainLinkButton"
      linkComponent="a"
      href="https://www.analog.cafe"
    >
      Plain Link Button
    </LinkButton>,
    <TinyButton
      key="TinyRedButton"
      linkComponent="a"
      href="https://www.analog.cafe"
    >
      Tiny Link Btn
    </TinyButton>,
    <ButtonStrip key="ButtonStrip">
      <div>
        <Item left red linkComponent="a">
          Left
        </Item>
        <Item black linkComponent="a">
          Middle
        </Item>
        <Item script linkComponent="a" style={{ minWidth: "7em" }}>
          Middle (Script)
        </Item>
        <Item right linkComponent="a">
          Right
        </Item>
      </div>
    </ButtonStrip>
  ]
}

render(
  <div>
    <ThemeProvider theme={Sugar}>
      <Main />
    </ThemeProvider>
  </div>,
  window.document.getElementById("app")
)
