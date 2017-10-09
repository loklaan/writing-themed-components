import React from 'react'
import Types from 'prop-types'
import { css } from 'glamor'
import { mapValues as mapObject, defaultsDeep as assignDefaults } from 'lodash'
import { withContext, getContext, mapProps, compose } from 'recompose'

const THEME_CONTEXT_TYPES = { ctxTheme: Types.object }
const PassThrough = ({ children }) => children

/*
|-------------------------------------------------------------------------------
| Converts styles found in an object to class names.
*/

function StyleSheet (stylesMap) {
  return mapObject(stylesMap, styles => css(styles).toString())
}

/*
|-------------------------------------------------------------------------------
| Saves the 'theme' prop for later consumption.
*/

const ThemeProvider = withContext(
  THEME_CONTEXT_TYPES,
  ({ parentTheme = {} }) => ({ ctxTheme: parentTheme })
)(PassThrough)

/*
|-------------------------------------------------------------------------------
| Renders the wrapped component with all props given, as well as the 'theme'
| which was saved by ThemeProvider.
*/

const themed = compose(
  getContext(THEME_CONTEXT_TYPES),
  mapProps(({ ctxTheme, ...props }) => ({ userTheme: ctxTheme, ...props }))
)

/*
|-------------------------------------------------------------------------------
| Creates & combines two StyleSheets.
*/

const combineAsStyleSheets = (a, b) => {
  const aSheet = StyleSheet(a)
  const bSheet = StyleSheet(b)
  return mapObject(aSheet, (x, id) => {
    const y = bSheet[id]
    return y ? `${x} ${y}` : x
  })
}

export {
  mapObject,
  assignDefaults,
  StyleSheet,
  ThemeProvider,
  themed,
  combineAsStyleSheets
}
