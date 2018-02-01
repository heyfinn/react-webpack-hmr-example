import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import HelloWorld from './HelloWorld'

const renderComponent = Component => (
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
)

// Initialize rendering
renderComponent(HelloWorld)

if (module.hot) {
  module.hot.accept('./HelloWorld', () => {
    renderComponent(HelloWorld)
  })
}