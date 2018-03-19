//
// tools
import React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"

//
// theme and fonts
import { ThemeProvider } from "styled-components"
import { Sugar } from "@roast-cms/react-sugar-styled"
import "typeface-yanone-kaffeesatz"
import "typeface-lobster-two"
//
// button components
import Link from "@roast-cms/react-link-filter"
import { Button, TinyButton, ButtonStrip, LinkButton, Item, Loader } from "../src/index"
//
// rendered component
const LinkComponent = props => <Link domain="google.com" {...props}>{props.children}</Link>
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
    <LinkButton
      key="SpecialLinkButton"
      linkComponent={LinkComponent}
      to="https://www.analog.cafe"
    >
      Special Link Button
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
        width: "16em",
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
        <Item right script linkComponent="a" style={{ minWidth: "4em" }}>
          Script
        </Item>
      </div>
    </ButtonStrip>
  ]
}
//
//
render(
  <div>
    <BrowserRouter>
    <ThemeProvider theme={Sugar({
      //
      // you can "theme" your button components with react-sugar-styled
      // theming dictionary API
      //
      color_brand: "rgb(189,67,54)",
      //
      font_heading: "'Yanone Kaffeesatz', sans-serif",
      font_heading_weight: 400,
      //
      font_body: "'Lobster Two', serif",
      //
      size_base: 20,
      size_column_medium: 700,
      size_column_large: 900,
      size_block_spacing: .75,
      //
      effects_border_radius: .75,
      //
      // for detailed docs on how to customize buttons' theme please refer to
      // the guide on https://github.com/roast-cms/react-sugar-styled
      // - it is a themeing dictionary used with Styled Components
      //
    })}>
      <Main />
    </ThemeProvider>
  </BrowserRouter>
  </div>,
  window.document.getElementById("app")
)
