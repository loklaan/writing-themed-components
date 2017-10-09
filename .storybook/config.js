import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  name: 'Themed Components',
  url: '#',
  goFullScreen: false,
  showRightPanel: false,
  showLeftPanel: true,
  showDownPanel: false
})

function loadStories() {
  require('../src/stories.js')
}

configure(loadStories, module)
