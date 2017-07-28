import React from 'react'
import { storiesOf } from '@storybook/react';
import Button from './1.default-styles-only'
import ButtonStyleable from './2.user-styles-too'
import ButtonThemed from './3.themed-styles'
import { ThemeProvider, themed } from './_.util'
import { flexCenter } from './_.styles'

/*
|-------------------------------------------------------------------------------
| See each numbered files for a brief explanation of what is being accomplished.
*/

storiesOf('Impressive Button', module)
  .addDecorator(child => <div style={flexCenter}>{child()}</div>)

  .add(
    '1. Default styles only',
    () => <Button>I'm all business</Button>
  )

  .add(
    '2. User styles too',
    () => {
      const userStyles = {
        content: {
          fontSize: '20px',
          lineHeight: '18px',
          fontFamily: 'serif',
          color: 'royalblue',
          textDecoration: 'underline'
        }
      }
      return <ButtonStyleable userStyles={userStyles}>I'm friendly</ButtonStyleable>
    }
  )

  .add(
    '3. Theme values only',
    () => {
      const userTheme = {
        PRIMARY: 'tomato',
        SECONDARY: 'papayawhip',
        SPACING: '15px',
        BORDER: '2px',
        RADIUS: '50px',
        TEXT: { fontSize: '20px', lineHeight: '18px' }
      }
      return <ButtonThemed prefix='💖' suffix='💖' userTheme={userTheme}>Designer dreams</ButtonThemed>
    }
  )

  .add(
    '4. Inject theme values',
    () => {
      const ButtonConnected = themed(ButtonThemed)
      const parentTheme = {
        PRIMARY: '#118AB2',
        SECONDARY: '#CEFFFE',
        SPACING: '5px',
        BORDER: '3px',
        RADIUS: '1px',
        TEXT: { fontSize: '24px', fontWeight: '700', textDecoration: 'underline', lineHeight: '22px' }
      }
      return (
        <ThemeProvider parentTheme={parentTheme}>
          <div>
            <span>
              <ButtonConnected prefix='🔥' suffix='🔥'>Oh wow</ButtonConnected>
            </span>
          </div>
        </ThemeProvider>
      )
    }
  )
