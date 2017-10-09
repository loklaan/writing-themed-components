import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './1.default-styles-only'
import ButtonStyleable from './2.user-styles-too'
import ButtonThemed from './3.themed-styles'
import { ThemeProvider, themed } from './_.util'
import { flexCenter } from './_.styles'

const comps = [
  /*
  |-----------------------------------------------------------------------------
  | Default styles *only*
   */
  () => <Button>Wee lil' Default Button</Button>,

  /*
  |-----------------------------------------------------------------------------
  | Add user styles ontop
   */
  () => {
    const userStyles = {
      container: {
        borderColor: 'royalblue',
        boxShadow: '1px 1px 0px royalblue',
        '&:hover': {
          boxShadow: '3px 3px 0px royalblue'
        }
      },
      content: {
        fontSize: '20px',
        lineHeight: '18px',
        fontFamily: 'serif',
        fontStyle: 'italic',
        color: 'royalblue'
      }
    }
    return (
      <ButtonStyleable userStyles={userStyles}>
        Basicly themed, right?
      </ButtonStyleable>
    )
  },

  /*
  |-----------------------------------------------------------------------------
  | Styles shared across connected Components now! Woo!
   */
  () => {
    const ButtonConnected = themed(ButtonThemed)
    const parentTheme = {
      PRIMARY: '#118AB2',
      SECONDARY: '#CEFFFE',
      SPACING: '5px',
      BORDER: '3px',
      RADIUS: '1px',
      TEXT: {
        fontSize: '24px',
        fontWeight: '700',
        textDecoration: 'underline',
        lineHeight: '22px'
      }
    }
    return (
      <ThemeProvider parentTheme={parentTheme}>
        <div>
          <span>
            <ButtonConnected prefix='🔥' suffix='🔥'>
              Achievement unlocked.
            </ButtonConnected>
          </span>
        </div>
      </ThemeProvider>
    )
  }
]

/*
|-------------------------------------------------------------------------------
| See each numbered files for a brief explanation of what is being accomplished.
*/

storiesOf('Impressive Button', module)
  .addDecorator(child => <div style={flexCenter}>{child()}</div>)
  .add('1. Default styles only', comps[0])
  .add('2. User styles too', comps[1])
  .add('3. Theme values only', comps[2])
  .add('4. Inject theme values', comps[3])
