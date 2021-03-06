import React, {
  Component,
  PropTypes,
} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { ThemeProvider } from 'styled-components'
import colors from '@consts/colors'

const muiTheme = getMuiTheme({
  fontFamily: 'Helvetica',
  palette: {
    primary1Color: colors.primaryColor,
    accent1Color: colors.secondaryColor,
  },
})
class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      children,
      theme,
    } = this.props
    console.log(children)
    console.log('logando')
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <ThemeProvider theme={theme}>
          <div style={{ height: '100%' }}>
            {children}
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}
export default App
