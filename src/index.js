//
// tools
import React from "react"
//
// styles
import styled, { css } from "styled-components"
//
// NOTE: Button is much heavier than ButtonLink
// since it includes a loader SVG animation.
//
/**************************** MAIN BUTTON STYLES ******************************/
export const ButtonStyles = css`
  max-width: ${props => props.theme.size.breakpoint.stops.min}px;

  ${props => props.theme.size.font.auto} ${props =>
  props.theme.typography.title.auto} margin: 0 auto;
  text-decoration: none;
  text-align: center;
  display: block;

  background: ${props => props.theme.color.background()};
  background: ${props =>
    props.inverse ? props.theme.color.foreground() : null}
    ${props => (props.branded ? props.theme.color.brand() : null)};
  color: ${props => props.theme.color.foreground()} !important;
  color: ${props => (props.inverse ? props.theme.color.background() : null)}
    ${props =>
      props.branded ? props.theme.color.background() : null} !important;

  ${"" /* for non-coloured buttons the animation SVG should have a foreground-colored fill */} & svg > path {
    stroke: ${props =>
      !props.inverse && !props.branded ? props.theme.color.foreground() : null};
  }

  border-radius: ${props => props.theme.effects.borderRadius.small}em;
  padding: ${props => props.theme.size.block.spacing / 1.25}em 0;
  margin-top: ${props => props.theme.size.block.spacing}em;
  margin-bottom: ${props => props.theme.size.block.spacing}em;
  cursor: pointer;
  user-select: none;

  box-shadow: 0 1px 1px
      ${props => props.theme.color.foreground(props.theme.opacity.least * 2)},
    0 0 0 1px
      ${props => props.theme.color.foreground(props.theme.opacity.least)};

  &:active {
    background: ${props => props.theme.color.foreground()} !important;
    box-shadow: 0 0 ${props => props.theme.color.foreground()} inset;
    color: ${props => props.theme.color.background()} !important;
  }

  ${props => props.theme.size.breakpoint.max.xs`
    width: 100vw;
    max-width: 100vw;
    border-radius: 0;
    section & {
      margin-left: -${props => props.theme.size.block.padding}em;
    }
  `};
`
//
// below line filter out prop "branded" that isn't recognized by Link component
export const LinkButton = styled(
  ({ branded, inverse, responsiveMobileOnly, ...props }) => {
    const Link = props.linkComponent
    const { linkComponent, ...validProps } = props
    return <Link {...validProps} />
  }
)`
  ${ButtonStyles};
`
//
// export non-a/link version of the button
export const Button = styled(
  ({ branded, inverse, responsiveMobileOnly, ...props }) => {
    const Loader = props.loaderComponent || null
    return (
      <button
        className={props.className}
        style={props.style}
        onClick={props.onClick}
        disabled={props.loading}
      >
        {Loader && <Loader style={props.loading ? null : { width: "0" }} />}
        {props.children}
      </button>
    )
  }
)`
  box-sizing: content-box;
  background: inherit;
  border-width: 0;
  color: inherit;
  user-select: none;
  margin: inherit;
  width: 100%;
  outline: transparent;

  &:-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  ${ButtonStyles};
`
//
/**************************** TINY BUTTON STYLES ******************************/
export const TinyButtonStyles = styled(
  ({ responsiveMobileOnly, followComposerCursor, ...props }) =>
    <LinkButton {...props} />
)`
  padding: ${props => props.theme.size.block.spacing / 5}em
    ${props => props.theme.size.block.spacing / 2}em;
  width: 8em;
  border-radius: ${props => props.theme.effects.borderRadius.small}em;

  ${props =>
    props.followComposerCursor &&
    `
  margin-top: 2px;
  position: absolute;
  z-index: ${props.theme.layer.up - 1};
  right: -${props.theme.size.block.padding}em;
  ${props.theme.size.breakpoint.max.m`
		right: 0;
	`} ${props.theme.size.breakpoint.max.s`
		right: -${props.theme.size.block.spacing}em;
	`};
  `};
`
export const TinyButton = props => {
  return (
    <TinyButtonStyles {...props}>
      {props.children}
    </TinyButtonStyles>
  )
}
//
/**************************** BUTTON STRIP STYLES *****************************/
export const ButtonStrip = styled.div`
  & > div {
    display: flex;
    margin: 0;
  }
  width: 10em;
`
//
const tinyButtonBorderRadious = css`
  ${props => props.theme.effects.borderRadius.small};
`
//
export const Item = styled(({ left, right, script, ...props }) =>
  <TinyButton {...props} />
)`
  margin: 0;

  border-top-left-radius: ${props =>
    props.left ? `${tinyButtonBorderRadious}em` : 0};
  border-bottom-left-radius: ${props =>
    props.left ? `${tinyButtonBorderRadious}em` : 0};

  border-top-right-radius: ${props =>
    props.right ? `${tinyButtonBorderRadious}em` : 0};
  border-bottom-right-radius: ${props =>
    props.right ? `${tinyButtonBorderRadious}em` : 0};

  ${props =>
    props.script
      ? `font-family: ${props.theme.typography.text
          .font} !important;font-weight: 400 !important;`
      : null};
`
