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
    <Button inverse key="InverseButton">
      Inverse Button
    </Button>,
    <Button branded key="BrandedButton">
      Branded Button
    </Button>,
    <Button branded loading loaderComponent={Loader} key="BrandedLoadingButton">
      Branded Loading Button
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
      key="TinyBrandedButton"
      linkComponent="a"
      href="https://www.analog.cafe"
    >
      Tiny Link Btn
    </TinyButton>,
    <ButtonStrip
      key="ButtonStrip"
      style={{
        width: "18em",
        margin: "0 auto"
      }}
    >
      <div>
        <Item left branded linkComponent="a">
          Left
        </Item>
        <Item inverse linkComponent="a">
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
