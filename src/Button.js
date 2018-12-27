import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {darken, desaturate, transparentize} from 'polished'
import {COMMON, Base} from './constants'
import theme, {colors} from './theme'
import {width, themeGet} from 'styled-system'

function fontSize({size = '14px'}) {
  return {
    fontSize:
      size === 'sm' ? `${themeGet('fontSizes.0', theme.fontSizes[0])}px` :
      size === 'large' ? `${themeGet('fontSizes.2', theme.fontSizes[2])}px` : size
  }
}



const Button = styled(Base)((props) => {
  const color = props.theme.colors.gray[9]
  const bg = props.theme.colors.gray[0]
  const bg2 = darken(0.02, props.theme.colors.gray[1])
  const black = props.theme.colors.black

  return `
    position: relative;
    display: inline-block;
    padding: 6px 12px;
    color: ${color};
    background-color: ${bg2};
    background-image: linear-gradient(-180deg, ${bg} 0%, ${bg2} 90%);
    font-size: ${theme.fontSizes[1]}px;
    font-weight: ${theme.fontWeights.bold};
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-repeat: repeat-x;
    background-position: -1px -1px;
    background-size: 110% 110%;
    border: 1px solid ${transparentize(0.8, black)};
    border-radius: 0.25em;
    appearance: none;
    ${fontSize};
    ${COMMON};
    ${width};

    &:hover {
      background-color: ${darken(0.03, bg2)};
      background-image: linear-gradient(-180deg, ${darken(0.03, bg)} 0%, ${darken(0.03, bg2)} 90%);
      background-position: -0.5em center;
      border-color: rgba(27, 31, 35, 0.35);
      text-decoration: none;
      background-repeat: repeat-x;
    }

    &:active {
      background-color: ${darken(0.06, desaturate(0.1, bg))};
      background-image: none;
      box-shadow: rgba(27, 31, 35, 0.15) 0px 0.15em 0.3em inset; //$btn-active-shadow;
      border-color: rgba(27, 31, 35, 0.35); //convert black to rbg here
    }

    &:selected {
      background-color: ${darken(0.06, desaturate(0.1, bg))};
      background-image: none;
      box-shadow: rgba(27, 31, 35, 0.15) 0px 0.15em 0.3em inset; //$btn-active-shadow;
      border-color: rgba(27, 31, 35, 0.35); //convert black to rbg here
    }

    &:disabled {
      color: rgba(${color}, 0.4);
      background-color: ${bg2};
      background-image: none;
      border-color: ${transparentize(0.8, black)}
      box-shadow: none;
    }

    &:focus {
      outline: none;
      box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em;
    }`
})

Button.defaultProps = {
  is: 'button',
  theme
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  grouped: PropTypes.bool,
  is: PropTypes.oneOfType([PropTypes.oneOf(['button', 'a', 'summary', 'input']), PropTypes.func]),
  onClick: PropTypes.func,
  scheme: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'large']),
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...width.propTypes
}

export default Button
